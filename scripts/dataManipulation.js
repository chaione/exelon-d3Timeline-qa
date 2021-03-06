/* global _, d3, utils, _DS */
function pairEvents(apiResponse) {
  var rawEvents = _.filter(apiResponse.included, { type: 'events' })

  // Inital setup and attributes assign
  var events = _.map(rawEvents, function(event) {
    var result = {
      id: event.id,
      deliveryId: event.relationships.eventable.data.id,
      timestamp: new Date(event.attributes['created-at'])
    }

    _.each(event.attributes, function(value, key) {
      result[_.camelCase(key)] = value
    })

    return result
  })

  // Pair with the response
  _.each(events, function(event) {
    if (event.isRequest) {
      event.endTimestamp = null
      var responseEvent = _.find(events, { uuid: event.uuid, isRequest: false })
      if (responseEvent) {
        event.endTimestamp = new Date(responseEvent.createdAt)
      }
      var posts = event.name.split('_')
      event.requester = posts[0]
      var responsers = _.map(_POSTS, 'abbr')
      var postIndex = _.indexOf(responsers, posts[1])
      if (postIndex !== -1) {
        var eventMeta = _.find(_DS.EVENTS_META, { name: event.name })
        event.responser = posts[1]
        event.responsible = eventMeta.responsible
        event.to = eventMeta.to
        event.yIndex = postIndex
      }
    }
  })

  return _.filter(events, function(event) {
    return event.isRequest && event.yIndex
  })
}

function processApiData(workflowsData) {
  // group by delivery, and return an array
  var deliveriesData = d3
    .nest()
    .key(function(d) {
      return d.deliveryId
    })
    .entries(workflowsData)

  // update deliveries w/ data
  _.each(deliveriesData, function(delivery) {
    var deliveryRaw = _.find(_DS.deliveries, { id: delivery.key })
    var vehicle = _.find(_VEHICLES, {
      id: deliveryRaw.relationships.vehicle.data.id
    })
    var deliveryStatus = deliveryRaw.attributes.status
    var locationName = utils.getLocationNameFromRawDelivery(delivery)

    delivery.vehicleType = utils.getVehicleImageName(
      vehicle,
      deliveryStatus,
      locationName
    )
    delivery.vendorName = _.find(_DS.vendors, { id: vehicle.vendorId }).name
    delivery.currentLocation = deliveryRaw.attributes['current-location']
  })

  deliveriesData = calculateDeliveryLocation(deliveriesData)

  // Count how many deliveries in a location
  var sums = _.countBy(deliveriesData, function(delivery) {
    return delivery.currentLocation.id
  })

  _.each(_DS.locations, function(location) {
    location.deliveryCount = sums[location.id] || 1
  })

  // Calculate stacked count
  _.each(_DS.locations, function(location, i) {
    if (i === 0) {
      location.stackedCount = location.deliveryCount
      location.y0 = 0
    } else {
      var lastLocation = _DS.locations[i - 1]
      location.stackedCount = lastLocation.stackedCount + location.deliveryCount
      location.y0 = lastLocation.stackedCount
    }
  })

  // Comment out for now, not seem to use it any where
  // _currentDeliveryDelayById = generateCurrentDeliveryDelayById(deliveriesData)

  _DS.locationWithDeliveries = d3
    .nest()
    .key(function(d) {
      return d.currentLocation.id
    })
    .sortValues(function(a, b) {
      return b.values[0].eta - a.values[0].eta
    })
    .entries(deliveriesData)

  _.each(_DS.locationWithDeliveries, function(locationX, i) {
    _.each(locationX.values, function(delivery, j) {
      if (parseInt(locationX.key) === 0) {
        delivery.yIndex = j
      } else {
        var locationIndex = _.findIndex(_DS.locations, {
          id: parseInt(locationX.key)
        })

        delivery.yIndex = _DS.locations[locationIndex - 1].stackedCount + j
      }
    })
  })

  // create a dictionary of yindex and status / info.  Used for static information
  for (var i = 0; i < _DS.locationWithDeliveries.length; i++) {
    var tempStation = _DS.locationWithDeliveries[i]
    for (var j = 0; j < tempStation.values.length; j++) {
      var tempDelivery = tempStation.values[j]

      var deniedEvents = _.filter(_DS.events, function(event) {
        return (
          event.deliveryId === tempDelivery.key &&
          (event.name === 's1_deny_entry' || event.name === 'sp_deny_entry')
        )
      })
      var status
      if (deniedEvents.length > 0) {
        status = 'denied'
      }

      _deliveryIndexInfo.push({
        status: status,
        deliveryId: tempDelivery.key,
        yIndex: tempDelivery.yIndex
      })
    }
  }

  render(_DS.locationWithDeliveries)
}

function resize() {
  dismissDeliveryDetail()
  render(_DS.locationWithDeliveries)
}

function stopRefreshing() {
  $('#refresh-button').removeClass('active')
  _DS.IS_REFRESHING = false
}

function retrieveDeliveries() {
  $.ajax({
    url: url + 'locations',
    headers: {
      'X-SITE-ID': siteId,
      Authorization: 'Bearer ' + bearerToken
    },
    success: function(apiReponse) {
      _DS.locations = utils.cleanupLocationData(apiReponse.data)

      $.ajax({
        url: url + 'deliveries',
        headers: {
          'X-SITE-ID': siteId,
          Authorization: 'Bearer ' + bearerToken
        },
        success: function(apiResponse) {
          stopRefreshing()
          _DS.deliveries = _.filter(apiResponse.data, { type: 'deliveries' })

          // _DS.locations = utils.cleanupLocationData(
          //   _.filter(apiResponse.included, {type: 'locations'})
          // )

          _DS.vendors = _.map(
            _.filter(apiResponse.included, { type: 'vendors' }),
            function(vendor) {
              return {
                id: vendor.id,
                name: vendor.attributes.name
              }
            }
          )

          _VEHICLES = _.map(
            _.filter(apiResponse.included, { type: 'vehicles' }),
            function(vehicle) {
              var result = {
                id: vehicle.id,
                vendorId: vehicle.relationships.vendor.data.id
              }
              _.each(vehicle.attributes, function(value, key) {
                result[key] = value
              })
              return result
            }
          )

          _pocsAPIData = {}
          var pocs = _.filter(apiResponse.included, { type: 'pocs' })
          _.each(pocs, function(poc) {
            _pocsAPIData[poc.id] = poc.attributes
          })

          _DS.events = pairEvents(apiResponse)

          var deliveryIDs = _.map(_DS.deliveries, 'id') // For edge cases where workflows have deliveries that are not included in the deliveries all endpoint
          var apiWorkflows = _.filter(apiResponse.included, function(workflow) {
            return (
              workflow.type === 'workflows' &&
              _.includes(deliveryIDs, workflow.relationships.delivery.data.id)
            )
          })

          var cleandWorkflows = apiWorkflows.map(function(workflow) {
            var deliveryId = workflow.relationships.delivery['data']['id']
            var deliveryRaw = _.find(_DS.deliveries, { id: deliveryId })
            var boaID = deliveryRaw.relationships.boa.data.id
            var destinationName = _.find(apiResponse.included, {
              type: 'boas',
              id: boaID
            }).attributes.boa['destination.name']
            var route
            // if (!destinationName) {
            //   route = _.find(LOCATION_ORDER, function (route) {
            //     return route.length === _.filter(apiWorkflows, function (wf) {
            //       return wf.relationships.delivery['data']['id'] === deliveryId
            //     }).length
            //   })
            // } else {
            route = _.find(_DS.routes, { name: destinationName })
            //}

            workflow.attributes.locationOrder = _.map(
              _DS.LOCATION_ORDER,
              function(portName) {
                return _.find(_DS.locations, { abbr: portName }).id
              }
            )

            workflow.attributes.id = workflow['id']
            workflow.attributes.deliveryId = parseInt(deliveryId)

            var importantDates = [
              'started-at',
              'arrived-at',
              'ended-at',
              'nonsearch-end',
              'search-end'
            ]
            _.each(importantDates, function(item) {
              workflow.attributes[item] = utils.getNullOrDate(
                workflow.attributes[item]
              )
            })
            var unusedAttributes = [
              'nonsearch-ept',
              'search-ept',
              'release-ept',
              'estimated-processing-time'
            ]
            workflow.attributes = _.omit(workflow.attributes, unusedAttributes)

            return workflow.attributes
          })

          _.each(cleandWorkflows, function(workflow) {
            var epts = utils.getEPTFromWorkflow(workflow)
            workflow.EPT = epts[0]
            workflow.nonSearchEPT = epts[0]
            workflow.searchEPT = epts[1]
            workflow.releaseEPT = epts[2]
          })

          cleandWorkflows = utils.calculateWorkflowETAs(cleandWorkflows)
          processApiData(cleandWorkflows)
        }
      })
    }
  })
}

function calculateDeliveryLocation(deliveriesData) {
  _.each(deliveriesData, function(currentDelivery) {
    if (!currentDelivery.currentLocation) {
      var name = utils.getLocationNameFromRawDelivery(currentDelivery)
      var id = _.find(_DS.locations, { name: name }).id

      currentDelivery.currentLocation = {
        id: id,
        name: name
      }
    }

    if (currentDelivery.currentLocation.name === 'Sierra 1') {
      var firstWorkflowOfDelivery = _.first(currentDelivery.values)

      if (!firstWorkflowOfDelivery['started-at']) {
        currentDelivery.currentLocation = {
          id: 0,
          name: 'En Route'
        }
      }
    }
  })

  return deliveriesData
}

function generateCurrentDeliveryDelayById(deliveriesData) {
  var delayData = {}

  for (var i = 0; i < deliveriesData.length; i++) {
    var delivery = deliveriesData[i]
    delayData[delivery.key] = utils.detailCalculateDelay(delivery)
  }

  return delayData
}

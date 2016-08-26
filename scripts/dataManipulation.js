/* global _, d3, utils, _DS */
function calculateEventsReqAndRespByDeliveryAPIData (deliveries) {
  var result = {}
  var eventsArray = _.filter(deliveries.included, {type: 'events'})

  // organize all events to have their id as their key
  var eventsAPIData = eventsArray.reduce(function (result, item, currIndex) {
    item.attributes.deliveryId = parseInt(item.relationships.eventable.data.id)
    item.attributes.timestamp = new Date(item.attributes['created-at'])
    result[item.id] = item.attributes

    return result
  }, {})

  // add the endTime
  for (var key in eventsAPIData) {
    var temp = eventsAPIData[key]
    if (temp['is-request']) {
      temp.endTimestamp = null
      for (key in eventsAPIData) {
        var temp2 = eventsAPIData[key]
        if (temp.uuid === temp2.uuid && temp2['is-request'] === false) {
          temp.endTimestamp = new Date(temp2['created-at'])
          // console.log('FOUNDONE')
          // console.log(temp.uuid)
          // console.log(temp.timestamp)
          // console.log(temp.endTimestamp)
        }
      }
    }
  }

  // make final obj
  // 'delivery1'{
  //   'events':[event1,event2,...]
  //   'contacts':[contactId1,contactId2] (now we know which order)
  // },
  // 'delivery2':
  for (var key in eventsAPIData) {
    var temp = eventsAPIData[key]
    // i have all events for all the deliveries.  Im only storing the requests
    if (temp['is-request']) {
      if (temp.deliveryId in result) {
        result[temp.deliveryId]['events'].push(temp)
        // why -1?
        if (result[temp.deliveryId]['contacts'].indexOf(temp.role) == -1) {
          result[temp.deliveryId]['contacts'].push(temp.role)
        }
      } else {
        result[temp.deliveryId] = {
          events: [],
          contacts: []
        }
        result[temp.deliveryId]['events'].push(temp)
        result[temp.deliveryId]['contacts'].push(temp.role)
      }
    }
  }

  return result
}

function processApiData (workflowsData) {
  // group by delivery, and return an array
  var deliveriesData = d3.nest()
    .key(function (d) { return d.deliveryId })
    .entries(workflowsData)

  // update deliveries w/ data
  _.each(deliveriesData, function (delivery) {
    var deliveryRaw = _.find(_DS.deliveries, {id: delivery.key})
    var vehicle = _.find(_VEHICLES, {id: deliveryRaw.relationships.vehicle.data.id})
    var deliveryStatus = deliveryRaw.attributes.status
    var locationName = utils.getLocationNameFromRawDelivery(delivery)

    delivery.vehicleType = utils.getVehicleImageName(vehicle, deliveryStatus, locationName)
    delivery.vendorName = _.find(_DS.vendors, {id: vehicle.vendorId}).name
    delivery.currentLocation = deliveryRaw.attributes['current-location']
  })

  deliveriesData = calculateDeliveryLocation(deliveriesData)
  _DS.locations = countLocationDeliveries(deliveriesData)

  // Calculate stacked count
  _.each(_DS.locations, function (location, i) {
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

  _DS.locationWithDeliveries = d3.nest()
    .key(function (d) {
      return d.currentLocation.id
    })
    .sortValues(function (a, b) {
      return b.values[0].eta - a.values[0].eta
    })
    .entries(deliveriesData)

  _.each(_DS.locationWithDeliveries, function (location, i) {
    _.each(location.values, function (delivery, j) {
      if (parseInt(location.key) === 0) {
        delivery.yIndex = j
      } else {
        var locationIndex = _.findIndex(_DS.locations, {id: parseInt(location.key)})

        delivery.yIndex = _DS.locations[locationIndex - 1].stackedCount + j
      }
    })
  })

  // create a dictionary of yindex and status / info.  Used for static information
  for (var i = 0; i < _DS.locationWithDeliveries.length; i++) {
    var tempStation = _DS.locationWithDeliveries[i]
    for (var j = 0; j < tempStation.values.length; j++) {
      var tempDelivery = tempStation.values[j]

      _deliveryIndexInfo.push({
        status: _.find(_DS.deliveries, {id: tempDelivery.key}).attributes.status,
        deliveryId: tempDelivery.key,
        yIndex: tempDelivery.yIndex
      })
    }
  }

  render(_DS.locationWithDeliveries)
}

function resize () {
  dismissDeliveryDetail()
  render(_DS.locationWithDeliveries)
}

function retrieveDeliveries () {
  $.ajax({
    url: url + 'deliveries?filter=all',
    headers: {
      'X-SITE-ID': siteId,
      'Authorization': 'Bearer ' + bearerToken
    },
    success: function (deliveryResults) {
      _DS.deliveries = _.filter(deliveryResults.data, {type: 'deliveries'})

      _DS.locations = utils.cleanupLocationData(
        _.filter(deliveryResults.included, {type: 'locations'})
      )

      _DS.vendors = _.map(_.filter(deliveryResults.included, {type: 'vendors'}), function (vendor) {
        return {
          id: vendor.id,
          name: vendor.attributes.name
        }
      })

      _VEHICLES = _.map(_.filter(deliveryResults.included, {type: 'vehicles'}), function (vehicle) {
        var result = {id: vehicle.id, vendorId: vehicle.relationships.vendor.data.id}
        _.each(vehicle.attributes, function (value, key) {
          result[key] = value
        })
        return result
      })

      _pocsAPIData = {}
      var pocs = _.filter(deliveryResults.included, {type: 'pocs'})
      _.each(pocs, poc => {
        _pocsAPIData[poc.id] = poc.attributes
      })

      // 'delivery1'{
      //   'events':[event1,event2,...]
      //   'contacts':[contactId1,contactId2] (now we know which order)
      // },
      // 'delivery2':
      eventsReqAndRespByDeliveryAPIData = calculateEventsReqAndRespByDeliveryAPIData(deliveryResults)

      var apiWorkflows = _.filter(deliveryResults.included, {type: 'workflows'})

      apiWorkflows = apiWorkflows.map(function (workflow) {
        var deliveryId = workflow.relationships.delivery['data']['id']
        var deliveryRaw = _.find(_DS.deliveries, {id: deliveryId})
        workflow.attributes.id = workflow['id']
        workflow.attributes.deliveryId = parseInt(deliveryId)
        workflow.attributes['estimated-processing-time'] = workflow.attributes['estimated-processing-time'] || 15
        workflow.attributes['nonsearch-ept'] = workflow.attributes['nonsearch-ept'] || 15
        workflow.attributes['search-ept'] = workflow.attributes['search-ept'] || 15
        workflow.attributes['release-ept'] = workflow.attributes['release-ept'] || 15
        workflow.attributes.locationOrder = _.map(deliveryRaw.relationships.locations.data, function (location) {
          return parseInt(location.id)
        })

        var importantDates = [
          'started-at',
          'arrived-at', 'ended-at',
          'nonsearch-end', 'search-end'
        ]
        _.each(importantDates, function (item) {
          workflow.attributes[item] = utils.getNullOrDate(workflow.attributes[item])
        })

        return workflow.attributes
      })

      apiWorkflows = utils.calculateWorkflowETAs(apiWorkflows)
      processApiData(apiWorkflows)
    }
  })
}

function countLocationDeliveries (deliveriesData) {
  var summary = _.countBy(deliveriesData, function (delivery) {
    return utils.getLocationNameFromRawDelivery(delivery)
  })

  return _.map(_DS.locations, function (location) {
    return _.assign(location, {
      deliveryCount: summary[location.name] || 1,
      abbr: _.find(_DS.LOCATION_META, {name: location.name}).abbr
    })
  })
}

function calculateDeliveryLocation (deliveriesData) { 
  _.each(deliveriesData, function (currentDelivery) {
    if (!currentDelivery.currentLocation) {
      var name = utils.getLocationNameFromRawDelivery(currentDelivery)
      var id = _.find(_DS.locations, {name: name}).id

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

function generateCurrentDeliveryDelayById (deliveriesData) {
  var delayData = {}

  for (var i = 0; i < deliveriesData.length; i++) {
    var delivery = deliveriesData[i]
    delayData[delivery.key] = utils.detailCalculateDelay(delivery)
  }

  return delayData
}

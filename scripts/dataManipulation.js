function compare (a, b) {
  if (a.currentStation < b.currentStation) {
    return -1
  } else if (a.currentStation > b.currentStation) {
    return 1
  } else {
    return 0
  }
}

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
  var deliveriesData = d3.nest() // group by delivery
    .key(function (d) { return d.deliveryId })
    .entries(workflowsData)

  // update deliveries w/ data
  _.each(deliveriesData, function (delivery) {
    var vehicleInfo = vehiclesAPIData[deliveriesAPIData[parseInt(delivery.key)].relationships.vehicle.data.id]
    var deliveryStatus = deliveriesAPIData[parseInt(delivery.key)].attributes.status

    delivery.vehicleType = utils.getVehicleImageName(vehicleInfo, deliveryStatus)
    delivery.currentLocation = deliveriesAPIData[parseInt(delivery.key)].attributes['current-location']
  })

  deliveriesData = updateCurrentStationCalc(deliveriesData)

  stationCounts = stationCountCalc(deliveriesData); // [7, 5, 5, 1, 4, 1, 1, 1] Gets the number of deliveries for every station
  stationStackedCount = stationStackedCountCalc(stationCounts); // [7, 12, 17, 18, 22, 23, 24, 25]
  stationStacked = stationStackedCalc(stationCounts, stationStackedCount, stations); // [{name:EnRoute, y:7,y0:0},Object...]
  var deliveriesDataSorted = deliveriesData.sort(compare) // is this necesary

  console.log('deliveriesData', deliveriesData)
  console.log('stationCounts', stationCounts)
  console.log('stationStackedCount', stationStackedCount)
  console.log('stationStacked', stationStacked)

  _currentDeliveryDelayById = generateCurrentDeliveryDelayById(deliveriesData)

  stationData = d3.nest() // groupByStation
    .key(function (d) {
      return d.currentStation
    })
    .sortValues(function (a, b) {
      return b.values[0].endTime - a.values[0].endTime
    })
    .entries(deliveriesDataSorted)

  stationData = stackDeliveriesCalc(stationStackedCount, stationData)
  console.log('stationData', stationData)

  // create a dictionary of yindex and status / info.  Used for static information
  for (var i = 0; i < stationData.length; i++) {
    var tempStation = stationData[i]
    for (var j = 0; j < tempStation.values.length; j++) {
      var tempDelivery = tempStation.values[j]

      deliveryyIndexInfo.push({
        status: deliveriesAPIData[parseInt(tempDelivery.key)].attributes.status,
        deliveryId: tempDelivery.key,
        yIndex: tempDelivery.yIndex
      })
    }
  }

  render(stationData)
}

function getDeliveryyIndexAndData (element, index, array) {
  console.log('a[' + index + '] = ' + element)
}

function resize () {
  console.log('resize')

  if (stationData) {
    dismissDeliveryDetail()
    render(stationData)
  }
}

function retrieveDeliveries () {
  console.log('retrieveDeliveries----------')

  $.ajax({
    url: url + 'deliveries?filter=all',
    headers: {
      'X-SITE-ID': siteId,
      'Authorization': 'Bearer ' + bearerToken
    },
    success: function (deliveriesAPI) {
      console.log('deliveries recieved from api', deliveriesAPI)

      deliveries = deliveriesAPI

      deliveriesAPIData = {}
      var deliveriesArray = _.filter(deliveries.data, {type: 'deliveries'})
      for (var i = 0; i < deliveriesArray.length; i++) {
        var delivery = deliveriesArray[i]
        deliveriesAPIData[delivery.id] = delivery
      }

      var locations = _.filter(deliveries.included, {type: 'locations'})
      locations = locations.map(function (obj) {
        var rObj = {}
        rObj[obj.id] = obj.attributes.name
        return rObj
      })

      vehiclesAPIData = {}
      var vehiclesArray = _.filter(deliveries.included, {type: 'vehicles'})
      for (var i = 0; i < vehiclesArray.length; i++) {
        var vehicle = vehiclesArray[i]
        vehiclesAPIData[vehicle.id] = vehicle.attributes
      }

      _pocsAPIData = {}
      var pocs = _.filter(deliveries.included, {type: 'pocs'})
      _.each(pocs, poc => {
        _pocsAPIData[poc.id] = poc.attributes
      })

      // 'delivery1'{
      //   'events':[event1,event2,...]
      //   'contacts':[contactId1,contactId2] (now we know which order)
      // },
      // 'delivery2':
      eventsReqAndRespByDeliveryAPIData = calculateEventsReqAndRespByDeliveryAPIData(deliveries)
      console.log('calculated req and res data by deliver')
      console.log(eventsReqAndRespByDeliveryAPIData)

      var apiWorkflows = _.filter(deliveries.included, {type: 'workflows'})

      apiWorkflows = apiWorkflows.map(function (workflow) {
        workflow.attributes.id = workflow['id']
        workflow.attributes.deliveryId = parseInt(workflow.relationships.delivery['data']['id'])
        workflow.attributes['estimated-processing-time'] = workflow.attributes['estimated-processing-time'] || 15
        workflow.attributes['nonsearch-ept'] = workflow.attributes['nonsearch-ept'] || 15
        workflow.attributes['search-ept'] = workflow.attributes['search-ept'] || 15
        workflow.attributes['release-ept'] = workflow.attributes['release-ept'] || 15

        workflow.attributes.station = workflow.attributes.step

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

      console.log('----------retrieveDeliveries')
    }
  })
}

function stationCountCalc (deliveriesData) { // [7, 5, 5, 1, 4, 1, 1, 1] Gets the number of deliveries for every station
  var stationCounts = [0, 0, 0, 0, 0, 0, 0]

  for (var i = 0;i < deliveriesData.length;i++) {
    stationCounts[deliveriesData[i].currentStation]++
  }
  for (var i = 0; i < stationCounts.length; i++) { // make sure they have at least 1
    stationCounts[i] = stationCounts[i] || 1
  }

  return stationCounts
}

function stationStackedCountCalc (stationCounts) { // [7, 12, 17, 18, 22, 23, 24, 25]
  var stationStackedCount = [0, 0, 0, 0, 0, 0, 0]

  stationStackedCount[0] = stationCounts[0]
  for (var i = 1; i < stationCounts.length; i++) {
    stationStackedCount[i] = stationStackedCount[i - 1] + stationCounts[i]
  }

  return stationStackedCount
}

// stacks each station with its y0 index and height
function stationStackedCalc (stationCounts, stationStackedCount, stations) {
  var stationStacked = [] // [Object(name:EnRoute, y:7,y0:0),Object...]

  stationStacked[0] = {
    'y0': 0,
    'deliveryCount': stationCounts[0],
    'name': stations[0]
  }

  // this needs to factor in zooming, or add it to zoom section
  for (var i = 1; i < stationStackedCount.length; i++) {
    stationStacked[i] = {
      'y0': stationStackedCount[i - 1],
      'deliveryCount': stationCounts[i],
      'name': stations[i]
    }
  }

  return stationStacked
}

function stackDeliveriesCalc (stationStackedCount, stationData) { // we set the starting yIndex. of each Delivery.  We have to account for stations w/o a delivery

  for (var i = 0; i < stationData.length; i++) {
    for (var j = 0; j < stationData[i].values.length; j++) {
      if (stationData[i].key == 0) {
        stationData[i].values[j].yIndex = j
      } else {
        stationData[i].values[j].yIndex = stationStackedCount[stationData[i].key - 1] + j
      }
    }
  }

  return stationData
}

function updateCurrentStationCalc (deliveriesData) { // update every delivery w/ its current station
  _.each(deliveriesData, function (currentDelivery) {
    var currentStation = 0
    var isCurrentUpdated = false
    console.log('calculating current station')

    if (currentDelivery.currentLocation && currentDelivery.currentLocation.id) {
      currentStation = currentDelivery.currentLocation.id
    } else {
      _.each(currentDelivery.values, (workflow) => {
        if (!isCurrentUpdated) {
          if (workflow['started-at'] !== null && workflow['ended-at'] === null) {
            currentStation = workflow.station
            console.log('setting current station!', currentStation)
            isCurrentUpdated = true
          }
        }
      })
      console.log(currentStation)
    }

    if (currentStation === 1) {
      var firstWorkflowOfDelivery = currentDelivery.values[0]

      if (!firstWorkflowOfDelivery['started-at']) {
        currentStation = 0
      }
    }

    if (currentStation === 0) {
      console.log('en route delivery')
      console.log(currentDelivery)
      var lastWorkflowEndTime = _.last(currentDelivery.values)['ended-at']

      if (lastWorkflowEndTime && lastWorkflowEndTime < _now) {
        currentStation = 6
      }
    }

    currentDelivery.currentStation = currentStation
  })

  console.log('currentStation result')
  _.each(deliveriesData, function (d) {
    console.log(d['key'], d.currentStation)
  })

  return deliveriesData
}

function generateCurrentDeliveryDelayById (deliveriesData) {
  var delayData = {}

  for (var i = 0; i < deliveriesData.length; i++) {
    var delivery = deliveriesData[i]
    delayData[delivery.key] = detailCalculateDelay(delivery)
  }

  return delayData
}

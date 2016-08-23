function _isDeliveryInLocation (delivery, locationName) {
  var currentWorkflow = utils.getCurrentWorkflow(delivery.values)
  return utils.getLocationNameFromRawDelivery(delivery) === locationName
}

function _getLocationAbbrFromLocationName (locationName) {
  return _.find(_LOCATION_ABBRS, {name: locationName}).abbr
}

function _getLocationAbbrFromWorkflow (workflow) {
  var locationName = utils.getLocationNameFromWorkflow(workflow)
  return utils.getLocationAbbrFromLocationName(locationName)
}

function _getLocationNameFromRawDelivery (delivery) {
  var currentWorkflow = utils.getCurrentWorkflow(delivery.values)
  if (currentWorkflow.step === 1 && !currentWorkflow['started-at']) {
    return 'En Route'
  }
  return utils.getLocationNameFromWorkflow(currentWorkflow)
}

function _getLocationNameFromWorkflow (workflow) {
  var locationId = workflow.locationOrder[workflow.step - 1]
  return _.find(_LOCATIONS, function (value) {
    return value[locationId]
  })[locationId]
}

function _getCurrentSubstep (workflow) {
  if (!workflow['nonsearch-end']) {
    return 1
  }

  if (!workflow['search-end']) {
    return 2
  }

  return 3
}

function _inSubstepLocation (workflow) {
  var locationName = utils.getLocationNameFromWorkflow(workflow)

  return _.includes(_HAS_SUBSTEP_LOCATIONS, locationName)
}

function _getCurrentWorkflow (workflows) {
  return _.find(workflows, function (workflow, index) {
    if (index === 0) {
      return !workflow['ended-at']
    }

    if (index === (workflows.length - 1)) {
      return workflow['ended-at']
    }

    return workflow['started-at'] && !workflow['ended-at']
  })
}

function _detailCalculateDelay (delivery) {
  if (delivery.currentStation === utils.getLocationId('En Route', _LOCATIONS)) {
    if (delivery.eta && delivery.eta < _now) {
      return Math.round((_now.getTime() - currentWF.eta.getTime()) / 60000)
    }

    return 0
  }

  // Exited
  if (delivery.currentStation === utils.getExitLocationId(_LOCATIONS)) {
    var currentWF = _.last(delivery.values)

    var a = currentWF.eta.getTime() + currentWF['estimated-processing-time'] * 60 * 1000
    var b = currentWF['ended-at'] - a

    return Math.round(b / 1000 / 60)
  }

  var stationId = _getStaionIndexInStations(delivery.currentStation, _LOCATIONS)
  var currentWF = delivery.values[stationId]

  var minutesStartingLate = currentWF['started-at'] - currentWF['eta']
  var currentDuration = _now - currentWF['started-at']
  var estimatedDuration = currentWF['estimated-processing-time'] * 60 * 1000
  var currentStationOverTime = currentDuration - estimatedDuration

  if (currentStationOverTime > 0) {
    minutesStartingLate += currentStationOverTime
  }
  return Math.round(minutesStartingLate / 1000 / 60)
}

function _calculateSubstepDelayStatus (startTime, endTime, estimated) {
  var difference = endTime - startTime
  estimated = estimated * 60000

  if (difference > estimated * (1 + _AHEAD_OR_BEHIND_PCT)) {
    return 1
  } else if (difference < estimated * (1 - _AHEAD_OR_BEHIND_PCT)) {
    return -1
  } else {
    return 0
  }
}

function _prepareSubStepEndTimes (workflow) {
  if (workflow['nonsearch-end'] && workflow['search-end']) {
    return
  }

  var totalTime = workflow['ended-at'].getTime() - workflow['started-at'].getTime()

  workflow['nonsearch-end'] = workflow['nonsearch-end'] || new Date(workflow['started-at'].getTime() + totalTime / 3)
  workflow['search-end'] = workflow['search-end'] || new Date(workflow['started-at'].getTime() + totalTime / 3 * 2)
}

function _cleanupStationsData (receivedStations) {
  var results = receivedStations.map(function (obj) {
    var rObj = {}
    rObj[obj.id] = obj.attributes.name
    return rObj
  })

  if (utils.getLocationId('En Route', results) === -1) {
    results.splice(0, 0, {
      0: 'En Route'
    })
  }
  _.each(stations, function(station, index) {
    if (utils.getLocationId(station, results) === -1) {
      var temp = {}
      temp[parseInt(index) + 1] = station
      results.splice(index, 0, temp)
    }
  })

  return results
}

function _getExitLocationId (stations) {
  return _getLocationId('Exit', stations)
}

function _getLocationIdFromLocationName (locationName) {
  var station = _.find(_LOCATIONS, function (value, key) {
    return _.values(value)[0] === locationName
  })

  return parseInt(_.keys(station)[0] || -1)
}

function _getLocationId (locationName, locations) {
  var station = _.find(locations, function (value, key) {
    return _.values(value)[0] === locationName
  })

  return parseInt(_.keys(station)[0] || -1)
}

function _getStaionIndexInStations (realStationId, stations) {
  return _.findIndex(stations, function (station) {
    return parseInt(_.keys(station)[0]) === parseInt(realStationId)
  })
}

function _getNullOrDate (dateString) {
  if (dateString) {
    return new Date(dateString)
  }

  return null
}

function _getPocNameById (pocId) {
  var poc = _pocsAPIData[pocId] || {}

  return 'POC ' + (poc['first-name'] || '') + ' ' + (poc['last-name'] || '')
}

function _getSubstepState (substep) {
  if (substep === 1) {
    return 'workflow late'
  }

  if (substep === -1) {
    return 'workflow ahead'
  }

  return 'workflow'
}

function isTimeBetweenTime (time, start, end) {
  return start <= time && time <= end
}

function _getVehicleImageName (vehicleInfo, deliveryStatus) {
  var vehicleImageName = 'icn-'
  // icn- + type + axles + status + priority

  // special cases first
  if (_VEHICLE_TYPE_TO_IMG[vehicleInfo['vehicle-type']] === 'emergency') {
    if (deliveryStatus === 'arrived') {
      vehicleImageName += 'emergency-arrived'
    } else if (deliveryStatus === 'denied') {
      vehicleImageName += 'emergency-denied'
    } else {
      vehicleImageName += 'emergency-enroute'
    }

    return vehicleImageName
  }

  if (_VEHICLE_TYPE_TO_IMG[vehicleInfo['vehicle-type']] === 'construction' ||
    _VEHICLE_TYPE_TO_IMG[vehicleInfo['vehicle-type']] === 'passnonIMP' ||
    _VEHICLE_TYPE_TO_IMG[vehicleInfo['vehicle-type']] === 'passIMP'
  ) {
    vehicleImageName += _VEHICLE_TYPE_TO_IMG[vehicleInfo['vehicle-type']] + '-'

    if (deliveryStatus === 'arrived') {
      vehicleImageName += 'arrived'
    } else if (deliveryStatus === 'denied') {
      vehicleImageName += 'denied'
    } else {
      vehicleImageName += 'enroute'
    }

    if (vehicleInfo.priority) {
      vehicleImageName += '-pri'
    }

    return vehicleImageName
  }

  if (vehicleInfo.axles != null) {
    vehicleImageName += _VEHICLE_TYPE_TO_IMG[vehicleInfo['vehicle-type']] + '-' + vehicleInfo.axles + 'w-'
  } else {
    vehicleImageName += _VEHICLE_TYPE_TO_IMG[vehicleInfo['vehicle-type']] + '-' + 2 + 'w-'
  }

  if (deliveryStatus === 'arrived') {
    vehicleImageName += 'arrived'
  } else if (deliveryStatus === 'denied') {
    vehicleImageName += 'denied'
  } else {
    vehicleImageName += 'enroute'
  }

  if (vehicleInfo.priority) {
    vehicleImageName += '-pri'
  }

  return vehicleImageName
}

function _calculateWorkflowETAs (workflows) {
  var groupedWorkflows = _.groupBy(workflows, 'deliveryId')

  _.each(groupedWorkflows, function (subWorkflows, deliveryId) {
    var orderedWorkflows = _.orderBy(subWorkflows, 'step')

    _.each(orderedWorkflows, function (workflow, index) {
      var wEPT = 15 * 60000

      if (index === 0) {
        // This isn't necessary in real situation
        // As first workflow should always have an ETA
        workflow.eta = workflow.eta || workflow['started-at'] || (_now.getTime() + _WORKFLOW_OFFSET)
      }

      if (index !== 0) {
        if (!workflow.eta) {
          var lastWorkflow = orderedWorkflows[index - 1]
          if (utils.inSubstepLocation(lastWorkflow)) {
            var substep = utils.getCurrentSubstep(lastWorkflow)
            wEPT = 15 * (3 - substep + 1)  * 60000
          }

          if (lastWorkflow['started-at']) {
            if (lastWorkflow['ended-at']) {
              workflow.eta = lastWorkflow['ended-at']
            } else {
              workflow.eta = _now.getTime() + wEPT
            }
          } else {
            workflow.eta = lastWorkflow.eta.getTime() + wEPT
          }
        }
      }
      workflow.state = 'ontime'
      workflow.eta = new Date(workflow.eta)

      if (utils.inSubstepLocation(workflow)) {
        var substep = utils.getCurrentSubstep(workflow)
        var estimated = 15 * (3 - substep + 1)  * 60000
      }

      if (workflow['ended-at']) {
        if (workflow['ended-at'].getTime() > (workflow['eta'].getTime() + estimated)) {
          workflow.state = 'late'
        }
      } else if (workflow['started-at']) {
        if (workflow['started-at'] > workflow.eta) {
          workflow.state = 'late'
        }
      } else {
        if ((workflow['eta'].getTime() + estimated) < _now.getTime()) {
          workflow.state = 'late'
        }
      }
    })
  })

  return _.flatten(_.values(groupedWorkflows))
}

var utils = {
  getNullOrDate: _getNullOrDate,
  getPocNameById: _getPocNameById,
  getSubstepState: _getSubstepState,
  getVehicleImageName: _getVehicleImageName,
  calculateWorkflowETAs: _calculateWorkflowETAs,
  getExitLocationId: _getExitLocationId,
  getLocationId: _getLocationId,
  getStaionIndexInStations: _getStaionIndexInStations,
  cleanupStationsData: _cleanupStationsData,
  prepareSubStepEndTimes: _prepareSubStepEndTimes,
  calculateSubstepDelayStatus: _calculateSubstepDelayStatus,
  detailCalculateDelay: _detailCalculateDelay,
  getCurrentWorkflow: _getCurrentWorkflow,
  inSubstepLocation: _inSubstepLocation,
  getLocationIdFromLocationName: _getLocationIdFromLocationName,
  getCurrentSubstep: _getCurrentSubstep,
  getLocationNameFromWorkflow: _getLocationNameFromWorkflow,
  getLocationNameFromRawDelivery: _getLocationNameFromRawDelivery,
  getLocationAbbrFromWorkflow: _getLocationAbbrFromWorkflow,
  getLocationAbbrFromLocationName: _getLocationAbbrFromLocationName,
  isDeliveryInLocation: _isDeliveryInLocation,
}

function _cleanupStationsData (stations) {
  var results = stations.map(function (obj) {
    var rObj = {}
    rObj[obj.id] = obj.attributes.name
    return rObj
  })

  if (utils.getStationId('En Route', results) === -1) {
    results.splice(0, 0, {
      0: 'En Route'
    })
  }

  return results
}

function _getExitStationId (stations) {
  return _getStationId('Exit', stations)
}

function _getStationId (stationName, stations) {
  var station = _.find(stations, function (value, key) {
    return _.values(value)[0] === stationName
  })

  return _.keys(station)[0] || -1
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

function calcCurrentSubStep (workflow) {
  if (workflow['nonsearch-end'] === null) {
    return 1
  } else if (workflow['search-end'] === null) {
    return 2
  } else {
    return 3
  }
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
      var wEPT = workflow['estimated-processing-time'] * 60000

      if (index === 0) {
        // This isn't necessary in real situation
        // As first workflow should always have an ETA
        workflow.eta = workflow.eta || workflow['started-at'] || (_now.getTime() + _WORKFLOW_OFFSET)
      }

      if (index !== 0) {
        var lastWF = orderedWorkflows[index - 1]
        workflow.eta = (lastWF['started-at'] || lastWF['eta']).getTime() + wEPT
      }

      workflow.eta = new Date(workflow.eta)

      if (workflow['started-at']) {
        if (workflow.eta < workflow['started-at']) {
          workflow.state = 'late'
        } else {
          workflow.state = 'ontime'
        }
      } else {
        if (workflow.eta < _now) {
          workflow.state = 'late'
        } else {
          workflow.state = 'ontime'
        }
      }

      console.log(
        deliveryId,
        'step: ' + workflow.step,
        'eta: ' + workflow.eta,
        'started at:' + workflow['started-at'],
        'ended at:' + workflow['ended-at'],
        '\n========================================='
      )
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
  getExitStationId: _getExitStationId,
  getStationId: _getStationId,
  getStaionIndexInStations: _getStaionIndexInStations,
  cleanupStationsData: _cleanupStationsData,
}

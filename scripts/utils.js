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
        if (workflow['started-at']) {
          workflow.eta = new Date(workflow['started-at']).getTime() + wEPT
        } else {
          workflow.eta = _now.getTime() + wEPT
        }
      } else {
        if (workflow['started-at']) {
          workflow.eta = new Date(workflow['started-at']).getTime() + wEPT
        } else {
          if (orderedWorkflows[index - 1]['ended-at']) {
            workflow.eta = new Date(orderedWorkflows[index - 1]['ended-at']).getTime() + wEPT
          } else {
            workflow.eta = new Date(orderedWorkflows[index - 1].eta).getTime() + wEPT
          }
        }
      }

      workflow.eta = new Date(workflow.eta)
      console.log(deliveryId, workflow.step, workflow.eta)

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
      console.log(workflow['started-at'], workflow.state)
      console.log(workflow['delivery-arrival-time'])
    })
  })

  return _.flatten(_.values(groupedWorkflows))
}

var utils = {
  getNullOrDate: _getNullOrDate,
  getPocNameById: _getPocNameById,
  getSubstepState: _getSubstepState,
  getVehicleImageName: _getVehicleImageName,
  calculateWorkflowETAs: _calculateWorkflowETAs
}

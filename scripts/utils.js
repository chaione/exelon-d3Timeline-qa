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

var utils = {
  getNullOrDate: _getNullOrDate,
  getPocNameById: _getPocNameById,
  getSubstepState: _getSubstepState,
  getVehicleImageName: _getVehicleImageName
}

function compare(a,b) {
  if (a.currentStation < b.currentStation)
    return -1;
  else if (a.currentStation > b.currentStation)
    return 1;
  else
    return 0;
}

function calculatEeventsReqAndRespByDeliveryAPIData(deliveries){
  var result={};
  var eventsArray = deliveries.included.filter(filterByEvents);

  //organize all events to have their id as their key
  var eventsAPIData = eventsArray.reduce(function(result, item, currIndex) {
    item.attributes.deliveryId = parseInt(item.relationships.eventable.data.id);
    item.attributes.timestamp = new Date(item.attributes['created-at']);
    result[item.id] = item.attributes;
    return result;
  }, {});

  //add the endTime
  for(key in eventsAPIData){
    var temp = eventsAPIData[key];
    if(temp['is-request']){
      temp.endTimestamp = null;
      for(key in eventsAPIData){
        var temp2 = eventsAPIData[key];
        if(temp.uuid == temp2.uuid && temp2['is-request']===false)
        {
          temp.endTimestamp = new Date(temp2['created-at']);
          console.log('FOUNDONE');
          console.log(temp.uuid);
          console.log(temp.timestamp );
          console.log(temp.endTimestamp);
        }
      }
      // OLD WAY
      // if(temp.acceptedResponseId!=null){
      //   temp.endTimestamp = eventsAPIData[temp.acceptedResponseId].timestamp;
      // }else {
      //   temp.endTimestamp = null
      // }
    }
  };

  //make final obj
  // 'delivery1'{
  //   'events':[event1,event2,...]
  //   'contacts':[contactId1,contactId2] (now we know which order)
  // },
  // 'delivery2':
  for(key in eventsAPIData) {
    var temp = eventsAPIData[key];
    // i have all events for all the deliveries.  Im only storing the requests
    if(temp['is-request']) {
      if(temp.deliveryId in result) {
        result[temp.deliveryId]['events'].push(temp);
        // why -1?
        if(result[temp.deliveryId]['contacts'].indexOf(temp.role)==-1){
          result[temp.deliveryId]['contacts'].push(temp.role);
        }
      } else {
        result[temp.deliveryId] ={
          events:[],
          contacts:[]
        };
        result[temp.deliveryId]['events'].push(temp);
        result[temp.deliveryId]['contacts'].push(temp.role);
      }
    }
  }

  return result;
}

function getVehicleImageName(vehicleInfo,deliveryStatus) {
  var vehicleImageName = "icn-";
  // icn- + type + axles + status + priority

  //special cases first
  if (VEHICLE_TYPE_TO_IMG[vehicleInfo['vehicle-type']] === "emergency") {
    if(deliveryStatus === "arrived"){
      vehicleImageName += "emergency-arrived"
    } else if(deliveryStatus ==="denied") {
      vehicleImageName += "emergency-denied"
    } else {
      vehicleImageName += "emergency-enroute"
    }

  } else if (VEHICLE_TYPE_TO_IMG[vehicleInfo['vehicle-type']] === "construction"    ||
             VEHICLE_TYPE_TO_IMG[vehicleInfo['vehicle-type']] === "passnonIMP" ||
             VEHICLE_TYPE_TO_IMG[vehicleInfo['vehicle-type']] === "passIMP") {
    vehicleImageName += VEHICLE_TYPE_TO_IMG[vehicleInfo['vehicle-type']] + "-";

    if(deliveryStatus === "arrived"){
      vehicleImageName += "arrived"
    } else if(deliveryStatus ==="denied") {
      vehicleImageName += "denied"
    } else {
      vehicleImageName += "enroute"
    }

    if(vehicleInfo.priority){
      vehicleImageName += "-pri"
    }

  } else {

    if(vehicleInfo.axles != null){
      vehicleImageName += VEHICLE_TYPE_TO_IMG[vehicleInfo['vehicle-type']] + "-" + vehicleInfo.axles + "w-";
    } else {
      vehicleImageName += VEHICLE_TYPE_TO_IMG[vehicleInfo['vehicle-type']] + "-" + 2 + "w-";
    }

    if(deliveryStatus === "arrived"){
      vehicleImageName += "arrived"
    } else if(deliveryStatus ==="denied") {
      vehicleImageName += "denied"
    } else {
      vehicleImageName += "enroute"
    }

    if(vehicleInfo.priority){
      vehicleImageName += "-pri"
    }
  }
  return vehicleImageName;
}

function filterByDeliveries(includedObj) {
  if (includedObj.type == "deliveries") {
    return true;
  } else {
    return false;
  }
}

function filterEventByIsRequest(includedEvent) {
  if (includedEvent['is-request'] == "events") {
    return true;
  } else {
    return false;
  }
}

function filterByEvents(includedObj) {
  if (includedObj.type == "events") {
    return true;
  } else {
    return false;
  }
}

function filterByLocations(includedObj) {
  if (includedObj.type == "locations") {
    return true;
  } else {
    return false;
  }
}

function filterByVehicles(includedObj) {
  if (includedObj.type == "vehicles") {
    return true;
  } else {
    return false;
  }
}

function filterByWorkflows(includedObj) {
  if (includedObj.type == "workflows") {
    return true;
  } else {
    return false;
  }
}
function filterByPocs(includedObj) {
  if (includedObj.type == "pocs") {
    return true;
  } else {
    return false;
  }
}

function isTimeBetweenTime(time, start,end){
  return start <= time && time <= end;
}

function processApiData(workflowsData){
  var deliveriesData = d3.nest()  //group by delivery
        .key(function(d) { return d.deliveryId; })
        .entries(workflowsData);

  //update deliveries w/ data
  deliveriesData.forEach(function(delivery) {
    var vehicleInfo = vehiclesAPIData[deliveriesAPIData[parseInt(delivery.key)].relationships.vehicle.data.id];
    var deliveryStatus = deliveriesAPIData[parseInt(delivery.key)].attributes.status;
    delivery.vehicleType = getVehicleImageName(vehicleInfo,deliveryStatus);
  });

  deliveriesData      = updateCurrentStationCalc(deliveriesData);

  stationCounts       = stationCountCalc(deliveriesData);                                   // [7, 5, 5, 1, 4, 1, 1, 1] Gets the number of deliveries for every station
  stationStackedCount = stationStackedCountCalc(stationCounts);                             // [7, 12, 17, 18, 22, 23, 24, 25]
  stationStacked      = stationStackedCalc(stationCounts,stationStackedCount,stations);     // [{name:EnRoute, y:7,y0:0},Object...]
  var deliveriesDataSorted = deliveriesData.sort(compare);//is this necesary

  currentDeliveryDelayById = generateCurrentDeliveryDelayById(deliveriesData);

  stationData = d3.nest() // groupByStation
      .key(function(d) { return d.currentStation; })
      .sortValues(function(a,b) { return b.values[0].endTime - a.values[0].endTime; })
      .entries(deliveriesDataSorted);
  stationData = stackDeliveriesCalc(stationStackedCount,stationData);
  console.log('stationData',stationData);


  //create a dictionary of yindex and status / info.  Used for static information
  for (var i = 0; i < stationData.length; i++) {
    var tempStation = stationData[i];
    for (var j = 0; j < tempStation.values.length; j++) {
      var tempDelivery = tempStation.values[j];

      deliveryyIndexInfo.push({
        status:deliveriesAPIData[parseInt(tempDelivery.key)].attributes.status,
        deliveryId:tempDelivery.key,
        yIndex:tempDelivery.yIndex
      })

    };
  };

  render(stationData);
}

function getDeliveryyIndexAndData(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

function resize() {
  console.log('resize');

  removeDetail();
  render(stationData);
}

function retrieveDeliveries(){
  console.log('retrieveDeliveries----------');
  var self = this;

  $.ajax({
        url:url+'deliveries?filter=all',
        headers: {
          'X-SITE-ID': siteId,
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoicm9sZSIsImlhdCI6MTQ1NTAzNDQ3Mn0.p8lguJGQHf3aMjQfgLScyEz6_H_1o5IFg0zBV3SnFZM'
        },
        success: function(deliveriesAPI) {
            console.log('deliveries recieved from api', deliveriesAPI);
            deliveries = deliveriesAPI;

            deliveriesAPIData = {};
            var deliveriesArray = deliveries.data.filter(filterByDeliveries);
            for (var i = 0; i < deliveriesArray.length; i++) {
              var delivery = deliveriesArray[i];
              deliveriesAPIData[delivery.id] = delivery;
            };

            var locations = deliveries.included.filter(filterByLocations);
            locations = locations.map(function(obj){
              var rObj = {};
              rObj[obj.id] = obj.attributes.name;
              return rObj;
            });

            vehiclesAPIData = {};
            var vehiclesArray = deliveries.included.filter(filterByVehicles);
            for (var i = 0; i < vehiclesArray.length; i++) {
              var vehicle = vehiclesArray[i];
              vehiclesAPIData[vehicle.id] = vehicle.attributes;
            };

            pocsAPIData = {};
            var pocsArray = deliveries.included.filter(filterByPocs);
            for (var i = 0; i < pocsArray.length; i++) {
              var poc = pocsArray[i];
              pocsAPIData[poc.id] = poc.attributes;
            };


            // 'delivery1'{
            //   'events':[event1,event2,...]
            //   'contacts':[contactId1,contactId2] (now we know which order)
            // },
            // 'delivery2':
            eventsReqAndRespByDeliveryAPIData = calculatEeventsReqAndRespByDeliveryAPIData(deliveries);

            var apiWorkflows = deliveries.included.filter(filterByWorkflows);
            apiWorkflows = apiWorkflows.map(function(workflow){

              workflow.attributes.deliveryId = parseInt(workflow.relationships.delivery['data']['id']);

              workflow.attributes.station = workflow.attributes.step;
              workflow.attributes.eta = new Date(workflow.attributes.eta);

              workflow.attributes['arrived-at'] = getNullOrDate(workflow.attributes['arrived-at']);
              workflow.attributes['ended-at'] = getNullOrDate(workflow.attributes['ended-at']);
              workflow.attributes['nonsearch-end'] = getNullOrDate(workflow.attributes['nonsearch-end']);
              workflow.attributes['search-end'] = getNullOrDate(workflow.attributes['search-end']);

              //determine state
              if(workflow.attributes.eta < workflow.attributes['arrived-at']) {
                workflow.attributes.state = 'late';
              }else if(workflow.attributes.eta > workflow.attributes['arrived-at']) {
                workflow.attributes.state = 'early';
              }else {
                workflow.attributes.state = 'ontime';
              }

              return workflow.attributes;
            });
            console.log('imported workflows',apiWorkflows);

            processApiData(apiWorkflows)
        }
      });
  console.log('----------retrieveDeliveries');
}

function stationCountCalc(deliveriesData){ // [7, 5, 5, 1, 4, 1, 1, 1] Gets the number of deliveries for every station
  var stationCounts =[0,0,0,0,0,0,0];

  for(var i = 0;i<deliveriesData.length;i++){
    stationCounts[deliveriesData[i].currentStation]++;
  }
  for (var i = 0; i < stationCounts.length; i++) { //make sure they have at least 1
    stationCounts[i] = stationCounts[i] || 1;
  };

  return stationCounts;
}

function stationStackedCountCalc(stationCounts){ //[7, 12, 17, 18, 22, 23, 24, 25]
  var stationStackedCount=[0,0,0,0,0,0,0];

  stationStackedCount[0] = stationCounts[0];
  for (var i = 1; i < stationCounts.length; i++) {
    stationStackedCount[i] = stationStackedCount[i-1]+ stationCounts[i];
  };

  return stationStackedCount;
}

function stationStackedCalc(stationCounts,stationStackedCount,stations){//stacks each station with its y0 index and height
  var stationStacked=[];                     //[Object(name:EnRoute, y:7,y0:0),Object...]

  stationStacked[0]={
                      "y0":0,
                      "deliveryCount":stationCounts[0],
                      "name": stations[0]}

  //this needs to factor in zooming, or add it to zoom section
  for (var i = 1; i < stationStackedCount.length; i++) {
    stationStacked[i] = {
                          "y0":stationStackedCount[i-1],
                          "deliveryCount":stationCounts[i],
                          "name":stations[i]
                        };
  };
  return stationStacked
}

function stackDeliveriesCalc(stationStackedCount,stationData) { //we set the starting yIndex. of each Delivery.  We have to account for stations w/o a delivery

  for (var i = 0; i < stationData.length; i++) {
    for (var j = 0; j < stationData[i].values.length; j++) {
        if(stationData[i].key == 0){
          stationData[i].values[j].yIndex = j;
        }else {
          stationData[i].values[j].yIndex = stationStackedCount[stationData[i].key-1] + j;
        }
    }
  }

  return stationData;
}

function updateCurrentStationCalc(deliveriesData){//update every delivery w/ its current station
  var workflow;
  var currentStation = 0;
  var isCurrentUpdated = false;
  // var now = new Date(Date.now());

  //assums workflows are in ascending order
  for (var i = 0; i < deliveriesData.length; i++) {
    currentStation = 0;
    isCurrentUpdated = false;
    for (var j = 0; j < deliveriesData[i].values.length; j++) {
       workflow = deliveriesData[i].values[j];

      if(!isCurrentUpdated){
        if(workflow['arrived-at'] !=null && workflow['ended-at'] === null){
          currentStation = workflow.station;
          console.log('setting current station!',currentStation);
          isCurrentUpdated = true;
        }
      }
    }

    if(currentStation == 1){
      var firstWorkflowOfDelivery = deliveriesData[i].values[0];

      if (firstWorkflowOfDelivery['arrived-at'] > now) {
        currentStation = 0; // first station
      };
    }

    if(currentStation == 0){
      var lastWorkflowOfDelivery = deliveriesData[i].values[deliveriesData[i].values.length-1];

      if (lastWorkflowOfDelivery['ended-at'] < now) {
        currentStation = 6; // last station
      };
    }
    deliveriesData[i].currentStation = currentStation;
  };
  return deliveriesData;
}

function generateCurrentDeliveryDelayById(deliveriesData) {
  var delayData = {}
  console.log('deliveriesdata',deliveriesData);
  // debugger;
  // detailCalculateDelay
  for (var i = 0; i < deliveriesData.length; i++) {
    var delivery = deliveriesData[i];
    // var deliveryData = deliveriesAPIData[parseInt(delivery.key)];
    delayData[delivery.key] = detailCalculateDelay(delivery);
  };
  console.log(delayData);
  return delayData;
}
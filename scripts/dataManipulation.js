function compare(a,b) {
  if (a.currentStation < b.currentStation)
    return -1;
  else if (a.currentStation > b.currentStation)
    return 1;
  else
    return 0;
}

function filterByLocations(includedObj) {
  if (includedObj.type == "locations") {
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

function isTimeBetweenTime(time, start,end){
  return start <= time && time <= end;
}

function processApiData(workflowsData){
  var deliveriesData = d3.nest()  //group by delivery
        .key(function(d) { return d.deliveryId; })
        .entries(workflowsData);

  deliveriesData.forEach(function(delivery) {
    var type = Math.random();
    if (type <.5){
      delivery.vehicleType = 'icn-vehicle-bulk.png';
    } else if(type < .75){
      delivery.vehicleType = 'icn-vehicle-common.png';
    } else {
      delivery.vehicleType = 'icn-vehicle-noncommon.png';
    }
  });

  //these functions depend
  deliveriesData      = updateCurrentStationCalc(deliveriesData);
  stationCounts       = stationCountCalc(deliveriesData);                                   // [7, 5, 5, 1, 4, 1, 1, 1] Gets the number of deliveries for every station
  stationStackedCount = stationStackedCountCalc(stationCounts);                             // [7, 12, 17, 18, 22, 23, 24, 25]
  stationStacked      = stationStackedCalc(stationCounts,stationStackedCount,stations);     // [{name:EnRoute, y:7,y0:0},Object...]
  deliveriesData      = deliveriesData.sort(compare);

  stationData = d3.nest() // groupByStation
      .key(function(d) { return d.currentStation; })
      .sortValues(function(a,b) { return b.values[0].endTime - a.values[0].endTime; })
      .entries(deliveriesData);
  stationData = stackDeliveriesCalc(stationStackedCount,stationData);

  render(stationData);
}

function resize() {
  console.log('resize');
  // if (deliveries == null) {return false};

  // var data = deliveries;

  // //these functions depend
  // data                = updateCurrentStationCalc(data);
  // stationCounts       = stationCountCalc(data);                                         
  // stationStackedCount = stationStackedCountCalc(stationCounts);                         
  // stationStacked      = stationStackedCalc(stationCounts,stationStackedCount,stations); 
  // data = data.sort(compare);

  // data = d3.nest() // groupByStation
  //     .key(function(d) { return d.currentStation; })
  //     .sortValues(function(a,b) { return b.values[0].endTime - a.values[0].endTime; })
  //     .entries(data);
  // data = stackDeliveriesCalc(stationStackedCount,data);

  
  render(stationData);
}

function retrieveDeliveries(){
  console.log('retrieveDeliveries----------');
  var self = this;

  $.ajax({
        url:url+'deliveries',
        headers: { 
          'X-SITE-ID': siteId,
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0eXBlIjoicm9sZSIsImlhdCI6MTQ1NTAzNDQ3Mn0.p8lguJGQHf3aMjQfgLScyEz6_H_1o5IFg0zBV3SnFZM'
        },
        success: function(deliveries) {
            console.log('deliveries recieved from api', deliveries);

            var locations = deliveries.included.filter(filterByLocations);
            locations = locations.map(function(obj){
              var rObj = {};
              rObj[obj.id] = obj.attributes.name;
              return rObj;
            });

            var apiWorkflows = deliveries.included.filter(filterByWorkflows);
            apiWorkflows = apiWorkflows.map(function(workflow){
              // if(workflow['attrivutes']['arrived-at'] === null){  //hasnt arrived

              // }
              workflow.attributes.deliveryId = parseInt(workflow.relationships.delivery.data.id);
              workflow.attributes.station = workflow.attributes.step;
              if(workflow.attributes['arrived-at']===null){
                workflow.attributes.startTime = null;
              } else {
                workflow.attributes.startTime = new Date(workflow.attributes['arrived-at']);
              }

              if(workflow.attributes['ended-at'] === null){
                workflow.attributes.endTime = null
              } else {
                workflow.attributes.endTime = new Date(workflow.attributes['ended-at']);
              }
              // workflow.attributes.endTime = new Date(new Date(workflow.attributes['ended-at']));
              // workflow.attributes.endTime = new Date(new Date(workflow.attributes.eta).getTime() + workflow.attributes['estimated-processing-time']*1000*60);


              //determine state
              if(new Date(workflow.attributes.eta) < new Date(workflow.attributes['arrived-at'])) {
                workflow.attributes.state = 'late';
              }else if(new Date(workflow.attributes.eta) > new Date(workflow.attributes['arrived-at'])) {
                workflow.attributes.state = 'early';
              }else {
                workflow.attributes.state = 'ontime';
              }
              console.log('compare');
              console.log(workflow.attributes.eta);
              console.log(workflow.attributes['startTime']);
              console.log(workflow.attributes.state);
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
  var now = new Date(Date.now());

  //assums workflows are in ascending order
  for (var i = 0; i < deliveriesData.length; i++) {
    currentStation = 0;
    isCurrentUpdated = false;
    for (var j = 0; j < deliveriesData[i].values.length; j++) {
       workflow = deliveriesData[i].values[j];

      // debugger;
      if(!isCurrentUpdated){
        if(now < workflow.endTime){
          currentStation = workflow.station;
          isCurrentUpdated = true;
        }
      }

    }

    if(currentStation == 1){
      var firstWorkflowOfDelivery = deliveriesData[i].values[0];

      if (firstWorkflowOfDelivery.startTime > now) {
        currentStation = 0; // first station
      };
    }

    if(currentStation == 0){
      var lastWorkflowOfDelivery = deliveriesData[i].values[deliveriesData[i].values.length-1];

      if (lastWorkflowOfDelivery.endTime < now) {
        currentStation = 6; // last station
      };
    }
    deliveriesData[i].currentStation = currentStation;
  };
  return deliveriesData;
}

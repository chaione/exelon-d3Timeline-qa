var pocContacts = ['POC', 'Delta10'];
var inspectionLabels = ['Scheduled','Actual']

function displayDetail(delivery) {
    delivery.status = deliveriesAPIData[parseInt(delivery.key)].attributes.status;
    delivery.arrivedAt = new Date(deliveriesAPIData[parseInt(delivery.key)].attributes['arrive-at']);
    console.log('deliveriesAPIData',deliveriesAPIData[parseInt(delivery.key)]);
    var currentDeliveryData = deliveriesAPIData[parseInt(delivery.key)];
    var pocId = currentDeliveryData['relationships']['primary-poc']['data']['id'];
    delivery.primaryPocName = "POC " + pocsAPIData[pocId]['first-name'] + " " + pocsAPIData[pocId]['last-name'];
    delivery.delay = detailCalculateDelay(delivery);
    delivery.companyName = deliveriesAPIData[parseInt(delivery.key)].attributes['company-name'];
    delivery.infoBoxCurrStation = calculateInfoboxCurrStation(delivery);
    
    console.log('displayDetail', delivery);
    isDetailDisplayed = true;
    detailYStart = 0;

    var eventHeight = 30;
    var eventCount  = 4; //how many rows of events
    var detailPadding = 30;
    
    detailDeliveryRectY = yDeliveryScale(delivery.yIndex+1) - detailPadding - (2*eventHeight);
    
    var detailDeliveryRectHeight = ((eventCount+1)*eventHeight) + (detailPadding*2);
    if(detailDeliveryRectY < 50){
        detailDeliveryRectY = 50;
    } else if(detailDeliveryRectY > innerHeight - xAxisHeight - detailDeliveryRectHeight){
        detailDeliveryRectY = innerHeight - xAxisHeight - detailDeliveryRectHeight;
    }

    // detailSvg
    //     detailDeliveryCloseRect
    //     detailDeliveryRect
            //here goes the gradient
    //     detailDeliveryDataGroup
    //         detailDeliveryYAxisGroup
    //         detailDeliveryDataScheduledGroup
    //         detailDeliveryDataActualGroup
    //         (vehicle diamond)
    //         detailDeliveryDataEventsGroup
    //     detailCommunicationDefaultLabel - "Scheduled", "Actual" Label
    //     detailCommunicationLabel - other communication Labels
    //     detailDeliveryStationLabel
    //     detailDeliveryInfoGroup
    //         detailDeliveryInfoRect
    //         detailDeliveryInfoPOC
    //         detailDeliveryInfoCompanyName

    detailSvg = d3.select("body").append("svg")
      .attr("width",  outerWidth)
      .attr("height", outerHeight-xAxisHeight)
      .attr("id","detailSvg")
      .style("opacity",.97)
      .call(xAxisTranslation);

        var detailDeliveryCloseRect = detailSvg.append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", outerWidth)
            .attr("height",outerHeight-xAxisHeight)
            .attr("class","detailDeliveryCloseRect")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .on("click", function() {
                removeDetail();
            });

        
        var detailDeliveryRect = detailSvg.append("rect")
            .attr("x", 0)
            .attr("y", detailDeliveryRectY)
            .attr("width", outerWidth)
            .attr("height",detailDeliveryRectHeight)
            .attr("opacity",.7)
            .attr("class",function(d) {
                    return "detailDeliveryRect"       
                // if (delivery.status === "denied") {
                //     return "detailDeliveryRect denied"
                // } else {
                //     return "detailDeliveryRect"       
                // }
            })
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        if(delivery.status==="denied"){
            var detailDeliveryStatusText = detailSvg.append("text")
                .attr("x", outerWidth - 20)
                .attr("y", detailDeliveryRectY + detailDeliveryRectHeight - 20)
                .text("!! DENYING ENTRY !!")
                .attr("class","deliveryStatuss denied")
                .attr("text-anchor", "end")
                .attr("font-size", stationTextHeight + "px");

            detailSvg.append("image")
              .attr("xlink:href",function(i){
                  return "img/icn-timeline-denied-panel.png";
              })
              .attr("height", detailDeliveryRectHeight)
              .attr("width", outerWidth)
              .attr("x",0)
              .attr("y",0)
              // .attr("class", "truckIconDiamond")
              .attr("preserveAspectRatio","xMidYMid slice")
              // .attr("viewBox","0 0 " + 1236 + " " + 522)
              .attr("transform", function(d) {return "translate(" + 0 + "," + detailDeliveryRectY + ")"});
        }


        var detailDeliveryStationLabel = detailSvg.append("text")
            .attr("x", 10)
            .attr("y", detailDeliveryRectY - 10)
            .text(stations[delivery.currentStation])
            .attr("class","detailName")
            .attr("font-size", stationTextHeight + "px");

        var detailDeliveryInfoGroup = detailSvg.append("g")
            .attr('transform', 'translate(' + (outerWidth- 344 - 20) + "," + (detailDeliveryRectY - 50)+ ')');;

            var detailDeliveryInfoRect = detailDeliveryInfoGroup.append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("width", 344)
                .attr("height",65)
                .attr("class","detailInfoRect")

            var detailDeliveryInfoPOC = detailDeliveryInfoGroup.append("text")
                .attr("x", 16)
                .attr("y", 26)
                .text(delivery.primaryPocName)
                .attr("class","detailInfoPOC")
                .attr("font-size", 16 + "px");

            var detailDeliveryInfoCompanyName = detailDeliveryInfoGroup.append("text")
                .attr("x", 16)
                .attr("y", 46)
                .text(delivery.companyName + delivery.infoBoxCurrStation)
                .attr("class","detailInfoCompanyName")
                .attr("font-size", 16 + "px");

            var detailDeliveryInfoArrivaltime = detailDeliveryInfoGroup.append("text")
                .attr("text-anchor", "END")
                .attr("x", 344-5)
                .attr("y", 26)
                .text("A " + delivery.arrivedAt.getHours() + ":" + ("0" + delivery.arrivedAt.getMinutes()).slice(-2))
                .attr("class","detailInfoArrivaltime")
                .attr("font-size", 16 + "px");

            var detailDeliveryInfoDelay = detailDeliveryInfoGroup.append("text")
                .attr("text-anchor", "END")
                .attr("x", 344-5)
                .attr("y", 46)
                .text(function(){
                    if(delivery.delay>15){return "Δ" + delivery.delay}
                    else{return "+"+Math.abs(delivery.delay)}})
                .attr("class",function(){
                    if(delivery.delay>15){return "detailInfoDelay late"}
                    else if(delivery.delay<-15){return"detailInfoDelay early"}
                    else {return "detailInfoDelay"}})
                .attr("font-size", 16 + "px");

            // .attr("x", 10)
            // .attr("y", ((outerHeight-xAxisHeight)/2)- (detailDeliveryRectHeight/2) - 10)
            // .text(stations[delivery.currentStation])
            // .attr("class","detailName")
            // .attr("font-size", stationTextHeight + "px");
      
        
        detailDeliveryDataGroup = detailSvg.append("g")
            .attr("class", "detailDelivery")
            .attr('transform', 'translate(' + detailStartingX + "," + detailDeliveryRectY + ')');

            var detailDeliveryYAxisGroup =detailDeliveryDataGroup.append("g") 
                .attr("class", "y axis");;
                // detailDeliveryYAxisGroup.append("line")
                // .attr("class","yAxis")
                // .attr("x1", xScale(now))
                // .attr("y1", -10)
                // .attr("x2", xScale(now))
                // .attr("y2", Math.max(stationHeight+ xAxisHeight, outerHeight));
            detailDeliveryYAxisGroup.append("line")
                .attr("class","yAxis")
                .attr("x1", xScale(now))
                .attr("y1", 30)
                .attr("x2", xScale(now))
                .attr("y2", Math.max(stationHeight+ xAxisHeight, outerHeight));
            detailDeliveryYAxisGroup.append("rect")
                .attr("x", xScale(now)-(120/2))
                .attr("y", 14)
                .attr("width",120)
                .attr("height", 16)
                .attr("class","yAxisDateTimeBox")
            detailDeliveryYAxisGroup.append("text")
                .attr("x", xScale(now))
                .attr("y", 27)
                .attr("text-anchor", "middle")
                .text(function(d,i){return "3.31.16 // 9:30"})
                .attr("class","yAxisDateTimeText")
                .attr("font-size", 14 + "px");
            detailDeliveryYAxisGroup.append("svg:path")
                .attr("d", function(d) { return customShapes['dBook'](4);})
                .attr("class", "yAxisDateTimeArrow")
                .attr("transform", function(d) {
                  return "translate(" + xScale(now) + "," + (30) + ")"
                });;


            var detailDeliveryDataScheduledGroup = detailDeliveryDataGroup.append("g")
                .attr("class", "detailScheduled")
                .attr('transform', 'translate(' + 0 + "," + (detailPadding + eventHeight) + ')');

            detailDeliveryDataScheduledGroup
                .selectAll(".detailScheduledLine")
                .data(delivery.values)
                .enter()
                .append("g")
                .each(function(d){
                    var workflow = d3.select(this);
                    if(d['station'] === 1 || d['station'] === 3){
                        workflow.append("line")
                            .attr("x1", function(d,i) { return xScale(d['eta']); })
                            .attr("y1", 0)
                            .attr("x2", function(d) { return xScale(d['eta'].getTime() + d['nonsearch-estimated-processing-time']*60000 - 60000) })
                            .attr("y2", 0)
                            .attr("class", function(d){
                              return "detailScheduledLine2";
                            });

                        workflow.append("line")
                            .attr("x1", function(d,i) { return xScale(d['eta'].getTime() + d['nonsearch-estimated-processing-time']*60000) })
                            .attr("y1", 0)
                            .attr("x2", function(d) { return xScale(d['eta'].getTime() + d['nonsearch-estimated-processing-time']*60000 + d['search-estimated-processing-time']*60000 - 60000) })
                            .attr("y2", 0)
                            .attr("class", function(d){
                              return "detailScheduledLine2";
                            });

                        workflow.append("line")
                            .attr("x1", function(d,i) { return xScale(d['eta'].getTime() + d['nonsearch-estimated-processing-time']*60000 + d['search-estimated-processing-time']*60000) })
                            .attr("y1", 0)
                            .attr("x2", function(d) { return xScale(d['eta'].getTime() + d['estimated-processing-time']*60000 - 60000) })
                            .attr("y2", 0)
                            .attr("class", function(d){
                              return "detailScheduledLine2";
                            });

                    } else {
                        workflow.append("line")
                            .attr("x1", function(d,i) { return xScale(d['eta']); })
                            .attr("y1", 0)
                            .attr("x2", function(d,i) { 
                                return xScale(new Date(d['eta'].getTime()+(d['estimated-processing-time']*60*1000-60000))); 
                            })
                            .attr("y2", 0)
                            .attr("class", function(d){
                              return "detailScheduledLine2";
                            });
                    }
                });
                

            detailDeliveryDataScheduledGroup
                .selectAll(".detailScheduledLabels")
                .data(delivery.values)
                .enter()
                .append("g")
                .each(function(d){
                  var workflow = d3.select(this);
                  if(d['station'] === 1 || d['station'] === 3){

                    workflow.append("text")
                      .attr("x", function(d) { return xScale(d['eta']);})
                      .attr("y", -3)
                      .text(function(d,i){ if(d['eta']>now){
                        return stationAcronyms[d.station] + "." + 1;
                      }})
                      .attr("class","detailScheduledLabels")
                      .attr("font-size", 14 + "px");

                      workflow.append("text")
                      .attr("x", function(d) { return xScale(d['eta'].getTime() + d['nonsearch-estimated-processing-time']*60000) })
                      .attr("y", -3)
                      .text(function(d,i){ if(d['eta'].getTime() + d['nonsearch-estimated-processing-time']*60000>now){
                        return 2;
                      }})
                      .attr("class","detailScheduledLabels")
                      .attr("font-size", 14 + "px");

                      workflow.append("text")
                      .attr("x", function(d) { return xScale(d['eta'].getTime() + d['nonsearch-estimated-processing-time']*60000 + d['search-estimated-processing-time']*60000); })
                      .attr("y", -3)
                      .text(function(d,i){ if(d['eta'].getTime() + d['nonsearch-estimated-processing-time']*60000 + d['search-estimated-processing-time']*60000>now){
                        return 3;
                      }})
                      .attr("class","detailScheduledLabels")
                      .attr("font-size", 14 + "px");
                  }else {
                    workflow.append("text")
                      .attr("x", function(d) { return xScale(d['eta']); })
                      .attr("y", -3)
                      .text(function(d,i){ if(d['eta']>now){return stationAcronyms[d.station];}})
                      .attr("class","detailScheduledLabels")
                      .attr("font-size", 14 + "px");
                  }
                });


            var detailDeliveryDataActualGroup = detailDeliveryDataGroup.append("g")
                .attr("class", "detailScheduled")
                .attr('transform', 'translate(' + 0 + "," + (detailPadding + eventHeight + eventHeight ) + ')');

            detailDeliveryDataActualGroup
                .selectAll(".detailActualLine")
                .data(delivery.values)
                .enter()
                .append("g")
                .each(function(d){
                  var workflow = d3.select(this);
                  workflow = appendWorkflow(workflow,d);
                });

            // detailDeliveryDataActualGroup
            //     .selectAll(".detailActualLabels")
            //     .data(delivery.values)
            //     .enter()
            //     .append("text")
            //     .attr("x", function(d,i) { return xScale(d['arrived-at']); })
            //     .attr("y", 14)
            //     .text(function(d,i){ if(d['arrived-at']<now){return stationAcronyms[d.station]}})
            //     .attr("class","detailActualLabels")
            //     .attr("font-size", 14 + "px");

            detailDeliveryDataActualGroup
                .selectAll(".detailActualLabels")
                .data(delivery.values)
                .enter()
                .append("g")
                .each(function(d){
                  console.log('-------------each',d);
                  // var arrivedAt    = d['arrived-at'];
                  // var nonsearchEnd = d['nonsearch-end'];
                  // var searchEnd    = d['search-end'];
                  // var endedAt      = d['ended-at'];
                  // var nonsearchEPT = d['nonsearch-estimated-processing-time'];
                  // var searchEPT    = d['search-estimated-processing-time'];
                  // var releaseEPT   = d['release-estimated-processing-time'];
                  // var EPT          = d['estimated-processing-time']
                  // var oneMinute    = 1000*60;
                  var workflow = d3.select(this);


                  if(d['arrived-at'] < now) {
                    if(d['station'] === 1 || d['station'] === 3){
                      var substep1State = substepState(d['arrived-at'],d['nonsearch-end'],d['nonsearch-estimated-processing-time']) 
                      var substep2State = substepState(d['nonsearch-end'],d['search-end'], d['search-estimated-processing-time']) 
                      var substep3State = substepState(d['search-end'], d['ended-at'],d['release-estimated-processing-time']) 
                      workflow.append("text")
                        .attr("x", function(d) { return xScale(d['arrived-at']);})
                        .attr("y", 14)
                        .text(function(d,i){ 
                          return stationAcronyms[d.station] + "." + 1;
                        })
                        .attr("class",function(d){
                            if(substep1State === 1) {return "detailActualLabels late";} 
                            else if(substep1State === -1) {return "detailActualLabels ahead";} 
                            else {return "detailActualLabels";}
                          })
                        .attr("font-size", 14 + "px");

                      if(d['nonsearch-end']<now) {
                          workflow.append("text")
                          .attr("x", function(d) { return xScale(d['nonsearch-end'])})
                          .attr("y", 14)
                          .text(2)
                            .attr("class",function(d){
                            if(substep2State === 1) {return "detailActualLabels late";} 
                            else if(substep2State === -1) {return "detailActualLabels ahead";} 
                            else {return "detailActualLabels";}
                          })
                          .attr("font-size", 14 + "px");
                        }

                      if(d['search-end']<now) {
                          workflow.append("text")
                          .attr("x", function(d) { return xScale(d['search-end']) })
                          .attr("y", 14)
                          .text(3)
                          .attr("class",function(d){
                            if(substep3State === 1) {return "detailActualLabels late";} 
                            else if(substep3State === -1) {return "detailActualLabels ahead";} 
                            else {return "detailActualLabels";}
                          })
                          .attr("font-size", 14 + "px");
                      }
                    } else {
                      workflow.append("text")
                        .attr("x", function(d) { return xScale(d['arrived-at']); })
                        .attr("y", 14)
                        .text(function(d,i){ return stationAcronyms[d.station];})
                        .attr("class",function(d){
                            if(d.state==='late'){
                              return "detailActualLabels late";
                            }else if(d.state==='early'){
                              return "detailActualLabels ahead";
                            }else {
                              return "detailActualLabels";
                            }
                          })
                        .attr("font-size", 14 + "px");
                    }
                  }
                });
                

            // detailDeliveryDataGroup.append("image")
            //       .attr("xlink:href",function(i){
            //           return "img/" + delivery.vehicleType+'.png';
            //       })
            //       .attr("height", vehicleShapeH)
            //       .attr("width", vehicleShapeH)
            //       .attr("x",-1*(vehicleShapeH/2))
            //       .attr("y",-1*(vehicleShapeH/2))
            //       .attr("class", "truckIconDiamond")
            //       .attr("transform", function(d) {return "translate(" + xScale(now) + "," + (detailPadding + eventHeight + eventHeight) + ")"});

            var deliveryEvents = eventsReqAndRespByDeliveryAPIData[delivery.key].events;
            var deliveryContacts = eventsReqAndRespByDeliveryAPIData[delivery.key].contacts;
            var detailDeliveryDataEventsGroup = detailDeliveryDataGroup.append("g")
                .attr("class", "detailScheduled")
                .attr('transform', 'translate(' + 0 + "," + (detailPadding + eventHeight*4) + ')');

            detailDeliveryDataEventsGroup
                .selectAll(".detailEventLine")
                .data(deliveryEvents)
                .enter()
                .append("line")
                    .attr("x1", function(d,i) {return xScale(d['timestamp']); })
                    .attr("y1", function(d,i) {return eventHeight*deliveryContacts.indexOf(d.senderId);})
                    .attr("x2", function(d,i) { 
                        if(d['endTimestamp']===null){
                            return xScale(now);
                        }else {
                            return xScale(d['endTimestamp']); 
                        }
                    })
                    .attr("y2", function(d,i) {return eventHeight*deliveryContacts.indexOf(d.senderId);})
                    .attr("class", function(d){
                      return "detailEventLine";
                    }).style("stroke-dasharray", ("1, 1"));
            
            detailDeliveryDataEventsGroup
                .selectAll(".detailEventStart")
                .data(deliveryEvents)
                .enter()
                .append("circle")
                    .attr("cx",function(d,i) {return xScale(d['timestamp'])})
                    .attr("cy",function(d,i) {return eventHeight*deliveryContacts.indexOf(d.senderId);})
                    .attr("r",3)
                    .attr("class","detailEventStart");

            detailDeliveryDataEventsGroup
                .selectAll(".detailEventEnd")
                .data(deliveryEvents)
                .enter()
                .append("circle")
                .each(function(d){
                    var eventEnd = d3.select(this);
                    if(d.endTimestamp!==null){
                        eventEnd
                            .attr("cx",function(d,i) {return xScale(d['endTimestamp'])})
                            .attr("cy",function(d,i) {return eventHeight*deliveryContacts.indexOf(d.senderId);})
                            .attr("r",3)
                            .attr("class","detailEventEnd");
                    }
                });
                    
            // debugger;

            var detailCommunicationLabelsGroup = detailSvg.append("g")
                .attr('transform', 'translate(' + stationTextPadding.left + "," +  (detailDeliveryRectY - 50 + detailPadding + eventHeight*2 - 7) + ')')
                .attr("class","detailCommunicationLabelsGroup");

            detailCommunicationLabelsGroup
                .selectAll(".detailCommunicationDefaultLabel")
                .data(inspectionLabels)
                .enter()
                .append("text")
                .attr("x", stationTextPadding.left)
                .attr("y", function(d,i) { return eventHeight*(i+1)})
                // .attr("y", function(d,i) { return (detailDeliveryRectY - 50) + (detailPadding + eventHeight*(i+1) + eventHeight*2 ) - 7})
                .text(function(d,i){return d})
                .attr("class","detailCommunicationDefaultLabel name")
                .attr("font-size", 14 + "px");

            detailCommunicationLabelsGroup
                .selectAll(".detailCommunicationLabel")
                .data(pocContacts)
                .enter()
                .append("text")
                .attr("x", function(d,i) { return stationTextPadding.left;})
                .attr("y", function(d,i) { return eventHeight*(i+1) + eventHeight*3})
                .text(function(d,i){return d})
                .attr("class","detailCommunicationLabel name")
                .attr("font-size", 14 + "px"); 
}

function removeDetail(){
    console.log('removeDetail');
    isDetailDisplayed = false;
    // d3.select("#detailSvg").remove();
    d3.select("#detailSvg").style("opacity",0.0).remove();

}

function detailCalculateDelay(delivery){
    var delay = 0 ;
    var wfDelay = 0;
    var currentWF;
    var minutesStartingLate;
    var currentDuration;
    var estimatedDuration;
    var currentStationOverTime;

    if(delivery.currentStation === 0){ //enroute
        currentWF = delivery.values[0];//get last wf
        if(currentWF.eta < now){
            return Math.round((now.getTime()-currentWF.eta.getTime())/60000);
        }
        return 0;
    }
    if(delivery.currentStation === 6){ //exited
        currentWF = delivery.values[4];//get last wf
        var a = currentWF.eta.getTime() + currentWF["estimated-processing-time"]*60*1000; 
        var b = currentWF['ended-at'] - a ;
        return Math.round(b / 1000 / 60);
    }

    currentWF = delivery.values[delivery.currentStation-1];

    minutesStartingLate    = currentWF['arrived-at'] - currentWF['eta'];
    currentDuration        = (now-currentWF['arrived-at']);
    estimatedDuration      = currentWF["estimated-processing-time"]*60*1000;
    currentStationOverTime = currentDuration - estimatedDuration;
    if(currentStationOverTime > 0){
        minutesStartingLate +=currentStationOverTime;
    }
    return Math.round(minutesStartingLate / 1000/60);
}
function calculateInfoboxCurrStation(delivery){
    var currentWF = delivery.values[delivery.currentStation-1];
    
    //leftside of now
    if(delivery.currentStation === 1 || delivery.currentStation === 3){
        var currentSubStep = calcCurrentSubStep(currentWF);
        return "(" + stationAcronyms[currentWF.station] + " " + currentSubStep + "/3)";
    }else if(delivery.currentStation === 0 || delivery.currentStation === 6){
        return "";
    } else {
        return "(" + stationAcronyms[currentWF.station] + ")";
    }
}
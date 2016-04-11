function moveXAxis(a,b) {
  var eventxTranslation = d3.event.translate[0];
  var eventyTranslation = d3.event.translate[1];
  if (isDetailDisplayed) {
    eventyTranslation = previousYTranslation;
  }
  previousYTranslation = eventyTranslation;
  detailStartingX = eventxTranslation;
  
  deliveriesGroup.attr("transform", "translate(" + [eventxTranslation,eventyTranslation] + ")scale(1)");

  stationsGroup.attr("transform", "translate(" + [0,eventyTranslation] + ")scale(1)");
  delieveryStaticGroup.attr("transform", "translate(" + [0,eventyTranslation] + ")scale(1)");

  xAxisGroup.attr("transform", "translate(" + [eventxTranslation,innerHeight] + ")scale(1)");

  if(isDetailDisplayed){
    detailDeliveryDataGroup.attr("transform", "translate(" + [eventxTranslation,detailDeliveryRectY] + ")scale(1)");
  }

  if (panBounds.left > eventxTranslation || eventxTranslation > panBounds.right || eventyTranslation > panBounds.top || eventyTranslation < panBounds.bottom ) {
    var maxShiftFromTop = stationHeight>outerHeight?panBounds.bottom:0;
    var translation = [
      Math.max(Math.min(eventxTranslation, panBounds.right),  panBounds.left),
      Math.max(Math.min(eventyTranslation, panBounds.top),    maxShiftFromTop)
    ];
    deliveriesGroup.attr("transform", "translate(" + [translation[0],translation[1]] + ")scale(1)");
    stationsGroup.attr("transform", "translate(" + [0,translation[1]] + ")scale(1)");
    delieveryStaticGroup.attr("transform", "translate(" + [0,translation[1]] + ")scale(1)");
    
    xAxisGroup.attr("transform", "translate(" + [translation[0],innerHeight] + ")scale(1)");

    if(isDetailDisplayed){
      detailDeliveryDataGroup.attr("transform", "translate(" + [translation[0],detailDeliveryRectY] + ")scale(1)");
    }

    xAxisTranslation.translate(translation);
  }
}

function render(data){
  console.log('render-------------');

  outerWidth  = document.documentElement.clientWidth;
  outerHeight = document.documentElement.clientHeight;
  innerWidth     = outerWidth   - margin.left - margin.right;
  innerHeight    = outerHeight  - margin.top  - margin.bottom;
  
  stationHeight = (stationStacked[stationStackedCount.length-1].y0*rowHeight) +
                  (stationStacked[stationStackedCount.length-1].deliveryCount * rowHeight);
  panBounds = { top:    0,
                right:  0,
                bottom: (-1*stationHeight) + innerHeight - xAxisHeight,
                left:   (-1*xAxisWidth) + outerWidth};

  //clear it out (for now... hope to just update some day!)
  svg.remove();
  setupSvgStructure();

  // Setup stations overlay and text
  var stationsLabelSelectAll = stationsGroup.selectAll(".station").data(stationStacked);
  var stationsLabelSelectAllG = stationsLabelSelectAll.enter().append("g").attr("class", "station"); // stations should never exit

  stationsLabelSelectAllG.append("rect").attr("class","stationRect");
  var stationsLabelStationRectSelectAll = stationsLabelSelectAll.selectAll(".stationRect");

  stationsLabelStationRectSelectAll
      .attr("x", function(d,i) { return 0;})
      .attr("y", function(d,i) { return d.y0*rowHeight + (rowHeight/2);})
      .attr("width",innerWidth)
      .attr("height", function(d,i) {return d.deliveryCount*rowHeight;})

  stationsLabelSelectAllG.append("text")
      .attr("x", function(d,i) { return stationTextPadding.left;})
      .attr("y", function(d,i) { return d.y0*rowHeight + (rowHeight/2) + stationTextHeight + stationTextPadding.top;})
      .text(function(d,i){return d.name})
      .attr("class","name")
      .attr("font-size", stationTextHeight + "px");

  var delieveryStaticGroupSelectAll=delieveryStaticGroup.selectAll(".deliveryStatuss")
    .data(deliveryyIndexInfo)
    .enter()
    .append("text")
    .attr("x", function(d,i) { return outerWidth-20})
    .attr("y", function(d,i) { return yDeliveryScale(d.yIndex+1)+6})//why is the 6 needed???
    .text(function(d,i){
      if(d.status==='denied'){
        return "!! DENYING ENTRY !!";
      }else {
        return "";
      }
    })
    .attr("class","deliveryStatuss denied")
    .attr("text-anchor", "end")
    .attr("font-size", stationTextHeight + "px");

  // Setup axii
  xAxisGroup.call(xAxis);
  yAxisGroup.append("line")
      .attr("class","yAxis")
      .attr("x1", xScale(now))
      .attr("y1", margin.top)
      .attr("x2", xScale(now))
      .attr("y2", Math.max(stationHeight+ xAxisHeight, outerHeight));
  yAxisGroup.append("rect")
      .attr("x", xScale(now)-(120/2))
      .attr("y", 0)
      .attr("width",120)
      .attr("height", 16)
      .attr("class","yAxisDateTimeBox")
  yAxisGroup.append("text")
      .attr("x", xScale(now))
      .attr("y", 13)
      .attr("text-anchor", "middle")
      .text(function(d,i){return "3.31.16 // 9:30"})
      .attr("class","yAxisDateTimeText")
      .attr("font-size", 14 + "px");
  yAxisGroup.append("svg:path")
      .attr("d", function(d) { return customShapes['dBook'](4);})
      .attr("class", "yAxisDateTimeArrow")
      .attr("transform", function(d) {
        return "translate(" + xScale(now) + "," + 16 + ")"
      });;


  // Setup Stations
  var stationsSelectAll2 = deliveriesGroup.selectAll(".station").data(data);
  stationsSelectAll2.enter().append("g").attr("class", "station");
  stationsSelectAll2.exit().remove();

  // Setup Deliveries
  var deliveriesSelectAll = stationsSelectAll2.selectAll(".delivery").data(function(d){
    return d.values;
  });
  var deliveriesSelectAllG = deliveriesSelectAll.enter().append("g").attr("class", "delivery");
  deliveriesSelectAllG
      .attr('transform', function(d){
        return 'translate(' + 0 + "," + yDeliveryScale(d.yIndex+1)+ ')';
      });

  // Setup Workflows
  var workflowsSelectAll = deliveriesSelectAllG.selectAll(".workflow").data(function(d){
    return d.values;
  });
  var workflowsSelectAllG = workflowsSelectAll.enter().append("g");
  // workflowsSelectAll.exit().remove();
  workflowsSelectAllG
      .each(function(d,i){
        var workflow = d3.select(this);
        workflow = appendWorkflow(workflow,d);
        if(d.step === 1 && d.eta < d['arrived-at']){
          prependEtaLine(workflow,d);
        }
      });

  var vehicleIconsG = deliveriesSelectAllG.append("g");
  //setup Vehicle Icons
  vehicleIconsG.append("image")
      .attr("xlink:href",function(i){
          return "img/" + i.vehicleType+'.png';
      })
      .attr("height", vehicleShapeH)
      .attr("width", vehicleShapeH)
      .attr("x",-1*(vehicleShapeH/2))
      .attr("y",-1*(vehicleShapeH/2))
      .attr("class", "truckIconDiamond")
      .attr("transform", function(d) {return "translate(" + xScale(now) + "," + 0 + ")"})
      .on("click", function(delivery) {
          displayDetail(delivery);
      });

  var communicationSelectAll = deliveriesSelectAllG.selectAll(".communicationLine").data(function(d){
    return eventsReqAndRespByDeliveryAPIData[d.key].events;
  });
  var communicationGroup = communicationSelectAll.enter().append("line")
  communicationGroup
    .each(function(d){
      var eventItem = d3.select(this);
      if(d.endTimestamp!==null){
          eventItem
            .attr("x1", function(d,i) {return xScale(d['timestamp']); })
            .attr("y1", 10)
            .attr("x2", function(d,i) { 
                if(d['endTimestamp']===null){
                    return xScale(now);
                }else {
                    return xScale(d['endTimestamp']); 
                }
            })
            .attr("y2", 10)
            .attr("class", "communicationLine")
            .style("stroke-dasharray", ("1, 1"));
      }
    });

  console.log('-------------render');
}

// RENDER HELPERS
function prependEtaLine(firstWorkflow,d){
  firstWorkflow.append("line")
        .attr("x1", function(d,i) { return xScale(d['eta']); })
        .attr("y1", function(d,i) { return 0;})
        .attr("x2", function(d,i) { return xScale(d['arrived-at']); })
        .attr("y2", function(d,i) { return 0;})
        .attr("class", "workflow late ghostline");

   firstWorkflow.append("svg:path")
        .attr("d", function(d) { return customShapes['lBook'](4);})
        .attr("class", "bookEnd notReached ghost")
        .attr("transform", function(d) {
          return "translate(" + xScale(d['eta']) + "," + 0 + ")"
        });;
}
function appendWorkflow(workflow,d){
  if(d['arrived-at'] != null && d['ended-at'] != null ){  //completed workflow
    workflow.append("line")
        .attr("x1", function(d,i) { return xScale(d['arrived-at']); })
        .attr("y1", function(d,i) { return 0;})
        .attr("x2", function(d,i) { return xScale(d['ended-at']); })
        .attr("y2", function(d,i) { return 0;})
        .attr("class", function(d){
          if(d.state==='late'){
            return "workflow late";
          }else if(d.state==='early'){
            return "workflow ahead";
          }else {
            return "workflow";
          }
        });

    workflow.append("svg:path")
        .attr("d", function(d) { return customShapes['lBook'](4);})
        .attr("class", function(d){
          if(d['arrived-at'] < now){
            return "bookEnd notReached";
          }
        })
        .attr("transform", function(d) {
          return "translate(" + xScale(d['arrived-at']) + "," + 0 + ")"
        });;

    workflow.append("svg:path")
        .attr("d", function(d) { return customShapes['rBook'](4);})
        .attr("class", function(d){
          if(d['ended-at'] < now){
            return "bookEnd notReached";
          }
        })
        .attr("transform", function(d) {
          return "translate(" + xScale(d['ended-at']) + "," + 0 + ")"
        });;
  } else if(d['arrived-at'] != null && d['ended-at'] === null) { //current workflow
    //leftside of now
    workflow.append("line")
        .attr("x1", function(d,i) { return xScale(d['arrived-at']); })
        .attr("y1", function(d,i) { return 0;})
        .attr("x2", function(d,i) { return xScale(now); })
        .attr("y2", function(d,i) { return 0;})
        .attr("class", function(d){
          if(d.state==='late'){
            return "workflow late";
          }else if(d.state==='early'){
            return "workflow ahead";
          }else {
            return "workflow";
          }
        });

    workflow.append("svg:path")
        .attr("d", function(d) { return customShapes['lBook'](4);})
        .attr("class", function(d){
          if(d['arrived-at'] < now){
            return "bookEnd notReached";
          }
        })
        .attr("transform", function(d) {
          return "translate(" + xScale(d['arrived-at']) + "," + 0 + ")"
        });;



    //on right side of now
    workflow.append("line")
        .attr("x1", function(d,i) { return xScale(now); })
        .attr("y1", function(d,i) { return 0;})
        .attr("x2", function(d,i) { return xScale(new Date(new Date(d['arrived-at'])).getTime() + d['estimated-processing-time']*1000*60)})
        // new Date(new Date(workflow.attributes.eta).getTime() + workflow.attributes['estimated-processing-time']*1000*60);
        .attr("y2", function(d,i) { return .001;})//IMPORTANT  if its flat its not displayed
        .style("stroke-dasharray", ("2, 2"))
        .style("stroke-width", 4)
        .attr("class", function(d){
          if(d.state==='late'){
            return "workflow lateGradient";
          }else if(d.state==='early'){
            return "workflow aheadGradient";
          }else {
            return "workflow onTimeGradient";
          }
        });

  } else if(d['arrived-at'] === null && d['ended-at'] === null){ //workflow hasnt started yet
    workflow.append("line")
        .attr("x1", function(d,i) { return xScale(new Date(d.eta)); })
        .attr("y1", function(d,i) { return 0;})
        .attr("x2", function(d,i) { return xScale(new Date(d.eta).getTime() + d['estimated-processing-time']*1000*60); })
        .attr("y2", function(d,i) { return 0;})
        .attr("class", "workflow notReached");
  }
  return workflow;
}


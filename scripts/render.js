function moveXAxis(a,b) {
  var eventxTranslation = d3.event.translate[0];
  var eventyTranslation = d3.event.translate[1];

  deliveriesGroup.attr("transform", "translate(" + [eventxTranslation,eventyTranslation] + ")scale(1)");
  stationsGroup.attr("transform", "translate(" + [0,eventyTranslation] + ")scale(1)");
  xAxisGroup.attr("transform", "translate(" + [eventxTranslation,innerHeight] + ")scale(1)");

  if (panBounds.left > eventxTranslation || eventxTranslation > panBounds.right || eventyTranslation > panBounds.top || eventyTranslation < panBounds.bottom ) {
    var maxShiftFromTop = stationHeight>outerHeight?panBounds.bottom:0;
    var translation = [
      Math.max(Math.min(eventxTranslation, panBounds.right),  panBounds.left),
      Math.max(Math.min(eventyTranslation, panBounds.top),    maxShiftFromTop)
    ];
    deliveriesGroup.attr("transform", "translate(" + [translation[0],translation[1]] + ")scale(1)");
    stationsGroup.attr("transform", "translate(" + [0,translation[1]] + ")scale(1)");
    xAxisGroup.attr("transform", "translate(" + [translation[0],innerHeight] + ")scale(1)");
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
                  (stationStacked[stationStackedCount.length-1].y * rowHeight);
  panBounds = { top:    0,
                right:  0,
                bottom: (-1*stationHeight) + innerHeight - xAxisHeight,
                left:   (-1*xAxisWidth) + outerWidth};

  console.log(data);
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
      .attr("height", function(d,i) {return d.y*rowHeight;})

  stationsLabelSelectAllG.append("text")
      .attr("x", function(d,i) { return stationTextPadding.left;})
      .attr("y", function(d,i) { return d.y0*rowHeight + (rowHeight/2) + stationTextHeight + stationTextPadding.top;})
      .text(function(d,i){return d.name})
      .attr("class","name")
      .attr("font-size", stationTextHeight + "px");

  // Setup axii
  xAxisGroup.call(xAxis);
  yAxisGroup.append("line")
      .attr("class","yAxis")
      .attr("x1", xScale(now))
      .attr("y1", margin.top)
      .attr("x2", xScale(now))
      .attr("y2", Math.max(stationHeight+ xAxisHeight, outerHeight));

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
  workflowsSelectAll.exit().remove();
  var workflowSelectAll5 = workflowsSelectAll.selectAll(".workflow");
  workflowsSelectAllG
      .each(function(d){
        var header = d3.select(this);
        if(d.startTime <now && now < d.endTime)  //current workflow
        {
          var state = Math.random();

          //leftside of now
          header.append("line")
              .attr("x1", function(d,i) { return xScale(d.startTime); })
              .attr("y1", function(d,i) { return 0;})
              .attr("x2", function(d,i) { return xScale(now); })
              .attr("y2", function(d,i) { return 0;})
              .attr("class", function(d){
                if (d.startTime <now) {
                  if(state<.25){
                    return "workflow ahead" 
                  } else if (state < .5){
                    return "workflow late"
                  } else {
                    return "workflow"
                  }
                } else {
                  return "workflow notReached";
                }
              });

          header.append("svg:path")
              .attr("d", function(d) { return customShapes['lBook'](4);})
              .attr("class", function(d){
                if(d.startTime < now){
                  return "bookEnd notReached";
                }
              })
              .attr("transform", function(d) {
                return "translate(" + xScale(d.startTime) + "," + 0 + ")"
              });;


          //on right side of now
          header.append("line")
              .attr("x1", function(d,i) { return xScale(now); })
              .attr("y1", function(d,i) { return 0;})
              .attr("x2", function(d,i) { return xScale(d.endTime); })
              .attr("y2", function(d,i) { return .001;})//IMPORTANT  if its flat its not displayed
              .style("stroke-dasharray", ("2, 2"))
              .style("stroke-width", 4)
              .attr("class", function(d){
                if(state<.25){
                  return "workflow aheadGradient" 
                } else if (state < .5){
                  return "workflow lateGradient"
                } else {
                  return "workflow onTimeGradient"
                }
              });

        } else {  //not active workflow

          header.append("line")
              .attr("x1", function(d,i) { return xScale(d.startTime); })
              .attr("y1", function(d,i) { return 0;})
              .attr("x2", function(d,i) { return xScale(d.endTime); })
              .attr("y2", function(d,i) { return 0;})
              .attr("class", function(d){
                if (d.startTime <now) {
                  var state = Math.random();
                  if(state<.25){
                    return "workflow ahead" 
                  } else if (state < .5){
                    return "workflow late"
                  } else {
                    return "workflow"
                  }
                } else {
                  return "workflow notReached";
                }
              });


          header.append("svg:path")
              .attr("d", function(d) { return customShapes['lBook'](4);})
              .attr("class", function(d){
                if(d.startTime < now){
                  return "bookEnd notReached";
                }
              })
              .attr("transform", function(d) {
                return "translate(" + xScale(d.startTime) + "," + 0 + ")"
              });;

          header.append("svg:path")
              .attr("d", function(d) { return customShapes['rBook'](4);})
              .attr("class", function(d){
                if(d.endTime < now){
                  return "bookEnd notReached";
                }
              })
              .attr("transform", function(d) {
                return "translate(" + xScale(d.endTime) + "," + 0 + ")"
              });;

        }
      });


  var vehicleIconsG = deliveriesSelectAllG.append("g");
  //setup Vehicle Icons
  vehicleIconsG.append("image")
      .attr("xlink:href",function(i){
          return "img/" + i.vehicleType
      })
      .attr("height", vehicleShapeH)
      .attr("width", vehicleShapeH)
      .attr("x",-1*(vehicleShapeH/2))
      .attr("y",-1*(vehicleShapeH/2))
      .attr("class", "truckIconDiamond")
      .attr("transform", function(d) {
          return "translate(" + xScale(now) + "," + 0 + ")"
        });
}





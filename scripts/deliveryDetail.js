function displayDetail(delivery) {
    console.log('displayDetail', delivery);
    isDetailDisplayed = true;
    var eventHeight = 30;
    var eventCount  = 4; //how many rows of events
    var detailPadding = 30;
    // var detailDeliveryRectHeight = ((eventCount+1)*eventHeight) + (detailPadding*2);
    detailDeliveryRectY = yDeliveryScale(delivery.yIndex+1) - detailPadding - (2*eventHeight);
    var detailDeliveryRectHeight = ((eventCount+1)*eventHeight) + (detailPadding*2);
    // yDeliveryScale(d.yIndex+1)+


    // detailSvg
    //     detailDeliveryCloseRect
    //     detailDeliveryRect
    //     detailDeliveryDataGroup
    //     detailDeliveryStationLabel
    //     detailDeliveryInfoGroup
    //         detailDeliveryInfoRect
    //         detailDeliveryInfoPOC
    //         detailDeliveryInfoCompanyName

    detailSvg = d3.select("body").append("svg")
      .attr("width",  outerWidth)
      .attr("height", outerHeight-xAxisHeight)
      .attr("id","detailSvg")
      .style("opacity",.0)
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
            .attr("class","detailDeliveryRect")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

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
                .text("POC " + "Joseph Edwards")
                .attr("class","detailInfoPOC")
                .attr("font-size", 16 + "px");

            var detailDeliveryInfoCompanyName = detailDeliveryInfoGroup.append("text")
                .attr("x", 16)
                .attr("y", 46)
                .text("ACE Asphalt Paving Co (S1 3/4)")
                .attr("class","detailInfoCompanyName")
                .attr("font-size", 16 + "px");

            var detailDeliveryInfoArrivaltime = detailDeliveryInfoGroup.append("text")
                .attr("text-anchor", "END")
                .attr("x", 344-5)
                .attr("y", 26)
                .text("A " + "5:30")
                .attr("class","detailInfoArrivaltime")
                .attr("font-size", 16 + "px");

            var detailDeliveryInfoDelay = detailDeliveryInfoGroup.append("text")
                .attr("text-anchor", "END")
                .attr("x", 344-5)
                .attr("y", 46)
                .text("Δ" + "12")
                .attr("class","detailInfoDelay")
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
                .attr("y1", -10)
                .attr("x2", xScale(now))
                .attr("y2", Math.max(stationHeight+ xAxisHeight, outerHeight));
            detailDeliveryYAxisGroup.append("rect")
                .attr("x", xScale(now)-(120/2))
                .attr("y", -26)
                .attr("width",120)
                .attr("height", 16)
                .attr("class","yAxisDateTimeBox")
            detailDeliveryYAxisGroup.append("text")
                .attr("x", xScale(now))
                .attr("y", -13)
                .attr("text-anchor", "middle")
                .text(function(d,i){return "3.31.16 // 9:30"})
                .attr("class","yAxisDateTimeText")
                .attr("font-size", 14 + "px");
            detailDeliveryYAxisGroup.append("svg:path")
                .attr("d", function(d) { return customShapes['dBook'](4);})
                .attr("class", "yAxisDateTimeArrow")
                .attr("transform", function(d) {
                  return "translate(" + xScale(now) + "," + (-10) + ")"
                });;


            var detailDeliveryDataScheduledGroup = detailDeliveryDataGroup.append("g")
                .attr("class", "detailScheduled")
                .attr('transform', 'translate(' + 0 + "," + (detailPadding + eventHeight) + ')');

            detailDeliveryDataScheduledGroup
                .selectAll(".detailScheduledLine")
                .data(delivery.values)
                .enter()
                .append("line")
                    .attr("x1", function(d,i) { return xScale(d['eta']); })
                    .attr("y1", 0)
                    .attr("x2", function(d,i) { 
                        return xScale(new Date(d['eta'].getTime()+(d['estimated-processing-time']*60*1000-60000))); 
                    })
                    .attr("y2", 0)
                    .attr("class", function(d){
                      return "detailScheduledLine2";
                    });

            var detailDeliveryDataActualGroup = detailDeliveryDataGroup.append("g")
                .attr("class", "detailScheduled")
                .attr('transform', 'translate(' + 0 + "," + (detailPadding + eventHeight + eventHeight ) + ')');

            detailDeliveryDataActualGroup
                .selectAll(".detailScheduledLine")
                .data(delivery.values)
                .enter()
                .append("g")
                .each(function(d){
                  var workflow = d3.select(this);
                  workflow = appendWorkflow(workflow,d);
                });
                
            // var detailDeliveryDataVehicleGroup = detailDeliveryDataGroup.append("g")

            detailDeliveryDataGroup.append("image")
                  .attr("xlink:href",function(i){
                      return "img/" + delivery.vehicleType+'.png';
                  })
                  .attr("height", vehicleShapeH)
                  .attr("width", vehicleShapeH)
                  .attr("x",-1*(vehicleShapeH/2))
                  .attr("y",-1*(vehicleShapeH/2))
                  .attr("class", "truckIconDiamond")
                  .attr("transform", function(d) {return "translate(" + xScale(now) + "," + (detailPadding + eventHeight + eventHeight) + ")"});

    detailSvg.transition().style("opacity",1.0);    
        // detailDeliveryDataGroup.selectAll(".detailLine").data(stationStacked);
}

function removeDetail(){
    console.log('removeDetail');
    isDetailDisplayed = false;
    // d3.select("#detailSvg").remove();
    d3.select("#detailSvg").style("opacity",0.0).remove();

}
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
                .text("ACE Asphalt Paving Co")
                .attr("class","detailInfoCompanyName")
                .attr("font-size", 16 + "px");

            // .attr("x", 10)
            // .attr("y", ((outerHeight-xAxisHeight)/2)- (detailDeliveryRectHeight/2) - 10)
            // .text(stations[delivery.currentStation])
            // .attr("class","detailName")
            // .attr("font-size", stationTextHeight + "px");
      
        
        detailDeliveryDataGroup = detailSvg.append("g")
            .attr("class", "detailDelivery")
            .attr('transform', 'translate(' + detailStartingX + "," + detailDeliveryRectY + ')');

            detailDeliveryDataGroup.append("line")
                .attr("class","yAxis")
                .attr("x1", xScale(now))
                .attr("y1", -10)
                .attr("x2", xScale(now))
                .attr("y2", Math.max(stationHeight+ xAxisHeight, outerHeight));


            var detailDeliveryDataScheduledGroup = detailDeliveryDataGroup.append("g")
                .attr("class", "detailScheduled")
                .attr('transform', 'translate(' + 0 + "," + (detailPadding + eventHeight/2) + ')');

            detailDeliveryDataScheduledGroup
                .selectAll(".detailScheduledLine")
                .data(delivery.values)
                .enter()
                .append("line")
                .attr("x1", function(d,i) { return xScale(d['eta']); })
                .attr("y1", function(d,i) { return eventHeight*1;})
                .attr("x2", function(d,i) { 
                    // var asdf = new Date(d['eta']);
                    // var qwer = d['estimated-processing-time']*60*1000;
                    // var poiu = asdf + qwer;

                    // console.log('eta',d['eta']);
                    // console.log('processing time', d['estimated-processing-time']*60*1000);
                    // // console.log(d['eta'] + (d['estimated-processing-time']*60*60*1000));
                    // console.log('end', new Date(new Date(d['eta']).getTime()+(qwer)));

                    // debugger;
                    return xScale(new Date(d['eta'].getTime()+(d['estimated-processing-time']*60*1000-60000))); 
                })
                .attr("y2", function(d,i) { return eventHeight*1;})
                .attr("class", function(d){
                  return "detailScheduledLine2";
                });

            // detailDeliveryDataGroup.selectAll(".detailLine").data(stationStacked);


            detailDeliveryDataGroup.append("line")
                .attr("x1", function(d,i) { return xScale(new Date(nowYear,2,31,5,30)); })
                .attr("y1", function(d,i) { return 10;})
                .attr("x2", function(d,i) { return xScale(new Date(nowYear,2,31,17,0)); })
                .attr("y2", function(d,i) { return 10;})
                .attr("class", function(d){
                  return "workflow felwijf3";
                });

            // detailYAxisGroup = detailDeliveryGroup.append("g")
            //       .attr("class", "y axis");


            

        detailDeliveryDataGroup.selectAll(".detailLine").data(stationStacked);
}

function removeDetail(){
    console.log('removeDetail');
    isDetailDisplayed = false;
    d3.select("#detailSvg").remove();
}
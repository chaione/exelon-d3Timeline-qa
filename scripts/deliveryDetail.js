function displayDetail(delivery) {
    console.log('displayDetail', delivery);
    isDetailDisplayed = true;
    var eventHeight = 30;
    var eventCount  = 4; //how many rows of events
    var detailPadding = 30;
    var detailDeliveryRectHeight = ((eventCount+1)*eventHeight) + (detailPadding*2);
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
            .attr("y", ((outerHeight-xAxisHeight)/2)- (detailDeliveryRectHeight/2))
            .attr("width", outerWidth)
            .attr("height",detailDeliveryRectHeight)
            .attr("class","detailDeliveryRect")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var detailDeliveryStationLabel = detailSvg.append("text")
            .attr("x", 10)
            .attr("y", ((outerHeight-xAxisHeight)/2)- (detailDeliveryRectHeight/2) - 10)
            .text(stations[delivery.currentStation])
            .attr("class","detailName")
            .attr("font-size", stationTextHeight + "px");
      

}

function removeDetail(){
    console.log('removeDetail');
    d3.select("#detailSvg").remove();
}
//safari rotate bug fix
(function(doc) {

  var addEvent = 'addEventListener',
      type = 'gesturestart',
      qsa = 'querySelectorAll',
      scales = [1, 1],
      meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

  function fix() {
    meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
    doc.removeEventListener(type, fix, true);
  }

  if ((meta = meta[meta.length - 1]) && addEvent in doc) {
    fix();
    scales = [1, 1];
    doc[addEvent](type, fix, true);
  }

}(document));

//User Defined Variables
var rowHeight   = 45;
var xAxisHeight = 30;
var xAxisWidth  = 4500;
var stationTextHeight = 20;
var stationTextPadding = {top: 10, right: 0, bottom: 0, left: 10};

var margin      = {top: 0, right: 0, bottom: 30, left: 0};
var outerWidth  = document.documentElement.clientWidth;
var outerHeight = document.documentElement.clientHeight;
console.log(outerWidth);
console.log(outerHeight);
var startOfDayHour = 6; //used for fake data
var stations =   {
                  0:"En Route",
                  1:"Sierra One",
                  2:"Stinger Gate",
                  3:"Sally Port",
                  4:"Warehouse",
                  5:"PA",
                  6:"Exit"
                }
var stationAcronyms = {
                  0:"ER",
                  1:"S1",
                  2:"SG",
                  3:"SP",
                  4:"WH",
                  5:"PA",
                  6:"EX"
}
var stationOrder =  [
                      1,//Tatooine
                      2,//Death Star
                      3 //Great Temple
                    ]
var pollrate = 2455000;
var url = 'https://exelon-api.herokuapp.com/v1/';
var siteId = 1; //limerick
var aheadOrBehindPct = .25;  // if behind .25 estimated time its longer.   if ahead by .25.. its faster

//Calculated Variables
var innerWidth     = outerWidth   - margin.left - margin.right;
var innerHeight    = outerHeight  - margin.top  - margin.bottom;
var unixHour       = 1000*60*60;
var unixMinute     = 1000*60;
var vpStartHours   = (outerWidth/2)/(xAxisWidth/24);  //startHours is the time where the Viewport's (middle of screen) y axis naturally rests.  Its time in hours.
var unixStartHours = unixHour * vpStartHours;
var now            = new Date(Date.now());
var nowYear        = now.getFullYear();
var nowMonth       = now.getMonth();
var nowDay         = now.getDate();
var nowHours       = now.getHours();
var nowMinutes     = now.getMinutes();
now = new Date(nowYear, 2, 31,9,30);// used for testing
var isDetailDisplayed = false;
console.log('now',now);

var vehicleShapeH  = rowHeight-10;
var svg,stationsGroup,delieveryStaticGroup,g,deliveriesGroup,xAxisGroup,yAxisGroup,xAxisMask;
var stationCounts =[];
var stationStackedCount=[];
var stationStacked=[];
var stationHeight;
var workflowsFakeData=[];
var deliveryyIndexInfo=[];
var startingX;
var duration, variation, variationMinutes;
var yDeliveryScale;
var deliveriesAPIData;
var pocsAPIData;
var previousYTranslation = 0;
var vehiclesAPIData;
var eventsReqAndRespByDeliveryAPIData;
var detailStartingX;
var detailDeliveryRectY;

var panBounds;

var customShapes = { 
  lBook: function(r) {
    var points = [ [0,r], [0,-r], [r,0], [0,r]];
    return d3.svg.line()(points);
  },
  rBook: function(r) {
    var points = [ [0,r], [0,-r], [-r,0], [0,r]];
    return d3.svg.line()(points);
  },
  dBook: function(r) {
    var points = [ [-r,0], [r,0], [0,r], [-r,0]];
    return d3.svg.line()(points);
  }
}

//scales
// var xScale = d3.time.scale.utc()
//       .domain([+new Date(nowYear, nowMonth, nowDay-1,12),                +new Date(nowYear, nowMonth, nowDay+1,12)])
//       .range( [0,                                     xAxisWidth]);
var xScale = d3.time.scale.utc()
      .domain([+new Date(nowYear, 2, 31-1,12),        +new Date(nowYear, 2, 31+1,12)])
      .range( [0,                                     xAxisWidth]);

var yDeliveryScale = d3.scale.linear()
      .domain([1,7])
      .range([1+rowHeight,7*rowHeight]);

// var viewportScale = d3.time.scale.utc()
//       .domain([+new Date(nowYear, nowMonth, nowDay-1,12)+unixStartHours,  +new Date(nowYear, nowMonth, nowDay+1,12)-unixStartHours])
//       .range( [0,                                     -1*xAxisWidth+outerWidth]);
var viewportScale = d3.time.scale.utc()
      .domain([+new Date(nowYear, 2, 31-1,12)+unixStartHours,  +new Date(nowYear, 2, 31+1,12)-unixStartHours])
      .range( [0,                                              -1*xAxisWidth+outerWidth]);

// startingX = viewportScale(new Date(nowYear,nowMonth,nowDay,nowHours,nowMinutes));
startingX = viewportScale(new Date(nowYear,2,31,9,30));
detailStartingX = startingX;

var xAxis = d3.svg.axis()
  .ticks(d3.time.hours, 1)
  .tickFormat(d3.time.format('%H'))
  .scale(xScale);



function setupSvgStructure(){
  svg = d3.select("body").append("svg")
      .attr("width",  outerWidth)
      .attr("height", outerHeight)
      .attr("id", "timeline")
      .call(xAxisTranslation);

    //gradients
    var svgDefs = svg.append('defs');
        var maskingGradient = svgDefs.append('linearGradient')
                .attr('id', 'maskingGradient')
                .attr("x1", "0%")
                .attr("y1", "100%")
                .attr("x2", "0%")
                .attr("y2", "0%");
            maskingGradient.append('stop')
                .attr('class', 'color-maskingGradient-top')
                .attr('offset', '0');
            maskingGradient.append('stop')
                .attr('class', 'color-maskingGradient-bottom')
                .attr('offset', '.15');
            maskingGradient.append('stop')
                .attr('class', 'color-maskingGradient-bottom')
                .attr('offset', '1')
                .attr('stop-opacity', '0');
        var aheadGradient = svgDefs.append('linearGradient')
                .attr('id', 'aheadGradient');
            aheadGradient.append('stop')
                .attr('class', 'color-ahead-left')
                .attr('offset', '0');
            aheadGradient.append('stop')
                .attr('class', 'color-ahead-right')
                .attr('offset', '1');
        var lateGradient = svgDefs.append('linearGradient')
                .attr('id', 'lateGradient');
            lateGradient.append('stop')
                .attr('class', 'color-late-left')
                .attr('offset', '0');
            lateGradient.append('stop')
                .attr('class', 'color-late-right')
                .attr('offset', '1');
        var onTimeGradient = svgDefs.append('linearGradient')
                .attr('id', 'onTimeGradient');
            onTimeGradient.append('stop')
                .attr('class', 'color-onTime-left')
                .attr('offset', '0');
            onTimeGradient.append('stop')
                .attr('class', 'color-onTime-right')
                .attr('offset', '1');

    svg.append("rect")
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", outerWidth)
          .attr("height",outerHeight)
          .attr("class","onTimeGradient")

    stationsGroup = svg.append("g")
          .attr("class", "stations")
          .attr('transform', 'translate(' + 0 + "," + 0 + ')')
    

    g = svg.append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        deliveriesGroup = g.append("g")
              .attr("class", "deliveries")
              .attr('transform', 'translate(' + startingX + "," + 0 + ')');

            yAxisGroup = deliveriesGroup.append("g")
                  .attr("class", "y axis");

        xAxisMask = g.append("rect")
              .attr("x", 0)
              .attr("y", 0)
              .attr("width", outerWidth)
              .attr("height", xAxisHeight*2)
              .attr("class","maskingGradient")
              .attr('transform', 'translate(' + 0 + "," +  (outerHeight-(xAxisHeight*2)+1) + ')');

        xAxisGroup = g.append("g")
              .attr("class", "x axis ")
              .attr('transform', 'translate(' + startingX + "," +  innerHeight + ')');

    delieveryStaticGroup = svg.append("g")
          .attr("class", "deliveryStaticGroup")
          .attr('transform', 'translate(' + 0 + "," + 0 + ')');

}
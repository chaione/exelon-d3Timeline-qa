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
var outerHeight = document.documentElement.clientHeight - 83;
console.log(outerWidth);
console.log(outerHeight);
var startOfDayHour = 6; // used for fake data
var stations = {
  0: "En Route",
  1: "Sierra One",
  2: "Stinger Gate",
  3: "Sally Port",
  4: "Warehouse",
  5: "PA",
  6: "Exit"
}
var stationAcronyms = {
  0: "ER",
  1: "S1",
  2: "SG",
  3: "SP",
  4: "WH",
  5: "PA",
  6: "EX"
}

var VEHICLE_TYPE_TO_IMG = {
  "non_common_carrier": "noncommon",
  "common_carrier": "common",
  "bulk_materials": "bulk",
  "radioactive": "rad",
  "emergency": "emergency",
  "construction": "construction",
  "passenger_imp": "passIMP",
  "passenger_non_imp": "passnonIMP",
  "radioactivehic": "rad",
  "radioactive_hic": "rad",
  "hazmat": "rad",
  "null": "null",
};

var pollrate = 2455000;
// var url = 'https://exelon-api.herokuapp.com/v1/';
var url = 'https://exelon-api-staging.herokuapp.com/v1/';
// var url = 'https://exelon-api-qa.herokuapp.com/v1/';
// var url = 'https://exelon-api-production.herokuapp.com/v1/';
var siteId = 1; //limerick
var aheadOrBehindPct = .25;  // if behind .25 estimated time its longer.   if ahead by .25.. its faster
var titleHeight = 83;
//Calculated Variables
var innerWidth     = outerWidth   - margin.left - margin.right;
var innerHeight    = outerHeight  - margin.top  - margin.bottom;
var unixHour       = 1000*60*60;
var unixMinute     = 1000*60;
var vpStartHours   = (outerWidth/2)/(xAxisWidth/48);  //startHours is the time where the Viewport's (middle of screen) y axis naturally rests.  Its time in hours.
console.log('vpStartHours',vpStartHours);
var unixStartHours = unixHour * vpStartHours;
var now            = new Date(Date.now());
// now                = new Date(2016, 5, 20,9,30);// used for testing - june 20 2016 at 13:30 (some timezone..)
var nowYear        = now.getFullYear();
var nowMonth       = now.getMonth();
var nowDay         = now.getDate();
var nowHours       = now.getHours();
var nowMinutes     = now.getMinutes();
var yesterday      = new Date(now); yesterday.setDate(yesterday.getDate() - 1);
var tomorrow       = new Date(now); tomorrow.setDate(tomorrow.getDate() + 1);

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
var deliveriesAPIData;  //big one.  has all the details for every delivery by id
var currentDeliveryDelayById=12;
var pocsAPIData;
var previousYTranslation = 0;
var vehiclesAPIData;
var eventsReqAndRespByDeliveryAPIData;
var detailStartingX;
var detailDeliveryRectY;
var deliveries = {}

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
      .domain([+new Date(nowYear, nowMonth, yesterday.getDate(),12),        +new Date(nowYear, nowMonth, tomorrow.getDate(),12)])
      .range( [0,                                     xAxisWidth]);

var yDeliveryScale = d3.scale.linear()
      .domain([1,7])
      .range([1+rowHeight,7*rowHeight]);

// var viewportScale = d3.time.scale.utc()
//       .domain([+new Date(nowYear, nowMonth, nowDay-1,12)+unixStartHours,  +new Date(nowYear, nowMonth, nowDay+1,12)-unixStartHours])
//       .range( [0,                                     -1*xAxisWidth+outerWidth]);
var viewportScale = d3.time.scale.utc()
      .domain([+new Date(nowYear, nowMonth, yesterday.getDate(),12)+unixStartHours,  +new Date(nowYear, nowMonth, tomorrow.getDate(),12)-unixStartHours])
      .range( [0,                                              -1*xAxisWidth+outerWidth]);

// startingX = viewportScale(new Date(nowYear,nowMonth,nowDay,nowHours,nowMinutes));
startingX = viewportScale(new Date(nowYear,nowMonth,nowDay,9,30));
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

        var maskingGradientHorizontal = svgDefs.append('linearGradient')
                .attr('id', 'maskingGradientHorizontal')
                .attr("x1", "0%")
                .attr("y1", "0%")
                .attr("x2", "100%")
                .attr("y2", "0%");
            maskingGradientHorizontal.append('stop')
                .attr('class', 'color-maskingGradientHorizontal-left')
                .attr('offset', '.5')
                .attr('stop-opacity', '.9');
            // maskingGradientHorizontal.append('stop')
            //     .attr('class', 'color-maskingGradientHorizontal-left')
            //     .attr('offset', '.3');
            maskingGradientHorizontal.append('stop')
                .attr('class', 'color-maskingGradientHorizontal-right')
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
        var deniedEntryGradient = svgDefs.append('linearGradient')
                .attr('id','deniedEntryGradient')
                .attr('x1',"0%")
                .attr('y1',"0%")
                .attr('x2',"100%")
                .attr('y2',"0%");
            deniedEntryGradient.append('stop')
                .attr('class', 'color-deniedEntry-left')
                .attr('offset', '0');
            deniedEntryGradient.append('stop')
                .attr('class', 'color-deniedEntry-right')
                .attr('offset', '.3');
                deniedEntryGradient.append('stop')
                .attr('class', 'color-deniedEntry-right')
                .attr('offset', '.7');
            deniedEntryGradient.append('stop')
                .attr('class', 'color-deniedEntry-left')
                .attr('offset', '1');
        var fullBGGradient = svgDefs.append('radialGradient')
                .attr('id', 'fullBGGradient')
                .attr('x1',"0%")
                .attr('y1',"0%")
                .attr('x2',"100%")
                .attr('y2',"100%");
            fullBGGradient.append('stop')
                .attr('class', 'color-fullBG-left')
                .attr('offset', '0');
            fullBGGradient.append('stop')
                .attr('class', 'color-fullBG-right')
                .attr('offset', '1');

    svg.append("rect")
          .attr("x", 0)
          .attr("y", -100)
          .attr("width", outerWidth*1.5)
          .attr("height",outerHeight*1.5)
          .attr("fill","url(#fullBGGradient)")



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

    yStationMask = svg.append("rect")
          .attr("x", 0)
          .attr("y", 0)
          .attr("width", 120)
          .attr("height", outerHeight - xAxisHeight)
          .attr("class","maskingGradientHorizontal")
          .attr('transform', 'translate(' + 0 + "," +  0 + ')');

    stationsGroup = svg.append("g")
          .attr("class", "stations")
          .attr('transform', 'translate(' + 0 + "," + 0 + ')')

    delieveryStaticGroup = svg.append("g")
          .attr("class", "deliveryStaticGroup")
          .attr('transform', 'translate(' + 0 + "," + 0 + ')');

}


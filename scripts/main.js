'use strict'

console.log('Version 04 02 2016')

var xAxisTranslation = d3.behavior.zoom()
  .scaleExtent([1, 1])
  .translate([startingX, 0])
  .on('zoom', moveXAxis)

// Structure
setupSvgStructure()

// Create Data
retrieveDeliveries()
setInterval(retrieveDeliveries, pollrate)
window.onresize = resize

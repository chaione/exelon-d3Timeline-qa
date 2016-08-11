function moveXAxis (a, b) {
  var eventxTranslation = d3.event.translate[0]
  var eventyTranslation = d3.event.translate[1]
  if (eventyTranslation < panBounds.bottom) {
    eventyTranslation = panBounds.bottom
    xAxisTranslation.translate([eventxTranslation, eventyTranslation])
  }
  if (eventyTranslation > panBounds.top) {
    eventyTranslation = panBounds.top
    xAxisTranslation.translate([eventxTranslation, eventyTranslation])
  }

  if (eventxTranslation < panBounds.left) {
    eventxTranslation = panBounds.left
    xAxisTranslation.translate([eventxTranslation, eventyTranslation])
  }

  if (eventxTranslation > panBounds.right) {
    eventxTranslation = panBounds.right
    xAxisTranslation.translate([eventxTranslation, eventyTranslation])
  }

  if (isDetailDisplayed) {
    eventyTranslation = previousYTranslation
  }
  previousYTranslation = eventyTranslation
  detailStartingX = eventxTranslation

  deliveriesGroup.attr('transform', 'translate(' + [eventxTranslation, eventyTranslation] + ')scale(1)')

  stationsGroup.attr('transform', 'translate(' + [0, eventyTranslation] + ')scale(1)')
  delieveryStaticGroup.attr('transform', 'translate(' + [0, eventyTranslation] + ')scale(1)')

  xAxisGroup.attr('transform', 'translate(' + [eventxTranslation, innerHeight] + ')scale(1)')
  if (isDetailDisplayed) {
    detailDeliveryDataGroup.attr('transform', 'translate(' + [eventxTranslation, detailDeliveryRectY] + ')scale(1)')
  }
}

function render (data) {
  console.log('render-------------')

  outerWidth = document.documentElement.clientWidth
  outerHeight = document.documentElement.clientHeight - 83

  innerWidth = outerWidth - margin.left - margin.right
  innerHeight = outerHeight - margin.top - margin.bottom

  stationHeight = (stationStacked[stationStackedCount.length - 1].y0 * rowHeight) +
    (stationStacked[stationStackedCount.length - 1].deliveryCount * rowHeight)

  panBounds = {
    top: 0,
    right: 0,
    bottom: (-1 * stationHeight) + innerHeight - xAxisHeight,
    left: (-1 * xAxisWidth) + outerWidth
  }

  // clear it out (for now... hope to just update some day!)
  svg.remove()
  setupSvgStructure()

  // Setup stations overlay and text
  var stationsLabelSelectAll = stationsGroup.selectAll('.station').data(stationStacked)
  var stationsLabelSelectAllG = stationsLabelSelectAll.enter().append('g').attr('class', 'station') // stations should never exit

  stationsLabelSelectAllG.append('rect').attr('class', 'stationRect')
  var stationsLabelStationRectSelectAll = stationsLabelSelectAll.selectAll('.stationRect')

  stationsLabelStationRectSelectAll
    .attr('x', function (d, i) { return 0 })
    .attr('y', function (d, i) { return d.y0 * rowHeight + (rowHeight / 2) })
    .attr('width', innerWidth)
    .attr('height', function (d, i) { return d.deliveryCount * rowHeight })

  stationsLabelSelectAllG.append('text')
    .attr('x', function (d, i) { return stationTextPadding.left;})
    .attr('y', function (d, i) { return d.y0 * rowHeight + (rowHeight / 2) + stationTextHeight + stationTextPadding.top;})
    .text(function (d, i) {return d.name})
    .attr('class', 'name')
    .attr('font-size', stationTextHeight + 'px')

  stationsLabelSelectAll.selectAll('.deliveryBGStatuss') // denying entry bg
    .data(deliveryyIndexInfo.filter(filterWorkflowsByHasStatus))
    .enter()
    .append('rect')
    // .attr("xlink:href",function(i){
    //     return "img/icn-timeline-denied-small.png"
    // })
    .attr('height', rowHeight)
    .attr('width', outerWidth)
    .attr('class', 'deniedEntry')
    // .attr("preserveAspectRatio","none")
    // .attr("fill","url(#deniedEntryGradient)")
    .attr('x', 0)
    .attr('y', 0)
    .attr('transform', function (d) {return 'translate(' + 0 + ',' + (yDeliveryScale(d.yIndex + 1) - rowHeight / 2) + ')'})

  var delieveryStaticGroupSelectAll = delieveryStaticGroup.selectAll('.deliveryStatuss') // denying entry text
    .data(deliveryyIndexInfo)
    .enter()
    .append('text')
    .attr('x', function (d, i) { return outerWidth - 20 })
    .attr('y', function (d, i) { return yDeliveryScale(d.yIndex + 1) + 6 }) // why is the 6 needed???
    .text(function (d, i) {
      if (d.status === 'denied') {
        return '!! DENYING ENTRY !!'
      } else {
        return ''
      }
    })
    .attr('class', 'deliveryStatuss denied')
    .attr('text-anchor', 'end')
    .attr('font-size', stationTextHeight + 'px')

  // Setup axis
  xAxisGroup.call(xAxis)
  yAxisGroup.append('line')
    .attr('class', 'yAxis')
    .attr('x1', xScale(_now))
    .attr('y1', margin.top)
    .attr('x2', xScale(_now))
    .attr('y2', Math.max(stationHeight + xAxisHeight, outerHeight))

  yAxisGroup.append('rect')
    .attr('x', xScale(_now) - (120 / 2))
    .attr('y', 0)
    .attr('width', 120)
    .attr('height', 16)
    .attr('class', 'yAxisDateTimeBox')
  yAxisGroup.append('text')
    .attr('x', xScale(_now))
    .attr('y', 13)
    .attr('text-anchor', 'middle')
    .text(function (d, i) {
      return (nowMonth + 1) + '.' + nowDay + '.' + nowYear + ' // ' + nowHours + '.' + nowMinutes
    })
    .attr('class', 'yAxisDateTimeText')
    .attr('font-size', 14 + 'px')
  yAxisGroup.append('svg:path')
    .attr('d', function (d) {
      return customShapes['dBook'](4)
    })
    .attr('class', 'yAxisDateTimeArrow')
    .attr('transform', function (d) {
      return 'translate(' + xScale(_now) + ',' + 16 + ')'
    })

  // Setup Stations
  var stationsSelectAll2 = deliveriesGroup.selectAll('.station').data(data)
  stationsSelectAll2.enter().append('g').attr('class', 'station')
  stationsSelectAll2.exit().remove()

  // Setup Deliveries
  var deliveriesSelectAll = stationsSelectAll2.selectAll('.delivery').data(function (d) {
    return d.values
  })
  var deliveriesSelectAllG = deliveriesSelectAll.enter().append('g').attr('class', 'delivery')
  deliveriesSelectAllG
    .attr('transform', function (d) {
      return 'translate(' + 0 + ',' + yDeliveryScale(d.yIndex + 1) + ')'
    })

  // Setup Workflows
  var workflowsSelectAll = deliveriesSelectAllG.selectAll('.workflow')
    .data(function (d) {
      return d.values
    })
  var prevData = {}
  var workflowsSelectAllG = workflowsSelectAll.enter().append('g')
  // workflowsSelectAll.exit().remove()
  workflowsSelectAllG
    .each(function (d, i) {
      var workflow = d3.select(this)
      workflow = appendWorkflow(workflow, d)

      if (d.step === 1 && d.eta < d['started-at']) {
        prependEtaLine(workflow, d)
      }

      if (i > 0 && d['started-at'] !== null && prevData['ended-at'] !== null) {
        appendLineBetweenPorts(workflow, d, prevData)
      }

      prevData = d
    })

  var vehicleIconsG = deliveriesSelectAllG.append('g')
  // setup Vehicle Icons
  vehicleIconsG.append('image')
    .attr('xlink:href', function (i) {
      return 'img/' + i.vehicleType + '.png'
    })
    .attr('height', vehicleShapeH)
    .attr('width', vehicleShapeH)
    .attr('x', -1 * (vehicleShapeH / 2))
    .attr('y', -1 * (vehicleShapeH / 2))
    .attr('class', 'truckIconDiamond')
    .attr('transform', function (d) {return 'translate(' + xScale(_now) + ',' + 0 + ')'})
    .on('click', function (delivery) {
      displayDetail(delivery)
    })

  var communicationSelectAll = deliveriesSelectAllG.selectAll('.communicationLine').data(function (d) {
    if (d.key in eventsReqAndRespByDeliveryAPIData) { // no events for a delivery
      return eventsReqAndRespByDeliveryAPIData[d.key].events
    } else {
      return []
    }
  })

  var communicationGroup = communicationSelectAll.enter().append('line')
  communicationGroup
    .each(function (d) {
      var eventItem = d3.select(this)
      if (d.endTimestamp !== null) {
        eventItem
          .attr('x1', function (d, i) {return xScale(d['timestamp']); })
          .attr('y1', 10)
          .attr('x2', function (d, i) {
            if (d['endTimestamp'] === null) {
              return xScale(_now)
            } else {
              return xScale(d['endTimestamp'])
            }
          })
          .attr('y2', 10)
          .attr('class', 'communicationLine')
          .style('stroke-dasharray', ('1, 1'))
      }
    })

  console.log('-------------render')
}

// RENDER HELPERS
function prependEtaLine (firstWorkflow, d) {
  console.log('prepending eta line')
  console.log(d)
  console.log(d['eta'])
  console.log(d['arrived-at'])

  firstWorkflow.append('line')
    .attr('x1', function (d, i) { return xScale(d['eta']); })
    .attr('y1', function (d, i) { return 0;})
    .attr('x2', function (d, i) { return xScale(d['arrived-at']); })
    .attr('y2', function (d, i) { return 0;})
    .attr('class', 'workflow late ghostline')

  firstWorkflow.append('svg:path')
    .attr('d', function (d) { return customShapes['lBook'](4);})
    .attr('class', 'bookEnd notReached ghost')
    .attr('transform', function (d) {
      return 'translate(' + xScale(d['eta']) + ',' + 0 + ')'
    })
}

function appendLineBetweenPorts (workflow, WFData, prevWFData) {
  workflow.append('line')
    .attr('x1', function (d, i) { return xScale(new Date(WFData['started-at'])) })
    .attr('y1', function (d, i) { return 0 })
    .attr('x2', function (d, i) { return xScale(prevWFData['ended-at']) })
    .attr('y2', function (d, i) { return 0 })
    .attr('class', 'workflow betweenPorts')
}

function appendWorkflow (workflow, d) {
  var startedAt = d['started-at']
  var endedAt = d['ended-at']

  var searchEnd = d['search-end']
  var nonsearchEnd = d['nonsearch-end']

  var nonsearchEPT = d['nonsearch-estimated-processing-time']
  var searchEPT = d['search-estimated-processing-time']
  var releaseEPT = d['release-estimated-processing-time']
  var EPT = d['estimated-processing-time']

  var oneMinute = 1000 * 60

  if (d.step === 1 || d.step === 3) { // Has Substeps--------------------------------------------------------------
    if (startedAt === null && endedAt === null) { // workflow hasnt started yet
      workflow.append('line') // nonsearch notreached
        .attr('x1', function (d, i) { return xScale(new Date(d.eta.getTime() + currentDeliveryDelayById[d.deliveryId] * 60000)) })
        .attr('y1', function (d, i) { return 0 })
        .attr('x2', function (d, i) { return xScale(new Date(d.eta).getTime() + nonsearchEPT * oneMinute - 60000 + currentDeliveryDelayById[d.deliveryId] * 60000) })
        .attr('y2', function (d, i) { return 0 })
        .attr('class', 'workflow notReached')

      workflow.append('line') // search notreached
        .attr('x1', function (d, i) {
          return xScale(new Date(d.eta).getTime() + nonsearchEPT * oneMinute + currentDeliveryDelayById[d.deliveryId] * 60000)
        })
        .attr('y1', function (d, i) { return 0 })
        .attr('x2', function (d, i) {
          return xScale(new Date(d.eta).getTime() + nonsearchEPT * oneMinute + searchEPT * oneMinute - 60000 + currentDeliveryDelayById[d.deliveryId] * 60000)
        })
        .attr('y2', function (d, i) { return 0 })
        .attr('class', 'workflow notReached')

      workflow.append('line') // release notreached
        .attr('x1', function (d, i) {
          return xScale(new Date(d.eta).getTime() + nonsearchEPT * oneMinute + searchEPT * oneMinute + currentDeliveryDelayById[d.deliveryId] * 60000)
        })
        .attr('x2', function (d, i) {
          return xScale(new Date(d.eta.getTime() + EPT * oneMinute - 60000 + currentDeliveryDelayById[d.deliveryId] * 60000))
        })
        .attr('y2', function (d, i) { return 0 })
        .attr('class', 'workflow notReached')
    } else if (startedAt !== null && endedAt === null) { // current workflow
      workflow = appendCurrentWorkflowWithSubsteps(workflow, d)
    } else if (startedAt !== null && endedAt !== null) { // completed workflow
      var substep1State = substepState(startedAt, nonsearchEnd, nonsearchEPT)
      var substep2State = substepState(nonsearchEnd, searchEnd, searchEPT)
      var substep3State = substepState(searchEnd, endedAt, releaseEPT)

      workflow.append('line') // substep 1
        .attr('x1', function (d, i) {
          return xScale(new Date(startedAt))
        })
        .attr('y1', function (d, i) { return 0 })
        .attr('x2', function (d, i) { return xScale(nonsearchEnd - 60000) })
        .attr('y2', function (d, i) { return 0 })
        .attr('class', function (d) {
          return utils.getSubstepState(substep1State)
        })

      workflow.append('line') // substep 2
        .attr('x1', function (d, i) { return xScale(nonsearchEnd) })
        .attr('y1', function (d, i) { return 0 })
        .attr('x2', function (d, i) { return xScale(searchEnd - 60000) })
        .attr('y2', function (d, i) { return 0 })
        .attr('class', function (d) {
          return utils.getSubstepState(substep2State)
        })

      workflow.append('line') // substep 3
        .attr('x1', function (d, i) { return xScale(searchEnd) })
        .attr('y1', function (d, i) { return 0 })
        .attr('x2', function (d, i) { return xScale(endedAt) })
        .attr('y2', function (d, i) { return 0 })
        .attr('class', function (d) {
          return utils.getSubstepState(substep3State)
        })

      workflow.append('svg:path')
        .attr('d', function (d) { return customShapes['lBook'](4);})
        .attr('class', function (d) {
          if (startedAt < _now) {
            return 'bookEnd notReached'
          }
        })
        .attr('transform', function (d) {
          return 'translate(' + xScale(new Date(startedAt)) + ',' + 0 + ')'
        })

      workflow.append('svg:path')
        .attr('d', function (d) { return customShapes['rBook'](4);})
        .attr('class', function (d) {
          if (endedAt < _now) {
            return 'bookEnd notReached'
          }
        })
        .attr('transform', function (d) {
          return 'translate(' + xScale(endedAt) + ',' + 0 + ')'
        })
    }
  } else { // Does not have substeps -------------------------------------------------------------------------
    console.log('黄河长江第二步')
    console.log(startedAt)
    console.log(endedAt)
    if (startedAt !== null && endedAt !== null) { // completed workflow
      workflow.append('line')
        .attr('x1', function (d, i) { return xScale(new Date(startedAt)) })
        .attr('y1', function (d, i) { return 0 })
        .attr('x2', function (d, i) { return xScale(endedAt) })
        .attr('y2', function (d, i) { return 0 })
        .attr('class', function (d) {
          if (d.state === 'late') {
            return 'workflow late'
          }else if (d.state === 'early') {
            return 'workflow ahead'
          }else {
            return 'workflow'
          }
        })

      workflow.append('svg:path')
        .attr('d', function (d) { return customShapes['lBook'](4);})
        .attr('class', function (d) {
          if (startedAt < _now) {
            return 'bookEnd notReached'
          }
        })
        .attr('transform', function (d) {
          return 'translate(' + xScale(startedAt) + ',' + 0 + ')'
        })

      workflow.append('svg:path')
        .attr('d', function (d) { return customShapes['rBook'](4);})
        .attr('class', function (d) {
          if (endedAt < _now) {
            return 'bookEnd notReached'
          }
        })
        .attr('transform', function (d) {
          return 'translate(' + xScale(endedAt) + ',' + 0 + ')'
        })
    } else if (startedAt !== null && endedAt === null) { // current workflow
      console.log('黄河 2')
      // leftside of now
      workflow.append('line')
        .attr('x1', function (d, i) {
          return xScale(new Date(startedAt))
        })
        .attr('y1', function (d, i) { return 0 })
        .attr('x2', function (d, i) { return xScale(_now)  })
        .attr('y2', function (d, i) { return 0 })
        .attr('class', function (d) {
          console.log('决定 workflow 是不是 late')
          console.log(d)
          if (d.state === 'late') {
            return 'workflow late'
          } else if (d.state === 'early') {
            return 'workflow ahead'
          } else {
            return 'workflow'
          }
        })

      workflow.append('svg:path')
        .attr('d', function (d) { return customShapes['lBook'](4);})
        .attr('class', function (d) {
          if (startedAt < _now) {
            return 'bookEnd notReached'
          }
        })
        .attr('transform', function (d) {
          return 'translate(' + xScale(new Date(startedAt)) + ',' + 0 + ')'
        })

      // on right side of now
      workflow.append('line')
        .attr('x1', function (d, i) { return xScale(_now) })
        .attr('y1', function (d, i) { return 0 })
        .attr('x2', function (d, i) { return xScale(new Date(new Date(startedAt)).getTime() + EPT * oneMinute - 60000)})
        .attr('y2', function (d, i) { return .001 }) // IMPORTANT  if its flat its not displayed
        .style('stroke-dasharray', ('2, 2'))
        .style('stroke-width', 4)
        .attr('class', function (d) {
          if (d.state === 'late') {
            return 'workflow lateGradient'
          }else if (d.state === 'early') {
            return 'workflow aheadGradient'
          }else {
            return 'workflow onTimeGradient'
          }
        })
    } else if (startedAt === null && endedAt === null) { // workflow hasnt started yet
      console.log('黄河 3')
      workflow.append('line')
        .attr('x1', function (d, i) { return xScale(new Date(d.eta.getTime() + currentDeliveryDelayById[d.deliveryId] * 60000)); })
        .attr('y1', function (d, i) { return 0;})
        .attr('x2', function (d, i) { return xScale(new Date(d.eta).getTime() + EPT * oneMinute - 60000 + currentDeliveryDelayById[d.deliveryId] * 60000); }) // remove a minute so a gap appears
        .attr('y2', function (d, i) { return 0;})
        .attr('class', 'workflow notReached')
    }
  }

  return workflow
}

function appendCurrentWorkflowWithSubsteps (currentWorkflow, d) {
  var arrivedAt = d['started-at']
  var nonsearchEnd = d['nonsearch-end']
  var searchEnd = d['search-end']
  var endedAt = d['ended-at']
  var nonsearchEPT = d['nonsearch-estimated-processing-time'] || 15
  var searchEPT = d['search-estimated-processing-time'] || 15
  var releaseEPT = d['release-estimated-processing-time'] || 15
  var EPT = d['estimated-processing-time']
  var oneMinute = 1000 * 60

  // leftside of now
  var currentSubStep
  if (nonsearchEnd === null) {
    currentSubStep = 1
  } else if (searchEnd === null) {
    currentSubStep = 2
  } else {
    currentSubStep = 3
  }

  if (currentSubStep === 1) {
    // console.log(currentWorkflow.key)
    // debugger
    // var substep1State = substepState(arrivedAt,nonsearchEnd,nonsearchEPT)
    // var substep2State = substepState(nonsearchEnd,searchEnd,searchEPT)
    // var substep3State = substepState(searchEnd,endedAt,releaseEPT)
    // leftside of now
    currentWorkflow.append('line')
      .attr('x1', function (d, i) { return xScale(new Date(arrivedAt)) })
      .attr('y1', function (d, i) { return 0 })
      .attr('x2', function (d, i) { return xScale(_now) })
      .attr('y2', function (d, i) { return 0 })
      .attr('class', function (d) { return 'workflow' })

    // on right side of now
    currentWorkflow.append('line')
      .attr('x1', function (d, i) { return xScale(_now); })
      .attr('y1', function (d, i) { return 0;})
      .attr('x2', function (d, i) { return xScale(new Date(new Date(arrivedAt)).getTime() + nonsearchEPT * oneMinute)})
      .attr('y2', function (d, i) { return .001;}) // IMPORTANT  if its flat its not displayed
      .style('stroke-dasharray', ('2, 2'))
      .style('stroke-width', 4)
      .attr('class', function (d) {
        if (d.state === 'late') {
          return 'workflow lateGradient'
        } else if (d.state === 'early') {
          return 'workflow aheadGradient'
        } else {
          return 'workflow onTimeGradient'
        }
      })

    currentWorkflow.append('line') // search notreached
      .attr('x1', function (d, i) { return xScale(new Date(d.eta).getTime() + nonsearchEPT * oneMinute - 60000); })
      .attr('y1', function (d, i) { return 0;})
      .attr('x2', function (d, i) { return xScale(new Date(d.eta).getTime() +
          nonsearchEPT * oneMinute +
          searchEPT * oneMinute -
          60000); })
      .attr('y2', function (d, i) { return 0;})
      .attr('class', 'workflow notReached')

    currentWorkflow.append('line') // release notreached
      .attr('x1', function (d, i) { return xScale(new Date(d.eta).getTime() +
          nonsearchEPT * oneMinute +
          searchEPT * oneMinute -
          60000); })
      .attr('x2', function (d, i) { return xScale(new Date(d.eta).getTime() + EPT * oneMinute - 60000); }) // remove a minute so a gap appears
      .attr('y2', function (d, i) { return 0;})
      .attr('class', 'workflow notReached')
  } else if (currentSubStep === 2) {
    var substep1State = substepState(arrivedAt, nonsearchEnd, nonsearchEPT)
    currentWorkflow.append('line') // substep 1 complted
      .attr('x1', function (d, i) { return xScale(arrivedAt); })
      .attr('y1', function (d, i) { return 0;})
      .attr('x2', function (d, i) { return xScale(nonsearchEnd - 60000); })
      .attr('y2', function (d, i) { return 0;})
      .attr('class', function (d) {
        if (substep1State === 1) {return 'workflow late';}
        else if (substep1State === -1) {return 'workflow ahead';}else {return 'workflow';}
      })

    currentWorkflow.append('line') // part of substep 2 (that was is being completed)
      .attr('x1', function (d, i) { return xScale(nonsearchEnd); })
      .attr('y1', function (d, i) { return 0;})
      .attr('x2', function (d, i) { return xScale(_now); })
      .attr('y2', function (d, i) { return 0;})
      .attr('class', function (d) {
        return 'workflow'
      })

    // on right side of now
    currentWorkflow.append('line') // future end of substep 2
      .attr('x1', function (d, i) { return xScale(_now); })
      .attr('y1', function (d, i) { return 0;})
      .attr('x2', function (d, i) { return xScale(new Date(new Date(arrivedAt)).getTime() + nonsearchEPT * oneMinute + searchEPT * oneMinute)})
      .attr('y2', function (d, i) { return .001;}) // IMPORTANT  if its flat its not displayed
      .style('stroke-dasharray', ('2, 2'))
      .style('stroke-width', 4)
      .attr('class', function (d) {
        if (d.state === 'late') {
          return 'workflow lateGradient'
        } else if (d.state === 'early') {
          return 'workflow aheadGradient'
        } else {
          return 'workflow onTimeGradient'
        }
      })

    currentWorkflow.append('line') // release notreached
      .attr('x1', function (d, i) { return xScale(new Date(d.eta).getTime() +
          nonsearchEPT * oneMinute +
          searchEPT * oneMinute -
          60000); })
      .attr('x2', function (d, i) { return xScale(new Date(d.eta).getTime() + EPT * oneMinute - 60000); }) // remove a minute so a gap appears
      .attr('y2', function (d, i) { return 0;})
      .attr('class', 'workflow notReached')
  } else if (currentSubStep === 3) {
    var substep1State = substepState(arrivedAt, nonsearchEnd, nonsearchEPT)
    var substep2State = substepState(nonsearchEnd, searchEnd, searchEPT)
    currentWorkflow.append('line') // substep 1
      .attr('x1', function (d, i) { return xScale(arrivedAt); })
      .attr('y1', function (d, i) { return 0;})
      .attr('x2', function (d, i) { return xScale(nonsearchEnd - 60000); })
      .attr('y2', function (d, i) { return 0;})
      .attr('class', function (d) {
        if (substep1State === 1) {return 'workflow late';}
        else if (substep1State === -1) {return 'workflow ahead';}else {return 'workflow';}
      })

    currentWorkflow.append('line') // substep 2
      .attr('x1', function (d, i) { return xScale(nonsearchEnd); })
      .attr('y1', function (d, i) { return 0;})
      .attr('x2', function (d, i) { return xScale(searchEnd - 60000); })
      .attr('y2', function (d, i) { return 0;})
      .attr('class', function (d) {
        if (substep2State === 1) {return 'workflow late';}
        else if (substep2State === -1) {return 'workflow ahead';}else {return 'workflow';}
      })

    currentWorkflow.append('line') // part of step 3 done
      .attr('x1', function (d, i) { return xScale(searchEnd); })
      .attr('y1', function (d, i) { return 0;})
      .attr('x2', function (d, i) { return xScale(_now); })
      .attr('y2', function (d, i) { return 0;})
      .attr('class', function (d) {
        return 'workflow'
      })

    // on right side of now
    currentWorkflow.append('line')
      .attr('x1', function (d, i) { return xScale(_now); })
      .attr('y1', function (d, i) { return 0;})
      .attr('x2', function (d, i) { return xScale(new Date(new Date(arrivedAt)).getTime() + EPT * oneMinute)})
      .attr('y2', function (d, i) { return .001;}) // IMPORTANT  if its flat its not displayed
      .style('stroke-dasharray', ('2, 2'))
      .style('stroke-width', 4)
      .attr('class', function (d) {
        if (d.state === 'late') {
          return 'workflow lateGradient'
        }else if (d.state === 'early') {
          return 'workflow aheadGradient'
        }else {
          return 'workflow onTimeGradient'
        }
      })
  }

  currentWorkflow.append('svg:path') // LEFT BOOKEND IS AT BOTTOM SO IT DISPLAYS ON TOP
    .attr('d', function (d) {
      return customShapes['lBook'](4)
    })
    .attr('class', function (d) {
      if (arrivedAt < _now) {
        return 'bookEnd notReached'
      }
    })
    .attr('transform', function (d) {
      return 'translate(' + xScale(new Date(arrivedAt)) + ',' + 0 + ')'
    })

  return currentWorkflow
}

function substepState (stepStartTime, stepEndtime, estimatedTimeInMinutes) { // if its late 1, on time 0, early -1
  var difference = (stepEndtime - stepStartTime)
  var estimatedTimeInMS = estimatedTimeInMinutes * 60 * 1000

  if (difference > estimatedTimeInMS * (1 + aheadOrBehindPct)) {return 1;}
  else if (difference < estimatedTimeInMS * (1 - aheadOrBehindPct)) {return -1;}else {return 0;}
}

function filterWorkflowsByHasStatus (includedObj) {
  if (includedObj.status == 'denied') {
    return true
  } else {
    return false
  }
}

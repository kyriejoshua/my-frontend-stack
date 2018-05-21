import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import * as echarts from 'echarts'
import { data } from './data'

const option = {
  tooltip: {
    trigger: 'item',
    triggerOn: 'mousemove'
  },
   series: [{
     type: 'tree',
     data: [data],
     layout: 'radial',
     symbol: 'emptyCircle',
     symbolSize: 7,
     initialTreeDepth: 3
   }]
}
class Stack extends Component {
  componentDidMount() {
    let stack = echarts.init(this.chart)
    stack.setOption(option)
  }
  render() {
    const style = {
      width: '100%',
      height: '100%'
    }
    return <div style={style} ref={el => this.chart = el}></div>
  }
}

const app = document.querySelector('#app')
ReactDOM.render(<Stack/>, app)

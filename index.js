import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

class Stack extends Component {
  render() {
    return <div>{this.props.chart}</div>
  }
}

const app = document.querySelector('#app')
ReactDOM.render(<Stack chart='TODO……'/>, app)

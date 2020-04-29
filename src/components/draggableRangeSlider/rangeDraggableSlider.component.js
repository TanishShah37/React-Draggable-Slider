import React, { Component } from 'react'
import './rangeDraggableSlider.component.scss'

class Range extends Component {
  constructor (props) {
    super(props)
    this.updateRange = this.updateRange.bind(this)
  }

  updateRange (e) {
    this.props.updateRange(e.target.value)
  }

  render () {
    // console.log(this.props);
    const { range, min, max, step, isDisabled } = this.props
    return (
      <div>
        <input
          id='range'
          type='range'
          value={range}
          min={min}
          max={max}
          step={step}
          ref={ref => this.Range = ref}
          disabled={isDisabled}
          onChange={this.updateRange}
        />{' '}
        <span id='output'> {range} </span>{' '}
      </div>
    )
  }
}

export default class RangeSliderComponent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rangeVal: 0
    }
    this.updateRange = this.updateRange.bind(this)
  }

  updateRange (val) {
    // this.Range.style.width = this.val + 'px'
    this.setState({
      rangeVal: val
    })
  }

  render () {
    const { rangeVal } = this.state
    const { range, min, max, step, isDisabled } = this.props
    console.log(this.props)
    return (
      <Range
        range={rangeVal}
        step={step}
        min={min}
        max={max}
      
        isDisabled={isDisabled}
        updateRange={this.updateRange}
      />
    )
  }
}

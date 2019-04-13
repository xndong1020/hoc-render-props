import React, { Component } from 'react'

export class CounterComponent extends Component {
  state = {
    counter: 0
  }

  handleIncrement = () => {
    this.setState(prev => {
      return {
        counter: prev.counter + 1
      }
    })
  }

  render() {
    return (
      <div>{this.props.render(this.state.counter, this.handleIncrement)}</div>
    )
  }
}

export default CounterComponent

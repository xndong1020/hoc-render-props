import React from 'react'

const withCounter = WrappedComponent => {
  class WithCounter extends React.Component {
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
      const { counter } = this.state
      return (
        <WrappedComponent
          counter={counter}
          handleIncrement={this.handleIncrement}
          {...this.props}
        />
      )
    }
  }

  return WithCounter
}

export default withCounter

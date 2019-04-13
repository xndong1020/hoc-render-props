import React from 'react'
import withCounter from './hoc/withCounter'

const ClickCounter = ({ counter, handleIncrement }) => {
  return (
    <div>
      <button onClick={handleIncrement}>Clicked {counter} times</button>
    </div>
  )
}

export default withCounter(ClickCounter)

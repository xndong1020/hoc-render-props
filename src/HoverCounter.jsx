import React from 'react'
import withCounter from './hoc/withCounter'

const HoverCounter = ({ counter, handleIncrement }) => {
  return <div onMouseOver={handleIncrement}>Hovered {counter} times</div>
}

export default withCounter(HoverCounter)

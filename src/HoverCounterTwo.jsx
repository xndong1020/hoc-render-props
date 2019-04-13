import React from 'react'

const HoverCounterTwo = ({ counter, handleIncrement }) => {
  console.log('HoverCounterTwo rendered')
  return <div onMouseOver={handleIncrement}>Hovered {counter} times</div>
}

export default HoverCounterTwo

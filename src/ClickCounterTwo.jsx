import React from 'react'

const ClickCounterTwo = ({ counter, handleIncrement }) => {
  console.log('ClickCounterTwo rendered')
  return (
    <div>
      <button onClick={handleIncrement}>Clicked {counter} times</button>
    </div>
  )
}

export default ClickCounterTwo

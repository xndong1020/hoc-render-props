import React, { Component } from 'react'
import ClickCounter from './ClickCounter'
import HoverCounter from './HoverCounter'
import User from './User'
import CounterComponent from './CounterComponent'
import ClickCounterTwo from './ClickCounterTwo'
import HoverCounterTwo from './HoverCounterTwo'

import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ClickCounter />
        <HoverCounter />
        {/* <User
          render={isLoggedIn =>
            isLoggedIn ? <h2>Jeremy Gu</h2> : <h2>Guess</h2>
          }
        /> */}
        <hr/>
        <CounterComponent
          render={(counter, handleIncrement) => (
            <ClickCounterTwo
              counter={counter}
              handleIncrement={handleIncrement}
            />
          )}
        />
         <CounterComponent
          render={(counter, handleIncrement) => (
            <HoverCounterTwo
              counter={counter}
              handleIncrement={handleIncrement}
            />
          )}
        />
      </div>
    )
  }
}

export default App

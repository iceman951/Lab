import React, { Component } from 'react'
import WordCard from './WordCard'
import Restart from './Restart'

import './App.css'

class App extends Component {
  render() {
    return (
        <div>
          <h1>Let's Play Game Card</h1>
          <WordCard value= 'hello'/>
          <Restart/>
        </div>
    );
  }
}

export default App
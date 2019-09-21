import React, { Component } from 'react'
import WordCard from './WordCard'

import './App.css'

class App extends Component {
  render() {
    return (
        <div>
          <h1>Let's Play Shuffle Card Game</h1>
          <WordCard value= 'hello'/>
        </div>
    );
  }
}

export default App
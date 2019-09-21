import React, { Component } from 'react';
import WordCard from './WordCard';

import './App.css';

const word = "Hello";
class App extends Component {
  render() {
    return (
        <div>
          <h1>Let's Play Game Card</h1>
          <WordCard value="hello"/>
        </div>
    );
  }
}

export default App;
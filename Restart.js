import React, { Component } from 'react'

export default class Restart extends Component {

    handleClick = () => {
        window.location.reload();
    }
  
    render() {
      return (
        <button onClick={ (e) => this.handleClick(e)}>
            Click for Restart
        </button>
      );
    }
  }
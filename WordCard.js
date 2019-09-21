import React, { Component } from 'react'
import CharacterCard from './CharacterCard'

import _ from 'lodash'

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
        word,
        chars,
        attempt: 1,
        guess: [],
        completed: false
    }
}

export default class WordCard extends Component {
    constructor(props){
        super(props)
        this.state = prepareStateFromWord(this.props.value)
    }
    
    activationHandler = (c) => { 
        console.log(`${c} has been activated.`) 
        let guess = [...this.state.guess, c]
        this.setState({guess})
        if(guess.length == this.state.chars.length){
            if(guess.join('').toString() == this.state.word){
                this.setState({guess: [], completed: true})
            }
            else{
                this.setState({guess: [], attempt: this.state.attempt + 1})
            }
        }
        console.log(`countGuess/wordLenght : ${guess.length}/${this.state.word.length}`)
    }

    restartClick = () => {
        //window.location.reload();
        this.setState({guess: [], attempt: this.state.attempt + 1, completed: false})
    }

    render() {
        return (
            <div className = "Array">
                { Array.from(this.state.chars).map((c, i) => <CharacterCard value={c} key={i} attempt= {this.state.attempt} activationHandler={this.activationHandler}></CharacterCard>) }
                <p>Typing: {this.state.guess}</p>
                <p>{this.state.completed? 'status: Good!' : 'status: Click Character'}</p>
                <button onClick={ (e) => this.restartClick(e)}>
                        Click for Restart
                </button>
            </div>

        )
    }
}


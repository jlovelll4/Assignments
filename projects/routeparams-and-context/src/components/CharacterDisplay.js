import React, { Component } from 'react'
import { withCharacters} from '../context/CharacterProvider.js'

class CharacterDisplay extends Component {
    constructor(){
        super()
        this.state = {
            currentChar: {
                name: "",
                image: ""
            }
        }
    }
    
    componentDidMount(){
        // On componentDidMount (page refresh), this.props.characters is empty
        // So i have this here to only use it if it exists to avoid crashing
        if(this.props.characters.length){
            const currentChar = this.props.characters.find(char => char.name === this.props.match.params.charactername)
            this.setState({ currentChar })
        }
    }

    componentDidUpdate(prevProps){
        // Every update after componentDidMount will fire componentDidUpdate
        // In here we must check if props or state have changed comparing prevProps
        // to this.props, and if so trigger a state update by getting the new character
         if(this.props.match.params.charactername !== prevProps.match.params.charactername){
            const currentChar = this.props.characters.find(char => char.name === this.props.match.params.charactername)
            this.setState({ currentChar })
         }
    }

    render(){
        return(
            <div className="character-display">
                <h1>{this.state.currentChar.name}</h1>
                <img src={this.state.currentChar.image} width={300} height={300}/>
            </div>
        )
    }
}

export default withCharacters(CharacterDisplay)
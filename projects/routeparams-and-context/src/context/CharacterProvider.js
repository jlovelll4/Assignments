import React, { Component } from 'react'
import axios from 'axios'

// Provider and Consumer
export const CharacterContext = React.createContext()

class CharacterProvider extends Component {
    constructor(){
        super()
        this.state = {
            characters: []
        }
    }

    // Called in App.js on ComponentDidMount
    getCharacters = () => {
        axios.get("https://rickandmortyapi.com/api/character").then(response => {
                this.setState({
                    characters: response.data.results
                })
            })
            .catch(err => console.log(err))
        }

    render(){
        return (
           <CharacterContext.Provider
                value={{ 
                    characters: this.state.characters,
                    getCharacters: this.getCharacters
                }}>
               { this.props.children }
           </CharacterContext.Provider>
        )
    }
}

export default CharacterProvider

// Give me your component
// I will return your component with my values added to it's props
export const withCharacters = C => props => (
    <CharacterContext.Consumer>
         {value => <C {...value} {...props}/>}
    </CharacterContext.Consumer>
)
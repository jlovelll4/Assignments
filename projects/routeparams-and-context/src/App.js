import React, { Component } from 'react'
import {withCharacters} from './context/CharacterProvider.js'
import { Switch, Route} from 'react-router-dom'
import CharacterList from './components/CharacterList.js'

// "https://rickandmortyapi.com/api/character"  => response.data.results

class App extends Component {
    componentDidMount(){
        this.props.getCharacters()
    }
    
    render(){
        const mappedCharacters =  this.props.characters.map(char => 
                    <div style={{backgroundImage: `url(${char.image})`, width: 200, height: 200, backgroundSize: 'cover'}}>
                        <h1>{char.name}</h1>
                    </div>
        )
        return (
            <div>
                <Switch>
                    <Route 
                        path="/characters" 
                        render={routerProps => 
                            <CharacterList 
                                mappedCharacters={mappedCharacters} 
                                characters={this.props.characters}
                                {...routerProps}/>
                    }/>
                </Switch>
            </div>
        )  
    }
}

export default withCharacters(App)

import React, { Component } from 'react'
import { Route, Link, withRouter} from 'react-router-dom'
import CharacterDisplay from './CharacterDisplay.js'

class CharacterList extends Component {
    render(){
        // Map the links with the characters name added to the end of the Link url path.
        const mappedLinks = this.props.characters.map(char => {
            return ( <Link to={`/characters/${char.name}`}>{char.name}</Link>)
        })
        return (
            <div className="character-list-container">

                {/* 
                    Sidebar of links that have a link to a specfic character name which
                    loads the Route at the bottom of this file.
                */}
                <div className="links-container" >

                    {mappedLinks}
                </div>

                {/* 
                    By putting this route outside of the switch, we've made it so
                    it loads always on this CharacterList Component.
                    The `path` must start with /characters since the CharacterList
                    component loads on the path="/characters"

                    The :charactername is a parameter, just like a function parameter,
                    it just stands for the actual name (argument) that is sent in 
                    when one of the <Link> components are clicked.
                */}

                <Route path="/characters/:charactername" component={CharacterDisplay}/>
            </div>
        )
    }
}

export default CharacterList




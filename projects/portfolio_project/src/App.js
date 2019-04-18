import React, { Component } from 'react'
import Navbar from './containers/Navbar'
import { Router, Route, Link} from 'react-router-dom'
import Home from "./containers/Home"
import About from "./containers/About"
import Contact from "./containers/Contact"
import Projects from "./containers/Projects"

class App extends Component {
    constructor(){
        super()
        this.state = {
            navToggle: false
        }
    }

    navToggler = () => {
        this.setState(prevState => ({
            navToggle: !prevState.navToggle
        }))
    }

    render(){
        return (
            <section>
            <div className="app-container">
                <div
                onClick={this.navToggler}
                className={`overlay overlay-${this.state.navToggle ? "open" : "closed"}`}/>
                <button onClick={this.navToggler}>|||</button>
                <Navbar navToggler={this.navToggler} navToggle={this.state.navToggle}/>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/projects" component={Projects}/>
            </div>
            </section>
        )
    }
}

export default App
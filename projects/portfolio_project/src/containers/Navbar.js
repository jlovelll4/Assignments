import React from 'react'
import { Router, Route, Link} from 'react-router-dom'

const Navbar = props => {
    return (
        <div 
            onClick={props.navToggler}
            className={`nav nav-${props.navToggle ? "open" : "closed"}`}>
            <Link to={`/home`}>Home</Link>
            <Link to={`/about`}>About</Link>
            <Link to={`/contact`}>Contact</Link>
            <Link to={`/projects`}>Projects</Link>
        </div>
    )
}

export default Navbar
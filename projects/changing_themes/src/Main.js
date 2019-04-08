import React from 'react';
import {withTheme} from './ThemeProvider'

const Main = ({theme, toggleTheme}) => (
    <div className={`${theme}-header`}>
        <h1>Main Section </h1>
        <button onClick={toggleTheme}>{theme === "dark" ? "Switch to Light" : "Switch to Dark"}</button>
    </div>
)

export default withTheme(Main)



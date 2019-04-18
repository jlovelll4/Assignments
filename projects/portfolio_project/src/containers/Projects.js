import React from 'react'

function Projects(props) {
    const styles = {
        h3: {
            fontFamily: "Roboto, sans-serif",
            fontSize: "30px",
            color: "dark"
        }
    }
    return (
        <header>
            <h3 style={styles.h3}>Projects</h3>
            <div className="div--divider"/>
        </header>
    )
}

export default Projects
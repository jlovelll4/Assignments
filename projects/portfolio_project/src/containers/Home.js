import React from 'react'
import Projects from "./Projects"
import Route from "react-router-dom/es/Route"

function Home() {
    const styles = {
        h2: {
            fontFamily: "Roboto, sans-serif",
            fontSize: "30px",
            color: "olive"
        },
        h4: {
            fontFamily: "Roboto, sans-serif",
            fontSize: "40px"
        }
    }

    function handleClick(){
        return(        <Route path="/projects" component={Projects}/>
        )
    }
    return (
        <header className="header">
            <h2 style={styles.h2}>Hello.</h2>
            <h2 style={styles.h2}>I am </h2>
            <h2 style={styles.h4}>James</h2>
            <h4 style={styles.h4}>Lovell.</h4>
            <h2 style={styles.h2}>I am a full-stack web developer.</h2>
            <div onClick={()=>handleClick} className="page-link">
                <button className="button" >View my work &rarr;</button>
            </div>
        </header>
    )
}

export default Home
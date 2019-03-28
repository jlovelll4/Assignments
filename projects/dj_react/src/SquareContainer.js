import React, { Component } from "react"
import Square from "./Square";

class SquareContainer extends Component{
    constructor(){
        super()
        this.state = {
            colors: [
            "white",
            "blue",
            "red",
            "green"
         ]
        };
    };

    render() {
        const styles = {
            // gridArea: "container",
            border: "solid 1px black",
            display: "grid",
            gridTemplateColumns:
            "50% 50%",
            gridTemplateRows:
            "200px 200px",
            gridTemplateAreas:
            `
            "square0 square1" 
            "square2 square3" 
            `
            
        };
        const mappedColors = this.state.colors.map((color, i) =>{
            return <Square index={i} color = {color}/>
        });
        return(
            <div style = {styles}>
                {mappedColors}
            </div>
        )
    };
};

export default SquareContainer
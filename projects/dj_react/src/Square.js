import React from "react"

const Square = (props) =>{
    const styles = {
        border: "solid 1px black",
        backgroundColor: props.color,
        gridArea: "square" + props.index
    }

    return (
        <div style = {styles}>
            <div>blah</div>
        </div>
    )
}

export default Square
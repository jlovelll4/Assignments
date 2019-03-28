import React from "react"

const Card = (props)=>{
    const styles = {
        div:{
            border:"Solid black 1px",
            display:"flex",
            flexDirection:"column",
            padding: "10px",
            backgroundColor: props.bgColor,
            justifyContent: "center",
            alignItems: "center"
        },
        h1:{
            color: "black"
        },
        p:{
            color: "black",
            fontSize: "20px"
        },
        p1:{
            color: "black",
            fontSize: "25px",
            font: "bold"
        },
        p3:{
            color: "green",
            fontSize: "25px",
            font: "bold"
        }
    }
    return (
        <div style = {styles.div}>
            <h1 style = {styles.h1}>Vacation Spot: {props.place}</h1>
            <p style = {styles.p1}>Best Time To Go: {props.time}</p>
            <p style = {styles.p}>Price: ${props.price}</p>
            <p style = {styles.p3}><b>{props.dollar}</b></p>
        </div>
    )
}
export default Card
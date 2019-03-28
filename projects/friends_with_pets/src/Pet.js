import Friend from "./Friend"
import React from "react"
import FriendList from "./FriendList"

const Pet = (props)=>{
    const styles = {
        div: {
            border: "solid black 1px",
            padding: "2px"
        },
        h1: {
        }
    }
    
    return (
        <div style = {styles.div}>
            <p><b><u>Pet</u></b></p>
            <p><b>Pet Name:</b> {props.name}</p>
            <p><b>Pet Breed:</b> {props.breed}</p>
        </div>
    )
}
export default Pet
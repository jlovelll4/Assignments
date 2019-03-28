import React from "react"
import FriendList from "./FriendList"
import Pet from "./Pet"

const Friend = (props)=>{
    const styles = {
        div: {
            border: "solid black 1px",
            padding: "2px"
        },
        h1: {
        }
    }
    const mappedPets = props.pets.map(pet=>{
        return <Pet name = {pet.name}
                    breed = {pet.breed}
        />
    })

    return (
        <div style = {styles.div}>
            <p><b>Friend Name:</b> {props.name}</p>
            <p><b>Friend Age:</b> {props.age}</p>
            <p>{mappedPets}</p>
        </div>
    )
}
export default Friend
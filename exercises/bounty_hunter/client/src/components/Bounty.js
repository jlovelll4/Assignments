import React from 'react'

const Bounty = props => {
    const { firstname, lastname,  alignswith, living, _id } = props

    let allianceColor
    props.alignswith === "jedi" ? allianceColor = "blue" : allianceColor = "red"


    return (
        <div style={{ border: '1px solid black', backgroundColor: allianceColor}}>
            <h3>{firstname[0].toUpperCase() + firstname.slice(1) + " " + lastname[0].toUpperCase() + lastname.slice(1)} </h3>
            <p>Alliance: {alignswith[0].toUpperCase() + alignswith.slice(1)}</p>
            <p>Still Breathing?: {living.toString()}</p>
        </div>
    )
}

export default Bounty
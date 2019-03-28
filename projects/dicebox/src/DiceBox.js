import React, { Component } from 'react';

class DiceBox extends Component {

    constructor(){
        super()
        this.state ={
            one: 1,
            two: 2,
            three: 3,
            four: 4,
            five: 5
        }
    }

    roll = () => {
        this.setState((ps) =>{
            let newState = {...ps}
            for (let key in newState){
                newState[key] = Math.floor(Math.random() * 6 + 1)
            }
            return newState
        })
    }







    render() {
        return(
            <div>
                <span>number one: {this.state.one}</span>
                <span>number two: {this.state.two}</span>
                <span>number three: {this.state.three}</span>
                <span>number four: {this.state.four}</span>
                <span>number five: {this.state.five}</span>
            </div>
        )
    }
}

export default DiceBox

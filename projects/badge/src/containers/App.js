import React, { Component } from 'react';
import Form from './Form.js';
import Badge from './Badge.js';

class App extends Component {
    constructor() {
        super();

        this.state = {
            fName: '',
            lName: '',
            email: '',
            birth: '',
            phone: '',
            food: '',
            comment: '',
            badges: []
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    checkLength = () => {
        return (
            this.state.fName.length > 2 &&
            this.state.lName.length > 2 &&
            this.state.email.length > 2 &&
            this.state.birth.length > 2 &&
            this.state.phone.length > 2 &&
            this.state.food.length > 2 &&
            this.state.comment.length > 2
        )
    }


    checkPhone = () => {
        let sat = false
        for(let i = 0; i < this.state.phone.length; i++) {
            if(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(this.state.phone.charAt(i))) {
                sat = true
            } else {
                sat = false
                break
            }
        }
        return sat
    }

    handleSubmit = (e, data) => {
        e.preventDefault()
        if(!this.checkLength()) {
            alert("One of your entries is too short")
        } else if (!this.checkPhone()) {
            alert("Your phone number should only include digits")
        } else {
            this.setState(ps => {return {badges: [data, ...ps.badges]}})
            this.setState({
                fName: '',
                lName: '',
                email: '',
                birth: '',
                phone: '',
                food: '',
                comment: ''
            })
        }
        // e.target.reset()
    }

    render() {
        const mappedBadges = this.state.badges.map(badge=>{
            return <Badge {...badge}/>
        })

        const styles = {
            display: "flex",
            flexDirection: "column",
            alignContent: "space-around",
            backgroundColor: "bisque",
        }

        return (
            <div style={styles}>
                <Form
                    handleSubmit = {this.handleSubmit}
                    handleChange = {this.handleChange}
                    {...this.state}
                />
                {/* <Badge {...this.state} /> */}
                {/* fName={this.state.fName} lName email birth phone food comment */}
                {mappedBadges}
            </div>
        );
    }
}

export default App;
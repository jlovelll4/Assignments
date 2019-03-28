import React, { Component } from 'react';

class Form extends Component {
    constructor(){
        super()
        this.state = {
            firstName: "",
            age: "",
            names: []
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState((prevState)=>{
            return {
                firstName: "",
                age: "",
                names: [prevState.firstName, ...prevState.names]
            }
        })
    }

    // function that will run when that input changes
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        const styles = {
            padding: '20px',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 15fr',
            gridGap: '33px',
        }

        const names = this.state.names.map((name)=>{
            return <h1>{name}</h1>
        })

        return (
            <div>
                <h1>Enter your first name</h1>
                <form onSubmit={this.onSubmit} style={styles}>

                    first name
                    <input name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                    age
                    <input name="age" value={this.state.age} onChange={this.handleChange} />

                    <button>click me</button>
                </form>
                {names}
            </div>
        );
    }
}

export default Form;
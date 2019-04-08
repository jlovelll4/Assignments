import React from 'react';

export default function Form(props) {
    const styles = {
        form: {
            display: "grid",
            alignItems: "space-around",
            backgroundColor: "grey",
            height: "400px",
            borderStyle: "ridge",
            borderRadius: "60"

        },
        input: {
            marginLeft: "130px",
            marginTop: "30px",
            width: "200px"
        },
        textarea: {
            marginLeft: "150px",
            marginRight: "150px",
            marginBottom: "30px",
            width: "500px"
        },
        button: {
            height: "20px",
            width: "50px",
            alignSelf: "center",
            marginLeft: "380px"
        }
    }

    return (
        <form name="inputs" style={styles.form} onSubmit = {(e) => {props.handleSubmit(e, props)}}>
            <div>
                <input type="text" style={styles.input} value={ props.fName } name="fName" onChange={props.handleChange} placeholder="First Name"></input>
                <input style={styles.input} value={ props.lName } name="lName" onChange={props.handleChange} placeholder="Last Name"></input>
            </div>
            <div>
                <input type="email" style={styles.input} value={ props.email } name="email" onChange={props.handleChange} placeholder="Email"></input>
                <input style={styles.input} value={ props.birth } name="birth" onChange={props.handleChange} placeholder="Place of Birth"></input>
            </div>
            <div>
                <input type="phone" style={styles.input} value={ props.phone } name="phone" onChange={props.handleChange} placeholder="Phone"></input>
                <input style={styles.input} value={ props.food } name="food" onChange={props.handleChange} placeholder="Favorite Food"></input>
            </div>
            <textarea style={styles.textarea} value={ props.comment } name="comment" onChange={props.handleChange} placeholder="Tell us about yourself"></textarea>
            <button style={styles.button}>submit</button>
        </form>
    )
}
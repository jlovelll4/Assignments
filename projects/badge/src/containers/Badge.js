import React from 'react';

function Badge (props) {
    const styles = {
        div: {
            display: "grid",
            backgroundColor: "white",
            height: "400px",
            width: "500px",
            marginLeft: "150px",
            marginTop: "20px",
            border: props.badges.length%2 === 0 ? "solid thick darkgray" : "solid thick purple"
        },
        header: {
            height: "50px",
            width: "100%",
            backgroundColor: "darkgray",
            color: "white",
            fontWeight: "bold"
        },
        span: {
            marginLeft: "50px",
            marginTop: "30px",
            width: "200px"
        },
        lName: {
            marginLeft: "5px",
            marginTop: "30px",
            width: "200px"
        },
        bull: {
            float: "right",
            marginRight: "50px"
        },
        section: {
            width: "300px",
            marginLeft: "100px"
        }
    }

    return (
        <div style={styles.div}>
            <header style={styles.header}>Hello, my name is:</header>
            <div>
                <span style={styles.span}>{ props.fName }</span>
                <span style={styles.lName}>{ props.lName }</span>
            </div>
            <div>
                <span style={styles.span}>{ props.email }</span>
                <span style={styles.bull}>{ props.birth }</span>
            </div>
            <div>
                <span style={styles.span}>{ props.phone }</span>
                <span style={styles.bull}>{ props.food }</span>
            </div>
            <section style={styles.section}>{ props.comment }</section>
        </div>
    )
}

export default Badge
import React from "react"

const Product = (props) => {
    const randColors = ["#000000","#000333", "#000066", "#000099","#0000cc", "#0000ff", "#003300", "#003333", "#003366", "#003399", "#0099cc", "#00ccff", "#00cccc", "#00cc00", "#009900", "#6600cc", "#663366", "#cc6699", "#cc9933", "#cc9966", "#cc9999", "red", "orange", "yellow"]
  const randcolor = randColors[Math.floor(Math.random() * randColors.length)]
    const styles = {
        h1: {
            color: "red"
        },
        h3: {
            color: "blue"
        },
        div: {
            border: "solid black 2px",
            padding: "2px",
            backgroundColor: randcolor,
           
        }
      }
    return (
        <div style = {styles.div}>
            <h1 style={styles.h1}>{props.title}</h1>
            <h3 style ={styles.h3}><a href={props.URL}  target="_blank">{props.subtitle}</a></h3>
            <p>{props.description}</p>
        </div>
    )
}

export default Product
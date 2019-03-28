import React from 'react';
import SquareContainer from './SquareContainer';
import Background from "./DenonDJ-img-MC7000Features.jpg"

const App = () =>{
  const styles = {
    container:{
      gridArea: "container"
    },
    image:{
      gridArea:"image",n
      display: "grid",
      gridTemplateColumns:
      "100%",
      gridTemplateRows:
      "400px 400px ",
      gridTemplateAreas:
      `
      "container"
      "image 
      `,
      backgroundImage: `url(${Background})`,  
    }
       n
  }
  return(
    <section>
      <div style={styles.container}>
        <SquareContainer/>
      </div>

      <div style={styles.image}>
      </div>
    </section>
  )
}

export default App;

import React, { Component } from 'react';
import './App.css';
import RandomColorGenerator from "./RandomColorGenerator"

class App extends Component {
  render() {
    const styles = {
        div:{
            display: "flex",

        }
    }
    return (
       <div>
      <RandomColorGenerator/>
      <RandomColorGenerator/>
      <RandomColorGenerator/>
      <RandomColorGenerator/>
      <RandomColorGenerator/>
      <RandomColorGenerator/>
       </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import Header from "./containers/Header"

class App extends Component {
  render() {
    return (

      <div className="App">
        <Header className="App-header" />
        <Main />

      </div>
    );
  }
}

export default App;

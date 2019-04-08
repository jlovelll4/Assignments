import React, { Component } from 'react';
import './App.css';
import Navbar from "./Navbar"
import Footer from "./Footer"
import Main from "./Main"



class App extends Component {
  render() {
    return (
     <div>
        <Navbar/>
        <Main/>
        <Footer/>
     </div>
  )}

}

export default App;

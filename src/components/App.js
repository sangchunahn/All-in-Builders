import React, { Component } from 'react';
import Navbar from './navbar/Navbar.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="main-app-container">
        <Navbar/>
      </div>
    );
  }
}

export default App;

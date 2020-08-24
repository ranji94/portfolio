import React, { Component } from 'react';
import logo from './janusz.jpg';
import './App.css';

class App extends Component {
  render () {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" />
        <p>
          Deployed to GitHub Pages successfully.
        </p>
          Now please wait to my portfolio go insane.
      </header>
    </div>
  )
}
}

export default App;

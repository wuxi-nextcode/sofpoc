import React, { Component } from 'react';
import MainHeader from '../MainHeader'
import './App.scss'

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <MainHeader />
        <p>This is the SMART on FHIR proof of concept.</p>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    let now = new Date().valueOf();
    console.log('now', now);
    axios.get(`http://things.ubidots.com/api/v1.6/devices/noth-spill/level_ft/values/?token=d4WquZFogVXjiwgxrTdpqNsjGtvZZQ&format=json`)
      .then(response => {
        console.log('response', response);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Spark Precision</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;

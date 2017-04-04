import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import VariableCard from './components/VariableCard'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      variables: []
    }
  }

  componentDidMount() {
    var url = 'http://things.ubidots.com/api/v1.6/datasources/58dd763b76254263fe29d596/variables/?token=d4WquZFogVXjiwgxrTdpqNsjGtvZZQ&format=json'
    axios.get(url)
    .then(response => {
      console.log('response variables', response);
      this.setState({
        variables: response.data.results
      }, ()=> {
        console.log('state set', this.state)
      })
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
        {this.state.variables.map(variable => {
          return <VariableCard 
          variable={variable}
          key={variable.label} />
        })}
      </div>
    );
  }
}

export default App;

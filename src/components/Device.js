import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Navbar from './Navbar';
import VariableCard from './VariableCard';

class Device extends Component {
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
      this.setState({
        variables: response.data.results
      })
    });
  }

  render() {

    return (
      <div className="App">
        <Navbar />
        <div className='container'>
          {this.state.variables.map(variable => {
            return <VariableCard 
            variable={variable}
            key={variable.label} />
          })}
        </div>
      </div>
    );
  }
}

export default Device;
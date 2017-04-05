import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class VariableDetail extends Component{
  constructor(props) {
    super(props);
    this.state = {
      values: []
    }
  }

  componentDidMount() {
    let url = `http://things.ubidots.com/api/v1.6/devices/noth-spill/${this.props.variable.label}/values/?token=d4WquZFogVXjiwgxrTdpqNsjGtvZZQ`
    axios.get(url)
    .then(response => {
      console.log('response from detail', response);
      this.setState({
        values: response.data.results
      }, () => {
        console.log('detail state set', this.state);
      })
    })
  }

  render() {
    return (
      <table className='valuesTable'>
        <tr><td>Time</td><td>Value</td></tr>
        {this.state.values.map(variable => {
          return <tr key={variable.timestamp}><td>{new Date(variable.timestamp).toLocaleString()}</td><td>{variable.value}</td></tr>
        })}
      </table>
    )
  }
}

export default VariableDetail;
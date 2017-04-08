import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Graph from './Graph';

class VariableDetail extends Component{
  constructor(props) {
    super(props);
    this.state = {
      values: []
    }
  }

  componentDidMount() {
    let url = `http://things.ubidots.com/api/v1.6/variables/${this.props.variable.id}/values/?token=d4WquZFogVXjiwgxrTdpqNsjGtvZZQ`
    axios.get(url)
    .then(response => {
      this.setState({
        values: response.data.results
      })
    })
  }

  render() {
    return (
      <div>
        <Graph values={this.state.values} />
        <table className='valuesTable'>
          <tr><td>Time</td><td>Value</td></tr>
          {this.state.values.map(variable => {
            return <tr className='deviceVal'
              key={variable.timestamp}>
                <td>{new Date(variable.timestamp).toLocaleString()}</td><td>{variable.value}</td>
              </tr>
          })}
        </table>
      </div>
    )
  }
}

export default VariableDetail;
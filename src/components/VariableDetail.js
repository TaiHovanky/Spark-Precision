import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Toggle from './Toggle';
import Graph from './Graph';

class VariableDetail extends Component{
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      page: 1
    }
  }

  componentDidMount() {
    this.fetchValues();
  }

  fetchValues() {
    let url = `http://things.ubidots.com/api/v1.6/variables/${this.props.variable.id}/values/?page_size=30&page=${this.state.page}&token=d4WquZFogVXjiwgxrTdpqNsjGtvZZQ`
    axios.get(url)
    .then(response => {
      this.setState({
        values: response.data.results
      })
    })
  }

  seeOlder() {
    let page = this.state.page + 1
    this.setState({
      page: page
    }, () => {
      this.fetchValues();
    })
  }

  seeNewer() {
    let page = this.state.page - 1
    this.setState({
      page: page
    }, () => {
      this.fetchValues();
    })
  }

  render() {
    return (
      <div>
        <Toggle 
          seeOlder={this.seeOlder.bind(this)}
          seeNewer={this.seeNewer.bind(this)}
        />
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
import React, { Component } from 'react';
import '../App.css';
import Toggle from './Toggle';
import Graph from './Graph';
import getValues from '../utils/variableValues';

class VariableDetail extends Component{
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      page: 1
    }
  }

  componentDidMount() {
    let context = this;
    getValues(context.props.variable.id, context.state.page, context);
  }

  seeOlder() {
    let page = this.state.page + 1
    this.setState({
      page: page
    }, () => {
      let context = this;
      getValues(context.props.variable.id, context.state.page, context);
    })
  }

  seeNewer() {
    let page = this.state.page - 1
    this.setState({
      page: page
    }, () => {
      let context = this;
      getValues(context.props.variable.id, context.state.page, context);
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
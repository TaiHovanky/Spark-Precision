import React, { Component } from 'react';
import '../App.css';
import VariableDetail from './VariableDetail'

class VariableCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    }
  }

  displayDetails(e) {
    e.preventDefault();
    this.setState({
      showDetails: !this.state.showDetails
    });
  }

  render () {
    var time = new Date().toLocaleString();
    if(this.props.variable){
      time = this.props.variable.last_value.timestamp;
      time = new Date(time).toLocaleString();
    }
    return (
      <section className='variableCard'>
        <header className='variableName' onClick={this.displayDetails.bind(this)}>
          {this.props.variable && <h3>{this.props.variable.name}: </h3>}
          {this.props.variable && <h1>{this.props.variable.last_value.value}</h1>}
        </header>
        <p>Last Active: </p>
        <h4>{time}</h4>
        {this.state.showDetails && <VariableDetail variable={this.props.variable} />}
      </section>
    );
  }
}

export default VariableCard;
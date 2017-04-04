import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class VariableCard extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    }
  }

  render () {
    var time = new Date().toLocaleString();
    if(this.props.variable){
      time = this.props.variable.last_value.timestamp;
      time = new Date(time).toLocaleString();
    }
    return (
      <section>
        {this.props.variable && <h3>{this.props.variable.name}: </h3>}
        {this.props.variable && <h1>{this.props.variable.last_value.value}</h1>}
        <p>Last Active: </p>
        <h4>{time}</h4>
      </section>
    );
  }
}

export default VariableCard;
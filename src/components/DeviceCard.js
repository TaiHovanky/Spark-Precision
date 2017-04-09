import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom'

class DeviceCard extends Component {
  render() {
    let address = `/device/${this.props.device.id}`;
    console.log('address', address)
    return (
      <Link to={address} className='links'>
        <header className='variableName'>
          <h1>{this.props.device.name}</h1>
        </header>
      </Link>
    );
  }
}

export default DeviceCard;
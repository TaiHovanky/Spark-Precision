import React, { Component } from 'react';
import '../App.css';
import getDevices from '../utils/devices';
import Navbar from './Navbar';
import DeviceCard from './DeviceCard';

class DeviceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: []
    }
  }

  componentDidMount() {
    let context = this;
    getDevices(context);
  }

  render() {

    return (
      <div className="App">
        <Navbar />
        <div className='deviceList'>
          <h3 id='devicesLabel'>Devices: </h3>
          <div className='container'>
            {this.state.devices.map(device => {
              return <DeviceCard
              device={device}
              key={device.id} />
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default DeviceList;

import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import DeviceCard from './DeviceCard';

class DeviceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devices: []
    }
  }

  componentDidMount() {
    var url = 'http://things.ubidots.com/api/v1.6/datasources/?token=d4WquZFogVXjiwgxrTdpqNsjGtvZZQ&format=json'
    axios.get(url)
    .then(response => {
      console.log('response devices', response);
      this.setState({
        devices: response.data.results
      })
    });
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>Spark Precise Innovation</h2>
        </div>
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

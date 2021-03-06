import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import DeviceList from './components/DeviceList';
import Device from './components/Device';
import Dashboard from './components/Dashboard';

class App extends Component {

  render() {

    return ((
      <Router>
        <div>
          <Route exact path='/' component={DeviceList} />
          <Route path='/device/:deviceId' component={Device} />
          <Route path='/dashboard' component={Dashboard} />
        </div>
      </Router>)
    );
  }
}

export default App;

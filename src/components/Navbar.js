import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

const Navbar = (props) => {
  return (
    <div className="App-header">
      <h2>Spark Precise Innovation</h2>
      <Link to='/dashboard' className='links'>
        <span>Dashboard</span>
      </Link>
      <Link to='/' className='links'>
        <span>Devices</span>
      </Link>
    </div>
  );
}

export default Navbar;
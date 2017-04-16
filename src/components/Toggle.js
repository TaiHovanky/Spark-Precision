import React from 'react';
import '../App.css';

const Toggle = (props) => {
  return (<div>
    <button onClick={props.seeOlder.bind(this)}>Older</button>
    <button onClick={props.seeNewer.bind(this)}>Newer</button>
  </div>);
}

export default Toggle
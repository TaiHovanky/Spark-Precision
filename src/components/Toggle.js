import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { seeOlder } from '../actions/pageActions';

class Toggle extends Component{
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }

  render() {
    return <div>
      <button onClick={this.props.seeOlder.bind(this)}>See older results</button>
    </div>
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    seeOlder: () => {
      dispatch(seeOlder())
    }
  }
}

export default connect(null, mapDispatchToProps)(Toggle);
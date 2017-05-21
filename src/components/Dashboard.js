import React, { Component } from 'react';
import '../App.css';
import DashboardItem from './DashboardItem'
import { getVariables } from '../actions/dashboardActions';
import { connect } from 'react-redux';
import Navbar from './Navbar';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      variables: []
    }
  }

  componentDidMount() {
    this.props.getVariables();
  }

  render() {
    return (
      <div id='dashboard'>
        <Navbar />
        {this.props.variables && 
          Object.keys(this.props.variables).length > 0 &&
          Object.keys(this.props.variables).map(variable => {
            return <DashboardItem variable={this.props.variables[variable]} />
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    variables: state.dashboardReducer.variables
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getVariables: () => {
      dispatch(getVariables());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
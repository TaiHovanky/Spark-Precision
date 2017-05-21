import React, { Component } from 'react';
import '../App.css';
import DashboardItem from './DashboardItem';
import DashboardTable from './DashboardTable';
import { getVariables } from '../actions/dashboardActions';
import { connect } from 'react-redux';
import Navbar from './Navbar';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      variables: [],
      showTable: false
    }
  }

  componentDidMount() {
    this.props.getVariables();
    let thisObj = this
    setTimeout(function() {
      thisObj.setState({
        showTable: true
      }, () => {
        console.log('state set!')
      }) //end of setstate
    }, 5000)
  }

  render() {
    return (
      <div id='dashboard'>
        <Navbar />
        <div id='tablesstuff'>
          {this.state.showTable && <DashboardTable />}
        </div>
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
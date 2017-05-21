import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
// import axiosRetry from 'axios-retry';
import DashboardItem from './DashboardItem'
import { testing } from '../actions/dashboardActions';
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
    // this.props.testing();
    var url = 'http://things.ubidots.com/api/v1.6/datasources/58dd763b76254263fe29d596/variables/?token=d4WquZFogVXjiwgxrTdpqNsjGtvZZQ&format=json'
    // var allVariableData = {};
    // var promises = [];
    axios.get(url)
    .then(response => {
      console.log('response data', response.data)
      this.setState({
        variables: response.data.results
      })
    });
    //   if(response.data.results) {
    //     response.data.results.forEach(function(variable, index) {
    //       let id = variable.id;
    //       // console.log('id', id, index)
    //       // let name = variable.name;
    //       axiosRetry(axios, { retries: 5 });
    //       let varUrl = `http://things.ubidots.com/api/v1.6/variables/${id}/values/?token=d4WquZFogVXjiwgxrTdpqNsjGtvZZQ&format=json`;
    //       promises.push(axios.get(varUrl)
    //     );
    //     });
    //     // console.log('promises', promises)
    //     // axios.all(promises)
    //     //   .then(results => {
    //     //     console.log('results of axios all', results)
    //         promises.forEach((response, index) => {
    //           // console.log('in results foreach', response, index)
    //           // if(response) {
    //             allVariableData[index] = response;
    //           // }
    //         })
    //         console.log('allvariabledata', allVariableData)
    //       // })
    //   }
    // });
  }

  render() {
    return (
      <div>
        <Navbar />
        {this.state.variables.map(variable => {
          return <DashboardItem variable={variable} />
        })}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    testing: () => {
      dispatch(testing());
    }
  }
}

export default connect(null, mapDispatchToProps)(Dashboard);
import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { testing } from '../actions/dashboardActions';
import { connect } from 'react-redux';
import Navbar from './Navbar';

class Dashboard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.testing();
    var url = 'http://things.ubidots.com/api/v1.6/datasources/58dd763b76254263fe29d596/variables/?token=d4WquZFogVXjiwgxrTdpqNsjGtvZZQ&format=json'
    var allVariableData = {};
    var promises = [];
    axios.get(url)
    .then(response => {
      console.log('response data', response.data)
      if(response.data.results) {
        response.data.results.forEach(function(variable) {
          let id = variable.id;
          let name = variable.name;
          let varUrl = `http://things.ubidots.com/api/v1.6/variables/${id}/values/?page_size=30&token=${insert token here}&format=json`;
          promises.push(axios.get(varUrl));
        });
        console.log('promises', promises)
        // axios.all(promises)
        //   .then(results => {
        //     console.log('results of axios all', results)
            promises.forEach((response, index) => {
              console.log('in results foreach', response, index)
              // if(response) {
                allVariableData[index] = response;
              // }
            })
            console.log('allvariabledata', allVariableData)
          // })
      }
    });
  }

  render() {
    return (
      <div>
        <Navbar />
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
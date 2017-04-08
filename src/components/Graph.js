import React, { Component } from 'react';
import '../App.css';
import ReactHighcharts from 'react-highcharts';

class Graph extends Component{
  render() {
    var times = this.props.values.map(data => {
      let dateTime = new Date(data.timestamp).toLocaleString();
      return dateTime;
    });

    var values = this.props.values.map(data => {
      return data.value;
    })

    var config = {
      xAxis: {
        categories: times
      },
      series: [{
        data: values
      }]
    };

    return (
      <div>
        <ReactHighcharts config={config} />
      </div>
    )
  }
}

Graph.defaultProps = {
  width: 600,
  height: 300,
  chartId: 'v1_chart',
  values: []
};

export default Graph;
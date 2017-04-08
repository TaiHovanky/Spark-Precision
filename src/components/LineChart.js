/*import React, { Component } from 'react';
import '../App.css';
import * as d3 from 'd3';



class Line extends Component{
  render() {
    let { path, stroke, fill, strokeWidth } = this.props;
    return (
      <path
        d={path}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        />
    );
  }
}

Line.defaultProps = {
  stroke: 'blue',
  fill: 'none',
  strokeWidth: 3
}

class DataSeries extends Component{
  render() {
    let { data, colors, xScale, yScale } = this.props;

    let line = d3.line()
      .x((d) => { return xScale(d.x); })
      .y((d) => { return yScale(d.y); });

    let lines = data.points.map((series, id) => {
      console.log('series', series)
      return (
        <Line
          path={line(series)}
          stroke={colors}
          key={id}
          />
      );
    });

    return (
      <g>
        <g>{lines}</g>
      </g>
    );
  }
}

DataSeries.defaultProps = {
  data: [],
  colors: 'blue'
}

class XAxis extends React.Component {
  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    console.log('drawing axis')
    let { data } = this.props;
    var node  = this.refs.axis;
    let xScale = d3.scaleOrdinal().domain(data.xValues)
      .range([0, 10]);
    
    var axis = d3.axisBottom(xScale).tickValues([1, 2, 3, 5, 8, 13, 21]).tickFormat(d3.format(",.0f"));
    console.log('axis', axis)
    d3.select(node).call(axis);
  }

  render() {
    return <g className="axis" ref="axis" transform={this.props.translate}></g>
  }
}

class XYAxis extends Component{
  render() {
    console.log('xyaxis props..............',this.props)
  const xSettings = {
    translate: `translate(0, ${this.props.height})`,
    data: this.props.data
  };
  const ySettings = {
    translate: `translate(${this.props.width}, 0)`,
    orient: 'left'
  };
  return (
    <g className="xy-axis">
      <XAxis {...xSettings}/>
    </g>);
  }
}

class LineChart extends Component{
  render() {
    let { width, height, data } = this.props;
    console.log(width, height, data)
    let xScale = d3.scaleOrdinal().domain(data.xValues)
      .range([0, width]);

    let yScale = d3.scaleLinear().range([height, 10])
      .domain([data.yMin, data.yMax]);

    return (
      <svg>
        <DataSeries 
          xScale={xScale}
          yScale={yScale}
          data={data}
          width={width}
          height={height}
        />
        <XYAxis
          height={height}
          width={width}
          data={data}
        />
      </svg>
    )
  }
}

LineChart.defaultProps = {
  width: 600,
  height: 300
}

export default LineChart;*/
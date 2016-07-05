/**
*
* Chart
*
*/

import React from 'react';
import c3 from 'c3';
import 'c3/c3.css';


class Chart extends React.Component {
  generateChart(props) {
    props = props || this.props;
    this.chart = c3.generate({
      ...props,
      bindto: this.refs.chart
    });
  }
  componentDidMount() {
    this.generateChart();
  }

  componentWillReceiveProps(nextProps) {
    this.generateChart(nextProps);
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return <div ref="chart"></div>;
  }
}

export default Chart;

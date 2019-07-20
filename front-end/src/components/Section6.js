import React, {Component} from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Chart from './Chart';
import Menu from './Menu';
import './section.css';

const options = [
  {value: 'Bar', label: 'Bar'},
  {value: 'Line', label: 'Line'},
  {value: 'Pie', label: 'Pie'}
]

const options2 = [
  {value: 'Sensor_1', label: 'Sensor_1'},
  {value: 'Sensor_2', label: 'Sensor_2'}
]

class Section4 extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: null ,
      chartType:'Bar',
      device: '',
      focusedInput: null
    }
  }

  graphClick = (graph) => {
    this.setState({chartType: graph});
  }

  getChartData = () => {
    fetch( 'http://localhost:5000/device', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          chartData: data
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    console.log(this.state.chartData)
    return (
      <div className="block">
        <button onClick={this.getChartData}>temp</button>
      </div>
    );
  }
};

export default Section4;

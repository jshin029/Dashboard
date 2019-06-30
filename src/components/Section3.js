import React, {component} from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Chart from './Chart';
import Calendar from './Calendar';

class Section3 extends React.Component {
  constructor(){
    super();
    this.state = {
      chartData: {} ,
      chartType:'Bar',
      startDate: '',
      endDate: '',
      device: 'Sensor_1',
      units: 'Section3',
      celsius: true,
      degrees: "° C",
      focusedInput: null
    }
  }

    componentWillMount() {
      this.getChartData();
    }

    getChartData () {
      //make ajax/axios call
        this.setState({
          chartData:{
              labels: ["Jun-06", "Jun-07", "Jun-08", "Jun-09", "Jun-10", "Jun-11", "Jun-12", "Jun-13"],
              datasets: [
                {
                  data:[200, 250, 279, 300, 257, 325, 350, 150],
                  backgroundColor:'rgba(63, 63, 191, 0.6)'
                }
              ]
          }
        });

    }
    BarClick = () => {
      this.setState({chartType:'Bar'});
    }

    LineClick = () => {
      this.setState({chartType:'Line'});
    }

    PieClick = () => {
      this.setState({chartType:'Pie'});
    }

    Sensor1 = () => {
      this.setState({
        device:'Sensor_1',
        chartData:{
            labels: ["Jun-06", "Jun-07", "Jun-08", "Jun-09", "Jun-10", "Jun-11", "Jun-12", "Jun-13"],
            datasets: [
              {
                data:[200, 250, 279, 300, 257, 325, 350, 150],
                backgroundColor:'rgba(63, 63, 191, 0.6)'
              }
            ]
        }
      });
    }

    Sensor2 = () => {
      this.setState({
        device:'Sensor_2',
        chartData:{
            labels: ["Jun-06", "Jun-07", "Jun-08", "Jun-09", "Jun-10", "Jun-11", "Jun-12", "Jun-13"],
            datasets: [
              {
                data:[300, 330, 270, 280, 290, 310, 330, 320],
                backgroundColor: 'rgba(63, 63, 191, 0.6)'
              }
            ]
        }
      });
    }

  range = (start, end) => {
    if (start != null && end != null){
      this.setState({
        startDate: start.format('MMM-DD'),
        endDate: end.format('MMM-DD')
      })

    }
  }

  toggle = () => {
    this.setState(prevState => ({ celsius: !prevState.celsius }));

    if (this.state.celsius){
      var temp = [];
      for (var i = 0; i < this.state.chartData.datasets.length; ++i){
        temp = this.state.chartData.datasets[i].data
        for (var j = 0; j < this.state.chartData.datasets[i].data.length; ++j){
          temp[j] = (temp[j] * 9/5) + 32;
        }
      }
      this.setState({degrees: "° F"})
    }

    else {
      var temp = [];
      for (var i = 0; i < this.state.chartData.datasets.length; ++i){
        temp = this.state.chartData.datasets[i].data
        for (var j = 0; j < this.state.chartData.datasets[i].data.length; ++j){
          temp[j] = (temp[j] - 32) * 5/9 ;
        }
      }
      this.setState({degrees: "° C"})
    }
  }

  render() {
    return (
      <div>
        <div>
          <p> Select a Chart's format </p>
          <button onClick={this.BarClick}>Bar</button>
          <button onClick={this.LineClick}>Line</button>
          <button onClick={this.PieClick}>Pie</button>

          <p> Select a Device </p>
          <button onClick={this.Sensor1}>Sensor_1</button>
          <button onClick={this.Sensor2}>Sensor_2</button>

          <p> Toggle Celsius and Fahrenheit </p>
          <button onClick={this.toggle}>toggle</button>

          <p> Pick a date </p>
          <Calendar range={this.range}/>

          <Chart chartData = {this.state.chartData} title={this.state.device} chartType={this.state.chartType} units={this.state.units} startDate={this.state.startDate} endDate={this.state.endDate} celsius={this.state.celsius}/>
        </div>
      </div>
    );
  }
};

export default Section3;

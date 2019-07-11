import React, {component} from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Chart from './Chart';
import Calendar from './Calendar';
import Menu from './Menu';
import moment from 'moment';
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

    graphClick = (graph) => {
      this.setState({chartType: graph});
    }

    location = (loc) => {
      if (loc === 'Sensor_1'){
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
      else if (loc === 'Sensor_2'){
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
    }

  range = (start, end) => {
    if (start != null && end != null){
      this.setState({
        startDate: start.format('MMM-DD'),
        endDate: end.format('MMM-DD')
      })
    }
  }

  celsius = () => {
    if (this.state.degrees === "° F"){
      var temp = [];
      for (var i = 0; i < this.state.chartData.datasets.length; ++i){
        temp = this.state.chartData.datasets[i].data
        for (var j = 0; j < this.state.chartData.datasets[i].data.length; ++j){
          temp[j] = (temp[j] - 32) * 5/9 ;
        }
      }
      this.setState({degrees: "° C", celsius: true});
    }
  }

  fahrenheit = () => {
    if (this.state.degrees === "° C"){
      var temp = [];
      for (var i = 0; i < this.state.chartData.datasets.length; ++i){
        temp = this.state.chartData.datasets[i].data
        for (var j = 0; j < this.state.chartData.datasets[i].data.length; ++j){
          temp[j] = (temp[j] * 9/5) + 32;
        }
      }
      this.setState({degrees: "° F", celsius: false});
    }
  }

  render() {
    return (
      <div className="block">
          <div className="outline">
            <h2 className="title">Degree Day (per device)</h2>
          </div>
          <div className="outline2">
          <div className="wrapper">
            <div className="location">
              <div className="inner1">
                <p className="text">Select a location</p>
              </div>
              <div className="inner2">
                <Menu location={this.location} options={options2}/>
              </div>
            </div>
            <div className="timeframe">
              <div className="inner1">
                <p className="text">Select a time frame</p>
              </div>
              <div className="inner2">
                <Calendar range={this.range}/>
              </div>
            </div>
            <div className="type">
              <div className="inner1">
                <p className="text">Chart type</p>
              </div>
              <div className="inner2">
                <Menu graphClick={this.graphClick} options={options}/>
              </div>
            </div>
            <div className="day">
              <div className="inner1">
                <p className="text">Toggle Celsius and Fahrenheit </p>
              </div>
                <div className="inner2">
                <button className="temp1" onClick={this.celsius}>° C</button>
                <button className="temp2" onClick={this.fahrenheit}>° F</button>
                </div>
            </div>
          </div>
          <div className="graph">
          <Chart chartData = {this.state.chartData} title={this.state.device} chartType={this.state.chartType} units={this.state.units} startDate={this.state.startDate} endDate={this.state.endDate} celsius={this.state.celsius}/>
          </div>
        </div>
      </div>
    );
  }
};

export default Section3;

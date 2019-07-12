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

class Section4 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: {} ,
      chartType:'Bar',
      startDate: '',
      endDate: '',
      device: 'Sensor_1',
      units: 'Section4',
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
                  label: 'Temp. (per device)',
                  data:[10, 20, 30, 40, 50, 60, 70, 80],
                  backgroundColor:'rgba(63, 63, 191, 0.6)'
                },
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
                  label: 'Temp. (per device)',
                  data:[10, 20, 30, 40, 50, 60, 70, 80],
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
                  label: 'Temp. (per device)',
                  data:[10, 11, 12, 13, 14, 15, 16, 17],
                  backgroundColor: 'rgba(63, 63, 191, 0.6)'
                }
              ]
          }
        });
      }
    }

    temperature = () => {
      if (this.state.device === 'Sensor_1'){
        this.setState({
          chartData:{
              labels: ["Jun-06", "Jun-07", "Jun-08", "Jun-09", "Jun-10", "Jun-11", "Jun-12", "Jun-13"],
              datasets: [
                {
                  label: 'Temp. (per device)',
                  data:[10, 20, 30, 40, 50, 60, 70, 80],
                  backgroundColor:'rgba(63, 63, 191, 0.6)'
                },
              ]
          }
        });
      }
      else if (this.state.device === 'Sensor_2'){
        this.setState({
          chartData:{
              labels: ["Jun-06", "Jun-07", "Jun-08", "Jun-09", "Jun-10", "Jun-11", "Jun-12", "Jun-13"],
              datasets: [
                {
                  label: 'Temp. (per device)',
                  data:[10, 11, 12, 13, 14, 15, 16, 17],
                  backgroundColor: 'rgba(63, 63, 191, 0.6)'
                },
              ]
          }
        });
      }
    }

    humidity = () => {
      if (this.state.device === 'Sensor_1'){
        this.setState({
          chartData:{
              labels: ["Jun-06", "Jun-07", "Jun-08", "Jun-09", "Jun-10", "Jun-11", "Jun-12", "Jun-13"],
              datasets: [
                {
                  label: 'Humidity (per device)',
                  data:[45, 23, 15, 80, 72, 55, 33, 99],
                  backgroundColor: 'rgba(255, 35, 35, 0.6)'
                }
              ]
          }
        });
      }
      else if (this.state.device === 'Sensor_2'){
        this.setState({
          chartData:{
              labels: ["Jun-06", "Jun-07", "Jun-08", "Jun-09", "Jun-10", "Jun-11", "Jun-12", "Jun-13"],
              datasets: [
                {
                  label: 'Humidity (per device)',
                  data:[30, 32, 34, 80, 60, 55, 45, 99],
                  backgroundColor: 'rgba(255, 35, 35, 0.6)'
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

  render() {
    console.log(this.state.chartData.datasets[0]);
    const falseFunc = ()=>false;
    return (
      <div className="block">
          <div className="outline">
            <h2 className="title">Insect Count (per location)</h2>
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
                <p className="text">View by</p>
              </div>
              <div className="inner2">
                <button className="temperature" onClick={this.temperature}>Temp. (per device)</button>
                <button className="humidity" onClick={this.humidity}>Humidity (per device)</button>
              </div>
            </div>
          </div>
          <div className="graph">
            <Chart chartData={this.state.chartData} title={this.state.device} chartType={this.state.chartType} units={this.state.units} startDate={this.state.startDate} endDate={this.state.endDate}/>
          </div>
        </div>
      </div>
    );
  }
};

export default Section4;

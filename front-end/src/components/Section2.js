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


class Section2 extends React.Component {
  constructor(){
    super();
    this.state = {
      chartData: {} ,
      chartType:'Bar',
      time: 'day',
      startDate: '',
      endDate: '',
      device: 'Sensor_1',
      units: 'Section1',
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
                  label:'Insect Count',
                  data:[1, 4, 8, 2, 20, 23, 14, 9],
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
                  label:'Insect Count',
                  data:[1, 4, 8, 2, 20, 23, 14, 9],
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
              labels: ["May-05", "May-06", "May-07", "May-08", "May-09", "May-10", "May-11", "May-12"],
              datasets: [
                {
                  label:'Insect Count',
                  data:[2, 4, 6, 8, 10, 12, 14, 16],
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

    Day = () => {
      this.setState({time: 'day'});
    }

    Week = () => {
      this.setState({time: 'week'});
    }

    Month = () => {
      this.setState({time: 'month'});
    }

    Year = () => {
      this.setState({time: 'year'});
    }


render() {
  return (
    <div className="block">
        <div className="outline">
            <h2 className="title">Insect Count (per device)</h2>
        </div>
        <div className="outline2">
        <div className="wrapper">
          <div className="location">
            <div className="inner1">
              <p className="text">Select a device</p>
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
                <button className="date1" onClick={this.Day}>Day</button>
                <button className="date" onClick={this.Week}>Week</button>
                <button className="date" onClick={this.Month}>Month</button>
                <button className="date" onClick={this.Year}>Year</button>
              </div>
          </div>
        </div>
        <div className="graph">
          <Chart chartData = {this.state.chartData} title={this.state.device} chartType={this.state.chartType} startDate={this.state.startDate} endDate={this.state.endDate} time={this.state.time} units={this.state.units}/>
        </div>
      </div>
    </div>
  );
}
};

export default Section2;

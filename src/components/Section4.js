import React, {component} from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Chart from './Chart';
import Calendar from './Calendar';

class Section4 extends React.Component {
  constructor(){
    super();
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
                {
                  label: 'Humidity (per device)',
                  data:[45, 23, 15, 80, 72, 55, 33, 99],
                  backgroundColor: 'rgba(255, 35, 35, 0.6)'
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
                label: 'Temp. (per device)',
                data:[10, 20, 30, 40, 50, 60, 70, 80],
                backgroundColor:'rgba(63, 63, 191, 0.6)'
              },
              {
                label: 'Humidity (per device)',
                data:[45, 23, 15, 80, 72, 55, 33, 99],
                backgroundColor: 'rgba(255, 35, 35, 0.6)'
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
                label: 'Temp. (per device)',
                data:[10, 11, 12, 13, 14, 15, 16, 17],
                backgroundColor: 'rgba(63, 63, 191, 0.6)'
              },
              {
                label: 'Humidity (per device)',
                data:[30, 32, 34, 80, 60, 55, 45, 99],
                backgroundColor: 'rgba(255, 35, 35, 0.6)'
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

  render() {
    const falseFunc = ()=>false;
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

          <p> Pick a date </p>
          <Calendar range={this.range}/>

          <Chart chartData = {this.state.chartData} title={this.state.device} chartType={this.state.chartType} units={this.state.units} startDate={this.state.startDate} endDate={this.state.endDate}/>
        </div>
      </div>
    );
  }
};

export default Section4;
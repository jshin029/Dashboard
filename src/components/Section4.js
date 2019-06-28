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
      chartExtract: {},
      chartBool: false,
      chartType:'Bar',
      device: 'Sensor_1',
      units: 'Section3',
      test: null,
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
              labels: ['09-06', '09-07', '09-08', '09-09', '09-10', '09-11', '09-12', '09-13'],
              datasets: [
                {
                  data:[225, 230, 235, 240, 248, 238, 233, 250],
                  backgroundColor: 'rgba(63, 63, 191, 0.6)'
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
        chartBool: false,
        chartData:{
            labels: ['09-06', '09-07', '09-08', '09-09', '09-10', '09-11', '09-12', '09-13'],
            datasets: [
              {
                data:[225, 230, 235, 240, 248, 238, 233, 250],
                backgroundColor:'rgba(63, 63, 191, 0.6)'
              }
            ]
        }

      });
    }

    Sensor2 = () => {
      this.setState({
        device:'Sensor_2',
        chartBool: false,
        chartData:{
            labels: ['05-06', '05-07', '05-08', '05-09', '05-10', '05-11', '05-12', '05-13'],
            datasets: [
              {
                data:[300, 330, 270, 280, 290, 310, 330, 320],
                backgroundColor: 'rgba(63, 63, 191, 0.6)'
              }
            ]
        }
      });
    }

    Sensor3 = () => {
      this.setState({
        device:'Sensor_3',
        chartBool: false,
        chartData:{
            labels: ['03-01', '03-02', '03-03', '03-04', '03-05', '03-06', '03-07', '03-08'],
            datasets: [
              {
                data:[220, 225, 235, 240, 250, 260, 270, 280],
                backgroundColor: 'rgba(63, 63, 191, 0.6)'
              }
            ]
        }
      });
    }

    range = (start, end) => {
      if (start != null && end != null){
        var starting = start.format().toString();
        var ending = end.format().toString();

        starting = starting.slice(5,10);
        ending = ending.slice(5,10);

        starting = starting.replace('-', '');
        ending = ending.replace('-', '');
      }

      var x = null;
      var temp = [];
      var labels = this.state.chartData.labels;
        //filling temp array with current states date
        for (var i = 0; i < this.state.chartData.labels.length; ++i){
          x =  this.state.chartData.labels[i];
          x = x.replace('-','');
          x = parseInt(x);
          temp.push(x);
        }
        var temp2 = [];
        var temp3 = [];

        //only getting the dates between the user's input
        for (var i = 0; i < temp.length; ++i){
          if (temp[i] >= starting && temp[i] <= ending){
            temp3.push(i);
          }
        }

        for (var i = 0; i < temp3.length; ++i){
          temp2.push(labels[temp3[i]]); //labels for all devices
        }

        var newData = [];
        var deviceData = [];

        //parses data from each device based on user's range
        for (var i = 0; i < this.state.chartData.datasets.length; ++i){
          for (var j = 0; j < temp3.length; ++j){
            newData.push(this.state.chartData.datasets[i].data[temp3[j]]); //data per device
          }
          deviceData.push(newData);
          newData = [];
        }
        console.log(deviceData);
        console.log(this.state.chartData);

        this.setState({chartExtract: {
            labels: temp2,
            datasets: [
              {
                label: 'Insect Count',
                data: deviceData[0],
                backgroundColor: 'rgba(63, 63, 191, 0.6)'
              }
            ]
          },
          chartBool: true
        });
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
          <button onClick={this.Sensor3}>Sensor_3</button>

          <p> Pick a date </p>
          <Calendar range={this.range}/>

          <Chart chartData = {this.state.chartBool ? this.state.chartExtract: this.state.chartData} title={this.state.device} chartType={this.state.chartType} units={this.state.units}/>
        </div>
      </div>
    );
  }
};

export default Section4;

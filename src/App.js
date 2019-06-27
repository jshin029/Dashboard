import React from 'react';
import Chart from './components/Chart';
import Calendar from './components/Calendar';
import Menu from './components/Menu';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      chartData: {} ,
      chartExtract: {},
      chartBool: false,
      chartType:'Bar',
      test: null,
      location: 'Cupertino',
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
                label:'Device_1',
                data:[1, 4, 8, 2, 20, 23, 14, 9],
                backgroundColor: 'rgba(63, 63, 191, 0.6)'

              },
              {
                label:'Device_2',
                data:[23, 17, 30, 5, 3, 2, 13, 15],
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

  location1 = () => {
    this.setState({
      location:'Cupertino',
      chartBool: false,
      chartData:{
          labels: ['09-06', '09-07', '09-08', '09-09', '09-10', '09-11', '09-12', '09-13'],
          datasets: [
            {
              label:'Device_1',
              data:[1, 4, 8, 2, 20, 23, 14, 9],
              backgroundColor:'rgba(63, 63, 191, 0.6)'
            },
            {
              label:'Device_2',
              data:[23, 17, 30, 5, 3, 2, 13, 15],
              backgroundColor: 'rgba(255, 35, 35, 0.6)'
            }
          ]
      }

    });
  }

  location2 = () => {
    this.setState({
      location:'Riverside',
      chartBool: false,
      chartData:{
          labels: ['05-06', '05-07', '05-08', '05-09', '05-10', '05-11', '05-12', '05-13'],
          datasets: [
            {
              label:'Device_1',
              data:[2, 4, 6, 8, 10, 12, 14, 16],
              backgroundColor: 'rgba(63, 63, 191, 0.6)'
            },
            {
              label:'Device_2',
              data:[1, 3, 5, 7, 9, 11, 13, 15],
              backgroundColor: 'rgba(255, 35, 35, 0.6)'
            }
          ]
      }
    });
  }

  location3 = () => {
    this.setState({
      location:'Irvine',
      chartBool: false,
      chartData:{
          labels: ['03-01', '03-02', '03-03', '03-04', '03-05', '03-06', '03-07', '03-08'],
          datasets: [
            {
              label:'Device_1',
              data:[0, 5, 10, 15, 20, 15, 10, 5],
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
              label: 'Device_1',
              data: deviceData[0],
              backgroundColor: 'rgba(63, 63, 191, 0.6)'
            },
            {
              label: 'Device_2',
              data: deviceData[1],
              backgroundColor: 'rgba(255, 35, 35, 0.6)'
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
        <p> Select a Chart's Data </p>
        <button onClick={this.BarClick}>Bar</button>
        <button onClick={this.LineClick}>Line</button>
        <button onClick={this.PieClick}>Pie</button>


        <p> Insect Count (per location) </p>
        <button onClick={this.location1}>Cupertino</button>
        <button onClick={this.location2}>Riverside</button>
        <button onClick={this.location3}>Irvine</button>

        <p> Pick a date </p>
        <Calendar range={this.range}/>

        <Chart chartData = {this.state.chartBool ? this.state.chartExtract: this.state.chartData} location={this.state.location} chartType={this.state.chartType}/>
      </div>
    );
  }
};

export default App;

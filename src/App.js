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
      chartData: {},
      chartExtract: {},
      chartType:'Bar',
      test: null,
      location: null,
      startDate: null,
      endDate: null,
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
            labels: ['05-06', '05-07', '05-08', '05-09', '05-10', '05-11', '05-12', '05-13', '05-14'],
            datasets: [
              {
                label:'Device_1',
                data:[
                  0,
                  5.75,
                  11.5,
                  17.25,
                  23
                ],
                backgroundColor:[
                  'rgba(63, 63, 191, 0.6)',
                  'rgba(63, 63, 191, 0.6)',
                  'rgba(63, 63, 191, 0.6)',
                  'rgba(63, 63, 191, 0.6)',
                  'rgba(63, 63, 191, 0.6)'
                ]
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
      chartData:{
          labels: ['09-06', '09-07', '09-08', '09-09', '09-10', '09-11', '05-12', '05-13', '05-14'],
          datasets: [
            {
              label:'Device_3',
              data:[
                0,
                5.75,
                11.5,
                17.25,
                23
              ],
              backgroundColor:[
                'rgba(63, 63, 191, 0.6)',
                'rgba(63, 63, 191, 0.6)',
                'rgba(63, 63, 191, 0.6)',
                'rgba(63, 63, 191, 0.6)',
                'rgba(63, 63, 191, 0.6)'
              ]
            }
          ]

      }

    });
  }

  location2 = () => {
    this.setState({location:'Riverside'});
  }

  location3 = () => {
    this.setState({location:'Irvine'});
  }

  render() {
    const falseFunc = ()=>false;


    return (
      <div>
        <p> Select a Chart's Data: </p>
        <button onClick={this.BarClick}>Bar</button>
        <button onClick={this.LineClick}>Line</button>
        <button onClick={this.PieClick}>Pie</button>


        <p> Insect Count (per location) </p>
        <button onClick={this.location1}>Cupertino</button>
        <button onClick={this.location2}>Riverside</button>
        <button onClick={this.location3}>Irvine</button>

        <Chart chartData={this.state.chartData} location={this.state.location} chartType={this.state.chartType} temp={this.state.startDate} />
      </div>
    );
  }
};

export default App;

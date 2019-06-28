import React, {component} from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Chart from './Chart';
import Calendar from './Calendar';
import moment from 'moment';


class Section1 extends React.Component {
  constructor(){
    super();
    this.state = {
      chartData: {} ,
      chartExtract: {},
      chartBool: false,
      chartType:'Bar',
      startDate: '',
      endDate: '',
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
               labels: ["Jul-10", "Jul-11", "Jul-12", "Jul-13", "Jul-14", "Jul-15"],
               datasets: [
                {
                  label:'Device_1',
                  data:[5, 7, 11, 13, 15, 17],
                  backgroundColor: 'rgba(63, 63, 191, 0.6)'

                }
              ]
          },
        });
        console.log(this.state.chartData);

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

          <p> Insect Count (per location) </p>
          <button onClick={this.location1}>Cupertino</button>
          <button onClick={this.location2}>Riverside</button>
          <button onClick={this.location3}>Irvine</button>

          <p> Pick a date </p>
          <Calendar range={this.range}/>

          <Chart chartData = {this.state.chartData} title={this.state.location} chartType={this.state.chartType} startDate={this.state.startDate} endDate={this.state.endDate}/>
        </div>
      </div>
    );
  }
};

export default Section1;

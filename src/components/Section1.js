import React, {component} from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Chart from './Chart';
import Calendar from './Calendar';
import Menu from './Menu';
import moment from 'moment';
import './section.css';

class Section1 extends React.Component {
  constructor(){
    super();
    this.state = {
      chartData: {} ,
      chartType:'Bar',
      startDate: '',
      endDate: '',
      time: 'day',
      location: 'Cupertino',
      focusedInput: null,
      units: 'Section1',
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
          },
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
        chartData:{
            labels: ["Jun-06", "Jun-07", "Jun-08", "Jun-09", "Jun-10", "Jun-11", "Jun-12", "Jun-13"],
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
        chartData:{
            labels: ["May-05", "May-06", "May-07", "May-08", "May-09", "May-10", "May-11", "May-12"],
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


    range = (start, end) => {
      if (start != null && end != null){
        this.setState({
          startDate: start.format('MMM-DD'),
          endDate: end.format('MMM-DD')
        });
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

          <p> View By: </p>
          <div class="dates">
            <p> View by </p>
            <button class="date" onClick={this.Day}>Day</button>
            <button class="date" onClick={this.Week}>Week</button>
            <button class="date" onClick={this.Month}>Month</button>
            <button class="date" onClick={this.Year}>Year</button>
          </div>

          <p> Insect Count (per location) </p>
          <Menu/>
          <button onClick={this.location1}>Cupertino</button>
          <button onClick={this.location2}>Riverside</button>

          <p> Pick a date </p>
          <Calendar range={this.range}/>



          <Chart chartData={this.state.chartData} title={this.state.location} chartType={this.state.chartType} startDate={this.state.startDate} endDate={this.state.endDate} time={this.state.time} units={this.state.units}/>
        </div>
      </div>
    );
  }
};

export default Section1;

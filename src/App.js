import React from 'react';
import Chart from './components/Chart';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
      chartData:{
          labels: ['05-06', '05-07', '05-08', '05-09', '05-10', '05-11', '05-12', '05-13', '05-14'],
          datasets: [
            {
              label:'Population',
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
                'rgba(63, 63, 191, 0.6)',
              ]
            },
            {
              label:'Second Population',
              data:[
                5,
                10,
                15,
                20,
                25
              ],
              backgroundColor:[
                'rgba(63, 191, 63, 0.6)',
                'rgba(63, 191, 63, 0.6)',
                'rgba(63, 191, 63, 0.6)',
                'rgba(63, 191, 63, 0.6)',
                'rgba(63, 191, 63, 0.6)',
              ]
            }
          ]
      },
      chartType:'Bar'
    }
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

  render() {
    const falseFunc = ()=>false;
    return (
      <div>
        <button onClick={this.BarClick}>Bar</button>
        <button onClick={this.LineClick}>Line</button>
        <button onClick={this.PieClick}>Pie</button>
        <p>Select a Location: </p>
        <DateRangePicker
         startDateId="startDate"
         endDateId="endDate"
         startDate={this.state.startDate}
         endDate={this.state.endDate}
         onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
         focusedInput={this.state.focusedInput}
         onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
         isOutsideRange={falseFunc}
         />



        <Chart chartData={this.state.chartData} location="California" chartType={this.state.chartType} temp={this.state.startDate}/>
      </div>
    );
  }
};

export default App;

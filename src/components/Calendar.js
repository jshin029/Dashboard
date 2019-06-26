import React, {Component} from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
    };
  }

  handleChange = () => {
    console.log("hello");
    this.props.range(this.state.startDate, this.state.endDate);
  }

  render(){
    const falseFunc = () =>false;
    return(
      <div className="calendar">
        <DateRangePicker
         startDateId="startDate"
         endDateId="endDate"
         startDate={this.state.startDate}
         endDate={this.state.endDate}
         onDatesChange={({ startDate, endDate }) => {this.handleChange(); this.setState({ startDate, endDate })}}
         focusedInput={this.state.focusedInput}
         onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
         isOutsideRange={falseFunc}
         />
      </div>
    );
  }
};

export default Calendar;

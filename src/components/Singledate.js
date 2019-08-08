import React, {Component} from 'react';
import {DateRangePicker, SingleDatePicker, DayPickerRangeController} from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';


class Singledate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null,
      focused: null
    };
  }

  handleChange = (date) => {
    this.props.range(date);
  }

  render(){
    const falseFunc = () =>false;
    return(
      <div className="calendar">
        <SingleDatePicker
        date={this.state.date} // momentPropTypes.momentObj or null
        onDateChange={date => {this.setState({ date }); this.handleChange(date);}} // PropTypes.func.isRequired
        focused={this.state.focused} // PropTypes.bool
        onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
        id="your_unique_id" // PropTypes.string.isRequired,
        isOutsideRange={falseFunc}
        />
      </div>
    );
  }
};

export default Singledate;

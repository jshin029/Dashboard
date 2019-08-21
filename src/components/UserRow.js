import React, { Component } from 'react';
import './css/ControlPanel.css';

class UserRow extends Component {
  constructor(props){
    super(props)
    this.state ={
      Email: this.props.Email,
      Name: this.props.Name,
      timeZone: "(UTC-08:00) Pacific Time (US & Canada)",
      Role: this.props.Role
    }
  }

  render(){
    return(
      <div className="userFields">
        <p className="w1"> hello </p>
        <p className="w2"> hello </p>
        <p className="w3"> hello </p>
        <p className="w4"> hello </p>
        <p className="w5"> hello </p>
        <p className="w6"> hello </p>

      </div>
    )
  }
}

export default UserRow;

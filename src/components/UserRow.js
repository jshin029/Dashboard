import React, { Component } from 'react';
import './css/ControlPanel.css';

class UserRow extends Component {
  constructor(props){
    super(props)
    this.state ={
      Username: this.props.Username,
      Email: this.props.Email,
      Name: this.props.Name,
      timeZone: "(UTC-08:00) Pacific Time (US & Canada)",
      Role: this.props.Role
    }
  }

  render(){
    return(
      <div className="userFields">
        <div className="w1">{this.state.Username}</div>
        <div className="w2">{this.state.Name}</div>
        <div className="w3">{this.state.timeZone}</div>
        <div className="w4">{this.state.Role}</div>
        <div className="w5">
          <button>edit</button>
        </div>
        <div className="w6">
          <button>mannage</button>
        </div>

      </div>
    )
  }
}

export default UserRow;

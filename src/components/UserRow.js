import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import './css/Users.css';

class UserRow extends Component {
  constructor(props){
    super(props)
    this.state ={
      Email: this.props.Email,
      Name: this.props.Name,
      timeZone: "(UTC-08:00) Pacific Time (US & Canada)",
      Role: this.props.Role,
      redirectManageDevice: false
    }
  }

  setRedirectManageDevice = () => {
    this.setState({
      redirectManageDevice: true
    })
  }


  render(){
    if (this.state.redirectManageDevice){
      return <Redirect to={{
          pathname: '/manageDevices',
          state: { Email: this.state.Email }
      }}
      />
    }

    return(
      <div className="userFields">
        <div className="w1">{this.state.Email}</div>
        <div className="w2">{this.state.Name}</div>
        <div className="w3">{this.state.timeZone}</div>
        <div className="w4">{this.state.Role}</div>
        <div className="w5">
          <button>edit</button>
        </div>
        <div className="w6">
          <button onClick={this.setRedirectManageDevice}>manage</button>
        </div>

      </div>
    )
  }
}

export default UserRow;

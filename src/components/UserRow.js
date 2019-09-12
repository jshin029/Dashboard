import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import { Button, Icon } from 'antd';
import './css/UserRow.css';

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
          <Button><Icon theme="twoTone" twoToneColor='#52c41a' type="edit" /></Button>
        </div>
        <div className="w6">
          <Button><Icon theme="twoTone" twoToneColor="#eb2f96" type="delete"/></Button>
        </div>
        <div className="w7">
          <Button style={{backgroundColor: '#58C9F3', border: 'none'}} type="primary" onClick={this.setRedirectManageDevice}>manage</Button>
        </div>

      </div>
    )
  }
}

export default UserRow;

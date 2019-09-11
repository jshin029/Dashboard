import React, { Component } from 'react';
import './css/Users.css';

class UserRow extends Component {
  constructor(props){
    super(props)
    this.state ={
      Device: '',
      StartfromUTC: '',
      EndatUTC: '',
      Location: '',
      Latitude: '',
      Longitude: '',
      InsectType: '',
      BaseValue: '',
      LowerThreshold: '',
      UpperThreshold: '',
      extraData: false,
      dataVisibility: false
    }
  }


  render(){
    return(
      <div className="userFields">
        <div className="d1">{this.props.ManageStates.Device}</div>
        <div className="d1">{this.props.ManageStates.StartfromUTC}</div>
        <div className="d1">{this.props.ManageStates.EndatUTC}</div>
        <div className="d1">{this.props.ManageStates.Location}</div>
        <div className="d1">{this.props.ManageStates.Latitude}</div>
        <div className="d1">{this.props.ManageStates.Longitude}</div>
        <div className="d1">{this.props.ManageStates.InsectType}</div>
        <div className="d1">{this.props.ManageStates.BaseValue}</div>
        <div className="d1">{this.props.ManageStates.LowerThreshold}</div>
        <div className="d1">{this.props.ManageStates.UpperThreshold}</div>
        <div className="d1">{this.props.ManageStates.extraData}</div>
        <div className="d1">{this.props.ManageStates.dataVisibility}</div>
      </div>
    )
  }
}

export default UserRow;

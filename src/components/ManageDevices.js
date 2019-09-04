import React, { Component } from 'react';
import Navbar from './Navbar';
import wrench from '../assets/wrench.png';
import ModalComponent from './ModalComponent';



class ManageDevices extends Component {
  constructor(props){
    super(props)
    this.state ={
      Email: this.props.location.state.Email,
      deviceOptions: null
    }
  }
  userDeviceFetch = () => {
    fetch("http://localhost:5000/userDevices", {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Email: this.props.location.state.Email
      }),
      method: "POST",
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.message) {
          //error handling
        }
        else {
          let temp = [];
          let subdict = {};
          for (let i = 0; i < resp.length; ++i){
            subdict={
              'value': resp[i].DeviceName,
              'label': resp[i].DeviceName
            }
            temp.push(subdict)
          }
          this.setState({
            deviceOptions: temp
          })
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    this.userDeviceFetch();
  }
  render(){
    console.log(this.state.deviceOptions)
    return(
      <div>
        <Navbar />
        <div className="cpbox1">
          <div className="firstHeader">Control Panel / Users / Manage Device Associations</div>
        </div>
        <div className="mgaMain">
          <div className="mgaHeader1">Manage Device Association</div>
          <div className="mgaHeader2">
            <div className="mgaUsername">Username</div>
            <div>{this.state.Email}</div>
          </div>
          <div className="mgaHeader3">
            <div className="mga3sub1">
              <div className="mgaTitle">Manage the association</div>
              <div className="mga3sub2">
                <ModalComponent deviceOptions={this.state.deviceOptions}/>
                <button className="editButton">Edit</button>
                <button className="deleteButton">Delete</button>
                <button className="refreshButton">Refresh</button>
              </div>
            </div>
            <div>
              <div className="mga3sub3">
                <div className="device">Device</div>
                <div className="fill">Start from (UTC)</div>
                <div className="fill">End at (UTC)</div>
                <div className="fill3">Location</div>
                <div className="fill3">Latitude</div>
                <div className="fill3">Longitude</div>
                <div className="fill3">Insect Type</div>
                <div className="fill">Base Value (C)</div>
                <div className="fill3">Lower Threshold (C)</div>
                <div className="fill3">Upper Threshold (C)</div>
                <div className="fill2">Require extra process to data?</div>
                <div className="fill3">Data visible to user?</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ManageDevices;

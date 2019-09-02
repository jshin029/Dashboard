import React, { Component } from 'react';
import Navbar from './Navbar';
import wrench from '../assets/wrench.png';
import ModalComponent from './CustomModal';



class ManageDevices extends Component {
  constructor(props){
    super(props)
    this.state ={
      //Email: this.props.location.state.Email
      Email: "paul@gmail.com"

    }
  }
  render(){
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
                <ModalComponent/>
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

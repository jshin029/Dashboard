import React, { Component } from 'react';
import Navbar from '../Utilities/Navbar';
import ModalComponent from '../Utilities/Modal/ModalComponent';
//import UserDeviceRow from '../Devices/UserDeviceRow';


class ManageDevices extends Component {
  constructor(props){
    super(props)
    this.state = {
      Email: this.props.location.state.Email,
      Device: [],
      StartfromUTC: '',
      EndatUTC: '',
      Location: '',
      Latitude: '',
      Longitude: '',
      InsectType: '',
      BaseValue: '',
      LowerThreshold: '',
      UpperThreshold: '',
      extraData: true,
      dataVisibility: true,
      deviceRows: [],
      deivceOptions: [],
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

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addRow = () => {
    fetch("http://localhost:5000/addDeviceRows", {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'data': this.state
      }),
      method: "POST",
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.message) {
        } else {
          console.log(resp.Success)
        }
      })
      .catch(err => console.log(err))
  }

  updateDevice = (newDevice) => {
    let temp = [];
    for (let i = 0; i < newDevice.length; ++i){
      temp.push(newDevice[i].value);
    }
    this.setState({
      Device: temp
    })
  }

  deviceRowFetch = () => {
    fetch("http://localhost:5000/deviceRows", {
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'Email': this.props.location.state.Email
      }),
      method: "POST",
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.message) {
        } else {
          let temp = []
          for (let i = 0; i < resp.length; ++i){
            //temp.push(<UserDeviceRow ManageStates={resp[i]} />)
          }
          this.setState({
            deviceRows: temp
          })
        }
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    this.userDeviceFetch();
    this.deviceRowFetch();
  }
  render(){
    console.log(this.state.deviceRows)
    return(
      <div>
        <Navbar />
        <div className="cpbox1">
          <div className="firstHeader">Control Panel / Users / Manage Device Associations</div>
        </div>
        {/*<UserDeviceRow ManageStates={this.state}/>*/}
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
                <ModalComponent updateDevice={this.updateDevice} handleChange={this.state.handleChange} deviceOptions={this.state.deviceOptions} handleChange={this.handleChange} addRow={this.addRow}/>
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
                <div className="fill3">Insect Type</div>
              </div>
              <div>
                {this.state.deviceRows.map(device => <div>{ device }</div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ManageDevices;

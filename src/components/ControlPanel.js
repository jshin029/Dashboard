import React, { Component } from 'react';
import Navbar from './Navbar';
import UserRow from './UserRow';
import './css/ControlPanel.css';
import { MyContext } from './Home';
import Particle from 'particle-api-js';

class ControlPanel extends Component {
  constructor(props){
    super(props)
    this.state = {
      Email: this.props.Email,
      Users: {}
    }
  }

  onLoad = () => {
    fetch( 'http://localhost:5000/userList', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        Email: this.state.Email,
      }),
      method: 'POST'
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          Users: response
        })
      })
      .catch(err => console.log(err))
  }

  loadParticle = () => {
    var token = '2dd9a1bc69ea383c785584f1866c402c57192fbf'; // from result of particle.login
    var particle = new Particle();
    var devicesPr = particle.listDevices({ auth: token });
    devicesPr.then(
      function(devices){
        console.log('Devices: ', devices);
      },
      function(err) {
        console.log('List devices call failed: ', err);
      }
    );
  }

  addRow = () => {
    var temp = [];
    if (this.state.Users.length > 0){
      var temp2 = this.state.Users[0]
      console.log(temp2['Email']);
      for (var i = 0; i < this.state.Users.length; ++i){
        temp.push(<UserRow key={i} Email={"hello"} Name={"hello"} Role={"hello"}/>)
      }
    }
    return temp;
  }

  componentDidMount(){
    this.onLoad()
    this.loadParticle()
  }

  render(){
    console.log(this.state.Users)
    return(
      <div>
        <Navbar/>
        <div className="cpbox1">Control Panel / Users</div>
        <div className="cpbox2">
          <div className="cpinnerbox1">
            <div className="cpinner1">Users</div>
            <div className="cpinner2">
              <div className="userName">Username (Email)</div>
              <div className="friendlyName">Friendly Name</div>
              <div className="timeZone">Time Zone</div>
              <div className="role">Role</div>
              <div className="edit">Edit/Delete</div>
              <div className="deviceAssociation">Device Association</div>
            </div>
            {this.addRow()}
        </div>
          <div className="cpinnerbox2">
            <div className="cpinner3">Additional Operations</div>
            <div className="cpinner4">
              <p>Select an operation to perform.</p>
              <button>Add user</button>
            </div>
          </div>
        </div>

      </div>
    )
  }

}

export default ControlPanel;

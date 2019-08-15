import React, { Component } from 'react';
import Navbar from './Navbar';
import './css/ControlPanel.css';
import { MyContext } from './Home';
import Particle from 'particle-api-js';
class ControlPanel extends Component {
  constructor(props){
    super(props)
    this.state = {
      Email: this.props.Email,
      Perm: this.props.Perm
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
        console.log(response)
      })
      .catch(err => console.log(err))
  }

  loadDevices = () => {
    fetch( 'http://localhost:5000/particle', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'GET'
    })
      .then(response => response.json())
      .then(response => {

      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    this.onLoad()
    this.loadDevices()
  }

  render(){
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
    return(
      <div>
        <Navbar/>
        <div className="cpbox1">Control Panel / Users</div>
        <div className="cpbox2">
          <div className="cpinnerbox1">
            <div className="cpinner1">Users</div>
            <div className="cpinner2">
          </div>
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

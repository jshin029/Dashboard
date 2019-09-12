import React, { Component } from 'react';
import { Button, Icon } from 'antd';
import Navbar from './Navbar';
import Particle from 'particle-api-js';
import ParticleRow from './ParticleRow';
import './css/Device.css'

class Device extends Component {
  constructor(props){
    super(props)
    this.state = {
      Users: {},
      particleRows: [],
    }
  }

  loadParticle = () => {
    var token = '2dd9a1bc69ea383c785584f1866c402c57192fbf'; // from result of particle.login
    var particle = new Particle();
    var devicesPr = particle.listDevices({ auth: token });
    devicesPr.then((devices) => {
        this.rowFormat(devices);
      },
      function(err) {
        console.log('List devices call failed: ', err);
      }
    );
  }

  rowFormat = (devices) => {
    let temp = [];
    for (let i = 0; i < 10; ++i){
        temp.push(<ParticleRow deviceId={devices.body[i].id} name={devices.body[i].name}/>)
    }
    this.setState({
      particleRows: temp
    })
  }

  componentDidMount(){
    this.loadParticle()
  }

  render(){
    console.log(this.state.particleRows)
    return(
      <div>
        <Navbar/>
        <div className="cpbox1">
          <Icon style={{padding: '5px'}} type="tool" />
          <div>Control Panel / Devices</div>
        </div>
        <div className="cpbox2">
          <div className="cpinnerbox1">
            <div className="cpBorder">
              <div className="cpinner1">Device Id</div>
              <div className="cpinner2">
                <div className="DeviceId">DeviceId</div>
                <div className="Type">Type</div>
                <div className="Name">Name</div>
                <div className="Leased">Currently leased to</div>
                <div className="SIM">Manage SIM Card</div>
                <div className="Delete">Delete</div>
              </div>
            </div>
            {this.state.particleRows.map((particle, index) => <div key={index}>{ particle }</div>)}
            <div className="nextPage">
              <Button style={{marginRight: '8px'}}>Previous</Button>
              <Button>Next</Button>
            </div>
        </div>
          <div className="cpinnerbox2">
            <div className="cpinner3">Additional Operations</div>
            <div className="cpinner4">
              <div style={{padding: '4px'}}>Select an operation to perform.</div>
              <div><Button type="primary">Import device(s) from Particle</Button></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Device;

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
      partialRows: [],
      listNumber: 20
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

  // rowFormat = (devices) => {
  //   console.log(devices.body.length)
  //   let temp = [];
  //   for (let i = 0; i < device.body.length; ++i){
  //       temp.push(<ParticleRow deviceId={devices.body[i].id} name={devices.body[i].name}/>)
  //   }
  //   this.setState({
  //     particleRows: temp,
  //     listNumber: 10
  //   })
  // }

  rowFormat = (devices) => {
    let temp = [];
    let temp2 = [];
    let subdict = {};
    for (let i = 0; i < devices.body.length; ++i){
      subdict = {
        'id': devices.body[i].id,
        'name': devices.body[i].name
      }
      temp.push(subdict);
    }

    for (let j = 0; j < 10; ++j){
      temp2.push(<ParticleRow deviceId={devices.body[j].id} name={devices.body[j].name}/>)
    }
    this.setState({
      particleRows: temp,
      partialRows: temp2
    })
  }

  handleNext = () => {
    let temp = [];
    let iterations = this.state.listNumber;

    if ((iterations + 10) > this.state.particleRows.length){
      for (let i = iterations; i < this.state.particleRows.length; ++i){
        temp.push(<ParticleRow deviceId={this.state.particleRows[i].id} name={this.state.particleRows[i].name}/>)
      }
      iterations = this.state.particleRows.length
      this.setState({
        particleRows: temp,
        listNumber: iterations
      })
    }

    else if (iterations === this.state.particleRows.length){
      return;
    }

    else{
      for (let i = (iterations-10); i < iterations; ++i){
        temp.push(<ParticleRow deviceId={this.state.particleRows[i].id} name={this.state.particleRows[i].name}/>)
      }

      iterations += 10;

      this.setState({
        partialRows: temp,
        listNumber: iterations
      })
    }
  }

  handlePrevious = () => {
    let temp = [];
    let iterations = this.state.listNumber;

    if (iterations <= 20){
      console.log('if handleprevious ')

      return;
    }
    else {
      iterations -= 20;
      console.log(iterations)
      for (let i = (iterations-10); i < iterations; ++i){
        temp.push(<ParticleRow deviceId={this.state.particleRows[i].id} name={this.state.particleRows[i].name}/>)
      }
      console.log(temp, "temp")
      console.log(this.state.partialRows, "partialRows")
      this.setState({
        partialRows: temp,
        listNumber: iterations
      })
    }
  }

  componentDidMount(){
    this.loadParticle()
  }

  render(){
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
            {this.state.partialRows.map((particle, index) => <div key={index}>{ particle }</div>)}
            <div className="nextPage">
              <Button onClick={this.handlePrevious} style={{marginRight: '8px'}}>Previous</Button>
              <Button onClick={this.handleNext}>Next</Button>
            </div>
        </div>
          <div className="cpinnerbox2">
            <div className="cpinner3">Additional Operations</div>
            <div className="cpinner4">
              <div style={{padding: '4px'}}>Select an operation to perform.</div>
              <div><Button style={{backgroundColor: '#58C9F3', border: 'none'}} type="primary">Import device(s) from Particle</Button></div>
              <div><Button style={{marginTop: '10px', backgroundColor: '#58C9F3', border: 'none'}} type="primary">Bulk Operation</Button></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default Device;

import React, { Component } from 'react'
import { Button, Icon } from 'antd';
import './css/particleRow.css';


class ParticleRows extends Component {

  render(){
    return(
      <div className='particleRow'>
        <div className='particleDevice'>{this.props.deviceId}</div>
        <div className='particleType'>Photon</div>
        <div className='particleName'>{this.props.name}</div>
        <div className='particleLeased'>None Assigned</div>
        <div className='particleSIM'>No SIM car associated</div>
        <div className='particleDelete'><Icon theme="twoTone" twoToneColor="#eb2f96" type="delete"></Icon></div>
      </div>
    )
  }
}

export default ParticleRows;

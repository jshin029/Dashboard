import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Menu from './Menu';
import Dropdown from './Dropdown';
import './css/Navbar.css';
import logo from '../assets/farmsense_logo.png'

const options = [
  {value: 'Devices', label: 'Devices'},
  {value: 'Users', label: 'Users'}
]

class Navbar extends Component {
  constructor(){
    super();
    this.state = {
    }
  }
  reroute = () => {
    return <Redirect to={{pathname: '/protected'}} />
  }
  render(){
    return(
      <div className="Navbar">
        <div className="Wrapper">
          <img className="main-logo" src={logo}></img>
          <button onclick={this.reroute} className="buttons">Dashboard</button>
          <button className="buttons">Control Panel</button>
        </div>
      </div>
    );
  }
}

export default Navbar;

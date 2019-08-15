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
      redirectControl: false,
      redirectDash: false
    }
  }

  setRedirectControl = () => {
  this.setState({
    redirectControl: true
    });
  }

  setRedirectDash = () => {
    this.setState({
      redirectDash: true
    });
  }

  render(){
    if (this.state.redirectControl) {
      return <Redirect to="/controlPanel" />
    }
    else if (this.state.redirectDash) {
      return <Redirect to="/protected" />
    }
    return(
      <div className="Navbar">
        <div className="Wrapper">
          <img className="main-logo" src={logo}></img>
          <button onClick={this.setRedirectDash} className="buttons">Dashboard</button>
          <button onClick={this.setRedirectControl} className="buttons">Control Panel</button>
        </div>
      </div>
    );
  }
}

export default Navbar;

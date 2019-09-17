import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import Menu from './Menu';
import Dropdown from './Dropdown';
import './css/Navbar.css';
import logo from '../assets/farmsense_logo.png'
import {connect} from 'react-redux';
import {logoutUser} from '../redux/actions';

const options = [
  {value: 'Devices', label: 'Devices'},
  {value: 'Users', label: 'Users'}
]

class Navbar extends Component {
  constructor(){
    super();
    this.state = {
      redirectUsers: false,
      redirectDash: false,
      redirectDevice: false
    }
  }

  setRedirectUsers = () => {
  this.setState({
    redirectUsers: true
    });
  }

  setRedirectDash = () => {
    this.setState({
      redirectDash: true
    });
  }

  setRedirectDevice = () => {
    this.setState({
      redirectDevice: true
    })
  }

  handleClick = () => {
    localStorage.removeItem("token")
    this.props.logoutUser()
  }

  render(){
    if (this.state.redirectUsers) {
      return <Redirect push to="/users" />
    }
    else if (this.state.redirectDash) {
      return <Redirect push to="/protected" />
    }
    else if (this.state.redirectDevice) {
      return <Redirect push to="/device" />
    }
    return(
      <div className="Navbar">
        <div className="Wrapper">
          <img className="main-logo" src={logo}></img>
          <button className="buttons" onClick={this.setRedirectDash}>Dashboard</button>
          <button className="buttons" onClick={this.setRedirectDevice}>Devices</button>
          <button className="buttons" onClick={this.setRedirectUsers}>Users</button>
          <button className="buttons" onClick={this.handleClick}>Logout</button>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
})

export default connect(null, mapDispatchToProps)(Navbar);

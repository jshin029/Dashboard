import React, {Component} from 'react';
import Menu from './Menu';
import './css/Navbar.css';

class Navbar extends Component {
  constructor(){
    super();
    this.state = {
    }
  }
  render(){
    return(
      <div className="Navbar">
        <div className="Wrapper">
          <button className="buttons">Dashboard</button>
          <button className="buttons">Control Panel</button>
        </div>
      </div>
    );
  }
}

export default Navbar;

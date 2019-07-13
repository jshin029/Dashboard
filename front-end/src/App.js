import React from 'react';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';
import Registeration from './components/Registeration';
import Login from './components/Login';


import './App.css';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
    }
  }


  render() {
    return (
      <div className="main">
        <Registeration/>
        <Login/>
      </div>
    );
  }
};

export default App;

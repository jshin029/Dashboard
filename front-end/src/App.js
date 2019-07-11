import React from 'react';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
import Section5 from './components/Section5';

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
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
      </div>
    );
  }
};

export default App;

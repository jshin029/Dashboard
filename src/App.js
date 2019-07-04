import React from 'react';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';
import Section4 from './components/Section4';
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
        <div className="gap"></div>
        <Section2/>
        <h2>Degree Day (per device)</h2>
        <Section3/>
        <h2>Temperature (per device)</h2>
        <Section4/>
      </div>
    );
  }
};

export default App;

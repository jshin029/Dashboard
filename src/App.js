import React from 'react';
import Section1 from './components/Section1';
import Section2 from './components/Section2';
import Section3 from './components/Section3';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
    }
  }


  render() {
    return (
      <div>
        <h2>Insect Count (per location)</h2>
        <Section1/>
        <h2>Insect Count (per device)</h2>
        <Section2/>
        <h2>Degree Day (per device)</h2>
        <Section3/>
      </div>
    );
  }
};

export default App;

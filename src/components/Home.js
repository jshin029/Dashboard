import React from 'react';
import Navbar from './Navbar';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section6 from './Section6';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
    }
  }



  render() {
    return (
      <div className="main">
        <Navbar/>
        <Section6/>
      </div>
    );
  }
};

export default App;

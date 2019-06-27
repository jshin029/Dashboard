import React from 'react';
import Section1 from './components/Section1';
import Section2 from './components/Section2';



class App extends React.Component {
  constructor(){
    super();
    this.state = {
    }
  }


  render() {
    return (
      <div>
        <Section1/>
        <Section2/>
      </div>
    );
  }
};

export default App;

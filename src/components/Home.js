import React, { Component } from 'react';
import Navbar from './Navbar';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section6 from './Section6';
import ControlPanel from './ControlPanel';

export const MyContext = React.createContext();

class MyProvider extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      Email: this.props.Email,
      Perm: this.props.Perm
    }
  }
  render () {
    return(
      <MyContext.Provider value={{
        state: this.state
      }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <MyProvider Email={this.props.Email} Perm={this.props.Perm}>
        <div className="main">
          <Navbar {...this.props}/>
          <Section6/>
        </div>
      </MyProvider>
    );
  }
};

export default Home;

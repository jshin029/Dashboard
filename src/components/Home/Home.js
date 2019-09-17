import React, { Component } from 'react';
import Section6 from './Sections/Section6';
import Navbar from '../Utilities/Navbar';

class Home extends React.Component {
  render() {
    return (
        <div className="main">
          <Navbar />
          <Section6 />
        </div>
    );
  }
};

export default Home;

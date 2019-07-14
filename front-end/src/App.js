import React from 'react';
import Registeration from './components/Registeration';
import Login from './components/Login';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './App.css';

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route/>
)


class App extends React.Component {
  constructor(){
    super();
    this.state = {
    }
  }



  render() {
    return (
      <Router>
        <div>
          <Route path='/' component={Login}/>
          <Route path='/register' component={Registeration}/>
          <PrivateRoute path='/home' component={Home}/>
        </div>
      </Router>
    );
  }
};

export default App;

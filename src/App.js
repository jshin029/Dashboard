import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import ControlPanel from './components/ControlPanel';
import adminRegistration from './components/adminRegistration';
import './App.css';
import { BrowserRouter as Router, Route, HashRouter, Redirect} from 'react-router-dom';



function PrivateRoute ({component: Component, Authenticated, ...rest}) {
  return (
    <Route {...rest} render={(props) => Authenticated === 'True'
        ? <Component Authenticated={Authenticated} />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      Authenticated: 'False',
      Redirect: false
    }
  }

  validate = (condition) => {
    this.setState({Authenticated: condition})
  }

render () {
  console.log(this.state.Authenticated)
    return (
      <HashRouter basename="/">
        <div>
          <Route path="/" exact render={() => <Login validate={this.validate} />} />
          <Route path="/login" render={() => <Login validate={this.validate} />} />
          <Route path="/register" component={Registration} />
          <Route path="/adminRegister" component={adminRegistration} />
          <Route path="/controlPanel" component={ControlPanel} />
          <PrivateRoute path='/protected' Authenticated={this.state.Authenticated} component={Home} />

        </div>
      </HashRouter>
    )
  }
}

export default App;

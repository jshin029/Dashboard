import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import ControlPanel from './components/ControlPanel';
import adminRegistration from './components/adminRegistration';
import './App.css';
import { BrowserRouter as Router, Route, HashRouter, Redirect} from 'react-router-dom';

function PrivateRoute ({component: Component, Authenticated, Email, Perm, ...rest}) {
  console.log(Authenticated)
  return (
    <Route {...rest} render={(props) => Authenticated === 'True'
        ? <Component Email={Email} Perm={Perm}/>
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      Authenticated: 'False',
      Email: '',
      Perm: '',
      Redirect: false
    }
  }

  validate = (condition, userEmail, userPerm) => {
    this.setState({
      Authenticated: condition,
      Email: userEmail,
      Perm: userPerm
    });
  }

render () {
    return (
      <HashRouter basename="/">
        <div>
          <Route path="/" exact render={() => <Login validate={this.validate} />} />
          <Route path="/login" render={() => <Login validate={this.validate} />} />
          <Route path="/register" component={Registration} />
          <Route path="/adminRegister" component={adminRegistration} />
          <Route path="/controlPanel" render={() => <ControlPanel Email={this.state.Email} Perm={this.state.Perm} />}/>
          <PrivateRoute path='/protected' Authenticated={this.state.Authenticated} Email={this.state.Email} Perm={this.state.Perm} component={Home} />
        </div>
      </HashRouter>
    )
  }
}

export default App;

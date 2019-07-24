import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Registeration from './components/Registeration';
import './App.css';
import { BrowserRouter as Router, Route, Redirect} from 'react-router-dom';


function PrivateRoute ({component: Component, Authenticated, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => Authenticated === 'True'
        ? <Component {...props} />
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
      <Router>
        <div>
          <Route path="/" exact render={() => <Login validate={this.validate} />} />
          <Route path="/login" render={() => <Login validate={this.validate} />} />
          <Route path="/register" component={Registeration} />
          <PrivateRoute path='/protected' Authenticated={this.state.Authenticated} component={Home} />
        </div>
      </Router>
    )
  }
}

export default App;

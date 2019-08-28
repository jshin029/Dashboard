import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import ControlPanel from './components/ControlPanel';
import adminRegistration from './components/adminRegistration';
import './App.css';
import { connect } from 'react-redux';
import { getProfileFetch } from './redux/actions'
import { BrowserRouter as Router, Route, HashRouter, Redirect, Switch } from 'react-router-dom';

function PrivateRoute ({component: Component, permissions, ...rest}) {
  return (
    <Route {...rest} render={(props) => permissions === 'Admin' || permissions === 'User'
        ? <Component />
        : <Redirect to={{pathname: '/login', state: {from: props.location}}} />}
    />
  )
}

class App extends React.Component {
  componentDidMount = () => {
    this.props.getProfileFetch()
  }

render () {
    return (
      <div className='app'>
        <HashRouter basename="/">
          <Switch>
            <Route path="/" exact render={() => <Login validate={this.validate} />} />
            <Route path="/login" render={() => <Login validate={this.validate} />} />
            <Route path="/register" component={Registration} />
            <Route path="/adminRegister" component={adminRegistration} />
            <Route path="/controlPanel" component={ControlPanel}/>
            <PrivateRoute path='/protected' component={Home} permissions={this.props.currentUser.permissions ? this.props.currentUser.permissions: ''}/>
          </Switch>
        </HashRouter>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
  getProfileFetch: () => dispatch(getProfileFetch())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

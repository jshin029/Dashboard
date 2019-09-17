import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { userLoginFetch } from '../../redux/actions';
import { connect } from 'react-redux';
import jwt from 'jsonwebtoken';
import './css/Login.css';


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      Email: '',
      Password: '',
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
   event.preventDefault()
   this.props.userLoginFetch(this.state)
   this.setState({
     Email: '',
     Password: '',
   })
  }

  render(){
    if (this.props.currentUser){
      if (this.props.currentUser.permissions === 'Admin' || this.props.currentUser.permissions === 'User'){
        return <Redirect to={{pathname: '/protected'}} />
      }
    }

    return(
      <div className="loginBg">
          <div className="loginInner">
            <div className="signIn">SIGN IN NOW</div>
            <form onSubmit={this.handleSubmit}>
              <input className="input" type="text" name="Email" placeholder="Email" value={this.state.Email} onChange={this.handleChange}/>
              <input className="input" type="password" name="Password" placeholder="Password" value={this.state.Password} onChange={this.handleChange}/>
              <button className="loginButton" type="submit">SIGN IN</button>
              <div className="flex">
                <div>Forgot password?</div>
                <a onClick={this.handleReset}>Reset password</a>
              </div>
            </form>
          </div>
      </div>
    )
  }
};

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

const mapDispatchToProps = dispatch => ({
  userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);

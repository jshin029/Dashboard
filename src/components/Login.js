import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import jwt from 'jsonwebtoken';
import './css/Login.css';


class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      Email: '',
      Password: '',
      redirectToReferrer: false
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch( 'http://localhost:5000/login', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        Email: this.state.Email,
        Password: this.state.Password
      }),
      method: 'POST'
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          Email: '',
          Password: ''
        })
        if (response['Email']){
          this.props.validate('True', response['Email'], response['Permissions'], response['fName'])
          this.setState({
            redirectToReferrer: true
          });
        }
      })
      .catch(err => console.log(err))
  }

  render(){
    if (this.state.redirectToReferrer === true) {
      return <Redirect to={{pathname: '/protected'}} />
    }

    return(
      <div className="loginBg">
          <div className="loginInner">
            <div className="signIn">SIGN IN NOW</div>
            <form onSubmit={this.handleSubmit}>
              <input className="input" type="text" name="Email" placeholder="Email" value={this.state.Email} onChange={this.handleChange}/>
              <input className="input" type="password" name="Password" placeholder="Password" value={this.state.Password} onChange={this.handleChange}/>
              <button className="loginButton" type="submit">SIGN IN</button>
            </form>
          </div>
      </div>
    )
  }
};

export default Login;

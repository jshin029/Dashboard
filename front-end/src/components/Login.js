import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props)
    this.state = {
      Username: '',
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
        Username: this.state.Username,
        Password: this.state.Password
      }),
      method: 'POST'
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          Username: '',
          Password: '',
        })
        this.props.validate(response['Response'])
        if (response['Response'] === 'True'){
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="Username" placeholder="Username" value={this.state.Username} onChange={this.handleChange}/>
          <input type="password" name="Password" placeholder="Password" value={this.state.Password} onChange={this.handleChange}/>
          <button type="submit">Sign in</button>
        </form>
      </div>
    )
  }
};

export default Login;

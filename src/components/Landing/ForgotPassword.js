import React, { Component } from 'react';

class ForgotPassword extends Component {
  state = {

  }

  handleReset = () => {
    fetch("http://localhost:5000/resetPassword", {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"test": "null"}),
      method: "POST"
    })
    .then(resp => resp.json())
    .catch(err => console.log(err))
  }

  render(){
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
}

export default ForgotPassword;

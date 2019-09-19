import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import './css/ResetPassword.css';

class ResetPassword extends Component {
  state = {
    Email: '',
    Redirect: false,
    showToast: false
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleRedirect = () => {
    this.setState({
      Redirect: true
    })
  }

  notify = () => toast("Reset email has been sent");

  handleSubmit = (e) => {
    e.preventDefault();
    this.notify();
    fetch("http://localhost:5000/resetPassword", {
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"Email": this.state.Email}),
      method: "POST"
    })
    .then(resp => resp.json(),
    this.setState({
      showToast: true
    })
  )
    .catch(err => console.log(err))
  }

  render(){
    if (this.state.Redirect){
      return <Redirect to={{pathname: '/login'}} />
    }

    return(
      <div className="resetInner">
        <div className="forgotPassword">FORGOT PASSWORD</div>
        {this.state.showToast &&
          <div className="resetToast">
            <div className="textToast">An email with new password has been sent {this.state.Email}</div>
          </div>
        }
        <form onSubmit={this.handleSubmit}>
          <input className="resetInput" type="email" name="Email" placeholder="Username (Email)" value={this.state.Email} onChange={this.handleChange} />
          <button className="submitButton" type="submit">SUBMIT</button>
        </form>
        <div className="returnLogin">
          <div className="bottomText">
            <div className="returnText">Remembered your password?</div>
            <a className="space" onClick={this.handleRedirect}>Login</a>
          </div>
        </div>
      </div>
    )
  }
}

export default ResetPassword;

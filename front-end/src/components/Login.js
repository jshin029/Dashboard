import React, {Component} from 'react'
class Login extends Component {
  constructor(props){
    super(props)
    this.state ={
      Username: '',
      Password: ''
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
      method: 'POST',
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))
      this.setState({
        Username: '',
        Password: '',
      })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="Username" placeholder="Username" value={this.state.Username} onChange={this.handleChange}/>
          <input type="password" name="Password" placeholder="Password" value={this.state.Password} onChange={this.handleChange}/>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
};

export default Login;

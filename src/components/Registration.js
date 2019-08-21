import React, {Component} from 'react';

class registration extends Component {
  constructor(props){
    super(props)
    this.state = {
      Username: '',
      fName: '',
      lName: '',
      Email: '',
      Password: '',
      Admin: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch( 'http://localhost:5000/registration', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        Username: this.state.Username,
        fName: this.state.fName,
        lName: this.state.lName,
        Email: this.state.Email,
        Password: this.state.Password,
        Admin: this.state.Admin
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
        fName: '',
        lName: '',
        Password: '',
        Email: '',
        Admin: ''
      })
  }
    //run api call to flask


  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="Username" placeholder="Username" value={this.state.Username} onChange={this.handleChange}/>
          <input type="text" name="fName" placeholder="First name" value={this.state.fName} onChange={this.handleChange}/>
          <input type="text" name="lName" placeholder="Last name" value={this.state.lName} onChange={this.handleChange}/>
          <input type="text" name="Email" placeholder="Email" value={this.state.Email} onChange={this.handleChange}/>
          <input type="password" name="Password" placeholder="Password" value={this.state.Password} onChange={this.handleChange}/>
          <input type="text" name="Admin" placeholder="Admin" value={this.state.Admin} onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
};

export default registration;

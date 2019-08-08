import React, { Component } from 'react';

class ControlPanel extends Component {
  constructor(props){
    super(props)
    this.state = {
      Username: ''
    }
  }

  addUsers = () => {
    fetch( 'http://localhost:5000/userList', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        Username: this.state.Username,
      }),
      method: 'POST'
    })
      .then(response => response.json())
      .then(response => {

      })
      .catch(err => console.log(err))
  }

  render(){
    return(
      <div>
        <form onSubmit={this.addUsers}>
          <input type="text" name="Username" placeholder="Username" value={this.state.Username} onChange={this.handleChange}/>
          <button type="submit">add user</button>
        </form>
      </div>
    )
  }

}

export default ControlPanel;

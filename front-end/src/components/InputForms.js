import React, {Component} from 'react';
import axios from 'axios'

class InputForms extends Component {
  constructor(props){
    super(props)
    this.state = {
      Username: ''
    }
  }



  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch( 'http://localhost:5000/test', {
      method: 'GET',
      dataType: 'json'
    })
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))
  }
    //run api call to flask


  render(){
    const {Username} = this.state
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
};

export default InputForms;

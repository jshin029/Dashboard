import React, { Component } from 'react';
import Navbar from '../Utilities/Navbar';
import UserRow from './UserRow';
import { connect } from 'react-redux';
import Particle from 'particle-api-js';
import { Button, Icon } from 'antd';
import ModalComponentUsers from '../Utilities/Modal/ModalComponentUsers';
import './css/Users.css';


class Users extends Component {
  constructor(props){
    super(props)
    this.state = {
      Users: {},
      Email: ''
    }
  }

  fetchUserList = () => {
    fetch( 'http://localhost:5000/userList', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        Email: this.props.currentUser.Email,
      }),
      method: 'POST'
    })
      .then(response => response.json())
      .then(response => {
        this.setState({
          Users: response
        })
      })
      .catch(err => console.log(err))
  }

  addRow = () => {
    let temp = [];
    if (this.state.Users.length > 0){
      for (let i = 0; i < this.state.Users.length; ++i){
        let tempUser = this.state.Users[i]
        temp.push(<UserRow key={i} Email={tempUser['Email']} Name={tempUser['fName']} Role={tempUser['Perm']}/>)
      }
    }
    return temp;
  }

  componentDidMount(){
    this.fetchUserList();
  }

  render(){
    return(
      <div>
        <Navbar/>
        <div className="cpbox1">
          <Icon style={{padding: '5px'}} type="tool" />
          <div>Control Panel / Users</div>
        </div>
        <div className="cpbox2">
          <div className="cpinnerbox1">
            <div className="cpBorder">
              <div className="cpinner1">Users</div>
              <div className="cpinner2">
                <div className="userName">Username (Email)</div>
                <div className="friendlyName">Friendly Name</div>
                <div className="timeZone">Time Zone</div>
                <div className="role">Role</div>
                <div className="edit">Edit</div>
                <div className="delete">Delete</div>
                <div className="deviceAssociation">Device Association</div>
              </div>
            </div>
            {this.addRow()}
            <div className="nextPage">
              <Button style={{marginRight: '8px'}}>Previous</Button>
              <Button>Next</Button>
            </div>
        </div>
          <div className="cpinnerbox2">
            <div className="cpinner3">Additional Operations</div>
            <div className="cpinner4">
              <p>Select an operation to perform.</p>
              <ModalComponentUsers />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps, null)(Users);

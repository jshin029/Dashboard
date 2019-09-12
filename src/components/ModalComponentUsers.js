import React, { useState, Component } from 'react';
import { Modal } from 'react-bootstrap';
import MultiMenu from './MultiMenu';
import { Button, Checkbox } from 'antd';
import './css/ModalComponentUsers.css';

class ModalComponentUsers extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: false,
      email: '',
      name: '',
      timeZone: '',
      deviceAssociation: '',
      role: false,
      emailPassword: false
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleShow = () => {
    this.setState({
      show: true
    })
  }

  handleRole = () => {
    this.setState(prevState => ({
      role: !prevState.role
    }))
  }

  handleEmail = () => {
    this.setState(prevState => ({
      emailPassword: !prevState.emailPassword
    }))
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  handleSubmit = () => {
    this.handleClose()
  }

  render(){
    console.log(this.state.role)
    return(
      <div>
        <Button style={{backgroundColor: '#58C9F3', border: 'none'}} type="primary" onClick={this.handleShow}>Add user</Button>
        <Modal show={this.state.show} onHide={this.handleClose} size="lg" dialogClassName="modalSizingUser">
          <Modal.Header closeButton className="modalUserHeader">
            <Modal.Title className="modalUserTitle">Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="userModalBody">
              <div className="flexUser">
                <div className="textUser">Username (Email)</div>
                <input style={{margin: '0px'}} className="input" type="text" name="email" placeholder="Username (Email)" value={this.state.email} onChange={this.handleChange}/>
              </div>
              <div className="flexUser2">
                <div className="textUser">Name</div>
                <input style={{margin: '0px'}} className="input" type="text" name="name" placeholder="Name" value={this.state.name} onChange={this.props.handleChange}/>
              </div>
              <div className="flexUser2">
                <div className="textUser">Time Zone</div>
                <input style={{margin: '0px'}} className="input" type="text" name="StartfromUTC" placeholder="mm/dd/yyyy" value={this.state.StartfromUTC} onChange={this.props.handleChange}/>
              </div>
              <div className="flexUserText">
                <div className="textUser">Password</div>
                <div className="fillerUser">A random password will be generated</div>
              </div>
              <div className="flexUserText">
                <div className="textUser">Device Association</div>
                <div className="fillerUser">You can associate devices to user later at the Users page</div>
              </div>
              <div className="flexUserText">
                <div className="textUser">Role</div>
                <div className="checkBoxUser">
                  <Checkbox onChange={this.handleRole}>Grant administrator role</Checkbox>
                </div>
              </div>
              <div className="flexUserText">
                <div className="textUser">Email Password</div>
                <div className="checkBoxUser">
                  <Checkbox onChange={this.handleRole}>Send an email with password after creation</Checkbox>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
            <Button type="primary" onClick={this.handleSubmit}>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default ModalComponentUsers;

import React, { useState, Component } from 'react';
import { Modal } from 'react-bootstrap';
import MultiMenu from './MultiMenu';
import { Button, Checkbox, Dropdown } from 'antd';
import './css/ModalComponentDevices.css';
import { connect } from 'react-redux';

class ModalComponentDevices extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: false,
      email: '',
      name: '',
      timeZone: '',
      deviceAssociation: '',
      role: false,
      emailPassword: false,
      userOptions: [],
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
        let temp = [];
        let subdict = {};
        for (let i = 0; i < response.length; ++i){
          subdict = {
            'value': response[i].Email,
            'label': response[i].Email
          }
          temp.push(subdict);
        }
        this.setState({
          userOptions: temp
        })
      })
      .catch(err => console.log(err))
  }

  componentDidMount(){
    this.fetchUserList();
  }

  render(){
    return(
      <div>
        <Button style={{marginTop: '10px', backgroundColor: '#58C9F3', border: 'none'}} type="primary" onClick={this.handleShow}>Bulk Operation</Button>
        <Modal show={this.state.show} onHide={this.handleClose} size="lg" dialogClassName="modalSizingUser">
          <Modal.Header closeButton className="modalUserHeader">
            <Modal.Title className="modalUserTitle">Bulk Operation</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="userModalBody">
              <div className="flexDevice">
                <div className="textDevice">Device Association</div>
                <div style={{width: '85%', margin: '0'}}>
                  <MultiMenu updateDevice={this.props.updateDevice ? this.props.updateDevice: null} options={this.state.userOptions}/>
                </div>
              </div>
              <div className="flexDeviceText">
                <div className="textDevice">Affect Devices</div>
                <div className="fillerDevice">You can associate devices to user later at the Users page</div>
              </div>
              <div className="flexDeviceText">
                <div className="textDevice">Select an operation</div>
                <div className="checkBoxDevice">
                  <div style={{width: '85%'}}>
                    <Checkbox onChange={this.handleRole}>Delete a bulk of devices by associated user</Checkbox>
                    <Checkbox style={{margin: '0'}} onChange={this.handleRole}>Activate a bulk of SIM cards by associated user</Checkbox>
                    <Checkbox style={{margin: '0'}} onChange={this.handleRole}>Deactivate a bulk of SIM cards by associated user</Checkbox>
                  </div>
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

const mapStateToProps = state => ({
  currentUser: state.currentUser
})

export default connect(mapStateToProps, null)(ModalComponentDevices);

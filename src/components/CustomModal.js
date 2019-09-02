import React, { useState, Component } from 'react';
import { Modal } from 'react-bootstrap';


class ModalComponent extends Component {
  constructor(props){
    super(props)
    this.state = {
      show: false,
      Device: '',
      StartfromUTC: '',
      EndatUTC: '',
      Location: '',
      Latitude: '',
      Longitude: '',
      InsectType: '',
      BaseValue: '',
      LowerThreshold: '',
      UpperThreshold: '',
      
    }
  }

  handleShow = () => {
    this.setState({
      show: true
    })
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  render(){
    return(
      <div>
        <button className="addButton" variant="primary" onClick={this.handleShow}>Add</button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Record</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>

            </div>
          </Modal.Body>
          <Modal.Footer>
            <button variant="secondary" onClick={this.handleClose}>
              Close
            </button>

          </Modal.Footer>
        </Modal>
      </div>
    )
  }
}

export default ModalComponent;

import React, { useState, Component } from 'react';
import { Modal } from 'react-bootstrap';
import MultiMenu from './MultiMenu';
import { connect } from 'react-redux';


const options = [
  {value: 'Yes', label: 'Yes'},
  {value: 'No', label: 'No'},
]

const options2 = [
  {value: 'Yes', label: 'Yes'},
  {value: 'No', label: 'No'},
]

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
      extraData: false,
      dataVisibility: false
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

  handleSubmit = () => {
    //add fetch or dispatch
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render(){
    return(
      <div>
        <button className="addButton" variant="primary" onClick={this.handleShow}>Add</button>
        <Modal show={this.state.show} onHide={this.handleClose} size="lg" dialogClassName="modalSizing">
          <Modal.Header closeButton className="modalHeader">
            <Modal.Title className="modalTitle">Add Record</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <form onSubmit={this.handleSubmit}>
                <div>
                  <div className="flex">
                    <div className="nextForm">Device</div>
                    <div style={{width: '90%'}}>
                      <MultiMenu options={this.props.deviceOptions}/>
                    </div>
                  </div>
                  <div className="flex2">
                    <div className="nextForm">Start from (UTC)</div>
                    <input style={{margin: '0px'}} className="input" type="text" name="StartfromUTC" placeholder="mm/dd/yyyy" value={this.state.StartfromUTC} onChange={this.handleChange}/>
                  </div>
                  <div className="flex2">
                    <div className="nextForm">End at (UTC)</div>
                    <input style={{margin: '0px'}} className="input" type="text" name="EndatUTC" placeholder="mm/dd/yyyy" value={this.state.EndatUTC} onChange={this.handleChange}/>
                  </div>
                  <div className="flex2">
                    <div className="nextForm">Location</div>
                    <input style={{margin: '0px'}} className="input" type="text" name="Location" placeholder="Location (case-sensitive)" value={this.state.Location} onChange={this.handleChange}/>
                  </div>
                  <div className="flex2">
                    <div className="nextForm">Latitude</div>
                    <input style={{margin: '0px'}} className="input" type="text" name="Latitude" placeholder="Latitude (leave blank for removing latitude)" value={this.state.Latitude} onChange={this.handleChange}/>
                  </div>
                  <div className="flex2">
                    <div className="nextForm">Longitude</div>
                    <input style={{margin: '0px'}} className="input" type="text" name="Longitude" placeholder="Longitude (leave blank for removing longitude)" value={this.state.Longitude} onChange={this.handleChange}/>
                  </div>
                  <div className="flex2">
                    <div className="nextForm">Insect type</div>
                    <input style={{margin: '0px'}} className="input" type="text" name="InsectType" placeholder="Insect type (case-sensitive)" value={this.state.InsectType} onChange={this.handleChange}/>
                  </div>
                  <div className="flex2">
                    <div className="nextForm">Base value (°C)</div>
                    <input style={{margin: '0px'}} className="input" type="text" name="BaseValue" placeholder="Used in degree-day computation" value={this.state.BaseValue} onChange={this.handleChange}/>
                  </div>
                  <div className="flex2">
                    <div className="nextForm">Lower Threshold (°C)</div>
                    <input style={{margin: '0px'}} className="input" type="text" name="LowerThreshold" placeholder="Used in degree-day computation" value={this.state.LowerThreshold} onChange={this.handleChange}/>
                  </div>
                  <div className="flex2">
                    <div className="nextForm">Upper Threshold (°C)</div>
                    <input style={{margin: '0px'}} className="input" type="text" name="UpperThreshold" placeholder="Used in degree-day computation" value={this.state.UpperThreshold} onChange={this.handleChange}/>
                  </div>
                  <div className="flex2">
                    <div className="nextForm">Require extra process to data?</div>
                    <select className="toggleBox" name="extraData" onChange={this.handleChange}>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                  <div className="flex2">
                    <div className="nextForm">Data visible to user?</div>
                    <select className="toggleBox" name="dataVisibility" onChange={this.handleChange}>
                      <option value="true">Yes</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                </div>
              </form>
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

//export default connect(mapStateToProps, null)(ModalComponent);
export default ModalComponent;

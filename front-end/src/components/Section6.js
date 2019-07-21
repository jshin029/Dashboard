import React, {Component} from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Chart from './Chart';
import Menu from './Menu';
import './section.css';

const options = [
  {value: 'Bar', label: 'Bar'},
  {value: 'Line', label: 'Line'},
  {value: 'Pie', label: 'Pie'}
]

class Section4 extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartDevice: null,
      chartData: null,
      deviceNumber: null,
      options2: [],
      chartType:'Bar',
      device: '',
      focusedInput: null
    }
  }

  graphClick = (graph) => {
    this.setState({chartType: graph});
  }

  getDevice = () => {
    fetch( 'http://localhost:5000/device', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          chartDevice: data
        })
        this.setLabels()
      })
      .catch(err => console.log(err))
  }

  getdeviceData = () => {
    fetch( 'http://localhost:5000/deviceData', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => console.log(err))
  }

  setLabels = () => {
    if (this.state.chartDevice != null){
      var temp = {};
      var list = [];
      for (var i = 0; i < this.state.chartDevice.length; ++i){
        temp = {
          'value': this.state.chartDevice[i].deviceId,
          'label': this.state.chartDevice[i].deviceId
        }
        list.push(temp)
        temp = {}
      }
      this.setState({
        options2: list
      })
    }
  }

  componentDidMount(){
    this.getDevice()
  }

  render() {
    return (
      <div className="block">
        <div className="outline">
          <h2 className="title">Insect Count (per hour)</h2>
        </div>
        <div className="outline2">
        <div className="wrapper">
          <div className="location">
            <div className="inner1">
              <p className="text">Select a device</p>
            </div>
            <div className="inner2">
              <Menu location={this.location} options={this.state.options2}/>
            </div>
          </div>
          <div className="type">
            <div className="inner1">
              <p className="text">Chart type</p>
            </div>
            <div className="inner2">
              <Menu graphClick={this.graphClick} options={options}/>
            </div>
          </div>
        </div>
        <div className="graph">
          <button onClick={this.getdeviceData}>Test</button>
        </div>
      </div>
      </div>
    );
  }
};

export default Section4;

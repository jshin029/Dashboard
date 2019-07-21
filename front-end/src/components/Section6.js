import React, {Component} from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Chart from './Chart';
import Menu from './Menu';
import moment from 'moment';
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
      chartData: {},
      deviceNumber: null,
      options2: [],
      chartType:'Bar',
      device: '',
      section: 'section6',
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
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        deviceNumber: this.state.deviceNumber,
      }),
      method: 'POST'
    })
      .then(response => response.json())
      .then(data => {
        this.setchartData(data)
      })
      .catch(err => console.log(err))
  }

  setchartData = (responseData) => {
    var labels = []
    var data = []
    var temp = ''
    for (var i = 0; i < 10; ++i){
      temp = (responseData[i].capturedAt)
      temp = temp.slice(17, 22)
      labels.push(temp)
      data.push(responseData[i].hourlyCount)
    }
    this.setState({
      chartData:{
        labels: labels,
        datasets: [
          {
            label: "test",
            data: data,
            backgroundColor:'rgba(63, 63, 191, 0.6)'
          }
        ]
      }
    });
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
    this.getdeviceData()
  }

  render() {
    console.log(this.state.chartData)
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
          <Chart chartData={this.state.chartData} title={this.state.device} chartType={this.state.chartType} section={this.state.section}/>
        </div>
      </div>
      </div>
    );
  }
};

export default Section4;

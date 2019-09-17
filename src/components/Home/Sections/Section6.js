import React, { Component } from 'react';
import Calendar from '../../Utilities/Calendar';
import Singledate from '../../Utilities/Singledate';
import Chart from '../../Utilities/Chart';
import Menu from '../../Utilities/Menu';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '../css/Section.css';

const options = [
  {value: 'Bar', label: 'Bar'},
  {value: 'Line', label: 'Line'},
]

class Section4 extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartDevice: null,
      chartData: {},
      deviceName: null,
      options2: [],
      chartType:'Bar',
      device: '',
      section: 'section6',
      Date: null,
      focusedInput: null
    }
  }

  graphClick = (graph) => {
    this.setState({chartType: graph});
  }

  getDevice = () => {
    fetch( 'http://dashboardcountdaily.us-east-2.elasticbeanstalk.com//device', {
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

  setdeviceName = (device) => {
    this.setState({
      deviceName: device
    });
    if (this.state.Date){
      console.log('made into date')
      this.getdeviceDataDate(this.state.Date, device)
    }
  }

  getdeviceData = () => {
    fetch( 'http://dashboardcountdaily.us-east-2.elasticbeanstalk.com//deviceData', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        deviceName: this.state.deviceName,
        date: null
      }),
      method: 'POST'
    })
      .then(response => response.json())
      .then(data => {
        this.setchartData(data)
      })
      .catch(err => console.log(err))
  }

  getdeviceDataDate = (convert, device) => {
    fetch( 'http://dashboardcountdaily.us-east-2.elasticbeanstalk.com//deviceData', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify ({
        deviceName: device,
        date: convert
      }),
      method: 'POST'
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setchartData(data)
      })
      .catch(err => console.log(err))
  }

  setchartData = (responseData) => {
    var labels = []
    var data = []
    var temp = ''
    for (var i = 0; i < responseData.length; ++i){
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
          'value': this.state.chartDevice[i].deviceName,
          'label': this.state.chartDevice[i].deviceName
        }
        list.push(temp)
        temp = {}
      }
      this.setState({
        options2: list
      })
    }
  }

  range = (date) => {
    if (date != null){
      var convert = date.format('YYYY-MM-DD')
      this.setState({
        Date: convert
      })
      if (this.state.deviceName){
        console.log(convert)
        console.log(this.state.deviceName)
        this.getdeviceDataDate(convert, this.state.deviceName)
      }
    }
  }

  componentDidMount(){
    this.getDevice()
    this.getdeviceData()
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
              <Menu setdeviceName={this.setdeviceName} options={this.state.options2} section={this.state.section}/>
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
          <div className="timeframe">
            <div className="inner1">
              <p className="text">Select a time frame</p>
            </div>
            <div className="inner2">
              <Singledate range={this.range}/>
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

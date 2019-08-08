import React, {Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';
import './css/Chart.css';


class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData: props.chartData,
      error: null,
      labels: ['1', '2', '3'],
      datasets: [{}],
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend:true,
    legendPosition:'right',
    location:'Location'
  }



  render(){
    if (this.props.chartType==='Bar' && this.props.units==='Section3' && this.props.celsius){
      return (
        <div className="chart">
          <Bar
            data={this.props.chartData}
            options={{
              legend: {
                display: false
              },
              scales: {
                xAxes: [{
                  offset: true,
                  type: 'time',
                  time:
                  {
                    stepSize: 1,
                    unit: 'day',
                    format: 'MMM DD',
                    parser: 'MMM DD',
                    displayFormats: { month: 'MMM DD' },
                    max: this.props.endDate,
                    min: this.props.startDate
                  }
                }],
                yAxes: [{
                  ticks: {
                    beginAtZero: true,
                    max: 400,
                    callback: function(value, index, values) {
                      return value + "° C";
                    }
                  }
                }]
              },
              maintainAspectRatio: false,
              title:{
                display:this.props.displayTitle,
                text: this.props.title,
              }
            }}
          />
        </div>
      );
    }

    else if  (this.props.chartType==='Line' && this.props.units==='Section3' && this.props.celsius){
      return (
        <div className="chart">
        <Line
          data={this.props.chartData}
          options={{
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                offset: true,
                type: 'time',
                time:
                {
                  stepSize: 1,
                  unit: 'day',
                  format: 'MMM DD',
                  parser: 'MMM DD',
                  displayFormats: { month: 'MMM DD' },
                  max: this.props.endDate,
                  min: this.props.startDate
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  max: 400,
                  callback: function(value, index, values) {
                    return value + "° C";
                  }
                }
              }]
            },
            maintainAspectRatio: false,
            title:{
              display:this.props.displayTitle,
              text: this.props.title,
            }
          }}
        />
        </div>
      );
    }

    else if  (this.props.chartType==='Pie' && this.props.units==='Section3' && this.props.celsius){
      return (
        <div className="chart">
        <Pie
          data={this.props.chartData}
          options={{
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                offset: true,
                type: 'time',
                time:
                {
                  stepSize: 1,
                  unit: 'day',
                  format: 'MMM DD',
                  parser: 'MMM DD',
                  displayFormats: { month: 'MMM DD' },
                  max: this.props.endDate,
                  min: this.props.startDate
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  max: 400,
                  callback: function(value, index, values) {
                    return value + "° C";
                  }
                }
              }]
            },
            maintainAspectRatio: false,
            title:{
              display:this.props.displayTitle,
              text: this.props.title,
            }
          }}
        />
        </div>
      );
    }
    else if (this.props.chartType==='Bar' && this.props.units==='Section3' && !this.props.celsius){
      return (
        <div className="chart">
          <Bar
            data={this.props.chartData}
            options={{
              legend: {
                display: false
              },
              scales: {
                xAxes: [{
                  offset: true,
                  type: 'time',
                  time:
                  {
                    stepSize: 1,
                    unit: 'day',
                    format: 'MMM DD',
                    parser: 'MMM DD',
                    displayFormats: { month: 'MMM DD' },
                    max: this.props.endDate,
                    min: this.props.startDate
                  }
                }],
                yAxes: [{
                  ticks: {
                    beginAtZero: true,
                    max: 400,
                    callback: function(value, index, values) {
                      return value + "° F";
                    }
                  }
                }]
              },
              maintainAspectRatio: false,
              title:{
                display:this.props.displayTitle,
                text: this.props.title,
              }
            }}
          />
        </div>
      );
    }

    else if  (this.props.chartType==='Line' && this.props.units==='Section3' && !this.props.celsius){
      return (
        <div className="chart">
        <Line
          data={this.props.chartData}
          options={{
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                offset: true,
                type: 'time',
                time:
                {
                  stepSize: 1,
                  unit: 'day',
                  format: 'MMM DD',
                  parser: 'MMM DD',
                  displayFormats: { month: 'MMM DD' },
                  max: this.props.endDate,
                  min: this.props.startDate
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  max: 400,
                  callback: function(value, index, values) {
                    return value + "° F";
                  }
                }
              }]
            },
            maintainAspectRatio: false,
            title:{
              display:this.props.displayTitle,
              text: this.props.title,
            }
          }}
        />
        </div>
      );
    }

    else if  (this.props.chartType==='Pie' && this.props.units==='Section3' && !this.props.celsius){
      return (
        <div className="chart">
        <Pie
          data={this.props.chartData}
          options={{
            legend: {
              display: false
            },
            scales: {
              xAxes: [{
                offset: true,
                type: 'time',
                time:
                {
                  stepSize: 1,
                  unit: 'day',
                  format: 'MMM DD',
                  parser: 'MMM DD',
                  displayFormats: { month: 'MMM DD' },
                  max: this.props.endDate,
                  min: this.props.startDate
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  max: 400,
                  callback: function(value, index, values) {
                    return value + "° F";
                  }
                }
              }]
            },
            maintainAspectRatio: false,
            title:{
              display:this.props.displayTitle,
              text: this.props.title,
            }
          }}
        />
        </div>
      );
    }

    else if (this.props.chartType==='Bar' && this.props.units==='Section1'){
      return (
        <div className="chart">
          <Bar
            data={this.props.chartData}
            options={{
              responsive: true,
              scales: {
                xAxes: [{
                  offset: true,
                  type: 'time',
                  time:
                  {
                    stepSize: 1,
                    unit: this.props.time,
                    format: 'MMM DD',
                    parser: 'MMM DD',
                    displayFormats: { month: 'MMM DD' },
                    max: this.props.endDate,
                    min: this.props.startDate
                  }
                }],
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              },
              maintainAspectRatio: false,
              title:{
                display:this.props.displayTitle,
                text: this.props.title,
              },
              legend:{
                display:this.props.displayLegend,
                position:'right'
              }
            }}
          />
        </div>
      );
  }

    else if (this.props.chartType==='Line' && this.props.units==='Section1'){
      return (
        <div className="chart">
        <Line
          data={this.props.chartData}
          options={{
            scales: {
              xAxes: [{
                offset: true,
                type: 'time',
                time:
                {
                  stepSize: 1,
                  unit: this.props.time,
                  format: 'MMM DD',
                  parser: 'MMM DD',
                  displayFormats: { month: 'MMM DD' },
                  max: this.props.endDate,
                  min: this.props.startDate
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            },
            maintainAspectRatio: false,
            title:{
              display:this.props.displayTitle,
              text: this.props.title,
            },
            legend:{
              display:this.props.displayLegend,
              position:'right'
            }
          }}
        />
        </div>
      );
  }

  else if (this.props.chartType==='Pie' && this.props.units==='Section1'){
    return (
      <div className="chart">
      <Pie
        data={this.props.chartData}
        options={{
          scales: {
            xAxes: [{
              offset: true,
              type: 'time',
              time:
              {
                stepSize: 1,
                unit: this.props.time,
                format: 'MMM DD',
                parser: 'MMM DD',
                displayFormats: { month: 'MMM DD' },
                max: this.props.endDate,
                min: this.props.startDate
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          maintainAspectRatio: false,
          title:{
            display:this.props.displayTitle,
            text: this.props.title,
          },
          legend:{
            display:this.props.displayLegend,
            position:'right'
          }
        }}
      />
      </div>
    );
  }


    else if (this.props.chartType==='Bar' && this.props.section==='section6'){
      return (
        <div className="chart">
          <Bar
            data={this.props.chartData}
            options={{
              scales: {
                xAxes: [{
                  offset: true,
                  type: 'time',
                  time:
                  {
                    stepSize: 1,
                    unit: 'hour',
                    format: 'HH:mm',
                    parser: 'HH:mm',
                    min: '00:00',
                    max: '24:00',
                    displayFormats: { hour: 'HH:mm' }
                  }
                }],
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              },
              maintainAspectRatio: false,
              title:{
                display:this.props.displayTitle,
                text: this.props.title,
              },
              legend:{
                display: false
              }
            }}
          />
        </div>
      );
    }

    else if (this.props.chartType==='Bar'){
      return (
        <div className="chart">
          <Bar
            data={this.props.chartData}
            options={{
              scales: {
                xAxes: [{
                  offset: true,
                  type: 'time',
                  time:
                  {
                    stepSize: 1,
                    unit: 'day',
                    format: 'MMM DD',
                    parser: 'MMM DD',
                    displayFormats: { month: 'MMM DD' },
                    max: this.props.endDate,
                    min: this.props.startDate
                  }
                }],
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              },
              maintainAspectRatio: false,
              title:{
                display:this.props.displayTitle,
                text: this.props.title,
              },
              legend:{
                display:this.props.displayLegend,
                position:'right'
              }
            }}
          />
        </div>
      );
  }

    else if (this.props.chartType==='Line'){
      return (
        <div className="chart">
        <Line
          data={this.props.chartData}
          options={{
            scales: {
              xAxes: [{
                offset: true,
                type: 'time',
                time:
                {
                  stepSize: 1,
                  unit: 'day',
                  format: 'MMM DD',
                  parser: 'MMM DD',
                  displayFormats: { month: 'MMM DD' },
                  max: this.props.endDate,
                  min: this.props.startDate
                }
              }],
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            },
            maintainAspectRatio: false,
            title:{
              display:this.props.displayTitle,
              text: this.props.title,
            },
            legend:{
              display:this.props.displayLegend,
              position:'right'
            }
          }}
        />
        </div>
      );
  }

  else if (this.props.chartType==='Pie'){
    return (
      <div className="chart">
      <Pie
        data={this.props.chartData}
        options={{
          scales: {
            xAxes: [{
              offset: true,
              type: 'time',
              time:
              {
                stepSize: 1,
                unit: 'day',
                format: 'MMM DD',
                parser: 'MMM DD',
                displayFormats: { month: 'MMM DD' },
                max: this.props.endDate,
                min: this.props.startDate
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          },
          maintainAspectRatio: false,
          title:{
            display:this.props.displayTitle,
            text: this.props.title,
          },
          legend:{
            display:this.props.displayLegend,
            position:'right'
          }
        }}
      />
      </div>
    );
  }

}
};

export default Chart;

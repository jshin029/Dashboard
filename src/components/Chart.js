import React, {Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';

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
    if (this.props.chartExtract != null){

    }
    if (this.props.chartType=='Bar'){
      return (
        <div className="chart">
          <Bar
            data={this.props.chartData}
            options={{
              scales: {
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

    else if (this.props.chartType=='Line'){
      return (
        <div className="chart">
          <Line
            data={this.props.chartData}
            options={{
              scales: {
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

  else if (this.props.chartType=='Pie'){
    return (
      <div className="chart">
        <Pie
          data={this.props.chartData}
          options={{
            scales: {
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

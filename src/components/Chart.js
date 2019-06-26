import React, {Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData,
      error: null
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend:true,
    legendPosition:'right',
    location:'Location'
  }

  render(){

    console.log(this.props.chartData);

    if (this.props.chartType=='Bar'){
      return (
        <div className="chart">
          <Bar
            data={this.props.chartData}
            options={{
              maintainAspectRatio: false,
              title:{
                display:this.props.displayTitle,
                text:'Location is in: ' + this.props.location,
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
              maintainAspectRatio: false,
              title:{
                display:this.props.displayTitle,
                text:'Location is in: ' + this.props.location,
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
            maintainAspectRatio: false,
            title:{
              display:this.props.displayTitle,
              text:'Location is in: ' + this.props.location,
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

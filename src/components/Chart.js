import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

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
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
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
        {this.state.error &&
          <h3>{this.state.error}</h3>
        }
      </div>
    );
  }
};

export default Chart;

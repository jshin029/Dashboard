import React, {Component} from 'react';
import {Bar,Line,Pie} from 'react-chartjs-2';

class Chart extends Component {
  constructor(props){
    super(props);
    this.state = {
      chartData:{
          labels: ['05-06', '05-07', '05-08', '05-09', '05-10', '05-11', '05-12', '05-13', '05-14'],
          datasets: [
            {
              label:'Device_1',
              data:[
                0,
                5.75,
                11.5,
                17.25,
                23
              ],
              backgroundColor:[
                'rgba(63, 63, 191, 0.6)',
                'rgba(63, 63, 191, 0.6)',
                'rgba(63, 63, 191, 0.6)',
                'rgba(63, 63, 191, 0.6)',
                'rgba(63, 63, 191, 0.6)'
              ]
            },
            {
              label:'Device_2',
              data:[
                5,
                10,
                15,
                20,
                25
              ],
              backgroundColor:[
                'rgba(63, 191, 63, 0.6)',
                'rgba(63, 191, 63, 0.6)',
                'rgba(63, 191, 63, 0.6)',
                'rgba(63, 191, 63, 0.6)',
                'rgba(63, 191, 63, 0.6)'
              ]
            },
            {
              label:'Device_3',
              data:[
                7,
                9,
                23,
                2,
                18
              ],
              backgroundColor:[
                'rgba(10, 255, 255, 0.6)',
                'rgba(10, 255, 255, 0.6)',
                'rgba(10, 255, 255, 0.6)',
                'rgba(10, 255, 255, 0.6)',
                'rgba(10, 255, 255, 0.6)'
              ]
            }
          ]
      },
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
    if (this.props.chartType=='Bar'){
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
        </div>
      );
  }

    else if (this.props.chartType=='Line'){
      return (
        <div className="chart">
          <Line
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
        </div>
      );
  }

  else if (this.props.chartType=='Pie'){
    return (
      <div className="chart">
        <Pie
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
      </div>
    );
}
}
};

export default Chart;

import React from "react";
import Chart from "./components/Chart"

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    };
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    //Ajax calls here
    this.setState({
      chartData:{

          labels: ['h7', 'h2', 'h3', 'h4', 'h5'],
          datasets: [
            {
              label:'Population',
              data:[
                60000,
                50000,
                40000,
                30000,
                20000
              ],
              backgroundColor:[
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 99, 132, 0.6)'
              ]
            }
          ]

      }
    });
  }


  render() {
    return (
      <div>
      <Chart chartData={this.state.chartData} location="California"/>
      </div>
    );
  }
};

export default App;

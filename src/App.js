import React from 'react';
import Calendar from './components/Calendar';
import Chart from './components/Chart';

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

  //rerender as needed
  componentDidMount(){

  }

  getChartData(){
    //Ajax calls here
    this.setState({
      chartData:{

          labels: ['05-06', '05-07', '05-08', '05-09', '05-10', '05-11', '05-12', '05-13', '05-14'],
          datasets: [
            {
              label:'Population',
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
                'rgba(63, 63, 191, 0.6)',
              ]
            },
            {
              label:'Second Population',
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
                'rgba(63, 191, 63, 0.6)',
              ]
            }
          ]

      }
    });
  }


  render() {
    return (
      <div>
      <Calendar />
      <Chart chartData={this.state.chartData} location="California"/>
      </div>
    );
  }
};

export default App;

import React from 'react';
import Chart from './components/Chart';
import Calendar from './components/Calendar';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      chartType:'Bar'
    }
  }

  BarClick = () => {
    this.setState({chartType:'Bar'});
  }

  LineClick = () => {
    this.setState({chartType:'Line'});
  }

  PieClick = () => {
    this.setState({chartType:'Pie'});
  }

  render() {
    const falseFunc = ()=>false;
    return (
      <div>
        <div className="Chart">
        <p>Select a Chart Type: </p>
        <button onClick={this.BarClick}>Bar</button>
        <button onClick={this.LineClick}>Line</button>
        <button onClick={this.PieClick}>Pie</button>
        </div>
        <div className="Calendar">
        <p>Select a Location: </p>
        <Calendar/>
        </div>

        <Chart location="California" chartType={this.state.chartType} temp={this.state.startDate}/>
      </div>
    );
  }
};

export default App;

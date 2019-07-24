import React, {Component} from 'react';
import Menu from './Menu';
import './css/Section.css';

const location = [
  {value: 'loc-1', label: 'loc-1'},
  {value: 'loc-2', label: 'loc-2'},
  {value: 'loc-3', label: 'loc-3'}
]

class Section5 extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div className="block">
        <div className="outline">
          <h2 className="title">Insect Heatmap</h2>
        </div>
        <div className="outline3">
          <Menu options={location}/>
        </div>
      </div>

    );
  };

};
export default Section5;

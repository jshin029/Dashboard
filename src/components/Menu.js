import React, {Component} from 'react';
import Select from 'react-select';



const options = [
  {value: 'one', label: 'one'},
  {value: 'two', label: 'two'},
  {value: 'three', label: 'three'}
]


class Menu extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedOption: null
    };
  }

  handleChange = (selectedOption) => {
    this.setState({selectedOption});
  }

    render(){
      const {selectedOption} = this.state;

      return(
        <div>
          <Select value={selectedOption} onChange={this.handleChange} options={options}/>
        </div>
      );
    }
}

export default Menu;

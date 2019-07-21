import React, {Component} from 'react';
import Select from 'react-select';

class Menu extends Component {
  constructor(props){
    super(props);
    this.state = {
      selectedOption: this.props.options[0]
    };
  }

  handleChange = (selectedOption) => {
    this.setState({selectedOption});
    if(selectedOption.label === 'Bar' || selectedOption.label === 'Line' || selectedOption.label === 'Pie'){
      this.props.graphClick(selectedOption.label);
    }
    else{
      this.props.location(selectedOption.label);
    }
  }

    render(){
      const {selectedOption} = this.state;
      return(
        <Select value={selectedOption} onChange={this.handleChange} options={this.props.options}/>
      );
    }
}

export default Menu;

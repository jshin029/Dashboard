import React, {Component} from 'react';
import Select from 'react-select';

const customStyles = {
   control: (base, state) => ({
     ...base,
     borderColor: '#F0F0F0',
     borderWidth: '2px',
     borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
     // Overwrittes the different states of border
     // Removes weird border around container
     boxShadow: state.isFocused ? null : null,
     "&:hover": {
       // Overwrittes the different states of border
     }
   }),
   menu: base => ({
     ...base,
     // override border radius to match the box
     borderRadius: 0,
     // beautify the word cut by adding a dash see https://caniuse.com/#search=hyphens for the compatibility
     hyphens: "auto",
     // kill the gap
     marginTop: 0,
     textAlign: "left",
     // prevent menu to scroll y
     wordWrap: "break-word"
   }),
   menuList: base => ({
     ...base,
     // kill the white space on first and last option
     padding: 0
   })
 };
class MultiMenu extends Component {
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
        <Select styles={customStyles} value={selectedOption} onChange={this.handleChange} options={this.props.options} isMulti={true}/>
      );
    }
}

export default MultiMenu;

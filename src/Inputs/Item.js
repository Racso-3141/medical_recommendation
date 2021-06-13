import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useStateValue} from "../StateProvider";
import "./Item.css";

class InnerItem extends React.Component {
    handleAdd = () => {
        this.props.inner_add();
    }

    handleRemove = () => {
        this.props.inner_remove();
    }

    render() {
        return (
            <div className="Item">
                <div className="SearchBar">
                    <Autocomplete
                        freeSolo
                        options={this.props.inner_options}
                        autoComplete
                        renderInput={(params) => (
                            <TextField {...params} label={this.props.inner_label} margin="normal" variant="outlined" />
                        )}
                    />
            </div>
            <div className="add_remove">
                <button onClick={this.handleAdd}>Add</button>
                {this.props.inner_head === false &&
                    <button onClick={this.handleRemove}>Remove</button>
                }
            </div>
            </div>
        )
    }
  }
  
  function Item({add, remove, options, label, head}) {
      const [userInput, setUserInput] = useState("");
      const getInput = (value) => {
          setUserInput(value);
      }
      return (
          <InnerItem inner_add={add} inner_remove={remove} 
          inner_options={options} inner_label={label} inner_head={head} inner_getInput = {getInput}/>
      )
  }
  
  export default Item
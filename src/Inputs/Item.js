import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useStateValue} from "../StateProvider";
import "./Item.css";

function Item() {
    const [{diagnoses, procedures, drugs}] = useStateValue();

    handleAdd = () => {
        this.props.add()
    }

    handleRemove = () => {
        
    }

    render() {
        return (
            <div className="Item">
                <div className="SearchBar">
                    <Autocomplete
                        freeSolo
                        options={this.props.options}
                        autoComplete
                        renderInput={(params) => (
                            <TextField {...params} label={this.props.label} margin="normal" variant="outlined" />
                        )}
                    />
            </div>
            <div className="add_remove">
                <button onClick={this.handleAdd}>Add</button>
                {this.props.head === false &&
                    <button onClick={this.handleRemove}>Remove</button>
                }
            </div>
            </div>
        )
      }
  }
  
export default Item
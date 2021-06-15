import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useStateValue} from "../StateProvider";
import "./Item.css";

function Item({addAfter, removeCurrent, label, options, head, idx}) {    
    const handleAdd = () => {
        addAfter(idx);
    }

    const handleRemove = () => {
        removeCurrent(idx);
    }

    return (
        <div className="Item">
            <div className="SearchBar">
                <Autocomplete
                    freeSolo
                    options={options}
                    autoComplete
                    renderInput={(params) => (
                        <TextField {...params} label={label} margin="normal" variant="outlined" />
                    )}
                />
        </div>
        <div className="add_remove">
            <button onClick={handleAdd}>Add</button>
            {head === false &&
                <button onClick={handleRemove}>Remove</button>
            }
        </div>
        </div>
    )
}
  
  
  export default Item
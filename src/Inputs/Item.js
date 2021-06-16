import React, {useState, useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import {useStateValue} from "../StateProvider";
import "./Item.css";

function Item({addAfter, removeCurrent, onSelectedChange, onInputChange, label, options, head, idx, curVal}) { 
    
    const handleAdd = () => {
        addAfter(idx);
    };

    const handleRemove = () => {
        removeCurrent(idx);
    };

    const handleSelectedChange = (value) => {
        onSelectedChange(idx, value);
    };

    const handleInputChange = (value) => {
        onInputChange(idx, value);
    };

    return (
        <div className="Item">
            <div className="SearchBar">
                <Autocomplete
                    freeSolo
                    value={curVal}
                    onChange={(event, value)=>handleSelectedChange(value)}
                    onInputChange={(event, value)=>handleInputChange(value)}
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
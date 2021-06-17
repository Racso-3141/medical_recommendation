import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import { IconButton } from '@material-ui/core';
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
                        <TextField {...params} label={label} margin="normal" variant="outlined" 
                            className="inputRounded"
                            placeholder="Search"
                        />
                    )}
                />
            </div>
            <div className="add-remove">
                <IconButton id="add" onClick={handleAdd} size="small" p={0}>
                    <AddIcon/>
                </IconButton>
                {head === false &&
                    <IconButton id="remove" onClick={handleRemove} size="small" p = {0}>
                        <RemoveIcon/>
                    </IconButton>
                }
            </div>
        </div>
    )
}
  
  
  export default Item
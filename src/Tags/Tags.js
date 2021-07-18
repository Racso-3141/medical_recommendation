/* eslint-disable no-use-before-define */
import React, {useState} from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {useStateValue} from "../StateProvider";


export default function Tags({label, options}) {
    
    const [state, dispatch] = useStateValue();
    return (
    <div className={label}>

        <Autocomplete
        multiple
        options={options}
        onChange={(event, value)=>{
            dispatch({
                type: label,
                data: value
            });
        }}
        renderInput={(params) => (
            <TextField
                {...params}
                variant="outlined"
            />
        )}
        />
    </div>
    );
}

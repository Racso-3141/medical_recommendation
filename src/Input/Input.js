import React, {useState} from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import {useStateValue} from "../StateProvider";
import { makeStyles } from "@material-ui/core/styles";  

const useStyles = makeStyles({
    inputRoot: {
      width: "50%"
    }
});

export default function Input({label, options}) {
    
    const [state, dispatch] = useStateValue();
    return (
        <div className={label}>

            <Autocomplete
                freeSolo
                options={options.sort()}
                onChange={(event, value)=>{
                    
                    if (value !== null) {
                        let clone = [...state[label]];
                        clone.push(value);
                        dispatch({
                            type: label,
                            data: clone
                        });
                    }
                    
                }}
                renderInput={(params) => (
                <TextField {...params} label={label} margin="normal" variant="outlined" />
                )}
            />
        </div>
    );
}

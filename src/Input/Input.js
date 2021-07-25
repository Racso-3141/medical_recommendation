import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import {useStateValue} from "../StateProvider";

export default function Input({label, options}) {
    const inputStyle = {
        display: "block",
        background: "rgba(0, 0, 0, 0.1)",
        border: "0",
        color: "rgba(0, 0, 0, 0.6)",
    };

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
                <TextField {...params} 
                    margin="normal" 
                    variant="outlined"
                    style={inputStyle} />
                )}
            />
        </div>
    );
}

import React from 'react';
import {useStateValue} from "../StateProvider";
import RemoveIcon from '@material-ui/icons/Remove';
import { IconButton } from '@material-ui/core';
import './List.scss';

function List({label}) {

    const [state, dispatch] = useStateValue();   

    const handleRemove = (idx) => {
      let clone = [...state[label]];
      
      clone.splice(idx, 1);

      dispatch({
        type: label,
        data: clone
      });

    }

    return (
        <div>
            <main>
              {state[label].map(item => 
                <div className="Item">
                  <h4>
                    <span>{item}</span>
                  </h4>
                  <IconButton id="remove" onClick={handleRemove} size='small'>
                      <RemoveIcon style={{fontSize: '15px'}}/>
                  </IconButton>
                </div>
                )}
            </main>
        </div>
    )
}

export default List
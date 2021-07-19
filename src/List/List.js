import React from 'react';
import {useStateValue} from "../StateProvider";
import RemoveIcon from '@material-ui/icons/Remove';
import { IconButton } from '@material-ui/core';
import './List.scss';

function List({label}) {

    const [state, dispatch] = useStateValue();   

    const styles = {

      largeIcon: {
        width: 60,
        height: 60,
      },
    
    };

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
              <ol className="gradient-list">
                {state[label].map((item, idx) => 
                <div className="Item"><li>{item}</li>
                    <IconButton id="remove" onClick={handleRemove}  p = {0} >
                        <RemoveIcon iconStyle={styles.largeIcon}/>
                    </IconButton></div>)}
              </ol>
            </main>
        </div>
    )
}

export default List
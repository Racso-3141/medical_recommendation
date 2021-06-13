import React, {useState, useEffect} from 'react';
import {useStateValue} from "../StateProvider";
import Item from "./Item";
import "./Inputs.css";

function Inputs({name, data}) {
    const [items, setItems] = useState([]);
    const [state, dispatch] = useStateValue();
    const removeInput = (InputType, idx) => {
        dispatch({type: InputType,
                    data: state[InputType].splice(idx, 1)
                });
    }
    const addAfter = (item) => {
        let idx = items.indexOf(item);
        setItems(items.splice(idx, 0, <Item head={false} label = {name} 
            options = {data} add = {addAfter} remove = {removeCurrent}/>));
    };
    const removeCurrent = (item) => {
        let idx = items.indexOf(item);
        setItems(items.splice(idx, 1));
        removeInput(name, idx);
    };
    if (items.length === 0) {
        setItems([<Item head={true} label = {name} 
            options = {data} add = {addAfter}
            remove = {removeCurrent}/>].concat(items));
    }
    return (
        <div className="Inputs">
            {items}
        </div>
    )
}

export default Inputs

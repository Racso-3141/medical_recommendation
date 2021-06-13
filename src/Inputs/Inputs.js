import React, {useState, useEffect} from 'react';
import Item from "./Item";
import "./Inputs.css";

function Inputs({name, data}) {
    const [items, setItems] = useState([]);
    const addAfter = (item) => {
        let idx = items.indexOf(item);
        setItems(items.splice(idx, 0, <Item head={false} label = {name} 
            options = {data} add = {addAfter} remove = {removeCurrent}/>));
    };
    const removeCurrent = (item) => {
        let idx = items.indexOf(item);
        setItems(items.splice(idx, 1));
    };
    return (
        <div className="Inputs">
            <Item head={true} label = {name} options = {data} add = {addAfter}/>
            {items}
        </div>
    )
}

export default Inputs

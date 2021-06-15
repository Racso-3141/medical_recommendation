import React, {useState, useEffect} from 'react';
import {useStateValue} from "../StateProvider";
import Item from "./Item";
import "./Inputs.css";

function Inputs({label, options}) {
    const [state, dispatch] = useStateValue();
    
    const addAfter = (idx) => {
        const newArr = state[label].map((item)=>item);
        newArr.splice(idx + 1, 0, " ");
        dispatch({
            type: label,
            data: newArr
        });
    }

    const removeCurrent = (idx) => {
        const newArr = state[label].map((item)=>item);
        newArr.splice(idx, 1);
        dispatch({
            type: label,
            data: newArr
        });
    }
    return (
        <div className="Inputs">
            <Item addAfter = {addAfter} removeCurrent = {removeCurrent}
                options = {options} label={label}
                head={true} idx = {0}
            />
            {Array.from({length: state[label].length - 1}, 
                (_, index) => index + 1).map(index => 
                (<Item addAfter = {addAfter} removeCurrent = {removeCurrent}
                options = {options} label={label}
                head={false} idx = {index}
            />))}
        </div>
    )
}

export default Inputs

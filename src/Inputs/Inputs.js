import React, {useState, useEffect} from 'react';
import {useStateValue} from "../StateProvider";
import Item from "./Item";
import "./Inputs.css";

function Inputs({label, options}) {
    const [state, dispatch] = useStateValue();
    
    function insert(arr, idx) {
        let newArr = [];
        for (const item in arr) {
            newArr.push(arr[item]);
            console.log(item);
        }
        newArr.splice(idx + 1, 0, " ");
        return newArr;
    }

    function remove(arr, idx) {
        let newArr = []
        for (const item in arr) {
            newArr.push(item);
        }
        newArr.splice(idx, 1);
        return newArr;
    }
    const addAfter = (idx) => dispatch({
        type: label,
        data: insert(state[label], idx)
    });

    const removeCurrent = (idx) => dispatch({
        type: label,
        data: remove(state[label], idx)
    });
    return (
        <div className="Inputs">
            <Item addAfter = {addAfter} removeCurrent = {removeCurrent}
                options = {options} label={label}
                head={true} idx = {0}
            />
            {Array.from({length: state[label].length - 1}, (_, index) => index + 1).map(index => (<Item addAfter = {addAfter} removeCurrent = {removeCurrent}
                options = {options} label={label}
                head={false} idx = {index}
            />))}
        </div>
    )
}

export default Inputs

import React, {useState, useEffect} from 'react';
import {useStateValue} from "./StateProvider";
import Item from "./Inputs/Item";
import "./Inputs/Inputs.css";

function Test({label, options}) {
    const [extras, setExtras] = useState([]);
    
    const addAfter = (idx) => {
        const newArr = extras.map((item)=>(item));
        if (newArr.length === 0) {
            newArr.push(<Item addAfter = {addAfter} 
                removeCurrent = {removeCurrent}
                options = {options} label={label}
                head={false} idx = {1}
            />)
        } else {
            for (let i = idx; i < newArr.length; i++) {
                newArr[i] = 
                React.cloneElement(
                    newArr[i],
                    {idx: i + 2}
                );
            }
            newArr.splice(idx, 0, 
                <Item addAfter = {addAfter} 
                removeCurrent = {removeCurrent}
                options = {options} label={label}
                head={false} idx = {idx}
            /> 
            );
        }
        setExtras(newArr);
        if (idx > 0) {
            console.log("false");
        }
    }

    const removeCurrent = (idx) => {
        const newArr = extras.map((item)=>(item));
        if (newArr.length !== 0) {
            for (let i = idx; i < newArr.length; i++) {
                newArr[i] = 
                React.cloneElement(
                    newArr[i],
                    {idx: i}
                );
            }
            newArr.splice(idx - 1, 1);
        }
        setExtras(newArr);
    }
    
    return (
        <div className="Inputs">
            <Item addAfter = {addAfter} removeCurrent = {removeCurrent}
                options = {options} label={label}
                head={true} idx = {0}
            />
            {console.log(extras)}
            {extras}
        </div>
    )
}

export default Test

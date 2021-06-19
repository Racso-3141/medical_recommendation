import React, {useState} from 'react';
import {useStateValue} from "../StateProvider";
import Item from "./Item";
import "./Inputs.css";


function Inputs({label, options}) {
  const [inputList, setInputList] = useState([""]);
  const [state, dispatch] = useStateValue();

  // handle input change
  const handleInputChange = (index, value) => {
    const cloneInputlist = [...inputList];
    cloneInputlist[index] = value;
    setInputList(cloneInputlist);
  };


  // handle selected change
  const handleSelectedChange = (index, value) => {
    const cloneSelectedlist = [...state[label]];
    cloneSelectedlist[index] = value;

    dispatch({
      type: label,
      data: cloneSelectedlist
    });
    
  };


  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const cloneInputlist = [...inputList];
    const cloneSelectedlist = [...state[label]];
    
    cloneInputlist.splice(index, 1);
    cloneSelectedlist.splice(index, 1);

    setInputList(cloneInputlist);

    dispatch({
      type: label,
      data: cloneSelectedlist
    });

    
  };


  // handle click event of the Add button
  const handleAddClick = (index) => {
    const cloneInputlist = [...inputList];
    const cloneSelectedlist = [...state[label]];

    cloneInputlist.splice(index + 1, 0, "");
    cloneSelectedlist.splice(index + 1, 0, "");

    setInputList(cloneInputlist);

    dispatch({
      type: label,
      data: cloneSelectedlist
    });
  };

  return (
    <div className="Inputs">
      {state[label].map((x, i) => {
        return (
            <Item 
                addAfter = {() => handleAddClick(i)} 
                removeCurrent = {() => handleRemoveClick(i)}
                onSelectedChange = {handleSelectedChange}
                onInputChange = {handleInputChange}
                options = {options} 
                label={label}
                head={i === 0} 
                idx = {i}
                curVal={inputList[i]}
            />
        );
      })}
    </div>
  );
}

export default Inputs;

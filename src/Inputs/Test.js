import React, {useState, useEffect} from 'react';
import {useStateValue} from "../StateProvider";
import Item from "./Item";


function Test({label, options}) {
  const [selectedList, setSelectedList] = useState([""]);
  const [inputList, setInputList] = useState([""]);
  
  const [state, dispatch] = useStateValue();

  // handle input change
  const handleInputChange = (index, value) => {
    const list = [...inputList];
    list[index] = value;
    setInputList(list);
  };

  // handle selected change
  const handleSelectedChange = (index, value) => {
    const list = [...selectedList];
    list[index] = value;
    setSelectedList(list);
  };


  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const cloneInputlist = [...inputList];
    const cloneSelectedlist = [...selectedList];
    
    cloneInputlist.splice(index, 1);
    cloneSelectedlist.splice(index, 1);


    setInputList(cloneInputlist);
    setSelectedList(cloneSelectedlist);
  };


  // handle click event of the Add button
  const handleAddClick = (index) => {
    const cloneInputlist = [...inputList];
    const cloneSelectedlist = [...selectedList];

    cloneInputlist.splice(index + 1, 0, "");
    cloneSelectedlist.splice(index + 1, 0, "");

    setInputList(cloneInputlist);
    setSelectedList(cloneSelectedlist);
  };

  return (
    <div className="Test">
      {selectedList.map((x, i) => {
        return (
            <Item 
                addAfter = {() => handleAddClick(i)} 
                removeCurrent = {() => handleRemoveClick(i)}
                onSelectedChange = {handleSelectedChange}
                onInputChange = {handleInputChange}
                options = {options} 
                label={label}
                head={false} 
                idx = {i}
                curVal={inputList[i]}
            />
        );
      })}
      <h2>Input List:</h2>
      <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
      <h2>Selected List:</h2>
      <div style={{ marginTop: 20 }}>{JSON.stringify(selectedList)}</div>
    </div>
    // <div className="Test">
    //     {state[label].map((x, i) => {
    //     return (
    //         <Item 
    //             addAfter = {() => addAfter(i)} 
    //             removeCurrent = {() => removeCurrent(i)}
    //             options = {options} 
    //             label={label}
    //             head={false} 
    //             idx = {i}
    //     />
    //     );
    //   })}
    // </div>
  );
}

export default Test;

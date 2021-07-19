import './App.css';
import React, {useState, useEffect} from 'react';
import Header from "./Header/Header";
import Input from "./Input/Input";
import Outputs from "./Outputs/Outputs";
import Controls from "./Controls/Controls";
import reducer, {initialState} from "./reducer";
import {useStateValue} from "./StateProvider";
import List from "./List/List";
import dbRef from "./firebase";

function App() {
  const [data, setData] = useState({"diagnosis":[],
                                    "drug":[],
                                    "procedure":[],                                  
                                    });
  const [state, dispatch] = useStateValue();   
  useEffect(() => {
    dbRef.once('value',(snap)=>{
      setData({
        "diagnosis": snap.val()['diagnosis'] ,
        "drug": snap.val()['drug'] ,
        "procedure": snap.val()['procedure']
      })
    });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <div className="main">
        <div className="left">
          <div className="diag">
            {data["diagnosis"].length > 0
              ? <Input label = "diagnosis" options = {data["diagnosis"].map((item)=>item.name)}/>
              : null}
            <List label = "diagnosis"/>
          </div>
          
          <div className="pro">
            {data["procedure"].length > 0
              ? <Input label = "procedure" options = {data["procedure"].map((item)=>item.name)}/>
              : null}
            <List label = "procedure"/>
          </div>
          
        </div>
        {/* <div className="right">
          <Outputs/>
          <Controls data = {data}/>
        </div> */}
      </div>
    </div>
  );
}

export default App;
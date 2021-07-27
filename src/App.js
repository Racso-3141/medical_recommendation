import './App.scss';
import React, {useState, useEffect} from 'react';
import Header from "./Header/Header";
import Input from "./Input/Input";
import Outputs from "./Outputs/Outputs";
import Controls from "./Controls/Controls";
import {useStateValue} from "./StateProvider";
import List from "./List/List";
import dbRef from "./firebase";

function App() {
  const [data, setData] = useState({"diagnosis":[],
                                    "drug":[],
                                    "procedure":[],                                  
                                    });
  const state = useStateValue()[0];   
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
        <div className="up">
          <div className="diag">
            <h2>Diagnosis:</h2>
            {data["diagnosis"].length > 0
              ? <Input label = "diagnosis" options = {data["diagnosis"].map((item)=>item.name)}/>
              : null}
            <List label = "diagnosis"/>
          </div>
          
          <div className="pro">
            <h2>Procedure:</h2>
            {data["procedure"].length > 0
              ? <Input label = "procedure" options = {data["procedure"].map((item)=>item.name)}/>
              : null}
            <List label = "procedure"/>
          </div>
          
        </div>
        <div className="down">
        {(state["diagnosis"].length > 0 && state["procedure"].length > 0) && 
          state["notify"]
        }
        {state["drug"].length > 0 && 
          <div className="drug">
            <h2>Drug:</h2>
            <Outputs/>
          </div>
        }
        {(state["diagnosis"].length > 0 && state["procedure"].length > 0) ? 
          <Controls data = {data}/>
          :
          <h3>Input at least one diagnosis and one procedure to get drugs</h3>
        }
        
        
        </div>
      </div>
    </div>
  );
}

export default App;
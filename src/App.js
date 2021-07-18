import './App.css';
import React, {useState, useEffect} from 'react';
import Header from "./Header/Header";
import Inputs from "./Inputs/Inputs";
import Tags from "./Tags/Tags";
import Outputs from "./Outputs/Outputs";
import Controls from "./Controls/Controls";
import reducer, {initialState} from "./reducer";
import {StateProvider} from "./StateProvider";
import {useStateValue} from "./StateProvider";
import dbRef from "./firebase";

function App() {
  const [data, setData] = useState({"diagnosis":[" "],
                                    "drug":[],
                                    "procedure":[" "],                                  
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
      <StateProvider initialState={initialState} reducer={reducer}>
        <div className="main">
          <div className="left">
            <div className="diag">
              <Tags label = "diagnosis" options = {data["diagnosis"].map((item)=>item.name)}/>
              <ul>
                {/* {state["diagnosis"].map((item) => <li>item</li>)} */}
              </ul>
            </div>
            
            <div className="pro">
              <Tags label = "procedure" options = {data["procedure"].map((item)=>item.name)}/>
              <ul>
                {/* {state["procedure"].map((item) => <li>item</li>)} */}
              </ul>
            </div>
            
          </div>
          <div className="right">
            <Outputs/>
            <Controls data = {data}/>
          </div>
        </div>
      </StateProvider>
    </div>
  );
}

export default App;
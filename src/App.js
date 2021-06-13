import './App.css';
import React, {useState, useEffect} from 'react';
import Header from "./Header/Header";
import Inputs from "./Inputs/Inputs";
import Outputs from "./Outputs/Outputs";
import Controls from "./Controls/Controls";
import reducer, {initialState} from "./reducer";
import {StateProvider} from "./StateProvider";
import db from "./firebase";


function App() {
  const [diag_data, setDiag] = useState([]);
  const [med_data, setMed] = useState([]);
  const [pro_data, setPro] = useState([]);
  useEffect(() => {
    db.collection("diag")
      .get()
      .then((snapshot) => {
        setDiag(
          snapshot.docs.map((doc)  => (doc.data()["ICD"]))
        )
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
            <Inputs name="diagnosis" data={diag_data}/>
            <Controls/>
          </div>
          <div className="right">
            <Outputs/>
          </div>
        </div>
      </StateProvider>
    </div>
  );
}

export default App;

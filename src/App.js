import './App.css';
import Header from "./Header/Header";
import Inputs from "./Inputs/Inputs";
import Outputs from "./Outputs/Outputs";
import Controls from "./Controls/Controls";
import reducer, {initialState} from "./reducer";
import {StateProvider} from "./StateProvider";
import db from "./firebase";
import {getDocs} from "firebase/firestore";

const diag_data = getDocs(collection(db, "diag"))
                  .map(doc=>doc.data());;

function App() {
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

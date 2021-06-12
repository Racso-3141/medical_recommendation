import './App.css';
import Header from "./Header/Header";
import Inputs from "./Inputs/Inputs";
import Outputs from "./Outputs/Outputs";
import Controls from "./Controls/Controls";
import reducer, {initialState} from "./reducer";
import {StateProvider} from "./StateProvider";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
      </header>
      <StateProvider initialState={initialState} reducer={reducer}>
        <div className="main">
          <div className="left">
            <Inputs/>
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

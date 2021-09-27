import './App.css';
import { useState } from 'react';

import Scoreboard from './components/Scoreboard';
import Options from './components/Options';
import Rules from './components/Rules';

function App() {

  const [rulesActive, setRulesActive] = useState(false);

  const handleRulesPanel = () => {
    setRulesActive(!rulesActive);
  }

  return (
    <div className="App">
      <Scoreboard/>
      <Options/>

      <button 
      className="rules__btn"
      onClick={handleRulesPanel}
      >RULES</button>

      {rulesActive ? <Rules handleRulesPanel={handleRulesPanel}/> : null}

    </div>
  );
}

export default App;

import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Scoreboard from './components/Scoreboard';
import Options from './components/Options';
import Rules from './components/Rules';

function App() {

  const [rulesActive, setRulesActive] = useState(false);

  const handleRulesPanel = () => {
    setRulesActive(!rulesActive);
  }

  return (
    <Router>
      <div className="App">

      <Scoreboard/>
        
        <Switch>
          <Route exact path ="/">
            <Options/>
          </Route>

          <Route exact path="/game">
          </Route>
        </Switch>

        <button 
            className="rules__btn"
            onClick={handleRulesPanel}
            >RULES</button>

            {rulesActive ? <Rules handleRulesPanel={handleRulesPanel}/> : null}

      </div>
    </Router>
  );
}

export default App;

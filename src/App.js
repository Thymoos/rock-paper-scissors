import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Scoreboard from './components/Scoreboard';
import Options from './components/Options';
import Rules from './components/Rules';
import Game from './components/Game';

function App() {

  const [rulesActive, setRulesActive] = useState(false);

  const [chosenOption, setChosenOption] = useState("");

  // Show rules function

  const handleRulesPanel = () => {
    setRulesActive(!rulesActive);
  }

  // Get player choice function

  const handlePlayerChoice = (e) => {
    const choice = e.target.getAttribute("type");
    setChosenOption(choice);
  }

  return (
    <Router>
      <div className="App">

      <Scoreboard/>
        
        <Switch>
          <Route exact path ="/">
            <Options handlePlayerChoice={handlePlayerChoice}/>
          </Route>

          <Route exact path="/game">
            <Game playerChoice={chosenOption}/>
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

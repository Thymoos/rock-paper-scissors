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

  const [houseChoice, setHouseChoice] = useState("");

  // Show rules function

  const handleRulesPanel = () => {
    setRulesActive(!rulesActive);
  }

  // Get player choice function

  const handlePlayerChoice = (e) => {
    const choice = e.target.getAttribute("type");
    setChosenOption(choice);
    
    handleHouseChoice();
  }

  // Get house choice function is called inside of handlePlayerChoice

  const handleHouseChoice = () => {
    const randomNumber = Math.floor(Math.random()*(2 - 0 + 1)) + 0;
    
    if(randomNumber === 0) setHouseChoice("rock");
    else if(randomNumber === 1) setHouseChoice("paper");
    else setHouseChoice("scissors");
  }

  return (
    <Router>
      <div className="App">

      <Scoreboard/>
        
        <Switch>
          <Route exact path ="/">
            <Options 
            handlePlayerChoice={handlePlayerChoice}
            handleHouseChoice={handleHouseChoice}
            />
          </Route>

          <Route exact path="/game">
            <Game 
            playerChoice={chosenOption}
            houseChoice={houseChoice}
            />
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

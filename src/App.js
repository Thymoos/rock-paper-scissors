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

  const [score, setScore] = useState(0);

  const [result, setResult] = useState("");

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

  // Function responsible for comparing inputs and choosing the winner

  const handleGame = () => {  
    const playerToken = document.getElementById("player-placeholder");
    const houseToken = document.getElementById("house-placeholder");

   // Draw
   if(chosenOption === houseChoice) {
      setResult("Draw");
   }

    // Paper
  else if(chosenOption === "paper") {
    if(houseChoice === "rock") {
      setResult("YOU WIN");
      setScore(prevState => prevState+1);
      setTimeout(() => {playerToken.classList.add("won");}, 3000);
     }
    else if(houseChoice === "scissors") {
     setResult("YOU LOSE");
     setScore(prevState => prevState-1);
     setTimeout(() => {houseToken.classList.add("won");}, 3000);
    }
 }

  // Rock
  else if(chosenOption === "rock") {
    if(houseChoice === "scissors") {
      setResult("YOU WIN");
      setScore(prevState => prevState+1);
      setTimeout(() => {playerToken.classList.add("won");}, 3000);
    }
    else if(houseChoice === "paper") {
      setResult("YOU LOSE");
      setScore(prevState => prevState-1);
      setTimeout(() => {houseToken.classList.add("won");}, 3000);
    }
  }

  // Scissors 
  else if(chosenOption === "scissors") {
    if(houseChoice === "paper") {
      setResult("YOU WIN");
      setScore(prevState => prevState+1);
      setTimeout(() => {playerToken.classList.add("won");}, 3000);
    }
    else if(houseChoice === "rock") {
      setResult("YOU LOSE");
      setScore(prevState => prevState-1);
      setTimeout(() => {houseToken.classList.add("won");}, 3000);
    }
  }
}

  return (
    <Router>
      <div className="App">

      <Scoreboard score={score} />
        
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
            handleGame={handleGame}
            result={result}
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

import './App.css';

import Scoreboard from './components/Scoreboard';
import Options from './components/Options';
import Rules from './components/Rules';

function App() {
  return (
    <div className="App">
      <Scoreboard/>
      <Options/>

      <button className="rules__btn">RULES</button>
      <Rules/>
    </div>
  );
}

export default App;

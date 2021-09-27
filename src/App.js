import './App.css';
import Scoreboard from './components/Scoreboard';
import Options from './components/Options';

function App() {
  return (
    <div className="App">
      <Scoreboard/>
      <Options/>

      <button className="rules__btn">RULES</button>
    </div>
  );
}

export default App;

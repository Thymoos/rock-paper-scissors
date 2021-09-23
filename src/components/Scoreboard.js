import React from 'react';
import './Scoreboard.css';

import logo from "../images/logo.svg";

const Scoreboard = () => {
    return ( 
        <div className="scoreboard">
            <img src={logo} alt="Rock, Paper, Scissors" className="scoreboard__img--logo" />
            <div className="scoreboard__score">
                <h2 className="scoreboard__score--title">SCORE</h2>
                <h3 className="scoreboard__score--number">12</h3>
            </div>
        </div>
     );
}
 
export default Scoreboard;
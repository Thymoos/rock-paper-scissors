import React, {useState, useEffect} from 'react';
import './Scoreboard.css';

import logo from "../images/logo.svg";

const Scoreboard = ({score}) => {

    const [delayedScore, setDelayedScore] = useState();

    // Timeout for score update

    useEffect(() => {
        setTimeout(() => {setDelayedScore(score);}, 2450);
    },[score])

    return ( 
        <div className="scoreboard">
            <img src={logo} alt="Rock, Paper, Scissors" className="scoreboard__img--logo" />
            <div className="scoreboard__score">
                <h2 className="scoreboard__score--title">SCORE</h2>
                <h3 className="scoreboard__score--number">{delayedScore}</h3>
            </div>
        </div>
     );
}
 
export default Scoreboard;
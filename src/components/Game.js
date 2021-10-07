import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Game.css';

import Token from './Token';

const Game = ({playerChoice, houseChoice, handleGame, result}) => {

    useEffect(() => {
        handleGame()
        showInfoPanel()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const showInfoPanel = () => {
       const panel = document.getElementById("info");

       setTimeout(() => {
        panel.classList.remove("hidden");
        panel.classList.add("visible");
       }, 2000)
    }

    return ( 
        <div className="game">

            <div className="game__pick game__pick--player">
                <h3 className="game__title game__title--player">YOU PICKED</h3>
                <div className="game__token--placeholder placeholder--player" id="player-placeholder"></div>
                <div className="game__token  game__token--player">
                    <Token type={playerChoice} className="game__token"/>
                </div>
            </div>

            <div className="game__info hidden" id="info">
                <h1 className="game__info--header">{result}</h1>
                <Link to="/"><button className="game__info--button">PLAY AGAIN</button></Link>
            </div>

            <div className="game__pick game__pick--house">
                <h3 className="game__title game__title--house">THE HOUSE PICKED</h3>
                <div className="game__token--placeholder placeholder--house" id="house-placeholder"></div>
                <div className="game__token  game__token--house">
                    <Token type={houseChoice} className="game__token"/>
                </div>
            </div>

        </div>
     );
}
 
export default Game;
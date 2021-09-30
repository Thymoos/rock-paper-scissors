import React from 'react';
import './Game.css';

import Token from './Token';

const Game = ({playerChoice}) => {
    return ( 
        <div className="game">

            <div className="game__pick game__pick--player">
                <h3 className="game__title game__title--player">YOU PICKED</h3>
                <div className="game__token">
                    <Token type={playerChoice} className="game__token"/>
                </div>
            </div>

            <div className="game__pick game__pick--house">
                <h3 className="game__title game__title--house">THE HOUSE PICKED</h3>
                <div className="game__token">
                    <Token type="rock" className="game__token"/>
                </div>
            </div>

        </div>
     );
}
 
export default Game;
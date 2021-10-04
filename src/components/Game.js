import React, {useEffect} from 'react';
import './Game.css';

import Token from './Token';

const Game = ({playerChoice, houseChoice, handleGame}) => {

    useEffect(() => {
        handleGame()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return ( 
        <div className="game">

            <div className="game__pick game__pick--player">
                <h3 className="game__title game__title--player">YOU PICKED</h3>
                <div className="game__token--placeholder"></div>
                <div className="game__token  game__token--player">
                    <Token type={playerChoice} className="game__token"/>
                </div>
            </div>

            <div className="game__pick game__pick--house">
                <h3 className="game__title game__title--house">THE HOUSE PICKED</h3>
                <div className="game__token--placeholder"></div>
                <div className="game__token  game__token--house">
                    <Token type={houseChoice} className="game__token"/>
                </div>
            </div>

        </div>
     );
}
 
export default Game;
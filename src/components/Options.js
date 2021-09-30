import React from 'react';
import {Link} from 'react-router-dom';
import "./Options.css";

import Token from './Token';

import triangle from "../images/bg-triangle.svg";

const Options = ({handlePlayerChoice}) => {
    return ( 
        <div className="options">

           <img src={triangle}
            alt="" 
            className="options__img options__img--bg-triangle" />

            <Link to="/game"><div className="options__token--paper" onClick={handlePlayerChoice}><Token type="paper"/></div></Link>
            <Link to="/game"><div className="options__token--rock" onClick={handlePlayerChoice}><Token type="rock"/></div></Link>
            <Link to="/game"><div className="options__token--scissors" onClick={handlePlayerChoice}><Token type="scissors"/></div></Link>
    
        </div>
     );
}
 
export default Options;
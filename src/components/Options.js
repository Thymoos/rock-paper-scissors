import React from 'react';
import "./Options.css";

import Token from './Token';

import triangle from "../images/bg-triangle.svg";

const Options = () => {
    return ( 
        <div className="options">

           <img src={triangle}
            alt="" 
            className="options__img options__img--bg-triangle" />

            <div className="options__token--paper"><Token type="paper"/></div>
            <div className="options__token--rock"><Token type="rock"/></div>
            <div className="options__token--scissors"><Token type="scissors"/></div>
    
        </div>
     );
}
 
export default Options;
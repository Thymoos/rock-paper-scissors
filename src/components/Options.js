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

            <Token type="paper"/>
            <Token type="rock"/>
            <Token type="scissors"/>
    
        </div>
     );
}
 
export default Options;
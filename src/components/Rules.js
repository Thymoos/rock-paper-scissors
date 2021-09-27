import React from 'react';
import "./Rules.css";

import rulesetImg from "../images/image-rules.svg";
import closeBtn from "../images/icon-close.svg";

const Rules = ({handleRulesPanel}) => {
    return ( 
        <div className="rules">
            <div className="rules__panel">
                <h1 className="rules__panel--header">RULES</h1>
                <img src={closeBtn}
                alt="close"
                className="rules__panel--closeBtn"
                onClick={handleRulesPanel}
                />
                <img src={rulesetImg} alt="ruleset" className="rules__panel--img" />
            </div>
        </div>
     );
}
 
export default Rules;
import React from 'react';
import "./Options.css";

import triangle from "../images/bg-triangle.svg";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import scissors from "../images/icon-scissors.svg";

const Options = () => {
    return ( 
        <div className="options">
           <img src={triangle} alt="" className="options__img options__img--bg-triangle" />
            <div className="options__border options__border--paper"><img src={paper} alt="paper" className="options__img options__img--paper" /></div>
            <div className="options__border options__border--rock"><img src={rock} alt="rock" className="options__img options__img--rock" /></div>
            <div className="options__border options__border--scissors"><img src={scissors} alt="scissors" className="options__img options__img--scissors" /></div>
        </div>
     );
}
 
export default Options;
import React from 'react';
import "./Options.css";

import triangle from "../images/bg-triangle.svg";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import scissors from "../images/icon-scissors.svg";

const Options = () => {
    return ( 
        <div className="options">
            <img src={triangle} alt="" className="options__img--bg-triangle" />
            <img src={paper} alt="" className="options__img--paper" />
            <img src={rock} alt="" className="options__img--rock" />
            <img src={scissors} alt="" className="options__img--scissors" />
        </div>
     );
}
 
export default Options;
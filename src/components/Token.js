import React from 'react';
import './Token.css';

const Token = ({type}) => {

    return ( 
        

        <div className={`options__border options__border--${type}`}>

            <img src={`token-icons/icon-${type}.svg`}
            alt={type} 
            className={`options__img options__img--${type}`} />

        </div>
     );
}
 
export default Token;
import React from 'react';
import './Token.css';

const Token = ({type}) => {

    return ( 
        

        <div className={`options__border options__border--${type}`} type={type}>

            <img src={`token-icons/icon-${type}.svg`}
            alt={type} 
            className={`options__img options__img--${type}`}
            type={type} />
            
        </div>
     );
}
 
export default Token;
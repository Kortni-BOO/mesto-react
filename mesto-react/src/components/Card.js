import React from 'react';


function Card(props) {

    
    function handleClick() {
        props.onCardClick(props);
    }


    return (
        <li className="element">
            <div className="element__card">
                <div 
                    className="element__image" 
                    style={{ backgroundImage: `url(${props.link})` }} 
                    onClick={handleClick} 
                    alt="картирнка"></div>
                </div>
            <button 
                type="button" 
                className="element__button-trush" 
                aria-label="trush">

            </button>
            <div className="element__content">
                <h2 className="element__text">{props.name}</h2>
            </div>
            <button type="button" className="element__button-like" aria-label="like"></button>  
            <h3 className="element__count">{props.likes}</h3>
        </li>
    )
}

export default Card;
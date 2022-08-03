import React, { useEffect, useState } from 'react'
import { shuffleArr } from '../../utils/defFunctions/defFunctions';
import { openCardFunc } from '../../utils/defFunctions/openCardFunc';
import GameCard from '../GameCard/GameCard';
import './GameCards.sass'

function GameCards({listClass, cards, cardCount, hookGetResult, endGame}) {

    const openCards = [];
    const foundCards = [];

    const pointsObj = {
        steps: 0,
        points: 0
    }
    // console.log('re-render Component Game Cards');

    shuffleArr(cards);

    const openCard = (e, setCardFound) => {
        openCardFunc({e, openCards, setCardFound, pointsObj, cardCount, hookGetResult, foundCards})
    }

    useEffect(() => {
        console.log(pointsObj);
        if(endGame) hookGetResult(pointsObj);
    }, [endGame])
    
  return (
    <ul className={listClass.join(' ')}>
        {
            !cards.length
            ?
            null 
            :
            cards.map(obj => 
                <li 
                    key={obj.id * Math.random()} 
                    className='game-cards-list__item'
                    // onClick={() => console.log(obj.isFound)}
                >
                    <GameCard 
                        imgPath={obj.imgPath} 
                        openCard={openCard}
                        dataCardName={obj.name}
                        dataCardId={(obj.id * Math.random()).toFixed(6)}
                        foundCards={foundCards.includes(obj.name)}
                    />  
                </li>  
            )
        }
    </ul>
  )
}

export default GameCards
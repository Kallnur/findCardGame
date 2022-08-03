import React, { useState } from 'react'
import './GameCard.sass'

function GameCard({imgPath, openCard, dataCardName, dataCardId, foundCards}) {

  const [cardFound, setCardFound] = useState(false)

  // !cardFound ? cardObj.isFound = false : cardObj.isFound = true;
  // console.log(isFound);

  // console.log('re-render Component Game Card one');

  return (
    <div 
      className={`game-card ${!cardFound ? '' : 'game-card--found'}`} 
      data-card-name={dataCardName}
      data-card-id={dataCardId}
      onClick={e => { if( !cardFound ) openCard(e, setCardFound) }}
    >
      <div className='game-card__front'>
        <img src={imgPath} alt="gameCardImg" />
      </div>
      <div className='game-card__back'>
        <h2 className='game-card__back__text'>Open Me!</h2>
      </div>
    </div>
  )
}

export default GameCard
export const openCardFunc = ({e, openCards, setCardFound, pointsObj, cardCount, hookGetResult, foundCards}) => {
    const card = e.currentTarget;
    const cardName = e.currentTarget.dataset.cardName;
    const cardId = e.currentTarget.dataset.cardId;

    card.classList.add('game-card--open');

    if(openCards.length < 2) { 
        if(openCards[0]) {

            if(openCards[0].cardId !== cardId) {
                openCards.push({cardName, cardId, card, setCardFound})

            } else card.classList.remove('game-card--open');

            if(openCards[0].cardId !== cardId && openCards[0].cardName === cardName){

                openCards.forEach(obj => {
                    obj.card.classList.remove('game-card--open');
                    obj.setCardFound(true)
                })
                pointsObj.points += 1;
                foundCards.push(cardName)

            } else {
                openCards.forEach(obj => {
                    setTimeout(() => {
                        obj.card.classList.remove('game-card--open');
                    }, 600)
                })
            }

            pointsObj.steps += 1;
            openCards.length = 0;
            // setVisSteps(p => p += 1);

        } else openCards.push({cardName, cardId, card, setCardFound})
    }

    if(pointsObj.points === cardCount) {
        console.log(pointsObj);
        setTimeout(() => hookGetResult(pointsObj), 1000)
    };
}
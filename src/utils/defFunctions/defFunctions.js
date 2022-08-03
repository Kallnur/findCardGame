import { cardData } from "../../cardData/cardData";
import { gameLevelInfo, locarStorageKeys } from "../defData";

export const randomIdNum = (maxLength) => {
    const res = [];

    for(let i = 0; i < maxLength; i++){
        const num = Math.floor(Math.random() * 9) + 1;
        res.push(num);
    }

    return res.join('');
}

export const shuffleArr = (arr) => {
    return arr.sort(() => Math.round(Math.random() * 100) - 50);
}

export const levelGame = (level, listClass, setListClass, setCardCount) => {

    if(level === gameLevelInfo.lvl1.key) {
        setCardCount(gameLevelInfo.lvl1.cards / 2);
        if(listClass.length <= 1) setListClass([...listClass, 'game-cards-list--1-lvl']);
    };

    if(level === gameLevelInfo.lvl2.key) {
        setCardCount(gameLevelInfo.lvl2.cards / 2);
        if(listClass.length <= 1) setListClass([...listClass, 'game-cards-list--2-lvl']);
    };

    if(level === gameLevelInfo.lvl3.key) {
        setCardCount(gameLevelInfo.lvl3.cards / 2);
        if(listClass.length <= 1) setListClass([...listClass, 'game-cards-list--3-lvl']);
    };
}

export const getCards = (cardCount) => {
    const getCards = [];
    for(let i = 0; i < cardCount; i++) getCards.push(cardData[i], cardData[i]);
    return getCards;
}

export const updatePoints = (gameResult, level, user) => {

    const localAllUsers = JSON.parse(localStorage.getItem(locarStorageKeys.allUser));

    console.log(gameResult);

    console.log(localAllUsers);

    if(gameResult) {
        const newAllUser = localAllUsers.map(obj => {
            if( obj.id === user.id ){
                if(level === gameLevelInfo.lvl1.key) {
                    gameResult.score = gameResult.time * gameResult.steps;
                    obj.points.lvl_1 = gameResult
                };
                if(level === gameLevelInfo.lvl2.key) {
                    gameResult.score = gameResult.time * gameResult.steps;
                    obj.points.lvl_2 = gameResult
                };
                if(level === gameLevelInfo.lvl3.key) {
                    gameResult.score = gameResult.time * gameResult.steps;
                    obj.points.lvl_3 = gameResult
                };
            }
            return obj
        })

        console.log(newAllUser);

        localStorage.setItem(locarStorageKeys.allUser, JSON.stringify(newAllUser))
    }
}
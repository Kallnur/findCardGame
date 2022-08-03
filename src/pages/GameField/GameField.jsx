import React, { useContext, useEffect, useState } from 'react'
import { gameLevelContext, userContext } from '../..';
import { cardData } from '../../cardData/cardData';
import GameCards from '../../components/GameCards/GameCards'
import { levelGame, updatePoints } from '../../utils/defFunctions/defFunctions';
import Modal from '../../components/Modal/Modal';
import './GameField.sass'
import GameTimer from '../../components/GameTimer/GameTimer';
import FormButton from '../../components/UI/FormButton/FormButton';
import ResultBlock from '../../components/ResultBlock/ResultBlock';
import { gameLevelInfo, locarStorageKeys } from '../../utils/defData';
import Steps from './Steps/Steps';

function GameField() {

    const [level]  = useContext(gameLevelContext);
    const [cards, setCards] = useState([]);
    const [listClass, setListClass] = useState(['game-cards-list']);
    const [cardCount, setCardCount] = useState(null);
    const [modalShow, setModalShow] = useState(false);
    const [gameResult, setGameResult] = useState(null);
    const [endGame, setEndGame] = useState(false);
    const [user] = useContext(userContext);

    const getLevelGame = () => {
        levelGame(level, listClass, setListClass, setCardCount)
    };

    const getCards = () => {
        const getCards = [];
        for(let i = 0; i < cardCount; i++) getCards.push(cardData[i], cardData[i]);
        setCards(getCards)
    }

    const hookGetResult = (obj) => setGameResult(obj);
    const hookGetTime = (obj) => setGameResult({...gameResult, time: obj});

    // console.log(gameResult);

    // console.log('re-render Component Game Field');
    
    useEffect(() => {
        getLevelGame();
        getCards();
    }, [cardCount])

    useEffect(() => {
        !gameResult ? setModalShow(false) : setModalShow(true);
        // if(modalShow) updatePoints(gameResult, level, user);
    }, [gameResult])

    // useEffect(() => {
    //     if(modalShow) updatePoints(gameResult, level, user);
    // }, [modalShow])

    return (
        <div className='game-field'>
            <div className="game-field__body">
                <div className="game-field__set">
                    <GameTimer active={!modalShow} gameResult={gameResult} hookGetTime={hookGetTime}/>
                    <Steps />
                    <FormButton 
                        className='game-field__pause'
                        onClick={() => setEndGame(true)}
                    >
                        Stop
                    </FormButton>
                </div>
                <GameCards 
                    listClass={listClass} 
                    cards={cards} 
                    cardCount={cardCount} 
                    hookGetResult={hookGetResult}   
                    setCards={setCards}
                    endGame={endGame}
                    // setVisSteps={setVisSteps}
                />

                <Modal modalShow={modalShow} setModalShow={setModalShow} >
                    <ResultBlock 
                        resultObj={gameResult} 
                        level={level} user={user}
                        setGameResult={setGameResult}
                        setEndGame={setEndGame}
                    />
                </Modal>
            </div>
        </div>
    )
}

export default GameField
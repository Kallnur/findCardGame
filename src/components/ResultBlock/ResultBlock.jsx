import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { updatePoints } from '../../utils/defFunctions/defFunctions';
import FormButton from '../UI/FormButton/FormButton';
import './ResultBlock.sass'

function ResultBlock({resultObj, level, user, setGameResult, setEndGame}) {

    console.log(resultObj);

    useEffect(() => {
        updatePoints(resultObj, level, user);
    }, [resultObj])

    return !resultObj ? null : (
        <div className='result-block'>
            <div className="result-block__body">
                <h2 className='result-block__title'>Результат:</h2>
                <div className='result-block__desc'>
                    <span className='result-block__score'>Очки: 
                        <span>{resultObj.time * resultObj.steps}</span>
                    </span>
                    <span className='result-block__time'>Время: 
                        <span>{resultObj.time}</span>
                    </span>
                    <span className='result-block__steps'>Ходы: 
                        <span>{resultObj.steps}</span>
                    </span>
                </div>
                <div className="result-block__btns">
                    <Link to={'/'}>
                        <FormButton>
                            Главная
                        </FormButton>
                    </Link>
                    <Link to={'./'}>
                        <FormButton onClick={() => {
                            setGameResult(null)
                            setEndGame(false)
                        }}>
                        Заново
                        </FormButton>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ResultBlock
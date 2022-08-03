import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { gameLevelContext } from '../..'
import { gameLevelArr } from '../../utils/defData'
import FormButton from '../UI/FormButton/FormButton'
import RadioInput from '../UI/RadioInput/RadioInput'
import './GameLevel.sass'

function GameLevel() {

  const navigate = useNavigate();
  const [level, setLevel] = useContext(gameLevelContext);

  const selectLevel = e => setLevel(e.target.dataset.gameLvl)

  const startGame = () => navigate('/game');

  return (
    <div className='game-level-block'>
      <h2 className="game-level-block__title">Выберите количество карт</h2>
      <div className='game-level-block__list'>
        {
          gameLevelArr.map(obj => {
            if(obj.data === level) {
              return (
                <RadioInput 
                  key={obj.data}
                  name={obj.name} 
                  id={obj.id} 
                  data-game-lvl={obj.data} 
                  onClick={selectLevel} 
                  defaultChecked
                >
                  {obj.value}
                </RadioInput>
              )
            }
            return (
              <RadioInput 
                key={obj.data}
                name={obj.name} 
                id={obj.id} 
                data-game-lvl={obj.data} 
                onClick={selectLevel} 
              >
                {obj.value}
              </RadioInput>
            )
          })
        }
      </div>
      <FormButton onClick={startGame}> Начать </FormButton>
    </div>
  )
}

export default GameLevel
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../..'
import GameLevel from '../../components/GameLevel/GameLevel'
import FormButton from '../../components/UI/FormButton/FormButton'
import UserBlock from '../../components/UI/UserBlock/UserBlock'
import './Home.sass'

function Home() {

  const navigate = useNavigate();

  const [user, setUser] = useContext(userContext)

  const redLeaderboard = () => {
    navigate('/leaderboard')
  }

  return (
    <div className='home'>
      <div className='home__body'>
        <UserBlock user={user} setUser={setUser} />
        <GameLevel />

        <div className='home__leaderboard'>
          <FormButton
            onClick={redLeaderboard}
          >
            Таблица результатов
          </FormButton>
        </div>
      </div>
    </div>
  )
}

export default Home
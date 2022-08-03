import React, { useContext } from 'react'
import { userContext } from '../..';
import SignInForm from '../../components/SignInForm/SignInForm'
import './SignIn.sass'

function SignIn() {

  const [user, setUser] = useContext(userContext);

  console.log(user);

  return (
    <div className='sign-in'>
      <div className='sign-in__body'>
        <h1 className='sign-in__title main-title'>Вход в Игру</h1>
        <SignInForm setUser={setUser}/>
      </div>
    </div>
  )
}

export default React.memo(SignIn)
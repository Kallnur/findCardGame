import React from 'react'
import { Link } from 'react-router-dom'
import SignUpForm from '../../components/SignUpForm/SignUpForm'

function SignUp() {
  return (
    <div className='sign-up'>
      <div className='sign-up__body'>
        <h1 className='sign-up__title main-title'> Регистрация </h1>
        <SignUpForm />
        <Link to={'/sign-in'}> Войти </Link>
      </div>
    </div>
  )
}

export default SignUp
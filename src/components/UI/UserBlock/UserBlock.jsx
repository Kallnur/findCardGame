import React from 'react'
import './UserBlock.sass'
import avatar from '../../../assets/avatar/rik_ava.jpg'
import SignOutBtn from '../SignOutBtn/SignOutBtn'

function UserBlock({user, setUser}) {
  return (
    <div className='user-block'>
        <div className='user-block__ava'>
            <img src={avatar} alt="avatar" />
        </div>
        <div className="user-block__info">
            <strong className='user-block__name'>{user.name}</strong>
            <span className='user-block__id'>Ваш id: <span>{user.id}</span></span>
        </div>
        <SignOutBtn />
    </div>
  )
}

export default UserBlock
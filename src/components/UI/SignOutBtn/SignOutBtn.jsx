import React, { useContext } from 'react'
import { userContext } from '../../..'
import { locarStorageKeys } from '../../../utils/defData';
import './SignOutBtn.sass'

function SignOutBtn() {

    const [user, setUser] = useContext(userContext);

    const signOut = () => {
        localStorage.removeItem(locarStorageKeys.currentUser);
        setUser(null)
    }

  return (
    <div className='sign-out-btn'>
        <button 
            className='sign-out-btn__btn'
            onClick={signOut}
        >
            Выйти
        </button>
    </div>
  )
}

export default SignOutBtn
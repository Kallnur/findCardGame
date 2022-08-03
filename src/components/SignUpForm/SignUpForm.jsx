import React, { useState } from 'react'
import { locarStorageKeys } from '../../utils/defData';
import FormButton from '../UI/FormButton/FormButton'
import FormInput from '../UI/FormInput/FormInput'

function SignUpForm() {

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const createUser = (e) => {
        e.preventDefault();

        if(userName.length > 2 && userPassword.length > 2){
            const userObj = {
                name: userName,
                password: userPassword,
                id: `${userName}_${Date.now()}`
            }
    
            localStorage.setItem(locarStorageKeys.currentUser, JSON.stringify(userObj))

        } else {
            console.log('Некоректные данные');
        }

    }

    return (
        <div className='sign-in__form-block'>
            <form className='sign-in__form'>
                <div className="sign-in__form-body">
                    <FormInput 
                        placeholder='Имя' 
                        id='sign-up__name' 
                        type='text' 
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                    />
                    <FormInput 
                        placeholder='Пароль' 
                        id='sign-up__password'
                        type='password' 
                        value={userPassword}
                        onChange={e => setUserPassword(e.target.value)}
                    />
                    <FormButton onClick={createUser}> Зарегистрироваться </FormButton>
                </div>
            </form>
        </div>
    )
}

export default SignUpForm
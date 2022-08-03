import React, { useState } from 'react'
import { randomIdNum } from '../../utils/defFunctions/defFunctions';
import { locarStorageKeys } from '../../utils/defData';
import FormButton from '../UI/FormButton/FormButton'
import FormInput from '../UI/FormInput/FormInput'
import './SignInForm.sass'

function SignInForm({setUser}) {

    const [userName, setUserName] = useState('');

    const createUser = (e) => {
        e.preventDefault();
        const allUser = JSON.parse(localStorage.getItem(locarStorageKeys.allUser));

        if(userName.length > 2){
            const userObj = {
                name: userName,
                id: `${userName}_${randomIdNum(4)}`,
                points: {
                    lvl_1: {
                        score: 0,
                        points: 0,
                        time: 0,
                        steps: 0
                    },
                    lvl_2: {
                        score: 0,
                        points: 0,
                        time: 0,
                        steps: 0
                    },
                    lvl_3: {
                        score: 0,
                        points: 0,
                        time: 0,
                        steps: 0
                    }
                }
            }

            if(allUser) {
                allUser.push(userObj);
                localStorage.setItem(locarStorageKeys.allUser, JSON.stringify(allUser));

            } else localStorage.setItem(locarStorageKeys.allUser, JSON.stringify([userObj]));  

            localStorage.setItem(locarStorageKeys.currentUser, JSON.stringify(userObj))  
            setUser(userObj);

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
                    id='sign-in__name' 
                    type='text' 
                    value={userName}
                    onChange={e => setUserName(e.target.value)}
                />
                <FormButton onClick={createUser}> Войти </FormButton>
            </div>
        </form>
    </div>
  )
}

export default SignInForm
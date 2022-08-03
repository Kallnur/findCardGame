import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import LeaderItem from '../../components/LeaderItem/LeaderItem';
import SelectTypeScore from '../../components/SelectTypeScore/SelectTypeScore';
import FormButton from '../../components/UI/FormButton/FormButton';
import { locarStorageKeys, selectOptionsLvl, selectOptionsType } from '../../utils/defData';
import './Leaderboard.sass'

function Leaderboard() {

    const [userAll, setUserAll] = useState([]);
    const [selectType, setSelectType] = useState( { lvl: 'lvl_1', type: 'score' } );

    const localUsers = JSON.parse(localStorage.getItem(locarStorageKeys.allUser));

    // console.log(selectType);

    useEffect(() => {
        selectOptionsLvl.forEach(lvlObj => {
            selectOptionsType.forEach(typeObj => {
                if(selectType.lvl === lvlObj.value && selectType.type === typeObj.value){
                    console.log(lvlObj.value, typeObj.value);
                    localUsers.sort((a, b) => a.points[lvlObj.value][typeObj.value] - b.points[lvlObj.value][typeObj.value]);
                }
            })
        })

        setUserAll([...localUsers])
    }, [selectType])

    return (
        <div className='leaderboard'>
        <div className="leaderboard__body">
            <h1 className='leaderboard__title'>Таблица лидеров</h1>
            <div className='leaderboard__selects'>
                <div className='leaderboard__select'>
                    <span>По уровням</span> 
                    <SelectTypeScore 
                        options={selectOptionsLvl} 
                        selectType={selectType} 
                        setSelectType={setSelectType}  
                        type={'lvl'}
                    />
                </div>
                <div className='leaderboard__select'>
                    <span>По поинтам</span> 
                    <SelectTypeScore 
                        options={selectOptionsType}  
                        selectType={selectType} 
                        setSelectType={setSelectType}   
                        type={'type'}
                    />
                </div>
            </div>
            <ul className='leaderboard__list'>
                {
                    !userAll.length
                    ?
                    null 
                    :
                    userAll.map(obj => 
                        <LeaderItem 
                            key={obj.id} 
                            user={obj} 
                            lvl={selectType.lvl} 
                            scoreType={selectType.type}
                        />    
                    )
                }
            </ul>
            <Link to={'/'}>
                <FormButton>
                    Главная
                </FormButton>
            </Link>
        </div>
        </div>
    )
}

export default Leaderboard
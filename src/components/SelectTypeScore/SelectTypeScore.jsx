import React from 'react'
import './SelectTypeScore.sass'

function SelectTypeScore({options, selectType, setSelectType, type}) {

    const changeRender = (e) => {
        
        if(type === 'lvl') setSelectType({...selectType, lvl: e.currentTarget.value})
        if(type === 'type') setSelectType({...selectType, type: e.currentTarget.value})
        
    }

    return (
        <div className='select-score'>
            <select 
                name="user-score"
                onChange={changeRender}
            >
                {
                    options.map(obj => 
                        <option 
                        key={obj.value} 
                        value={obj.value}
                        >
                            {obj.text}
                        </option>
                    )
                }
            </select>
        </div>
    )
}

export default SelectTypeScore
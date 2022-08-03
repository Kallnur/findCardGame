import { useEffect, useState } from 'react'

function Steps({}) {

    const [steps, setSteps] = useState(0);

    // --------- 0_0 --------

    // --------- -_- ---------

    return (
        <div>
            <span className='game-field__steps'>Ходы: {steps}</span>
        </div>
    )
}

export default Steps
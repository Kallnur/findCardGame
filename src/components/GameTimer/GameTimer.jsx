import React, { useEffect, useState } from 'react'
import './GameTimer.sass'

function GameTimer({active, gameResult, hookGetTime}) {

  const [timeObj, setTimeObj] = useState({ min: 0, sec: 0});
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  useEffect(() => {
    let interval = null;
    if (isActive) {

      if(timeObj.sec > 59) setTimeObj({min: timeObj.min += 1, sec: 0});

      interval = setInterval(() => {
        setTimeObj({...timeObj, sec: timeObj.sec += 1});
      }, 1000);

    } else if (!isActive && timeObj.sec === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeObj]);

  useEffect(() => {
    if(active) toggle();

    if(!active) {
      const timeRes = (timeObj.min * 60) + timeObj.sec;
      hookGetTime(timeRes);
  
      setTimeObj({ min: 0, sec: 0});
      setIsActive(false);
    };

  }, [active])


  return (
    <div className='timer-game'>
        <div className='timer-game__body'>
            <span className='timer-game__min'> {String(timeObj.min).padStart(2, '0')}</span>
            :
            <span className='timer-game__sec'>{String(timeObj.sec).padStart(2, '0')}</span>
        </div>
    </div>
  )
}

export default GameTimer
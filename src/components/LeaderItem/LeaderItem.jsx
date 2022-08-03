import React from 'react'
import './LeaderItem.sass'

function LeaderItem({user, lvl, scoreType}) {

    console.log(lvl, scoreType);

    const scoreTypeRen = () => {
        if(scoreType === 'time') {
            return (
                <span className='leaderboard__user-score'>{user.points[lvl].time}</span>
            )
        }

        if(scoreType === 'steps') {
            return (
                <span className='leaderboard__user-score'>{user.points[lvl].steps}</span>
            )
        }

        if(scoreType === 'score') {
            return (
                <span className='leaderboard__user-score'>{user.points[lvl].score}</span>
            )
        }
    }

    return (
        <li className='leaderboard__item'>
            <strong className='leaderboard__user-name'>{user.name}</strong>
            { scoreTypeRen() }
        </li>
    )
}

export default LeaderItem
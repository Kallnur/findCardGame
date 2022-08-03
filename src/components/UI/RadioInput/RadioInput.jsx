import React from 'react'
import './RadioInput.sass'

function RadioInput({children, ...props}) {
  return (
    <div className='radio-input-block'>
        <input type="radio" {...props} />
        <label htmlFor={props.id}>{children}</label>
    </div>
  )
}

export default RadioInput
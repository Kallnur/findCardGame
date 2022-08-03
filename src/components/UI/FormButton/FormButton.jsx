import React from 'react'
import './FormButton.sass'

function FormButton({children, ...props}) {
  return (
    <div className='form-button'>
        <button {...props} className='form-button__btn'>{children}</button>
    </div>
  )
}

export default FormButton
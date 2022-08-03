import React from 'react'
import './FormInput.sass' 

function FormInput({...props}) {
  return (
    <div className='form-input__block'>
      <input {...props} className='form-input__input'/>
    </div>
  )
}

export default FormInput
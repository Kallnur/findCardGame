import React from 'react'
import './Modal.sass'

function Modal({children, modalShow, setModalShow }) {

    return (
        <div 
            className={`modal ${!modalShow ? '' : 'modal--open'}`}
            onClick={() => setModalShow(false)}
        >
            <div className='modal__wrapper'>
                <div 
                    className='modal__body'
                    onClick={e => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal
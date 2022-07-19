import React from 'react'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../css/modal.css'

const Modal = props => {

    const { itemTitle, itemDesc, path, handleCurrentItem } = props

    return (
        <div className='modal-container'>
            <h2 className='modal-title'>{itemTitle}</h2>
            <FontAwesomeIcon className='close' icon={faWindowClose} onClick={() => handleCurrentItem(0)} />
            {itemTitle ? <img className='modal-cover-image' src={path} alt='book' /> :
                <img className='modal-full-screen' src={path} alt='book' />}
            <p className='modal-summary'>{itemDesc}</p>
        </div>
    )
}

export default Modal;
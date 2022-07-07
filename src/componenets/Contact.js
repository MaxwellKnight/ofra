import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import '../css/contact.css'

const Contact = () => {
    return (
        <div className='contact'>
            <FontAwesomeIcon icon={faPhone} className='contact-icon' />
        </div>
    )
}

export default Contact;
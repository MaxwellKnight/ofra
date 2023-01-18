import { React, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { dragElement } from "../utils/animations";
import '../css/contact.css'
import Form from './Form';

const Contact = ({ isFormShown, toggleIsFormShown }) => {


    //dragElement defined in ../utils. allows element to be draggable
    useEffect(() => {
        dragElement('contact-container', 'contact')
    }, [])

    return (
        <div id='contact-container' className='contact'>
            <div id='contact' className='contact-wrapper'>
                <FontAwesomeIcon icon={faPhone} className='contact-icon' onClick={toggleIsFormShown} />
                {isFormShown ? <Form /> : ''}
            </div>
        </div>
    )
}

export default Contact;
import { React, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { dragElement } from "../utils/animations";
import '../css/contact.css'

const Contact = () => {

    useEffect(() => {
        dragElement('contact-container', 'contact')
    }, [])

    return (
        <div id='contact-container' className='contact'>
            <div id='contact'>
                <FontAwesomeIcon icon={faPhone} className='contact-icon' />
                <div className='contact-form'>
                    <form>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;
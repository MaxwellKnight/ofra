import { React, useEffect } from 'react'
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
				<span className='contact-icon' onClick={toggleIsFormShown}>ליצירת קשר</span>
				{isFormShown ? <Form /> : ''}
			</div>
		</div>
	)
}

export default Contact;
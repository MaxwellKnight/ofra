import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import '../css/form.css'

const Form = () => {

	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		phone: '',
		notes: ''
	})
	const form = useRef();

	const handleFormData = event => {
		const name = event.target.name
		const value = event.target.value
		setFormData(prevFormData => ({
			...prevFormData,
			[name]: value
		}))
	}
	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_gzgrmnf', 'template_xsi7wx4', form.current, 'UGPBw8rDMI9XD9CTo')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});

		e.target.reset();
	};
	return (
		<div className='contact-form'>
			<p>אל: <span>ofritush@gmail.com</span></p>
			<br />
			<form ref={form} onSubmit={sendEmail}>

				<label htmlFor='name'>שם</label>
				<input
					id='name'
					name='fullName'
					value={formData.fullName}
					type='text'
					placeholder=''
					onChange={handleFormData}
					required
				/>

				<label htmlFor='phone'>מס' נייד</label>
				<input
					id='phone'
					name='phone'
					value={formData.phone}
					type='phone'
					placeholder=''
					onChange={handleFormData}
					required
				/>

				<label htmlFor='email'>דואר אלקטרוני</label>
				<input
					id='email'
					name='email'
					value={formData.email}
					type='email'
					placeholder=''
					onChange={handleFormData}
					required
				/>

				<label htmlFor='notes'>הערות</label>
				<textarea
					id='notes'
					name='notes'
					value={formData.notes}
					type='textarea'
					onChange={handleFormData}
					required
				></textarea>
				<button>שלח/י</button>
			</form>
		</div>
	)
}

export default Form
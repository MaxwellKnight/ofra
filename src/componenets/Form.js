import React, { useState } from 'react'
import '../css/form.css'

const Form = () => {

	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		phone: '',
		notes: 'לדוגמא: פנייה בנושא ליווי מורות'
	})

	const handleFormData = event => {
		const name = event.target.name
		const value = event.target.value
		setFormData(prevFormData => ({
			...prevFormData,
			[name]: value
		}))
	}

	return (
		<div className='contact-form'>
			<form action='#'>

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
				<button type='submit'>שלח/י</button>
			</form>
		</div>
	)
}

export default Form
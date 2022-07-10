import React from 'react'
import '../css/form.css'

const Form = () => {
    return (
        <div className='contact-form'>
            <form action='#'>

                <label for='name'>שם</label>
                <input id='name' type='text' placeholder='דור ישראלי' />
                <label for='phone' type='phone'>מס' נייד</label>
                <input id='phone' type='phone' placeholder='053-123-4567' />
                <label for='notes'>הערות</label>
                <textarea id='notes' type='textarea' defaultValue='לדוגמא: פנייה בנושא ליווי מורות'></textarea>
                <button type='submit'>שלח/י</button>
            </form>
        </div>
    )
}

export default Form
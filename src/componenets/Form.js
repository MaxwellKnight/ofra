import React from 'react'
import '../css/form.css'

const Form = () => {
    return (
        <div className='contact-form'>
            <form action='#'>

                <label for='name'>שם</label>
                <input id='name' type='text' placeholder='דור ישראלי' required />

                <label for='phone'>מס' נייד</label>
                <input id='phone' type='phone' placeholder='053-123-4567' required />

                <label for='email'>דואר אלקטרוני</label>
                <input id='email' type='email' placeholder='dor@gmail.com' required />

                <label for='notes'>הערות</label>
                <textarea id='notes' type='textarea' defaultValue='לדוגמא: פנייה בנושא ליווי מורות' required></textarea>
                <button type='submit'>שלח/י</button>
            </form>
        </div>
    )
}

export default Form
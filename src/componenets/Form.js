import React from 'react'
import '../css/form.css'

const Form = () => {
    return (
        <div className='contact-form'>
            <form action='#'>

                <label for='name'>שם</label>
                <input id='name' type='text' placeholder='ישראל ישראלי' />
                <label for='phone' type='phone'>מס' נייד</label>
                <input id='phone' type='phone' placeholder='053-123-4567' />
                <button type='submit'>שלח/י</button>
            </form>
        </div>
    )
}

export default Form
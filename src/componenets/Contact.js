import React from 'react'
import '../css/contact.css'

export default function Contact() {
    return (
        <div className='contact'>
            <img src={require('../images/contact-bg.jpeg')} className='contact-image' alt="" />
            <form className="card">
                <h1>צור קשר</h1>
                <p className='contact-text'></p>
                <input className='name' type="text" placeholder='שם' />
                <input className='email' type="text" placeholder='אימייל' />
                <button type="submit" className="btn-contact">שליחה</button>
            </form>
        </div>
    )
}
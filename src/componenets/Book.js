import React from 'react'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Book(props) {

    const { book, handleCurrentBook } = props

    return (
        <div className='book-container'>
            <FontAwesomeIcon className='close' icon={faWindowClose} onClick={() => handleCurrentBook(0)} />
            <img className='book-cover-image' src={require('../images/placeholder.jpeg')} alt='book picture' />
            <h2>{book.title}</h2>
            <p className='book-summary'>{book.summary}</p>
        </div>
    )
}
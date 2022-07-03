import { React, useState } from 'react'
import booksData from '../books'
import '../css/books.css'
import Book from './Book';

export default function Books() {
    const { books } = booksData;
    const [currentBook, updateCurrentBook] = useState(0);

    function handleCurrentBook(id) {
        updateCurrentBook(id)
    }

    function printBooks(category) {
        const newBooks = books.map((book) => book.category === category ? book : '').filter(e => e)
        return (
            newBooks.map((book) => {
                return (
                    <div className='book' key={book.dateReleased}>
                        <h4 className='book-title'>{book.title}</h4>
                        <img className='book-image'
                            src={require('../images/placeholder.jpeg')}
                            alt="cover of the book"
                            onClick={() => handleCurrentBook(book.id)} />
                    </div>
                )
            })
        )
    }

    return (
        <main className="books">
            {currentBook ? <Book book={books.find(book => book.id === currentBook)} handleCurrentBook={handleCurrentBook} /> : ''}
            <h1 className='books-section-title'>ספרי ילדים</h1>
            <div className='book-wrapper'>
                {printBooks('children')}
            </div>

            <h1 className='books-section-title'>ספרונים מעוררי-מחשבה</h1>
            <div className='book-wrapper'>
                {printBooks('thoughtful')}
            </div>
        </main>
    )
}
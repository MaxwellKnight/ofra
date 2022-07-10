import { React, useState } from 'react'
import booksData from '../data/books'
import '../css/books.css'
import Book from './Book';
import { printBooks } from '../utils/print';

const Books = () => {
    const { books } = booksData;
    const [currentBook, updateCurrentBook] = useState(0);

    const handleCurrentBook = id => {
        updateCurrentBook(id)
    }

    return (
        <main className="books">
            {currentBook ? <Book book={books.find(book => book.id === currentBook)} handleCurrentBook={handleCurrentBook} /> : ''}
            <h1 className='books-section-title'>ספרים לצעירים ולצעירים ברוחם</h1>
            <div className='book-wrapper'>
                {printBooks(books, 'children', handleCurrentBook)}
            </div>

            <h1 className='books-section-title'>ספרונים מעוררי-מחשבה</h1>
            <div className='book-wrapper'>
                {printBooks(books, 'thoughtful', handleCurrentBook)}
            </div>
        </main>
    )
}

export default Books;
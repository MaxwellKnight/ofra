import { React } from 'react'
import booksData from '../books-data'
import '../css/books.css'

export default function Books() {
    const { books } = booksData;

    function printBooks(category) {
        const newBooks = books.map((book) => book.category === category ? book : '').filter(e => e)
        return (
            newBooks.map((book) => {
                return (
                    <div className='book' key={book.dateReleased}>
                        <h4 className='book-title'>{book.title}</h4>
                        <img className='book-image' src={require('../images/placeholder.jpeg')} alt="cover of the book" />
                        <time>{book.dateReleased}</time>
                        <p className='summary'>{book.summary}</p>
                    </div>
                )
            })
        )
    }

    return (
        <main className="books">
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
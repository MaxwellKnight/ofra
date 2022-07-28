import { React, useState } from 'react'
import booksData from '../data/books'
import '../css/books.css'
import Modal from './Modal';
import { printBooks } from '../utils/print';

const Books = () => {
    const { books } = booksData;
    const [currentBook, updateCurrentBook] = useState(0);
    const book = books.find(book => book.id === currentBook)


    const handleCurrentBook = id => {
        updateCurrentBook(id)
    }

    return (
        <main className="books">
            {currentBook ? <Modal itemTitle={book.title} itemDesc={book.summary} path={book.coverImage} handleCurrentItem={handleCurrentBook} /> : ''}
            <h1 className='books-section-title'>ספרים לצעירים ולצעירים ברוחם</h1>
            <p>הספרים נכתבו עבור צעירים וצעירים ברוחם, מעוררים השראה ומעבירים
                מסרים בכל תחומי החיים.
                הסיפורים מתרחשים בכפר סנטושה,  משמעות
                המילה סנטושה בסנסקריט(הודית עתיקה), שביעות-רצון.
                בכל ספר דמויות מרכזיות שונות, והעלילה סביב ערך חברתי אחר.
            </p>
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
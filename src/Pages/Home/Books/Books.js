import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('books-data.json')
            .then(res => res.json())
            .then(data => setBooks(data))
    }, []);
    return (
        <div className=''>
            <div className='row gx-5'>
                {
                    books.slice(0, 6).map(book => <Book key={book._id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;
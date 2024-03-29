import { useEffect, useState } from "react";
import BooksList from "../BooksList/BooksList";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('./books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[]);
    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-7 md:mb-10">Book: {books.length}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-5  mb-12 md:mb-32">
                {
                    books.map(book => <BooksList key={book.id} book={book}></BooksList>)
                }
            </div>
        </div>
    );
};

export default Books;
import { useEffect, useState } from "react";

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('../../../public/books.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[]);
    return (
        <div>
            <h1 className="text-3xl md:text-4xl font-bold text-center">Book: {books.length}</h1>
        </div>
    );
};

export default Books;
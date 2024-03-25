import { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(()=>{
        fetch('fake.json')
        .then(res => res.json())
        .then(data => setBooks(data))
    },[])

    return (
        <div className="text-center mt-8 md:mt-24">
            <h2 className="text-3xl font-semibold">Books: {books.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
                books.map(book => <Book key={book.id} book={book}></Book>)
            }
            </div>
        </div>
    );
};

export default Books;
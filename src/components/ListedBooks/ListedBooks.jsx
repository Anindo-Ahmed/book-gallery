import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks } from "../../Utility/localstorage";

const ListedBooks = () => {
    const books = useLoaderData();
    const [bookList, setBookList] = useState([]);

    useEffect(()=>{
        const storedBooks = getStoredBooks();
        if(books.length){
            const readBook = books.filter(book => storedBooks.includes(book.bookId));
            setBookList(readBook)
        }
    },[])


    return (
        <div className="mt-9 text-center">
            <div className="bg-base-200 p-9">
                <h2 className="text-center text-3xl font-bold rounded-2xl">Books: {bookList.length}</h2>
            </div>
            <details className="dropdown mt-8 mb-14">
                <summary className="m-1 bg-[#23BE0A] rounded-lg py-4 px-12 text-white">Sort By</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-auto ">
                    <li><a>Rating</a></li>
                    <li><a>Number of pages</a></li>
                    <li><a>Publisher year</a></li>
                </ul>
            </details>
            {/* <div>
                {
                   bookList.map(books => ) 
                }
            </div> */}
        </div>
    );
};

export default ListedBooks;
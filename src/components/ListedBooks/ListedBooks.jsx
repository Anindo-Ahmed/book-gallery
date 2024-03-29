import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBooks, getStoredWishList } from "../../Utility/localstorage";
import Readbooks from "../Readbooks/Readbooks";
import Wishlist from "../Wishlist/Wishlist";

const ListedBooks = () => {
    const books = useLoaderData();
    const [bookList, setBookList] = useState([]);
    const [wishLists, setWishList] = useState([]);
    const [displayLists, setDisplayLists] = useState([]);

    const handleSortBooks = sort =>{
        if(sort === 'rating'){
            setDisplayLists(bookList);
        }
        else if(sort === 'numberOfPages'){
            const totalPages = bookList.filter(pages => pages.totalPages === {totalPages});
            setDisplayLists(totalPages);
        }
        else if(sort === 'publishYear'){
            const years = bookList.filter(year => pages.yearOfPublishing === {yearOfPublishing});
            setDisplayLists(totalPages);
        } 
    }

    useEffect(()=>{
        const storedBooks = getStoredBooks();
        if(books.length){
            const readBook = books.filter(book => storedBooks.includes(book.bookId));
            setBookList(readBook);
            setDisplayLists(readBook);
        }
    },[]);

    useEffect(()=>{
        const storedWishListBooks = getStoredWishList();
        if(books.length){
            const wishBook = books.filter(book => storedWishListBooks.includes(book.bookId));
            setWishList(wishBook)
        }
    },[])


    return (
        <div className="mt-9 text-center">
            <div className="bg-base-200 p-9">
                <h2 className="text-center text-3xl font-bold rounded-2xl">Books</h2>
            </div>
            <details className="dropdown mt-8 mb-14">
                <summary className="m-1 bg-[#23BE0A] rounded-lg py-4 px-12 text-white">Sort By</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-auto ">
                    <li onClick={()=> handleSortBooks('rating')}><a>Rating</a></li>
                    <li onClick={()=> handleSortBooks('numberOfPages')}><a>Number of pages</a></li>
                    <li onClick={()=> handleSortBooks('publishYear')}><a>Publisher year</a></li>
                </ul>
            </details>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box py-6 gap-6">
                    {
                        displayLists.map(readBook => <Readbooks key={readBook.bookId} readBook={readBook}></Readbooks>)
                    }
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="WishList Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                       wishLists.map(wishList => <Wishlist key={wishList.bookId} wishList={wishList}></Wishlist>) 
                    }
                </div>

            </div>
        </div>
    );
};

export default ListedBooks;
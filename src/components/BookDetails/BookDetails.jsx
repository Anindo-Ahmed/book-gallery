import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from "react-router-dom";
import { getStoredBooks, saveBookList, saveWishList } from '../../Utility/localstorage';
import { useState } from 'react';

const BookDetails = () => {
    
    const books = useLoaderData();
    const {bookId} = useParams();
    const book = books.find(book => book.bookId === parseInt(bookId))
    const [bookLists, setBookLists] = useState([]);
    const [wishLists, setWishList] = useState([]);

    const handleRead = (e) => {
        saveBookList(parseInt(bookId));
        const isExist = bookLists.find(book => book.bookId === e.bookId)
        
        if(!isExist){
            setBookLists([...bookLists, e]);
            toast('Successfully added to Read list')
        }
        else{
            toast("It's Already been added to readlist")
        }
    }
    const handleWishList = (e) => {
        const bookList = getStoredBooks()
        saveWishList(parseInt(bookId));
        
        const isExist = wishLists.find(book => book.bookId === bookList.bookId)
        
        if(!isExist){
            setWishList([...wishLists, e]);
            toast('Successfully added to  Wishlist')
        }
        else{
            toast("It's Already been added to wishlist")
        }
    }
    return (
        <div className="flex flex-col md:flex-row justify-between gap-12 mt-14 p-2">
            
            <div className="bg-base-200 rounded-2xl p-20 md:w-1/2 md:h-[700px] shadow-md">
                <img src={book.image} alt="" className="md:h-[100%] md:mx-auto w-auto"/>
            </div>
            <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4">{book.bookName}</h1>
                <p className="text-xl mb-6"><span>By: </span>{book.author}</p>
                <hr className="border"/>
                <p className="my-4">{book.category}</p>
                <hr className="border"/>
                <p className="my-6"><span className="font-semibold">Review: </span>{book.review}</p>
                <ul className='flex gap-4'><span className="font-semibold">Tag: </span>
                {
                    book.tags.map(tag => <li className="bg-[#23BE0A12] px-4 text-[#23BE0A] rounded-full">#{tag}</li>)
                }
                </ul>
                <hr className="border my-6"/>
                <p className='font-bold'><span className='font-normal'>No of Pages: </span>{book.totalPages}</p>
                <p className="my-3 font-bold"><span className='font-normal'>Publisher: </span>{book.publisher}</p>
                <p className='font-bold'><span className='font-normal'>Year of Publishing: </span>{book.yearOfPublishing}</p>
                <p className="my-3 font-bold"><span className='font-normal'>Rating: </span>{book.rating}</p>

                <div className="flex gap-4 mt-8">
                    <button onClick={()=>handleRead(book)} className="btn btn-outline rounded-lg py-4 px-7 text-black hover:bg-[#23BE0A]">Read</button>
                    <button onClick={()=>handleWishList(book)} className="btn btn-outline bg-[#50B1C9] rounded-lg py-4 px-7  text-white">WishList</button>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default BookDetails;
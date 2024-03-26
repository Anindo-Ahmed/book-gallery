import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLoaderData, useParams } from "react-router-dom";
import { saveBookList } from '../../Utility/localstorage';

const BookDetails = () => {

    const books = useLoaderData();
    const {bookId} = useParams();
    const book = books.find(book => book.bookId === parseInt(bookId))

    const handleRead = (e) => {
        saveBookList(parseInt(bookId));
        console.log('Read clicked',e);
        toast('Successfully added to Read list')
    }
    const handleWishList = (e) => {
        saveBookList(parseInt(bookId));
        console.log('wishlist clicked',e)
        toast('Successfully added to Wishlist')
    }
    return (
        <div className="flex flex-col md:flex-row justify-between gap-12 mt-14">
            
            <div className="bg-base-200 rounded-2xl p-20 w-1/2 h-[700px] shadow-md">
                <img src={book.image} alt="" className="h-[100%] mx-auto"/>
            </div>
            <div className="flex-1">
                <h1 className="text-4xl font-bold mb-4">{book.bookName}</h1>
                <p className="text-xl mb-6"><span>By: </span>{book.author}</p>
                <hr className="border"/>
                <p className="my-4">{book.category}</p>
                <hr className="border"/>
                <p className="my-6"><span className="font-semibold">Review: </span>{book.review}</p>
                <p><span className="font-semibold">Tag: </span>{book.tags}</p>
                <hr className="border my-6"/>
                <p><span>No of Pages: </span>{book.totalPages}</p>
                <p className="my-3"><span>Publisher: </span>{book.publisher}</p>
                <p><span>Year of Publishing: </span>{book.yearOfPublishing}</p>
                <p className="my-3"><span>Rating: </span>{book.rating}</p>

                <div className="flex gap-4 mt-8">
                    <button onClick={()=>handleRead(book)} className="btn btn-outline rounded-lg py-4 px-7 text-black">Read</button>
                    <button onClick={()=>handleWishList(book)} className="btn btn-outline bg-[#50B1C9] rounded-lg py-4 px-7  text-white">WishList</button>
                </div>
            </div>

            <ToastContainer />
        </div>
    );
};

export default BookDetails;
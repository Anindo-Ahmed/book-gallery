import { list } from "postcss";
import { Link } from "react-router-dom";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdOutlineFindInPage } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Readbooks = ({readBook}) => {
      
    const {bookId, image, bookName, tags, author, category, rating, yearOfPublishing, publisher, totalPages} = readBook;
    
    return (
        <>
            <div className="border rounded-2xl p-6 flex flex-col md:flex-row gap-6">
                <div className="w-[230px] h-[100%] p-12 bg-base-200 rounded-2xl">
                    <img src={image} alt="" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold text-start">{bookName}</h2>
                    <p className="my-5 text-start"><span>By: </span>{author}</p>
                    <div className="flex flex-col md:flex-row gap-3 my-5">
                        <ul className="flex flex-col md:flex-row gap-4"><span className="font-semibold" >Tag</span>
                        {
                            tags.map(tag => <li className="bg-[#23BE0A12] px-4 text-[#23BE0A] rounded-full">#{tag}</li>)
                        }
                        </ul>
                        <p className="flex items-center gap-2"><span className="flex items-center gap-2"><IoLocationOutline /> Year of Publishing: </span>{yearOfPublishing}</p>
                    </div>
                    <div className="flex flex-col md:flex-roww items-center gap-6">
                        <p className="flex items-center gap-2"><span className="flex items-center gap-2"> <AiOutlineUsergroupAdd />Publisher: </span>{publisher}</p>
                        <p className="flex items-center gap-2"><span className="flex items-center gap-2"> <MdOutlineFindInPage />Page: </span>{totalPages}</p>
                    </div>
                    <hr className="my-4 border"/>
                    <div className="flex flex-col md:flex-row items-center gap-3">
                        <p className="bg-[#328EFF12] py-2 px-4 text-[#328EFF] rounded-full"><span>category: </span>{category}</p>
                        <p className="bg-[#FFAC3312] py-2 px-4 text-[#FFAC33] rounded-full"><span>Rating: </span>{rating}</p>
                        <Link to={`/book/${bookId}`}><button className="bg-[#23BE0A] rounded-full py-2 px-7 text-white">View Details</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Readbooks;
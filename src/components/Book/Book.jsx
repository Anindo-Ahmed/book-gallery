import { IoStarHalf } from "react-icons/io5";

const Book = ({book}) => {
    const {image, bookName, tags, author, category, rating} = book;
    return (
        <div className="card text-start card-compact bg-base-100 shadow-xl p-6 border mt-6 md:mt-9">
            <div className="bg-base-200 p-4 rounded-2xl mb-6">
                <figure><img src={image} alt="Books" className="max-w-32"/></figure>
            </div>
            <div className="card-body">
                <div>
                    <button className="bg-[#23BE0A12] rounded-full px-4 text-[#23BE0A]">{category}</button>
                </div>
                <h2 className="card-title">{bookName}</h2>
                <p><span>By: </span>{author}</p>
                <hr className="border-dashed my-5"/>
                <div className="card-actions ">
                    <p>{category}</p>
                    <p className="flex items-center gap-2">{rating} <IoStarHalf /></p>
                </div>
            </div>
        </div>
    );
};

export default Book;
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mt-12 rounded-3xl p-2 md:p-28">
            <div className="flex flex-col lg:flex-row-reverse justify-between items-center p-2">
                <div>
                <img src="../../../images/hero.png" className="w-auto rounded-lg" />
                </div>
                <div className="mt-5">
                    <h1 className="text-4xl md:text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <Link to="/booklist"><button className="bg-[#23BE0A] rounded-lg py-5 px-7 text-white mt-12">View The List</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
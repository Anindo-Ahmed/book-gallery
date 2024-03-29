import React from 'react';
import { Link } from 'react-router-dom';
import { IoArrowBackSharp } from "react-icons/io5";

const ErrorPage = () => {
    return (
        <div className='min-h-[600px] flex flex-col text-center justify-center mt-14'>
            <p className='text-rose-500'>404</p>
            <h2 className='text-5xl font-bold my-6'>Page not found</h2>
            <p>Sorry, we couldn’t find the page you’re looking for.</p>
            <div className='flex justify-center'>
            <Link><button className='bg-[#23BE0A] rounded-lg py-2 px-9 text-white mt-7 flex items-center gap-3'>
            <IoArrowBackSharp/>  Go to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;
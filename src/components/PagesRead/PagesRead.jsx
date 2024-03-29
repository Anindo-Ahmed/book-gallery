import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import { getStoredBooks, saveBookList } from '../../Utility/localstorage';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const PagesRead = () => {
    const books = useLoaderData();
    const [bookChart, setBookChart] = useState([]);
    
    useEffect(()=>{
        const storedBooks = getStoredBooks();
        console.log(storedBooks);
        if(books.length){
            const readBook = books.filter(book => storedBooks.includes(book.bookId));
            setBookChart(readBook); 
        }
        
    },[])
    // const storedBooks = getStoredBooks();

    return (
        <div>
            <h2>The read section:</h2>
            <BarChart
                width={600}
                height={300}
                data={bookChart}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="bookName" />
                <YAxis dataKey="totalPages"/>
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {bookChart.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>
        </div>
    );
};

export default PagesRead;
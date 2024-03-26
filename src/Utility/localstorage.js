const getStoredBooks = () =>{
    const storedBook = localStorage.getItem('bookList');

    if(storedBook){
        return JSON.parse(storedBook);
    }
    else{
        return [];
    }
} 

const saveBookList = id => {
    const storedBooks = getStoredBooks();
    const exist = storedBooks.find(bookId => bookId === id);
    if(!exist){
        storedBooks.push(id);
        localStorage.setItem('bookList', JSON.stringify(storedBooks))
    }
};

export {getStoredBooks, saveBookList}
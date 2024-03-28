const getStoredBooks = () =>{
    const storedBook = localStorage.getItem('bookList');

    if(storedBook){
        return JSON.parse(storedBook);
    }
    else{
        return [];
    }
} 
const getStoredWishList = () =>{
    const storedWishList = localStorage.getItem('wishList');

    if(storedWishList){
        return JSON.parse(storedWishList);
    }
    else{
        return [];
    }
};

const saveBookList = id => {
    const storedBooks = getStoredBooks();
    const exist = storedBooks.find(bookId => bookId === id);
    if(!exist){
        storedBooks.push(id);
        localStorage.setItem('bookList', JSON.stringify(storedBooks))
    }
};

const saveWishList = id => {
    const storedWishLists = getStoredWishList();
    const exist = storedWishLists.find(bookId => bookId === id);
    if(!exist){
        storedWishLists.push(id);
        localStorage.setItem('wishList', JSON.stringify(storedWishLists))
    }
};

export {getStoredBooks, getStoredWishList,saveBookList, saveWishList}
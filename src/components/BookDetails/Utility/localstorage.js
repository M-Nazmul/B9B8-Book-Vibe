const getStoredBook = () => {
    const storedBook = localStorage.getItem('books');
    if(storedBook){
        return JSON.parse(storedBook)
    }
    return [];
}

const saveBook = id => {
    const storedBook = getStoredBook();
    const exists = storedBook.find(bookId => bookId == id);
    if(!exists){
        storedBook.push(id);
        localStorage.setItem('books', JSON.stringify(storedBook))
    }
}
export {getStoredBook ,saveBook}
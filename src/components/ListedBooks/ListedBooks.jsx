import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredBook } from "../BookDetails/Utility/localstorage";
// import ListedBooksTab from "../ListedBooksTab/ListedBooksTab";
import ListedBookTabItem from "../ListedBookTabItem/ListedBookTabItem";

const ListedBooks = () => {
    const books = useLoaderData();
    const [listBooks, setListBooks] = useState([]);
    useEffect(() => {
        const storedBookIds = getStoredBook();
        if(books.length > 0){
            const listBook = [];
            for(const id of storedBookIds){
                const book = books.find(book => book.id === id);
                if(book){
                    listBook.push(book)
                }
            }
            setListBooks(listBook);
        }
    },[])
    return (
        <div className="text-center my-6">

            <h2 className="text-2xl md:text-3xl font-bold bg-[#F3F3F3] p-8 rounded-md mb-5">Books : {listBooks.length}</h2>
            <div>
            <select className="select select-success w-full max-w-44 my-6">
                <option disabled selected>Short By</option>
                <option>Rating</option>
                <option>Number of pages</option>
                <option>Publisher year</option>
            </select>
            </div>
            {/* <ListedBooksTab></ListedBooksTab> */}
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                {
                listBooks.map(book => <ListedBookTabItem key={book.id} book={book}></ListedBookTabItem>)
                }
                </div>
                

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    {
                listBooks.map(book => <ListedBookTabItem key={book.id} book={book}></ListedBookTabItem>)
                }
                </div>
            </div>
           
            
        </div>
    );
};

export default ListedBooks;
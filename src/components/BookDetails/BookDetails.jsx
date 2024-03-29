import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBook } from "./Utility/localstorage";


const BookDetails = () => {
    const books = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const book = books.find(book => book.id === idInt);
    // console.log(book);

    const [clickRead, setClickRead] = useState(false)
    const handleRead = () =>{
        saveBook(idInt);
        if(!clickRead){
            setClickRead(toast.success('Books Added to Read list'));
        }
        else{
            setClickRead(toast.error('You have Already Read this book!'));
        }
    };
    const [clickWish, setClickWish] = useState(false)
    const handleWish = () =>{
        saveBook(idInt);
        if(!clickWish){
            setClickWish(toast.success('Books Added to Wishlist!'));
        }
        else{
            setClickWish(toast.error('You have Already this book!'));
        }
    };
    

    return (
        <div className="my-12 grid gap-6 grid-cols-1 md:grid-cols-2 px-4">
            <div className=" md:max-w-lg p-8 md:p-16 border bg-slate-50 rounded-2xl grid-cols-2 md:grid-cols-1">
                <img className="w-[50%] md:w-[70%] mx-auto" src={book.image} alt="" />
            </div>
            <div className="">
                <h1 className="text-2xl md:text-4xl font-bold">{book.bookName}</h1>
                <p className="my-4 font-medium text-xl">{book.author}</p>
                <hr />
                <h2 className="my-4  font-medium text-xl">{book.category}</h2><hr />
                <p className="mt-4 font-normal text-xl"> <span className="text-base font-bold">Review:</span> {book.review}</p>
                <div className='flex gap-6 mt-6 items-center my-4'>
                    <h3 className="text-base font-bold">Tag</h3>
                        <h3 className='px-5 py-2 text-[#23BE0A] font-semibold bg-gray-100 rounded-2xl'>#Young Adult</h3>
                        <h3 className='px-5 py-2 text-[#23BE0A] font-semibold bg-gray-100 rounded-full'>#Identity</h3>
                </div>
                <hr />
                <div className="text-base font-semibold text-black max-w-80 flex flex-col gap-3 my-6">
                   <h2 className="flex justify-between gap-6">
                      <span className=" text-[#595959]">Number of Pages:</span> 
                      <span>{book.totalPages}</span>
                   </h2>
                   <h2 className="flex justify-between gap-6">
                      <span className="text-[#595959]">Publisher:</span> 
                      <span>{book.publisher}</span>
                   </h2>
                   <h2 className="flex justify-between gap-6">
                      <span className="text-[#595959]">Year of Publishing:</span> 
                      <span>{book.yearOfPublishing}</span>
                   </h2>
                   <h2 className="flex justify-between gap-6">
                      <span className="text-[#595959]">Rating:</span> 
                      <span>{book.rating}</span>
                   </h2>
                </div>
                <div>
                    <button onClick={handleRead} className="btn mr-3 border ">Read</button>
                    <button onClick={handleWish} className="btn mr-3 border bg-[#50B1C9] text-white hover:border-[#50B1C9] hover:text-black hover:bg-transparent">Wishlist</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default BookDetails;
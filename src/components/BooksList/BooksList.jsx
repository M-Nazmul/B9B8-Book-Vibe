import PropTypes from 'prop-types';
import { CiStar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const BooksList = ({book}) => {
    const {id, image, author, bookName, category, rating} = book;
    
    return (
        <div className='mx-auto'>
            <Link to={`/booklist/${id}`}>
            <div className="card max-w-96 bg-base-100 shadow-xl p-6  border">
                <figure className='bg-[#F3F3F3] p-7 rounded-2xl'><img src={image} alt="Books" /></figure>
                <div className="flex flex-col md:w-[300px]">
                    <div className='flex gap-6 mt-6'>
                        <h3 className='px-5 py-2 text-[#23BE0A] font-semibold bg-gray-100 rounded-2xl'>Young Adult</h3>
                        <h3 className='px-5 py-2 text-[#23BE0A] font-semibold bg-gray-100 rounded-full'>Identity</h3>
                    </div>
                    <h2 className="card-title font-bold text-2xl my-2">{bookName}</h2>
                    <p className='text-base font-medium'>By : {author}</p>
                    <div className='border-b border-dashed w-full my-3'></div>
                    <div className="card-actions justify-between text-base font-medium">
                        <h3>{category}</h3>
                        <h3 className='flex items-center gap-2'>{rating}<CiStar className='text-xl' /></h3>
                    </div>
                    {/* <div>
                        <Link to={`/booklist/${id}`}><button className='btn'>View</button></Link>
                    </div> */}
                </div>
            </div>
            </Link>
        </div>
    );
};
BooksList.propTypes = {
book: PropTypes.object
}
export default BooksList;
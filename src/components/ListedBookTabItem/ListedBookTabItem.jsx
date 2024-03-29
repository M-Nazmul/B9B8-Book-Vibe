import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CiLocationOn } from "react-icons/ci";
import { GrNotes } from "react-icons/gr";
import { RiGroupLine } from "react-icons/ri";

const ListedBookTabItem = ({book}) => {
    const {bookName, author, image, yearOfPublishing, rating, totalPages, publisher} = book;
  return (
    <div>
        <div className="flex gap-6 mb-6 flex-wrap border p-3 rounded-2xl">
            
                <figure className="bg-[#F3F3F3] flex-grow md:max-w-56 rounded-2xl">
                    <img className="px-12 py-7 mx-auto" src={image} alt="" />
                </figure>
            <div className="text-left flex-grow">
                <h2 className="text-2xl font-bold">{bookName}</h2>
                <p className="text-base font-medium my-3">By : {author}</p>
                <div className='my-4 flex flex-wrap items-center gap-5'>
                    <h3 className="text-base font-bold">Tag</h3>
                    <h3 className='px-5 py-2 text-[#23BE0A] font-semibold bg-gray-100 rounded-2xl'>#Young Adult</h3>
                    <h3 className='px-5 py-2 text-[#23BE0A] font-semibold bg-gray-100 rounded-full'>#Identity</h3>
                    <h3 className="flex items-center font-semibold gap-2"><CiLocationOn className="text-xl" /> Year of Publishing: {yearOfPublishing}</h3>
                </div>
                <div className="flex gap-6">
                    <h3 className="flex items-center font-semibold gap-2"><RiGroupLine className="text-xl" />Publisher: {publisher}</h3>
                    <h3 className="flex items-center font-semibold gap-2"><GrNotes className="text-xl" /> Page {totalPages}</h3>
                </div>
                <hr className="my-4" />
                <ul className="flex flex-wrap gap-5 p-4">
                    <li><Link className="text-base font-medium border rounded-full px-4 py-3 text-[#328EFF] bg-[#E0EEFF] border-none">Category: Classic</Link></li>
                    <li className='my-4 md:my-0'><Link className="border text-base font-medium rounded-full px-4 py-3 text-[#FFAC33] bg-[#FFF3E1] border-none">Rating: {rating}</Link></li>
                    <li><Link className="text-base font-medium border rounded-full px-5 py-3 text-white bg-[#23BE0A] border-none">View Details</Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

ListedBookTabItem.propTypes = {
book: PropTypes.object
}

export default ListedBookTabItem
import PropTypes from 'prop-types'
const BooksList = ({book}) => {
    const {image, author, bookName, category, rating} = book;
    console.log(book)
    return (
        <div className='mx-auto'>
            <div className="card max-w-96 bg-base-100 shadow-xl p-6  border">
                <figure className='bg-[#F3F3F3] p-7 rounded-2xl'><img src={image} alt="Books" /></figure>
                <div className="flex flex-col max-w-[300px]">
                    <div className='flex gap-6 mt-6'>
                        <h3 className='px-5 py-2 text-[#23BE0A] font-semibold bg-gray-100 rounded-2xl'>Young Adult</h3>
                        <h3 className='px-5 py-2 text-[#23BE0A] font-semibold bg-gray-100 rounded-full'>Identity</h3>
                    </div>
                    <h2 className="card-title font-bold text-2xl my-2">{bookName}</h2>
                    <p className='text-base font-medium'>By : {author}</p>
                    <div className="card-actions justify-between text-base font-medium">
                        <h3>{category}</h3>
                        <h3>{rating}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};
BooksList.propTypes = {
book: PropTypes.object
}
export default BooksList;
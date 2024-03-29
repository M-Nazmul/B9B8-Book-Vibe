import PropTypes from 'prop-types';

const ListedBooksTab = () => {
    // const {bookName, author, image } = book;
    // console.log(book);
    return (
        <div>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" checked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 1

                    {/* <div className="flex gap-6 mb-6 flex-wrap border p-3 rounded-2xl">
                        <div>
                            <figure className="bg-[#F3F3F3] max-w-56 rounded-2xl">
                                <img className="px-12 py-7" src="https://i.ibb.co/yyD2Jwd/book-3.png" alt="" />
                            </figure>
                        </div>
                        <div className="text-left flex-grow">
                            <h2 className="text-2xl font-bold">The Catcher in the Rye</h2>
                            <p className="text-base font-medium my-3">By : Awlad Hossain</p>
                            <div className='my-4 flex flex-wrap items-center gap-5'>
                                <h3 className="text-base font-bold">Tag</h3>
                                <h3 className='px-5 py-2 text-[#23BE0A] font-semibold bg-gray-100 rounded-2xl'>#Young Adult</h3>
                                <h3 className='px-5 py-2 text-[#23BE0A] font-semibold bg-gray-100 rounded-full'>#Identity</h3>
                                <h3 className="flex items-center font-semibold gap-2"><CiLocationOn className="text-xl" /> Year of Publishing: 1924</h3>
                            </div>
                            <div className="flex gap-6">
                                <h3 className="flex items-center font-semibold gap-2"><RiGroupLine className="text-xl" />Publisher: Scribner</h3>
                                <h3 className="flex items-center font-semibold gap-2"><GrNotes className="text-xl" /> Page 192</h3>
                            </div>
                            <hr className="my-4" />
                            <ul className="flex flex-wrap gap-5 p-4">
                                <li><Link className="text-base font-medium border rounded-full px-4 py-3 text-[#328EFF] bg-[#E0EEFF] border-none">Category: Classic</Link></li>
                                <li><Link className="border text-base font-medium rounded-full px-4 py-3 text-[#FFAC33] bg-[#FFF3E1] border-none">Rating: 4.5</Link></li>
                                <li><Link className="text-base font-medium border rounded-full px-5 py-3 text-white bg-[#23BE0A] border-none">View Details</Link></li>
                            </ul>
                        </div>
                    </div> */}
                </div>
                

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">Tab content 2
                    <div className="flex flex-col gap-4 w-52">
                        <div className="skeleton h-32 w-full"></div>
                        <div className="skeleton h-4 w-28"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
ListedBooksTab.propTypes = {
    book: PropTypes.object
}
export default ListedBooksTab;
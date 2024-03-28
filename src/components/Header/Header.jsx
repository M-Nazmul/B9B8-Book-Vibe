import { Link } from 'react-router-dom';
import user from '../../assets/headerBook.png';

const Header = () => {
    return (
        <div className="hero min-h-[540px] bg-base-200 px-6 md-px-24 rounded-3xl mt-6 md:mt-12 mb-12 md:mb-24">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <figure>
                    <img className='mx-auto w-[90%] md:w-full' src= {user} />
                </figure>
                <div className='max-w-[526px]  flex flex-col'>
                    <h1 className="text-2xl md:text-5xl font-bold mb-6 md:mb-12">Books to freshen up your bookshelf</h1>
                    <Link className='text-left' to={"/listedbooks"}>
                    <button className="btn border-1 hover:bg-transparent hover:text-black hover:border-[#23BE0A] bg-[#23BE0A] text-white">View The List</button>
                </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
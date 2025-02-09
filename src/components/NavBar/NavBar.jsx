import { NavLink } from "react-router-dom";
import './Nav.css';
const NavBar = () => {
    const links = <>
        <li><NavLink to={"/"}>Home</NavLink></li>
        <li><NavLink to={"/listedbooks"}>Listed Books</NavLink></li>
        <li><NavLink to={"/pageread"}>Pages to Read</NavLink></li>
        <li><NavLink to={"/author"}>Author</NavLink></li>
        <li><NavLink to={"/blog"}>Blog</NavLink></li>
     </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 flex flex-col items-center">
                    {links}
                </ul>
            </div>
            <a className="btn btn-ghost text-xl md:text-3xl font-bold">Book Vibe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                {links}
            </ul>
            </div>
            <div className="navbar-end md:flex gap-2">
            <a className="btn bg-[#23BE0A] text-white hover:border-[#23BE0A] hover:bg-transparent hover:text-black md:py-[18px] md:px-7">Sign In</a>
            <a className="btn bg-[#59C6D2] text-white hover:border-[#59C6D2] hover:bg-transparent hover:text-black md:py-[18px] md:px-7">Sign Up</a>
            </div>
      </div>
    );
};

export default NavBar;
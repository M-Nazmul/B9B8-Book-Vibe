import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen flex-col">
            <div className="px-4 text-center">
                <div className="relative -mb-28 md:-mb-[130px] ">
                <h2 className="text-2xl md:text-4xl font-bold ">Oops!!</h2>
                <p className="text-2xl md:text-3xl">Page not found</p>
                </div>
                    <img className="rounded-lg my-10" src="https://cdn.svgator.com/images/2022/01/funny-404-error-page-design.gif" alt="" />    
                <div className="text-center -mt-24 md:-mt-28">
                    <NavLink to={"/"}><button className="border border-[#23BE0A] text-[#23BE0A] hover:bg-[#23BE0A] hover:text-white duration-200 px-4 py-2 rounded-md text-xs md:text-base font-semibold">Go Home</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const Root = () => {
    return (
        <div className="max-w-[1170px] mx-auto px-4 md:px-7">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;
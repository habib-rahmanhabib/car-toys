import { Outlet } from "react-router-dom";

import Footer from "../Footer";
import Navmenu from "../Navber";

const Main = () => {
    return (
        <div className="w-[80%] mx-auto">
           <Navmenu></Navmenu>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;
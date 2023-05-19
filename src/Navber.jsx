import { Link } from "react-router-dom";


const Navmenu = () => {
    return (
        <div>

            <div className="navbar bg-base-100 bg-fuchsia-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li tabIndex={0}>
                                <a className="justify-between">
                                   All Toys
                                   
                                </a>
                                
                            </li>
                            <li><a>My Toys</a></li>
                            <li><a>Add Toys</a></li>
                        </ul>
                    </div>
                    <div className="flex ">
                    <img  className="w-12 h-12" src="https://media.istockphoto.com/id/184130803/photo/toy-car.jpg?s=612x612&w=is&k=20&c=pF3DGnIQ9zDGF73Mn5D94iBtJII7PxxHRY42Wo7EVgE=" alt="" />
                    <a className="btn btn-ghost normal-case text-xl p-0">Toy Cars</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-bold"><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <a>
                               All Toys
                               
                            </a>
                           
                        </li>
                        <li><a> My Toys</a></li>
                        <li><a> Add Toys</a></li>
                        <li><a>Blogs</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="login" className="btn">Login</Link>
                </div>
            </div>

        </div>
    );
};

export default Navmenu;
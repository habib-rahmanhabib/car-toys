import { Link } from "react-router-dom";


const Navmenu = () => {
    return (
        <div>

            <div className="navbar  bg-fuchsia-200 my-3 rounded ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-0 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li tabIndex={0}>
                                {/* <a className="justify-between">
                                    All Toys

                                </a> */}
                                <Link className="justify-between" to='allToys'>All Toys</Link>

                            </li>
                            <li><Link to='myToys'> My Toys</Link></li>
                            <li><Link to='addToys'> Add Toys</Link></li>
                            <li><Link to='blogs'>Blogs</Link></li>
                        </ul>
                    </div>
                    <div className="flex ">
                        <img className="w-12 h-12" src="https://m.media-amazon.com/images/I/71jrSZJjiHL._AC_SL1500_.jpg" alt="" />
                        <a className="btn btn-ghost normal-case text-xl p-0">Toy Cars</a>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className="text-bold"><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <Link to='allToys'>All Toys</Link>

                        </li>
                        <li><Link to='myToys'> My Toys</Link></li>
                        <li><Link to='addToys'> Add Toys</Link></li>
                        <li><Link to='blogs'>Blogs</Link></li>
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
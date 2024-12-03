
const Navbar = () => {

    return (
        <>
            <div className="navbar bg-cyan-900">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content  text-white bg-slate-800 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>HOME</a></li>
                            <li><a>SHOP</a></li>
                            <li><a>PRODUCT</a></li>
                            <li><a>PAGES</a></li>
                            <li><a>BLOG</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal  text-white px-1">
                        <li><a>HOME</a></li>
                        <li>
                            <a href=""> SHOP</a>
                            {/* <details>
                            <summary>Parent</summary>
                            <ul className="p-2 bg-slate-900">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details> */}
                        </li>
                        <li><a>PRODUCT</a></li>
                        <li><a>PAGES</a></li>
                        <li><a>BLOG</a></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-4">
                    <button className="btn btn-outline btn-primary">Register</button>
                    <button className="btn btn-outline btn-primary">Sign IN</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;
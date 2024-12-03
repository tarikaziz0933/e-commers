
const InformationBar = () => {
    return (
        <div className="navbar bg-cyan-950">
            <div className="">
                <div className="dropdown">
                    {/* <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                    </div> */}
                    <div className="flex">
                        <ul
                            tabIndex={0}
                            className="menu menu-horizontal menu-sm lg:hidden bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>About Us</a></li>
                            <li><a>Order Tracking</a></li>
                            <li><a>Contact US</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="navbar-start hidden lg:flex">
                <ul className="menu menu-horizontal text-white px-1">
                    <li><a>About Us</a></li>
                    <li>
                        <a href="">Order Tracking</a>
                        {/* <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </details> */}
                    </li>
                    <li><a>Contact US</a></li>
                </ul>
            </div>
            {/* <div className="navbar-end">
                <a className="btn">Button</a>
            </div> */}
        </div>
    );
};

export default InformationBar;
import logo from "../../assets/logo/avq0lgq0t.webp"

const SearchBar = () => {
    return (
        <div className=" bg-cyan-800 text-white">
            <div className="flex justify-between">
                <div className="">
                    <img className="w-20" src={logo} alt="" />
                </div>
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input text-black mt-4 input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={logo} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
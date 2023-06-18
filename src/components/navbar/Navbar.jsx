import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation()
    return (

        <nav className=" border-gray-200 bg-gray-900">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <p  className="flex items-center">
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Habit Tracker</span>
                </p>

                <div className=" w-full block md:w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
                        {location.pathname === '/archive' && <li>
                            <Link to="/" className="block py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent md:p-0  md:text-blue-500" aria-current="page">Home</Link>
                        </li>}
                      { location.pathname==='/' &&  <li>
                            <Link to="/archive" className="block py-2 pl-3 pr-4  bg-blue-700 rounded md:bg-transparent md:p-0 text-white md:text-blue-500" aria-current="page">Archive</Link>
                        </li>}
                    </ul>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { handleFunction } = useContext(AuthContext);
  const { handleLogout } = handleFunction;

  const location = useLocation().pathname.split("/");
  const border = location[1] === "dashboard";

  let user = {};
  if (Cookies.get("user")) {
    user = JSON.parse(Cookies.get("user"));
  }

  return (
    <>
      <nav
        className={`bg-white border-black px-2 sm:px-4 py-2.5 ${
          border ? "border-b-2" : ""
        }`}
      >
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link to={"/"} className="flex items-center">
            <span className="text-neutral-900 self-center lg:text-3xl font-semibold whitespace-nowrap md:text-sm">
              Jobbb.
            </span>
          </Link>

          <div className="flex md:order-2">
            {Cookies.get("user") ? (
              <button
                type="button"
                class="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="dropdown"
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="w-8 h-8 rounded-full"
                  src={user.image_url}
                  alt="user photo"
                />
              </button>
            ) : (
              <Link
                to={"/login"}
                className="text-white bg-neutral-700 hover:bg-neutral-800 focus:ring-4 focus:outline-none focus:ring-neutral-300 font-medium rounded-lg lg:text-lg px-5 py-2.5 text-center mr-3 md:mr-0 md:text-sm"
              >
                Log in
              </Link>
            )}
            <button
              data-collapse-toggle="mobile-menu-4"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-4"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            class="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
            id="dropdown"
          >
            <div class="py-3 px-4">
              <span class="block text-sm text-gray-900 dark:text-white">
                {user.name}
              </span>
              <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                {user.email}
              </span>
            </div>
            <ul class="py-1" aria-labelledby="dropdown">
              <li>
                <Link
                  to={"/dashboard"}
                  class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Settings
                </a>
              </li>
              <li>
                <Link
                  onClick={handleLogout}
                  class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                >
                  Log out
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-4"
          >
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 lg:text-lg md:text-sm md:font-medium">
              <li>
                <Link
                  to={"/"}
                  className="block py-2 pr-4 pl-3 md:text-neutral-700 md:hover:text-neutral-900 md:p-0"
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link className="block py-2 pr-4 pl-3 md:text-neutral-700 md:hover:text-neutral-900 md:p-0">
                  About
                </Link>
              </li>
              <li>
                <Link className="block py-2 pr-4 pl-3 md:text-neutral-700 md:hover:text-neutral-900 md:p-0">
                  Jobs
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 backdrop-filter backdrop-blur-md ">
      <header className="p-4   dark:text-gray-100  ">
        <div className="container flex justify-between h-16 mx-auto">
          <a
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
  className="w-8 h-8 dark:text-violet-400"
>
  <path d="M4 4h6l4 8-4 8H4V4z" />
  <path d="M20 4h-6l-4 8 4 8h6V4z" />
</svg>

          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#packages"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:dark:text-violet-400 hover:dark:border-violet-400  transition duration-150 ease-out hover:ease-in "
              >
                Packages
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent  hover:dark:text-violet-400 hover:dark:border-violet-400  transition duration-150 ease-out hover:ease-in"
              >
                Referal Programs
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent  hover:dark:text-violet-400 hover:dark:border-violet-400  transition duration-150 ease-out hover:ease-in"
              >
                Equipment
              </a>
            </li>
            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent  hover:dark:text-violet-400 hover:dark:border-violet-400  transition duration-150 ease-out hover:ease-in"
              >
                About us
              </a>
            </li>

            <li className="flex">
              <a
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent  hover:dark:text-violet-400 hover:dark:border-violet-400  transition duration-150 ease-out hover:ease-in"
              >
                FAQ
              </a>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button
              type="button"
              class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Sign Up
            </button>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Login in
            </button>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;

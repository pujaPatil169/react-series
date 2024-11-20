import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              alt="Logo"
              className="mr-3 h-12"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link to="logIN" className="flex items-center lg:order-2">Log in </Link>
       
          <Link to="getStarted" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">Get Started</Link>
          </div>
          <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2">
            <ul>
                <li>
                    <NavLink to="/home" className={(isActive)=>(
                        'block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0'
                    )}>Home</NavLink>
                </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

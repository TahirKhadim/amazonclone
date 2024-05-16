import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Topbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-200">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Hamburger menu button for mobile view */}
            <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:text-gray-900 transition duration-150 ease-in-out">
              <FaBars />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <a href="#" className="font-bold text-xl">
                Amazon
              </a>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {/* Navbar links */}
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:text-gray-900 transition duration-150 ease-in-out">
                  Products
                </a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:text-gray-900 transition duration-150 ease-in-out">
                  Solutions
                </a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:text-gray-900 transition duration-150 ease-in-out">
                  Pricing
                </a>
                <a href="#" className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:text-gray-900 transition duration-150 ease-in-out">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* User account dropdown */}
            <div className="relative">
              <button onClick={toggleDropdown} className="flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" id="user-menu-button" aria-expanded={isDropdownOpen} aria-haspopup="true">
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1502630859930-d2511b408736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5" alt="" />
              </button>
              <div className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg overflow-hidden origin-top-right z-50 ${isDropdownOpen ? '' : 'hidden'}`}>
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    Your Profile
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    Settings
                  </a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
                    Sign out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;

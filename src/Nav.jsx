import React, { useState, useEffect } from 'react';
import * as Icons from 'react-bootstrap-icons';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Disable body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto'; // Cleanup overflow on unmount
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('Menu is now: ', isMenuOpen ? 'Open' : 'Closed'); // For debugging
  };

  return (
    <>
      <nav className="bg-transparent text-black border border-slate-900 px-8 md:px-16 lg:px-24 w-full fixed top-0 left-0 z-50 overflow-x-hidden">
        <div className="container mt-2 py-6 flex justify-between">
          {/* Logo Section */}
          <div className="text-2xl font-bold flex">
            <Icons.StarFill width={40} height={40} className="text-slate-900" />
            <span className="ml-2 md:inline">Travel&Tour</span>
          </div>

          {/* Navigation Links for Desktop */}
          <div className="hidden md:flex space-x-8 font-bold ">
            <a href="#home" className="hover:text-green-700 transition-colors duration-300">Home</a>
            <a href="#resort" className="hover:text-green-700 transition-colors duration-300">Resort</a>
            <a href="#review" className="hover:text-green-700 transition-colors duration-300">Review</a>
            <a href="#service" className="hover:text-green-700 transition-colors duration-300">Service</a>
          </div>

          {/* Search and Contact for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <form className="flex" role="search">
              <input
                className="form-control w-48 px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="ml-2 px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-600 transition duration-300"
                type="submit"
              >
                Search
              </button>
            </form>
            <a
              href="#footer"
              className="font-bold text-white px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-700 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-slate-900 focus:outline-none">
              {isMenuOpen ? <Icons.X size={30} /> : <Icons.List size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
              onClick={toggleMenu}
            ></div>

            {/* Mobile Menu Content */}
            <div className="fixed top-0 right-0 w-3/4 max-w-sm bg-white shadow-lg z-50 h-full p-8 overflow-y-auto">
              <div className="flex flex-col space-y-6">
                <div className="text-2xl font-bold flex items-center">
                  <Icons.StarFill width={40} height={40} className="text-slate-900" />
                  <span className="ml-2 text-slate-900">Travel&Tour</span>
                </div>
                <a href="#home" className="block py-2 text-center font-bold hover:text-green-700">Home</a>
                <a href="#resort" className="block py-2 text-center font-bold hover:text-green-700">Resort</a>
                <a href="#review" className="block py-2 text-center font-bold hover:text-green-700">Review</a>
                <a href="#service" className="block py-2 text-center font-bold hover:text-green-700">Service</a>

                <form className="mt-4" role="search">
                  <input
                    className="form-control w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button
                    className="w-full mt-2 px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-600 transition duration-300"
                    type="submit"
                  >
                    Search
                  </button>
                </form>

                <a
                  href="#footer"
                  className="mt-4 mr-auto font-bold text-white px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-700 transition duration-300 text-center"
                >
                  Contact
                </a>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Nav;

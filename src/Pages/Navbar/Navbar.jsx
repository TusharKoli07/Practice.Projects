import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control dropdown visibility

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the dropdown when a menu item is clicked
  };

  return (
    <div className="bg-white mb-2 sticky top-0 z-50 border-4 border-black rounded-none sm:rounded-full">
      {/* Navbar Wrapper */}
      <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-100 p-4 rounded-none sm:rounded-full">
        {/* Logo and Slogan */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 w-full sm:w-auto sm:mx-4">
          <img
            src="./public/assets/Car Png/sumodi.png"
            className="h-16 sm:h-20" // Increased logo size
            alt="car logo"
          />
          <h3 className="text-red-600 font-bold text-2xl px-2 text-center sm:text-left">
            Getmecar.com <br />
            <div className="text-sm">Travel, Heal, Thrive</div>
          </h3>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-5 font-bold text-lg">
          <div className="relative">
            <Link
              to="/"
              className="px-6 py-2 border-2 border-black rounded-full transition-all transform hover:scale-105 hover:shadow-lg hover:translate-y-[-4px]"
            >
              Home
            </Link>
          </div>
          <div className="relative">
            <Link
              to="/about"
              className="px-6 py-2 border-2 border-black rounded-full transition-all transform hover:scale-105 hover:shadow-lg hover:translate-y-[-4px]"
            >
              About
            </Link>
          </div>
          <div className="relative">
            <Link
              to="/Contact"
              className="px-6 py-2 border-2 border-black rounded-full transition-all transform hover:scale-105 hover:shadow-lg hover:translate-y-[-4px]"
            >
              Contact
            </Link>
          </div>
          <div className="relative">
            <Link
              to="/Signin"
              className="px-6 py-2 border-2 border-black rounded-full transition-all transform hover:scale-105 hover:shadow-lg hover:translate-y-[-4px]"
            >
              Login
            </Link>
          </div>
          {/* <div className="relative">
            <Link
              to="/Signup"
              className="px-6 py-2 border-2 border-black rounded-full transition-all transform hover:scale-105 hover:shadow-lg hover:translate-y-[-4px]"
            >
              Sign up
            </Link>
          </div> */}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex flex-col items-center bg-cyan-600 py-2 gap-2 text-lg border-4 border-black rounded-none sm:rounded-none sm:mx-4">
        <button
          onClick={toggleDropdown}
          className="text-white font-bold text-xl"
        >
          {isOpen ? "Close Menu" : "Open Menu"}
        </button>

        {isOpen && (
          <div className="flex flex-col items-center gap-2 mt-2 bg-cyan-700 py-2 rounded-none w-full sm:w-auto">
            <Link
              to="/"
              className="text-white hover:text-gray-300 px-6 py-2 border-2 border-white rounded-full transition-all transform hover:scale-105 hover:shadow-lg hover:translate-y-[-4px]"
              onClick={handleLinkClick} // Close the menu on click
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-gray-300 px-6 py-2 border-2 border-white rounded-full transition-all transform hover:scale-105 hover:shadow-lg hover:translate-y-[-4px]"
              onClick={handleLinkClick} // Close the menu on click
            >
              About
            </Link>
            <Link
              to="/Contact"
              className="text-white hover:text-gray-300 px-6 py-2 border-2 border-white rounded-full transition-all transform hover:scale-105 hover:shadow-lg hover:translate-y-[-4px]"
              onClick={handleLinkClick} // Close the menu on click
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="text-white hover:text-gray-300 px-6 py-2 border-2 border-white rounded-full transition-all transform hover:scale-105 hover:shadow-lg hover:translate-y-[-4px]"
              onClick={handleLinkClick} // Close the menu on click
            >
              Login
            </Link>
            {/* <Link
              to="/signup"
              className="text-white hover:text-gray-300 px-6 py-2 border-2 border-white rounded-full transition-all transform hover:scale-105 hover:shadow-lg hover:translate-y-[-4px]"
              onClick={handleLinkClick} // Close the menu on click
            >
              Sign up
            </Link> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

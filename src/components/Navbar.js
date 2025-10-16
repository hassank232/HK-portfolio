import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

function Navbar() {
  // State to control mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close mobile menu when link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black py-3 px-4 md:px-8">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center space-x-10">
        {/* Logo on the left */}
        <Link to="/" className="hover:opacity-80 transition-opacity duration-200">
          <Logo size="w-10 h-10" textSize="text-lg" showHover={true} />
        </Link>

        <Link to="/" className="text-lg text-white hover:text-red-500 border-b-2 border-transparent hover:border-red-500 pb-1 transition-colors duration-200">
          Home
        </Link>
        <Link to="/about" className="text-lg text-white hover:text-red-500 border-b-2 border-transparent hover:border-red-500 pb-1 transition-colors duration-200">
          About
        </Link>
        <Link to="/experience" className="text-lg text-white hover:text-red-500 border-b-2 border-transparent hover:border-red-500 pb-1 transition-colors duration-200">
          Experience
        </Link>
        <Link to="/projects" className="text-lg text-white hover:text-red-500 border-b-2 border-transparent hover:border-red-500 pb-1 transition-colors duration-200">
          Projects
        </Link>
        <Link to="/contact" className="text-lg text-white hover:text-red-500 border-b-2 border-transparent hover:border-red-500 pb-1 transition-colors duration-200">
          Contact
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile header with logo and hamburger */}
        <div className="flex justify-between items-center">
          <Link to="/" onClick={closeMenu} className="hover:opacity-80 transition-opacity duration-200">
            <Logo size="w-8 h-8" textSize="text-base" showHover={true} />
          </Link>
          
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="text-white hover:text-red-500 focus:outline-none transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pt-4 pb-2 space-y-2">
            <Link 
              to="/" 
              onClick={closeMenu}
              className="block text-white hover:text-red-500 hover:bg-gray-800 px-3 py-2 rounded transition-colors duration-200"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={closeMenu}
              className="block text-white hover:text-red-500 hover:bg-gray-800 px-3 py-2 rounded transition-colors duration-200"
            >
              About
            </Link>
            <Link 
              to="/experience" 
              onClick={closeMenu}
              className="block text-white hover:text-red-500 hover:bg-gray-800 px-3 py-2 rounded transition-colors duration-200"
            >
              Experience
            </Link>
            <Link 
              to="/projects" 
              onClick={closeMenu}
              className="block text-white hover:text-red-500 hover:bg-gray-800 px-3 py-2 rounded transition-colors duration-200"
            >
              Projects
            </Link>
            <Link 
              to="/contact" 
              onClick={closeMenu}
              className="block text-white hover:text-red-500 hover:bg-gray-800 px-3 py-2 rounded transition-colors duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
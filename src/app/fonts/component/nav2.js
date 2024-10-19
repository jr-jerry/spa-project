'use client';
import { useState } from 'react';

export default function Navbar2() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // for mobile menu toggle

  const handleSearchClick = () => {
    setSearchOpen((prevSearchOpen) => !prevSearchOpen);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest('.search-bar')) {
      setSearchOpen(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between text-white z-10 px-4 py-4 md:px-12 md:py-6">
      {/* Logo */}
      <div className="logo flex items-center px-4">
        <img src="https://askproject.net/chloro/wp-content/uploads/sites/23/2021/08/logo_Asset-1-800x221.png" alt="Chloro" className="h-8"/>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-2 px-4 items-center">
        <li className="px-4 py-2 text-gray-400 hover:text-gray-300 transition duration-300 ease-in-out">Home</li>
        <li className="px-4 py-2 text-gray-400 hover:text-gray-300 transition duration-300 ease-in-out">About</li>
        <li className="px-4 py-2 text-gray-400 hover:text-gray-300 transition duration-300 ease-in-out relative group flex items-center">
          Services
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <ul className="dropdown-menu absolute hidden group-hover:block bg-white p-2 top-full left-0 mt-4">
            <li><a href="#" className="block px-2 py-1 text-black">Services</a></li>
            <li><a href="#" className="block px-2 py-1 text-black">Services Detail</a></li>
          </ul>
        </li>
        <li className="px-4 py-2 text-gray-400 hover:text-gray-300 transition duration-300 ease-in-out relative group flex items-center">
          Pages
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <ul className="dropdown-menu absolute hidden group-hover:block bg-white p-6 top-full left-0 mt-4">
            <li><a href="#" className="block px-2 py-1 text-black">Team</a></li>
            <li><a href="#" className="block px-2 py-1 text-black">Blog</a></li>
            <li><a href="#" className="block px-2 py-1 text-black">Testimonial</a></li>
            <li><a href="#" className="block px-2 py-1 text-black">FAQS</a></li>
            <li><a href="#" className="block px-2 py-1 text-black">Single Post</a></li>
            <li><a href="#" className="block px-2 py-1 text-black">Membership</a></li>
            <li><a href="#" className="block px-2 py-1 text-black">404</a></li>
          </ul>
        </li>
        <li className="px-4 py-2 text-gray-400 hover:text-gray-300 transition duration-300 ease-in-out">Contact</li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="flex items-center md:hidden">
        <button onClick={toggleMenu} className="menu-icon px-2 hover:text-gray-300 transition duration-300 ease-in-out">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-800 p-4 flex flex-col items-start md:hidden z-20">
          <a href="#" className="text-white py-2 px-4 w-full text-left hover:bg-gray-700">Home</a>
          <a href="#" className="text-white py-2 px-4 w-full text-left hover:bg-gray-700">About</a>
          <a href="#" className="text-white py-2 px-4 w-full text-left hover:bg-gray-700">Services</a>
          <a href="#" className="text-white py-2 px-4 w-full text-left hover:bg-gray-700">Pages</a>
          <a href="#" className="text-white py-2 px-4 w-full text-left hover:bg-gray-700">Contact</a>
        </div>
      )}

      {/* Search Bar */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-20 flex items-center justify-center transition-opacity duration-300 ease-in-out" onClick={handleOutsideClick}>
          <div className={`absolute w-full max-w-xl bg-white p-4 rounded-md transform transition-transform duration-500 ease-in-out ${searchOpen ? 'translate-y-0' : '-translate-y-full'}`} style={{ top: '50%' }}>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-gray-200 focus:outline-none"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </div>
        </div>
      )}
    </nav>
  );
}

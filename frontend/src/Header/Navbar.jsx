import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);  
  return (
    <nav className="bg-gray-900 text-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-extrabold font-cursive">Matty</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-red-500">Home </Link>
            <Link to="/templates" className="hover:text-red-500">Templates</Link>
            <Link to="/dashboard" className="hover:text-red-500">Dashboard</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <Link to="/editor" className="px-8 py-3 rounded-3xl bg-red-700 text-white font-bold shadow-lg hover:bg-red-800 transition-colors">
              Start Designing </Link>
            <Link to="/signin" className="px-8 py-3 rounded-3xl bg-blue-700 text-white font-bold shadow-lg hover:bg-green-800 transition-colors">
              Sign In</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu" aria-expanded={isOpen}  >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden bg-gray-800" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-500"
              onClick={() => setIsOpen(false)}> Home</Link>
            <Link to="/templates"className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-500"
              onClick={() => setIsOpen(false)}>Templates</Link>
            <Link to="/editor" className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-500"
              onClick={() => setIsOpen(false)}>Start Designing</Link>
            <Link to="/dashboard" className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-500"
              onClick={() => setIsOpen(false)}>Dashboard</Link>
            <Link to="/signin" className="block px-3 py-2 rounded-md text-base font-medium hover:text-red-500"
              onClick={() => setIsOpen(false)}>Signin</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

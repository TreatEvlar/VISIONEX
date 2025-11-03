import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo - Left */}
          <div className="flex items-center">
            <img src="https://visionex-nextjs.vercel.app/_next/image?url=%2Fimages%2Flogo.png&w=256&q=75" alt="" className='h-8' />
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About us</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Use case</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Blog</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Pricing</a>
            
            {/* Pages Dropdown */}
            <div  className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium flex items-center">
                Pages
              </a>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute -right-10 mt-2 bg-white py-2 z-50 ${isDropdownOpen ? 'block' : 'hidden'}`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 whitespace-nowrap">Our Team</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 whitespace-nowrap">Careers</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 whitespace-nowrap">Contact us</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 whitespace-nowrap">FAQ</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 whitespace-nowrap">404 Page</a>
              </div>
            </div>
          </div>

          {/* Button - Right */}
          <div className="hidden md:block">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu - Centered */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col items-center space-y-1.5 text-center">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium w-full py-2">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium w-full py-2">About us</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium w-full py-2">Use case</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium w-full py-2">Blog</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium w-full py-2">Pricing</a>
              
              {/* Mobile Pages Dropdown */}
              <div className="w-full">
                <button 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="text-gray-700 hover:text-blue-600 font-medium flex items-center justify-center w-full py-2"
                >
                  Pages
                  <svg 
                    className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {/* Mobile Dropdown Menu - Shows below Pages */}
                {isDropdownOpen && (
                  <div className="mt-2 bg-gray-50 rounded-md py-2 w-full">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600">Our Team</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600">Careers</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600">Contact us</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600">FAQ</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600">404 Page</a>
                  </div>
                )}
              </div>
              
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium w-full mt-2">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
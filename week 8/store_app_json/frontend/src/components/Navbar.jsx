import { Link } from 'react-router-dom';
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white backdrop-blur-lg bg-opacity-90 shadow-xl border-b border-gray-700">
        <div className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo - Left */}
          <Link
            to="/"
            className="text-2xl font-extrabold text-yellow-400 hover:text-yellow-300 transition-all duration-300"
          >
            Whitmore 🛒
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12 text-sm font-semibold items-center">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="relative hover:text-yellow-300 transition-all duration-300 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-yellow-400 hover:before:w-full before:transition-all"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl focus:outline-none hover:text-yellow-300 transition-transform duration-300 transform hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? '✖️' : '☰'}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-1/2 transform -translate-x-1/2 w-11/12 bg-gray-800 bg-opacity-95 backdrop-blur-lg rounded-2xl shadow-2xl py-8 flex flex-col items-center space-y-6 animate-slideDown">
            {menuItems.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                className="block text-yellow-400 hover:text-yellow-300 text-lg font-semibold transform hover:scale-105 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-20 md:h-20"></div>

      {/* Styles for animations */}
      <style>
        {`
          @keyframes slideDown {
            0% { opacity: 0; transform: translate(-50%, -20px); }
            100% { opacity: 1; transform: translate(-50%, 0); }
          }
          .animate-slideDown {
            animation: slideDown 0.4s ease-out forwards;
          }
        `}
      </style>
    </>
  );
}

export default Navbar;

import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const NavBar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/About', label: 'About Us' },
    { to: '/team', label: 'Meet the team' },
    { to: '/Events', label: 'Events' },
    { to: '/Contact', label: 'Contact' },
  ];

  return (
    <nav className={`sticky top-0 w-full z-50 ${location.pathname === '/' ? 'bg-blue-700' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <h1 className={`text-lg sm:text-2xl font-semibold ${location.pathname === '/' ? 'text-white' : 'text-blue-700'}`}>
            SACS
          </h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`${
                    location.pathname === '/' ? 'text-white hover:text-blue-200' : 'text-blue-700 hover:text-blue-500'
                  } transition-colors duration-200 text-sm lg:text-base`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`h-5 w-5 ${location.pathname === '/' ? 'text-white' : 'text-blue-700'}`} />
            ) : (
              <Menu className={`h-5 w-5 ${location.pathname === '/' ? 'text-white' : 'text-blue-700'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:hidden fixed inset-0 top-14 sm:top-16 bg-black bg-opacity-50`}
          onClick={toggleMenu}
        >
          <div 
            className={`${
              location.pathname === '/' ? 'bg-blue-700' : 'bg-white'
            } w-full shadow-xl`}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className={`block px-4 py-2.5 text-base font-medium ${
                      location.pathname === '/' 
                        ? 'text-white hover:bg-blue-600' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
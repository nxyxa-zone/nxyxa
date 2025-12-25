
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, SCHOOL_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-md border-b border-sky-100' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="bg-white p-1 rounded-lg shadow-sm">
            <img src={SCHOOL_INFO.logo} alt="Logo" className="w-8 h-8 md:w-10 md:h-10 object-contain" />
          </div>
          <div className="flex flex-col">
            <span className={`font-bold leading-none text-sm md:text-lg ${scrolled ? 'text-slate-800' : 'text-slate-800'}`}>
              SMK Pancasila
            </span>
            <span className={`text-[10px] md:text-xs font-medium ${scrolled ? 'text-sky-600' : 'text-sky-600'}`}>
              Seputih Mataram
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`text-sm font-medium transition-colors hover:text-sky-600 ${
                location.pathname === item.href ? 'text-sky-600' : 'text-slate-600'
              } ${item.primary ? 'bg-sky-600 !text-white px-5 py-2.5 rounded-full hover:bg-sky-700 shadow-lg shadow-sky-200' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-slate-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-4 flex flex-col gap-4 shadow-xl">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setIsOpen(false)}
              className={`text-base font-medium p-2 rounded-lg transition-colors ${
                location.pathname === item.href ? 'bg-sky-50 text-sky-600' : 'text-slate-600'
              } ${item.primary ? 'bg-sky-600 !text-white text-center mt-2' : ''}`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

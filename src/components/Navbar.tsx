import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import LogoWhite from '../assets/images/molus-logo-horizontal-white-yellow.png';
import LogoBlack from '../assets/images/molus-logo-horizontal-black-yellow.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggle } = useDarkMode();
  const logoSrc = isDark ? LogoWhite : LogoBlack;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={logoSrc}
              alt="Molus Logo"
              className="h-12 md:h-16"
            />
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#ship-it">Ship It</NavLink>
            <NavLink href="#community">Community</NavLink>
            <NavLink href="#partners">Partners</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
            <button
              onClick={toggle}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-black dark:bg-white text-white dark:text-black transition-all hover:scale-105"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggle}
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-black dark:bg-white text-white dark:text-black transition-all hover:scale-105"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-black dark:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#ship-it" onClick={() => setIsOpen(false)}>Ship It</MobileNavLink>
            <MobileNavLink href="#community" onClick={() => setIsOpen(false)}>Community</MobileNavLink>
            <MobileNavLink href="#partners" onClick={() => setIsOpen(false)}>Partners</MobileNavLink>
            <MobileNavLink href="#faq" onClick={() => setIsOpen(false)}>FAQ</MobileNavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
            <div className="px-2">
              <a 
                href="#join"
                onClick={() => setIsOpen(false)}
                className="block w-full px-5 py-3 text-center font-medium text-white dark:text-black bg-black dark:bg-white rounded-lg hover:bg-black/80 dark:hover:bg-white/80"
              >
                Join Our Community
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => {
  return (
    <a 
      href={href} 
      className="font-['Helvetica_Neue'] font-medium text-black dark:text-white hover:text-primary-light dark:hover:text-primary-dark transition-colors"
    >
      {children}
    </a>
  );
};

const MobileNavLink: React.FC<{ href: string; onClick: () => void; children: React.ReactNode }> = ({ 
  href, 
  onClick, 
  children 
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-3 py-2 rounded-md text-base font-['Helvetica_Neue'] font-medium text-black dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700"
    >
      {children}
    </a>
  );
};

export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoShort from '../../assets/images/logo/logo-short.png';
import logoLong from '../../assets/images/logo/logo-long.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Mission', 'Partners', 'Community', 'Contact'];

  const handleNavClick = () => {
    window.scrollTo(0, 0);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-primary sticky top-0 z-50 shadow-[0_2px_8px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Short on mobile, Long on desktop */}
          <Link to="/" onClick={handleNavClick} className="flex items-center">
            <img src={logoShort} alt="BCC Logo" className="h-10 md:hidden" />
            <img src={logoLong} alt="BlockChain on Campus" className="h-10 hidden md:block" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item === 'Home' ? (
                <Link
                  key={index}
                  to="/"
                  onClick={handleNavClick}
                  className="text-white hover:text-accent font-medium transition-colors duration-300"
                >
                  {item}
                </Link>
              ) : item === 'About' ? (
                <Link
                  key={index}
                  to="/about"
                  onClick={handleNavClick}
                  className="text-white hover:text-accent font-medium transition-colors duration-300"
                >
                  {item}
                </Link>
              ) : item === 'Mission' ? (
                <Link
                  key={index}
                  to="/mission"
                  onClick={handleNavClick}
                  className="text-white hover:text-accent font-medium transition-colors duration-300"
                >
                  {item}
                </Link>
              ) : item === 'Partners' ? (
                <Link
                  key={index}
                  to="/partners"
                  onClick={handleNavClick}
                  className="text-white hover:text-accent font-medium transition-colors duration-300"
                >
                  {item}
                </Link>
              ) : item === 'Community' ? (
                <Link
                  key={index}
                  to="/community"
                  onClick={handleNavClick}
                  className="text-white hover:text-accent font-medium transition-colors duration-300"
                >
                  {item}
                </Link>
              ) : item === 'Contact' ? (
                <Link
                  key={index}
                  to="/contact"
                  onClick={handleNavClick}
                  className="text-white hover:text-accent font-medium transition-colors duration-300"
                >
                  {item}
                </Link>
              ) : null
            ))}
            <Link to="/contact" onClick={handleNavClick}>
              <button className="bg-secondary hover:bg-accent text-white hover:text-dark font-bold px-6 py-2 rounded-lg transition-all duration-300">
                Join BCC
              </button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 space-y-3">
            {navItems.map((item, index) => (
              item === 'Home' ? (
                <Link
                  key={index}
                  to="/"
                  className="block text-white hover:text-accent font-medium transition-colors duration-300 py-2"
                  onClick={handleNavClick}
                >
                  {item}
                </Link>
              ) : item === 'About' ? (
                <Link
                  key={index}
                  to="/about"
                  className="block text-white hover:text-accent font-medium transition-colors duration-300 py-2"
                  onClick={handleNavClick}
                >
                  {item}
                </Link>
              ) : item === 'Mission' ? (
                <Link
                  key={index}
                  to="/mission"
                  className="block text-white hover:text-accent font-medium transition-colors duration-300 py-2"
                  onClick={handleNavClick}
                >
                  {item}
                </Link>
              ) : item === 'Partners' ? (
                <Link
                  key={index}
                  to="/partners"
                  className="block text-white hover:text-accent font-medium transition-colors duration-300 py-2"
                  onClick={handleNavClick}
                >
                  {item}
                </Link>
              ) : item === 'Community' ? (
                <Link
                  key={index}
                  to="/community"
                  className="block text-white hover:text-accent font-medium transition-colors duration-300 py-2"
                  onClick={handleNavClick}
                >
                  {item}
                </Link>
              ) : item === 'Contact' ? (
                <Link
                  key={index}
                  to="/contact"
                  className="block text-white hover:text-accent font-medium transition-colors duration-300 py-2"
                  onClick={handleNavClick}
                >
                  {item}
                </Link>
              ) : null
            ))}
            <Link to="/contact" onClick={handleNavClick}>
              <button className="w-full bg-secondary hover:bg-accent text-white hover:text-dark font-bold px-6 py-3 rounded-lg transition-all duration-300 mt-2">
                Join BCC
              </button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

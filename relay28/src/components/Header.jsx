import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiBars3, HiXMark, HiSun, HiMoon } from 'react-icons/hi2';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/portfolioData';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    // { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="nav-container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#home" onClick={(e) => handleNavClick(e, '#home')}>
            relay.dev
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <ul className="nav-links desktop-nav">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="nav-link"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Theme Toggle & Mobile Menu Button */}
        <div className="header-actions">
          <motion.a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="header-social-link"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="GitHub"
          >
            <FaGithub size={20} />
          </motion.a>
          
          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="header-social-link"
            whileHover={{ scale: 1.15, y: -2 }}
            whileTap={{ scale: 0.95 }}
            aria-label="LinkedIn"
          >
            <FaLinkedin size={20} />
          </motion.a>

          <motion.button
            className="theme-toggle"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle theme"
          >
            {isDarkMode ? <HiSun size={24} /> : <HiMoon size={24} />}
          </motion.button>

          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <HiXMark size={28} /> : <HiBars3 size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <motion.div
        className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}
        initial={false}
        animate={{
          height: isMobileMenuOpen ? 'auto' : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <ul className="mobile-nav-links">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                x: isMobileMenuOpen ? 0 : -20,
              }}
              transition={{ delay: index * 0.05 }}
            >
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="mobile-nav-link"
              >
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </motion.header>
  );
};

export default Header;

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';

const navLinks = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState('Home');
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark');
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleDarkMode = () => {
    const root = document.documentElement;
    const newTheme = isDark ? 'light' : 'dark';
    root.classList.remove(isDark ? 'dark' : 'light');
    root.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    setIsDark(!isDark);
  };

  useEffect(() => {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.add(theme);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const baseStyle = `w-full text-center text-lg font-medium px-4 py-2 transition-all duration-300 cursor-pointer rounded-lg`;
  const activeStyles = `border-2 border-blue-500 dark:border-cyan-400 bg-white/10 dark:bg-white/5 text-indigo-600 dark:text-cyan-300 shadow-inner backdrop-blur-md`;
  const hoverStyles = `hover:border-blue-400 dark:hover:border-cyan-500 hover:shadow-md hover:scale-105 active:scale-95`;

  const getLinkClass = (link) =>
    `${baseStyle} ${active === link ? activeStyles : 'text-slate-800 dark:text-white'} ${hoverStyles}`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg
      bg-white/80 dark:bg-slate-900/80 border-b border-white/20 dark:border-slate-700
      transition-colors duration-500 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold tracking-wide text-indigo-700 dark:text-cyan-400"
        >
          Prasanth
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <motion.div
              key={link}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <Link
                to={link.toLowerCase()}
                smooth
                duration={500}
                offset={-70}
                onClick={() => setActive(link)}
                className={getLinkClass(link)}
              >
                {link}
              </Link>
            </motion.div>
          ))}

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className={`ml-2 p-2 rounded-lg border-2 ${isDark ? 'border-cyan-400 text-cyan-400' : 'border-slate-800 text-slate-800'} hover:scale-105 active:scale-95 transition`}
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
  ref={menuRef}
  initial={{ height: 0, opacity: 0 }}
  animate={{ height: 'auto', opacity: 1 }}
  exit={{ height: 0, opacity: 0 }}
  className="md:hidden px-4 pb-4"
>
  <div className="flex flex-col space-y-3 items-center text-center">
    {navLinks.map((link) => (
      <motion.div
        key={link}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full"
      >
        <Link
          to={link.toLowerCase()}
          smooth
          duration={500}
          offset={-70}
          onClick={() => {
            setActive(link);
            setIsOpen(false);
          }}
          className={`block w-full text-center rounded-lg px-4 py-2 
            ${active === link
              ? 'border-2 border-blue-500 dark:border-cyan-400 bg-white/10 dark:bg-white/5 text-indigo-600 dark:text-cyan-300 shadow-inner'
              : 'text-slate-800 dark:text-white'} 
            hover:border-blue-400 dark:hover:border-cyan-500 hover:bg-white/10 dark:hover:bg-white/5 
            hover:shadow-md hover:scale-105 active:scale-95 transition backdrop-blur-md`}
        >
          {link}
        </Link>
      </motion.div>
    ))}

    {/* Mobile Dark Mode Toggle */}
    <motion.button
  onClick={toggleDarkMode}
  whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 0.9 }}
  className={`text-xl p-2 text-slate-800 dark:text-white transition duration-300`}
  aria-label="Toggle Dark Mode"
>
  {isDark ? <Sun size={22} /> : <Moon size={22} />}
</motion.button>
  </div>
</motion.div>

        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

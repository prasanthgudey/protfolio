import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      className="py-8 px-4 md:px-20
      bg-slate-100 text-slate-800
      dark:bg-slate-950 dark:text-white
      text-center border-t border-slate-300 dark:border-white/10
      transition-colors duration-500"
    >
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/prasanthgudey/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-white text-2xl transition duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/prasanthkumar-gudey-366846264"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-600 dark:text-slate-400 hover:text-indigo-700 dark:hover:text-white text-2xl transition duration-300"
        >
          <FaLinkedin />
        </a>
      </div>
      <p className="text-slate-500 dark:text-slate-400 text-sm">
        © {new Date().getFullYear()} Prasanth Kumar Gudey. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

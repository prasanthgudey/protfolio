import React from 'react';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden font-sans bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-500">

      {/* Dark mode toggle button */}
{/*       <DarkModeToggle /> */}

      {/* Main Sections */}
      <Navbar/>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

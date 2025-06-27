import React from 'react';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import './App.css';

const App = () => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden font-sans bg-white dark:bg-slate-900 text-gray-900 dark:text-white transition-colors duration-500">

      {/* Dark mode toggle button */}
      <DarkModeToggle />

      {/* Main Sections */}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

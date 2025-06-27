// File: src/sections/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, type: 'spring', stiffness: 60 },
  }),
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-sky-900 via-indigo-900 to-slate-900 text-white">
      {/* Animated background blur shapes */}
      <div className="absolute w-72 h-72 bg-blue-500 opacity-30 rounded-full blur-3xl top-16 left-16 animate-pulse"></div>
      <div className="absolute w-64 h-64 bg-cyan-400 opacity-30 rounded-full blur-2xl bottom-10 right-10 animate-bounce"></div>

      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-2xl backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl"
      >
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-200 mb-2"
        >
          👋 Hello, I'm
        </motion.p>

        {/* Static span to prevent name breaking */}
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-teal-400 to-cyan-300 text-transparent bg-clip-text tracking-wide drop-shadow mb-4 break-keep"
        >
          Prasanth Kumar Gudey
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0 }}
          className="text-xl md:text-2xl text-white font-semibold mb-4"
        >
          Full Stack Web Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="text-slate-300 text-sm md:text-base mb-6"
        >
          I love building scalable, modern, and elegant digital experiences using React, Node, and MongoDB.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <a
            href="/prasanth.pdf"
            download
            className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-cyan-500 hover:to-teal-500 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-transform duration-300 transform hover:scale-105"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="border border-white hover:bg-white hover:text-indigo-600 text-white font-semibold px-6 py-2 rounded-full transition-transform duration-300 transform hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.0 }}
          className="flex justify-center gap-6 mt-8"
        >
          <a href="https://github.com/prasanthgudey/" target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:text-white text-xl transition duration-300">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/prasanthkumar-gudey-366846264" target="_blank" rel="noopener noreferrer" className="text-sky-300 hover:text-white text-xl transition duration-300">
            <FaLinkedin />
          </a>
          <a href="mailto:prasanthkumargudey@gmail.com" className="text-sky-300 hover:text-white text-xl transition duration-300">
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
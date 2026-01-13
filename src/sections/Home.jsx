import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profilePic from '../prasanth.jpg'; // Ensure image exists in /src/assets/

const Home = () => {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center text-center
      bg-gradient-to-br from-sky-100 via-white to-slate-100 dark:from-gray-900 dark:via-slate-900 dark:to-black
      text-slate-800 dark:text-white transition-colors duration-500"
    >
      {/* Animated background blur shapes */}
      <div className="absolute w-72 h-72 bg-blue-500 opacity-30 rounded-full blur-3xl top-16 left-16 animate-pulse" />
      <div className="absolute w-64 h-64 bg-cyan-400 opacity-30 rounded-full blur-2xl bottom-10 right-10 animate-bounce" />

      {/* Frosted Card */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 w-full max-w-2xl
        backdrop-blur-md bg-white/30 dark:bg-white/5
        border border-white/30 dark:border-white/10
        rounded-3xl p-6 sm:p-8 md:p-12 shadow-xl dark:shadow-2xl"
      >
        {/* Profile Picture */}
        <motion.div
  initial={{ opacity: 0, scale: 0.85 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ delay: 0.2, duration: 0.6 }}
  className="flex justify-center mb-6"
>
  <img
    src={profilePic}
    alt="Prasanth Kumar Gudey Profile Photo"
    className="w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full
    border-4 border-white dark:border-slate-700 shadow-xl object-cover"
  />
</motion.div>


        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-slate-600 dark:text-slate-400 mb-2"
        >
          👋 Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold
          bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-400
          text-transparent bg-clip-text tracking-wide drop-shadow mb-4 break-keep"
        >
          Prasanth Kumar Gudey
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0 }}
          className="text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-4"
        >
          Full Stack Web Developer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="text-slate-700 dark:text-slate-400 text-sm md:text-base mb-6"
        >
          I love building scalable, modern, and elegant digital experiences using React, Node, and MongoDB.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="flex flex-col md:flex-row justify-center items-center gap-4"
        >
          <a
            href="/prasanth.pdf"
            download
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500
            text-white font-semibold px-6 py-2 rounded-full shadow-md
            transition-transform duration-300 transform hover:scale-105"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="border border-slate-800 dark:border-white hover:bg-slate-100 dark:hover:bg-slate-800
            hover:text-blue-600 dark:hover:text-cyan-400
            text-slate-800 dark:text-white font-semibold px-6 py-2 rounded-full
            transition-transform duration-300 transform hover:scale-105"
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
          <a
            href="https://github.com/prasanthgudey/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-cyan-400 hover:text-indigo-600 dark:hover:text-white text-xl transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/prasanthkumar-gudey-366846264"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 dark:text-cyan-400 hover:text-indigo-600 dark:hover:text-white text-xl transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:prasanthkumargudey@gmail.com"
            className="text-blue-500 dark:text-cyan-400 hover:text-indigo-600 dark:hover:text-white text-xl transition duration-300"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;

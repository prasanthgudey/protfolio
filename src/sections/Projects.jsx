// File: src/sections/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
  {
    title: 'FoodIn',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    badge: 'Full Stack',
    description:
      'A food delivery platform with authentication, cart functionality, and order placement using MERN stack.',
    image: '/projects/foodin.jpg',
    live: 'https://food-delivery-frontend-r3my.onrender.com/',
    github: 'https://github.com/prasanthgudey/food-delivery-mern',
  },
  {
    title: 'PG’s Life',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    badge: 'Full Stack',
    description:
      'Hotel booking web app with responsive UI, MongoDB CRUD, user authentication, and REST API integration.',
    image: '/projects/pgslife.jpg',
    live: 'https://pgslife-frontend.onrender.com/',
    github: 'https://github.com/prasanthgudey/pgslife',
  },
  {
    title: 'TSE – Target Stance Extraction',
    tech: ['Python', 'NLP', 'Transformers'],
    badge: 'AI/NLP',
    description:
      'ML/NLP project that uses Transformer models to extract stance and target from text data.',
    image: '/projects/tsee.png',
    live: '#',
    github: 'https://github.com/yourusername/tse-nlp',
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-4 md:px-10 lg:px-16 xl:px-24
      bg-gradient-to-br from-sky-100 via-white to-slate-100
      dark:from-gray-900 dark:via-slate-900 dark:to-black
      text-slate-800 dark:text-white transition-colors duration-500"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12 text-center"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className="relative bg-white/30 dark:bg-white/5 backdrop-blur-md p-6 rounded-3xl
            border border-slate-300 dark:border-white/10 shadow-md dark:shadow-xl
            hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-cyan-700/30 transition-transform duration-300"
          >
            {/* Badge */}
            <div className="absolute -top-3 -right-3 bg-cyan-700/20 text-cyan-800 dark:text-cyan-200 text-xs px-3 py-1 rounded-full backdrop-blur-md border border-white/10">
              {project.badge}
            </div>

            {/* Project Image */}
            <div className="overflow-hidden rounded-xl mb-4 border border-slate-300 dark:border-white/10 shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 md:h-56 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-indigo-700 dark:text-cyan-400 mb-2 text-center">
              {project.title}
            </h3>

            {/* Description */}
            <p className="text-slate-700 dark:text-slate-400 text-sm text-center mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-cyan-700/10 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-300
                  px-2 py-1 rounded-full border border-white/10 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-center gap-4 mt-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm
                text-white bg-indigo-600 hover:bg-indigo-500
                px-4 py-1.5 rounded-full transition-transform hover:scale-105"
              >
                <FaExternalLinkAlt className="text-xs" /> Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm
                text-slate-800 dark:text-white border border-slate-400 dark:border-white
                px-4 py-1.5 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800
                hover:text-indigo-700 dark:hover:text-cyan-400 transition-transform hover:scale-105"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

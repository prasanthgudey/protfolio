// File: src/sections/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJava, FaDatabase } from 'react-icons/fa';
import { SiMongodb, SiJavascript, SiTailwindcss, SiDjango } from 'react-icons/si';

const skills = [
  { icon: <FaReact />, name: 'React.js' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <SiMongodb />, name: 'MongoDB' },
  { icon: <SiJavascript />, name: 'JavaScript' },
  { icon: <FaPython />, name: 'Python' },
  { icon: <FaJava />, name: 'Java' },
  { icon: <FaHtml5 />, name: 'HTML5' },
  { icon: <FaCss3Alt />, name: 'CSS3' },
  { icon: <SiTailwindcss />, name: 'Tailwind CSS' },
  { icon: <FaDatabase />, name: 'MySQL' },
  { icon: <SiDjango />, name: 'Django' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-20 bg-gradient-to-br from-sky-900 via-indigo-900 to-slate-900 text-white relative z-10">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-10 text-center"
      >
        Skills
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-slate-300 text-center max-w-2xl mx-auto mb-12 text-lg"
      >
        Here are the technologies I've worked with to build dynamic, scalable, and visually appealing full-stack applications.
      </motion.p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col items-center justify-center p-4 bg-white/10 border border-white/20 rounded-xl backdrop-blur-md hover:scale-110 transition-transform shadow-xl"
          >
            <div className="text-4xl text-cyan-400 mb-2">{skill.icon}</div>
            <p className="text-slate-200 font-medium text-center text-sm md:text-base">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
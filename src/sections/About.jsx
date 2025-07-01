// File: src/sections/About.jsx
import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    title: 'B.Tech in CSE – RGUKT Nuzvid',
    period: 'Nov 2021 – May 2025',
    description: 'CGPA: 8.9 — Focused on full-stack web development, DSA, and system design.',
  },
  {
    title: 'Pre-University Course – RGUKT Nuzvid',
    period: 'Sep 2019 – Oct 2021',
    description: 'CGPA: 9.7 — Built strong fundamentals in computer science and mathematics.',
  },
  {
    title: 'SSC – GVMC High School',
    period: 'Jun 2014 – Mar 2019',
    description: 'CGPA: 10.0 — Excelled in academic and school-level science competitions.',
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 md:px-20
      bg-gradient-to-br from-sky-100 via-white to-slate-100
      dark:from-gray-900 dark:via-slate-900 dark:to-black
      text-slate-800 dark:text-white transition-colors duration-500"
    >
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8 text-center"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="max-w-3xl mx-auto text-center text-slate-700 dark:text-slate-300 text-lg mb-12"
      >
        I'm a software enthusiast passionate about full-stack development, problem-solving,
        and turning ideas into high-quality web applications. I love creating intuitive,
        elegant, and performant digital experiences.
      </motion.p>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical timeline line */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-300 dark:bg-white/10"></div>

        <div className="space-y-10 relative z-10">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`
                relative w-full md:w-[calc(50%-1rem)]
                ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}
                bg-white/30 dark:bg-white/5
                border border-slate-300 dark:border-white/10
                backdrop-blur-md rounded-xl shadow-md dark:shadow-xl
                hover:scale-[1.02] transition-transform
                p-6
              `}
            >
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-cyan-400">{item.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.period}</p>
              <p className="mt-2 text-slate-700 dark:text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

// File: src/sections/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaUser,
  FaEnvelope,
  FaCommentDots,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-20 
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
        <span className="inline-block w-1 h-6 bg-gradient-to-t from-cyan-400 via-indigo-500 to-purple-500 mr-3" />
        Contact Me
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="bg-white/30 dark:bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-slate-300 dark:border-white/10 shadow-md dark:shadow-xl space-y-4">
            <div className="flex items-center gap-3 text-cyan-700 dark:text-cyan-300">
              <FaEnvelope />
              <span>prasanthkumargudey@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-cyan-700 dark:text-cyan-300">
              <FaPhoneAlt />
              <span>+91 9550279716</span>
            </div>
            <div className="flex items-center gap-3 text-cyan-700 dark:text-cyan-300">
              <FaMapMarkerAlt />
              <span>Visakhapatnam, Andhra Pradesh, India</span>
            </div>
            <div className="flex gap-4 mt-4 text-xl">
              <a
                href="https://github.com/prasanthgudey/"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-700 dark:text-cyan-400 hover:text-indigo-700 dark:hover:text-white transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/prasanthkumar-gudey-366846264"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-700 dark:text-cyan-400 hover:text-indigo-700 dark:hover:text-white transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Form Panel */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white/30 dark:bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-slate-300 dark:border-white/10 shadow-md dark:shadow-xl space-y-6"
        >
          <div>
            <label className="block text-sm mb-1 flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <FaUser /> Name
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Prasanth Kumar Gudey"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <FaEnvelope /> Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="youremail@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 flex items-center gap-2 text-slate-700 dark:text-slate-300">
              <FaCommentDots /> Message
            </label>
            <textarea
              name="message"
              rows="4"
              required
              placeholder="Let’s build something great!"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-300 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            ></textarea>
          </div>

          <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full py-2 rounded bg-indigo-600 hover:bg-indigo-500 transition text-white font-semibold flex justify-center items-center gap-2"
          >
            ✉️ Send Message
          </motion.button>

          {success && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-500 dark:text-green-400 text-sm text-center"
            >
              ✅ Thank you! Your message has been sent.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;

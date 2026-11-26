import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Cpu, Code2 } from 'lucide-react';
import placeholderImage from '../assets/prameela.jpeg'; // Placeholder image for error handling
const Hero = () => {
  const roles = [
    "Coding Enthusiast",
    "Full-Stack Developer",
    "AI Engineer",
    "Problem Solver"
  ];

  return (
    <section
      id="home"
      className="flex flex-col items-center justify-start pt-20 sm:pt-24 pb-16 relative overflow-hidden transition-colors duration-300"
    >
      {/* Orbital Container (Proportional, compact sizing that eliminates top void and prevents name collision) */}
      <div className="relative w-[300px] sm:w-[340px] md:w-[370px] aspect-square flex items-center justify-center mb-6 mt-2">
        {/* Outer Ring 3 */}
        <motion.div
          className="absolute w-[96%] h-[96%] border border-slate-300/60 dark:border-white/10 rounded-full animate-spin-slow-reverse"
          style={{ borderStyle: 'dashed' }}
        >
          {/* Neons saved strictly for borders, dots & icons */}
          <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
          <div className="absolute bottom-[20%] right-[5%] w-1.5 h-1.5 bg-sky-400 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
        </motion.div>

        {/* Outer Ring 2 */}
        <motion.div
          className="absolute w-[76%] h-[76%] border border-slate-300/40 dark:border-white/10 rounded-full animate-spin-slow"
        >
          <div className="absolute bottom-1/2 right-0 w-2 h-2 bg-sky-500 rounded-full shadow-[0_0_8px_rgba(14,165,233,0.5)]" />
        </motion.div>

        {/* Outer Ring 1 */}
        <motion.div
          className="absolute w-[56%] h-[56%] border border-indigo-500/20 rounded-full animate-spin-slow-reverse"
        >
          <div className="absolute top-1/2 left-0 w-2 h-2 bg-indigo-500 rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
        </motion.div>

        {/* Central Profile Image Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-[44%] aspect-square rounded-full p-1 bg-gradient-to-tr from-indigo-600 via-indigo-500 to-sky-400 z-10 shadow-lg"
        >
          <div className="w-full h-full rounded-full overflow-hidden border-2 border-white dark:border-slate-900 bg-slate-100 dark:bg-slate-800 group">
            <img
              src={placeholderImage}
              alt="Prameela Naga Sri"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = placeholderImage; // Fallback image in case of error
              }}
            />
          </div>

          {/* Orbiting Icons */}
          <motion.div
            className="absolute -top-2.5 -right-2.5 p-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl text-indigo-600 dark:text-indigo-400 shadow-md"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Cpu size={16} />
          </motion.div>
          <motion.div
            className="absolute -bottom-2.5 -left-2.5 p-1.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-xl text-sky-600 dark:text-sky-400 shadow-md"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, delay: 0.8 }}
          >
            <Code2 size={16} />
          </motion.div>
        </motion.div>
      </div>

      {/* Headline & Roles (Cleanly spaced below the orbital ring with clear breathing room) */}
      <div className="text-center z-10 px-4 max-w-3xl mt-1">
        {/* <motion.div
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/5 dark:bg-indigo-500/10 mb-3"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
            Available for new opportunities
          </span>
        </motion.div> */}

        <motion.h1
          className="mb-3 tracking-tight text-slate-900 dark:text-slate-100 font-extrabold leading-tight"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="block text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-300">
            Hey, I&apos;m
          </span>
          <span className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Prameela Naga Sri
          </span>
        </motion.h1>

        {/* Roles list with guaranteed contrast >= 4.5:1 */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1.5 mt-3"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {roles.map((role, index) => (
            <React.Fragment key={role}>
              <span className="text-xs sm:text-sm md:text-base font-semibold text-slate-700 dark:text-slate-300">
                {role}
              </span>
              {index !== roles.length - 1 && (
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400" />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        {/* CTAs (10% Accent Button & 30% Secondary Action Links) */}
        <motion.div
          className="mt-6 sm:mt-7 flex justify-center items-center gap-3.5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <a
            href="https://drive.google.com/file/d/1ghrjm2U8OCSYYqOIq1_qeWybOHlRukS5/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 sm:px-7 sm:py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm rounded-full transition-all shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            View Resume
          </a>
          <div className="flex gap-2">
            <a
              href="https://github.com/prameela-66"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 sm:p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-full text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500/30 transition-all shadow-sm"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/prameela-naga-sri-guntupalli-145ab3353/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 sm:p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-full text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-500/30 transition-all shadow-sm"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import { motion } from 'framer-motion';

const BackgroundGlow = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none transition-opacity duration-300">
      {/* Subtle ambient light gradient that preserves > 4.5:1 text contrast */}
      <motion.div 
        className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] rounded-full dark:bg-indigo-600/5 bg-indigo-500/5 blur-[140px]"
        animate={{
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div 
        className="absolute bottom-[-10%] right-[-10%] w-[45%] h-[45%] rounded-full dark:bg-sky-600/5 bg-sky-500/5 blur-[140px]"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};

export default BackgroundGlow;

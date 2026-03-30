import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Layout, Cpu, Code2, Terminal } from 'lucide-react';

const Hero = () => {
  const roles = [
    "Coding Enthusiastic",
    "Full-Stack Developer",
    "AI Engineer",
    "Programmer",
    "Problem Solver"
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-32 pb-20 relative overflow-hidden bg-black">
      {/* Orbital Container */}
      <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center mb-12">
        {/* Outer Ring 3 */}
        <motion.div 
          className="absolute w-[95%] h-[95%] border border-white/5 rounded-full animate-spin-slow-reverse"
          style={{ borderStyle: 'dashed' }}
        >
           <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-purple-500 rounded-full shadow-[0_0_10px_purple]" />
           <div className="absolute bottom-[20%] right-[5%] w-1.5 h-1.5 bg-pink-500 rounded-full shadow-[0_0_10px_pink]" />
        </motion.div>
        
        {/* Outer Ring 2 */}
        <motion.div 
          className="absolute w-[75%] h-[75%] border border-white/10 rounded-full animate-spin-slow"
        >
           <div className="absolute bottom-1/2 right-0 w-2 h-2 bg-blue-500 rounded-full shadow-[0_0_10px_blue]" />
        </motion.div>
        
        {/* Outer Ring 1 */}
        <motion.div 
          className="absolute w-[55%] h-[55%] border border-cyan-500/20 rounded-full animate-spin-slow-reverse"
        >
           <div className="absolute top-1/2 left-0 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_10px_cyan]" />
        </motion.div>

        {/* Central Profile Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-[40%] aspect-square rounded-full p-1 bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 z-10 shadow-[0_0_50px_rgba(34,211,238,0.3)]"
        >
          <div className="w-full h-full rounded-full overflow-hidden border-4 border-black bg-gray-900 group">
            <img 
              src="https://photos.google.com/photo/AF1QipNdUKhbvLnY9dookdgVtyBJh03Z2MuXzWVzpwDN" 
              alt="Prameela Naga Sri" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400";
              }}
            />
          </div>
          
          {/* Orbiting Icons */}
          <motion.div className="absolute -top-4 -right-4 p-2 bg-black border border-white/10 rounded-lg text-cyan-400 shadow-xl" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
            <Cpu size={20} />
          </motion.div>
          <motion.div className="absolute -bottom-4 -left-4 p-2 bg-black border border-white/10 rounded-lg text-purple-400 shadow-xl" animate={{ y: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1 }}>
            <Code2 size={20} />
          </motion.div>
        </motion.div>
      </div>

      {/* Headline & Roles */}
      <div className="text-center z-10 px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight text-white leading-[1.2] py-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hey, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-extrabold uppercase tracking-tight">Prameela Naga Sri</span>
        </motion.h1>
        
        <motion.div 
          className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {roles.map((role, index) => (
            <React.Fragment key={role}>
              <motion.span 
                whileHover={{ scale: 1.1, color: '#fff' }}
                className="text-xl md:text-2xl font-bold text-gray-400 transition-colors cursor-default"
              >
                {role}
              </motion.span>
              {index !== roles.length - 1 && (
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)]" 
                />
              )}
            </React.Fragment>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 flex justify-center gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="YOUR_RESUME_DRIVE_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-white text-black font-black rounded-full hover:scale-105 transition-all shadow-xl"
          >
            Resume
          </a>
          <div className="flex gap-4">
            <a href="https://github.com/prameela-66" target="_blank" className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-gray-400 hover:text-white shadow-xl">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/prameela-naga-sri-guntupalli-145ab3353/" target="_blank" className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all text-gray-400 hover:text-white shadow-xl">
              <Linkedin size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen mx-auto flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-emerald-400 font-medium text-lg mb-4 tracking-widest uppercase">
            Product Focused Developer
          </p>
          <h1 className="text-white font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 mb-6">
            Hi, I'm <span className="text-emerald-400 transition-colors duration-300 hover:text-emerald-300">Lalli</span>
          </h1>
          <p className="text-slate-400 lg:text-[20px] sm:text-[18px] text-[16px] max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            I build high-performance, responsive <span className="text-slate-100 font-medium">Full Stack applications</span> with a focus on clean code and exceptional user experience.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-bold text-white transition-all duration-300 bg-emerald-500 rounded-full hover:bg-emerald-600 focus:outline-none shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
          >
            View My Projects
            <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={20} />
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 border-2 border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white rounded-full font-bold transition-all duration-300"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      <div className="absolute bottom-10 w-full flex justify-center items-center pointer-events-none">
        <a href="#about" className="pointer-events-auto">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-slate-700 flex justify-center items-start p-2 hover:border-emerald-500 transition-colors duration-300">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-emerald-500"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

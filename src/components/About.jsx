import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto flex flex-col items-center">
      <div className="w-full flex flex-col md:flex-row gap-12 items-center">
        <motion.div
          whileInView={{ opacity: [0, 1], x: [-50, 0] }}
          transition={{ duration: 0.5 }}
          className="flex-1"
        >
          <header className="mb-8">
            <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Introduction</h2>
            <div className="w-20 h-1.5 bg-emerald-500 rounded-full mt-2"></div>
          </header>
          
          <p className="text-slate-300 text-[18px] leading-[30px] mb-6 font-light">
            I'm a passionate Full Stack Developer with experience in building web applications using modern technologies. 
            My journey in tech began with a curiosity for how things work on the internet, which led me to dive deep into both frontend and backend development.
          </p>
          <p className="text-slate-400 text-[18px] leading-[30px] mb-6 italic">
            "I believe in writing code that is not only functional but also elegant and maintainable."
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800">
              <h3 className="text-emerald-400 font-bold mb-2">My Focus</h3>
              <p className="text-slate-400 text-sm">Scalable architecture, responsive UI, and optimized performance.</p>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-800">
              <h3 className="text-emerald-400 font-bold mb-2">My Goal</h3>
              <p className="text-slate-400 text-sm">To contribute to impactful projects that solve real-world problems.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1], scale: [0.8, 1] }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex justify-center relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 bg-slate-800 rounded-3xl overflow-hidden relative group">
            <img 
              src="https://placehold.co/400x400/0f172a/10b981?text=Prameela+Naga+Sri" 
              alt="Prameela Naga Sri" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-emerald-500/20 mix-blend-overlay"></div>
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import { motion } from "framer-motion";
import { skills } from "../constants";

const SkillIcon = ({ name }) => {
  // Simple placeholders for icons as Lucide doesn't have all dev icons
  return (
    <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
      <span className="text-emerald-400 font-bold text-xl uppercase">{name.substring(0, 2)}</span>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-16 text-center">
          <p className="text-emerald-400 font-medium text-lg uppercase mb-2">My Expertise</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Core Skills</h2>
          <div className="w-20 h-1.5 bg-emerald-500 rounded-full mt-4 mx-auto"></div>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              whileInView={{ opacity: [0, 1], y: [20, 0] }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-slate-900 p-8 rounded-2xl border border-slate-800 flex flex-col items-center justify-center transition-all duration-300 hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)]"
            >
              <SkillIcon name={skill.name} />
              <h3 className="text-white font-bold text-lg text-center">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 p-8 bg-emerald-500/5 rounded-3xl border border-emerald-500/10 text-center">
          <p className="text-slate-400 text-lg">Currently learning: <span className="text-emerald-400 font-bold">AWS, Docker, and Kubernetes</span> to expand my DevOps capabilities.</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

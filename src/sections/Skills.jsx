import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Globe, 
  Sparkles, 
  Database, 
  Wrench, 
  Users 
} from 'lucide-react';

const skillCategories = [
  {
    category: "Languages",
    icon: <Code2 className="w-5 h-5 text-amber-500 dark:text-amber-400" />,
    skills: ["Python", "Java", "JavaScript", "C (Basic)"]
  },
  {
    category: "Core CS",
    icon: <Cpu className="w-5 h-5 text-rose-500 dark:text-rose-400" />,
    skills: ["OOP", "Data Structures & Algorithms", "DBMS"]
  },
  {
    category: "Frontend & Backend",
    icon: <Globe className="w-5 h-5 text-sky-500 dark:text-sky-400" />,
    skills: ["HTML/CSS", "React.js", "Django", "FastAPI", "REST APIs"]
  },
  {
    category: "AI & GenAI",
    icon: <Sparkles className="w-5 h-5 text-purple-500 dark:text-purple-400" />,
    skills: ["Generative AI", "Prompt Engineering"]
  },
  {
    category: "Databases",
    icon: <Database className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
    skills: ["PostgreSQL", "MySQL"]
  },
  {
    category: "Tools & Platforms",
    icon: <Wrench className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />,
    skills: ["Git", "GitHub", "Render", "Vercel", "Figma", "Jupyter Notebook", "Eclipse IDE"]
  },
  {
    category: "Soft Skills",
    icon: <Users className="w-5 h-5 text-teal-500 dark:text-teal-400" />,
    skills: ["Communication", "Leadership", "Time Management"]
  }
];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <section id="skills" className="py-24 relative transition-colors duration-300">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2 block">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Technical <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full mt-3" />
        </motion.div>
        
        {/* Category Cards Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((group) => (
            <motion.div
              key={group.category}
              variants={item}
              whileHover={{ y: -4 }}
              className="p-6 bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 hover:border-indigo-500/40 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl">
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 tracking-tight">
                  {group.category}
                </h3>
              </div>

              {/* Skill Pill Badges */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
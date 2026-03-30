import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileCode, 
  Layout, 
  Globe, 
  Codepen, 
  Database, 
  GitBranch, 
  Cpu, 
  Terminal,
  Layers
} from 'lucide-react';

const iconMap = {
  FileCode: <FileCode size={34} />,
  Layout: <Layout size={34} />,
  Globe: <Globe size={34} />,
  Codepen: <Codepen size={34} />,
  Database: <Database size={34} />,
  GitBranch: <GitBranch size={34} />,
  Cpu: <Cpu size={34} />,
  Terminal: <Terminal size={34} />,
  Layers: <Layers size={34} />,
};

const skills = [
  { name: "Python", icon: "FileCode", color: "text-yellow-400", bg: "group-hover:bg-yellow-400/10" },
  { name: "Java", icon: "Terminal", color: "text-red-400", bg: "group-hover:bg-red-400/10" },
  { name: "Django", icon: "Database", color: "text-green-500", bg: "group-hover:bg-green-500/10" },
  { name: "Frontend", icon: "Globe", color: "text-blue-400", bg: "group-hover:bg-blue-400/10" },
  { name: "React", icon: "Codepen", color: "text-cyan-400", bg: "group-hover:bg-cyan-400/10" },
  { name: "UI/UX", icon: "Layout", color: "text-purple-400", bg: "group-hover:bg-purple-400/10" },
  { name: "Databases", icon: "Layers", color: "text-blue-500", bg: "group-hover:bg-blue-500/10" },
  { name: "Git/GitHub", icon: "GitBranch", color: "text-gray-300", bg: "group-hover:bg-gray-300/10" },
  { name: "NLP / ML", icon: "Cpu", color: "text-indigo-400", bg: "group-hover:bg-indigo-400/10" },
];

const Skills = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        <motion.div 
          className="text-center mb-20 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight uppercase leading-tight py-2">
            Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500 font-extrabold">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-white/20 mx-auto rounded-full" />
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group flex items-center p-8 bg-white/[0.03] border border-white/5 rounded-3xl backdrop-blur-xl transition-all duration-300 hover:border-white/20 shadow-xl ${skill.bg}`}
            >
              <div className={`p-4 bg-[#0a0a0a]/50 rounded-2xl mr-6 transition-all group-hover:scale-110 shadow-inner ${skill.color}`}>
                {iconMap[skill.icon]}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-200 uppercase tracking-widest">{skill.name}</h3>
                <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-transparent via-current to-transparent transition-all duration-500 opacity-30 mt-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

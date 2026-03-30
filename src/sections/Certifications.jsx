import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Cpu, Code2, ExternalLink } from 'lucide-react';
import { certificationsData } from '../data/certifications.js';

const iconMap = {
  Cloud: <ShieldCheck size={28} className="text-blue-400" />,
  Code: <Code2 size={28} className="text-green-400" />,
  Terminal: <Cpu size={28} className="text-purple-400" />,
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-32 relative bg-white/[0.01]">
      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div 
          className="text-center mb-24 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight uppercase leading-tight py-2">
            Certifications <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 font-extrabold">& Achievements</span>
          </h2>
          <div className="flex justify-center gap-2">
            <div className="w-12 h-1 bg-yellow-400/30 rounded-full" />
            <div className="w-24 h-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full" />
            <div className="w-12 h-1 bg-yellow-400/30 rounded-full" />
          </div>
        </motion.div>
        
        <div className="grid gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, type: "spring" }}
              viewport={{ once: true }}
              whileHover={{ x: 10, scale: 1.02, transition: { duration: 0.3 } }}
              className="group flex flex-col md:flex-row items-center p-8 bg-white/[0.03] rounded-[2.5rem] border border-white/5 hover:border-yellow-400/30 hover:bg-yellow-400/[0.02] transition-all shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="p-5 bg-[#0a0a0a]/50 rounded-[2rem] mr-0 md:mr-10 mb-6 md:mb-0 group-hover:bg-yellow-400/10 transition-colors shadow-inner relative z-10">
                {iconMap[cert.icon] || <Award size={28} className="text-yellow-400" />}
              </div>
              
              <div className="flex-grow text-center md:text-left relative z-10">
                <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 mb-2">
                  <h3 className="text-2xl font-extrabold group-hover:text-yellow-400 transition-colors tracking-tight uppercase">{cert.title}</h3>
                </div>
                <p className="text-gray-400 font-bold text-lg tracking-wide uppercase opacity-70">{cert.issuer}</p>
              </div>
              
              <div className="mt-6 md:mt-0 flex items-center gap-6 relative z-10">
                <span className="px-5 py-2 bg-white/5 text-gray-400 border border-white/10 rounded-2xl text-sm font-black tracking-widest uppercase">
                  {cert.year}
                </span>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-3 bg-white/5 rounded-2xl border border-white/10 text-gray-500 hover:text-white hover:border-blue-400/40 transition-all hover:bg-blue-400/10"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

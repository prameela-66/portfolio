import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, MapPin, Calendar, Award, GraduationCap } from 'lucide-react';

const About = () => {
  const education = [
    {
      institution: "Shri Vishnu Engineering College for Women",
      degree: "B.Tech in Information Technology",
      period: "Sep 2023 - Present",
      location: "Andhra Pradesh, India",
      info: "CGPA: 9.06"
    },
    {
      institution: "Narayana Junior College",
      degree: "Intermediate (MPC)",
      period: "2021 - 2023",
      location: "Andhra Pradesh, India",
      info: "Score: 97.4%"
    }
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-white/[0.02]">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div 
          className="text-center mb-20 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight uppercase leading-tight py-2">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-extrabold">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:shadow-purple-500/10 transition-shadow">
              <Award className="absolute top-4 right-4 text-purple-400/20 group-hover:text-purple-400/40 transition-colors" />
              <h3 className="text-3xl font-extrabold mb-6 flex items-center gap-3 uppercase tracking-tight">
                Summary
              </h3>
              <p className="text-xl text-gray-300 leading-relaxed font-semibold mb-6">
                Motivated IT student at <span className="text-white">SVECW</span> with strong skills in Python, Django, and NLP.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed font-medium">
                "Passionate about developing scalable solutions and enhancing user experiences through innovative technologies. Currently focusing on LLMs and AI Chat applications."
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {["AI/ML Enthusiast", "GSSOC'25", "Open Source", "Django Dev"].map((tag) => (
                <span key={tag} className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-2xl text-sm font-bold text-blue-300 uppercase tracking-widest backdrop-blur-md">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-10"
          >
            <h3 className="text-3xl font-black flex items-center gap-4 ml-2">
              <GraduationCap className="text-purple-400" size={36} /> Education History
            </h3>
            
            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative pl-12"
                >
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full border-4 border-purple-500/20 bg-purple-500 group-hover:scale-125 transition-transform shadow-[0_0_20px_rgba(168,85,247,0.5)] z-10" />
                  {index !== education.length - 1 && (
                    <div className="absolute left-[11px] top-8 w-0.5 h-24 bg-gradient-to-b from-purple-500/50 to-transparent" />
                  )}
                  
                  <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] hover:border-purple-500/30 transition-all shadow-xl backdrop-blur-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                      <h4 className="text-2xl font-black text-white leading-tight">{edu.institution}</h4>
                      <span className="px-4 py-1.5 bg-purple-500/10 text-purple-300 border border-purple-500/20 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>
                    
                    <p className="text-xl font-bold text-blue-400 mb-6">{edu.degree}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <MapPin size={18} className="text-purple-400" />
                        <span className="font-semibold">{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-400">
                        <Award size={18} className="text-green-400" />
                        <span className="font-bold text-white uppercase tracking-widest">{edu.info}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Github, ExternalLink, Code2, Globe } from 'lucide-react';
import { projectsData } from '../data/projects.js';

const ProjectCard = ({ project, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function onMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={onMouseMove}
      className="group relative bg-[#0a0a0a]/50 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-purple-500/30 transition-colors shadow-2xl h-full flex flex-col"
    >
      <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(109,40,217,0.15)_0%,transparent_80%)]" 
        style={{
          "--x": `${mouseX.get()}px`,
          "--y": `${mouseY.get()}px`,
        }}
      />

      <div className="aspect-video relative overflow-hidden m-4 rounded-[2rem] border border-white/5 shadow-inner">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
      </div>
      
      <div className="p-8 pb-10 flex flex-col flex-grow relative z-10">
        <div className="flex justify-between items-start gap-4 mb-4">
          <h3 className="text-3xl font-black group-hover:text-purple-400 transition-colors leading-tight">{project.title}</h3>
          <a 
            href={project.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform group-hover:bg-purple-500/10"
          >
            <Globe size={20} className="text-purple-400" />
          </a>
        </div>
        
        <p className="text-gray-400 text-lg mb-8 leading-relaxed font-medium line-clamp-3">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2.5 mb-10 mt-auto">
          {project.tech.map((tech) => (
            <span key={tech} className="text-xs font-black uppercase tracking-widest px-4 py-1.5 bg-purple-500/10 text-purple-300 rounded-xl border border-purple-500/20">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-8 items-center pt-2">
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all transform hover:translate-x-1"
          >
            <Github size={20} className="text-purple-400" />
            Source
          </a>
          <a 
            href={project.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-gray-400 hover:text-white transition-all transform hover:translate-x-1"
          >
            <ExternalLink size={20} className="text-blue-400" />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative bg-transparent">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-24 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight uppercase leading-tight py-2">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500 font-extrabold">Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">Showcasing high-impact AI solutions and modern web architectures.</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

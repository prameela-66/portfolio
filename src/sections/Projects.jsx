import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, LayoutTemplate } from 'lucide-react';
import { projectsData } from '../data/projects.js';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      viewport={{ once: true, margin: "-40px" }}
      className="group flex flex-col bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 hover:border-indigo-500/40 rounded-2xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 h-full"
    >
      {/* Image Container */}
      <div className="relative aspect-video overflow-hidden border-b border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-900">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
        
        {/* Top Right Actions (10% Accent Action Links) */}
        <div className="absolute top-3 right-3 flex gap-2">
          {project.github && project.github !== "#" && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-900/80 backdrop-blur-md rounded-full text-white hover:bg-indigo-600 transition-colors shadow-sm"
              aria-label="GitHub Repository"
            >
              <Github size={15} />
            </a>
          )}
          {project.live && project.live !== "#" && (
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-slate-900/80 backdrop-blur-md rounded-full text-white hover:bg-indigo-600 transition-colors shadow-sm"
              aria-label="Live Demonstration"
            >
              <ExternalLink size={15} />
            </a>
          )}
        </div>
      </div>
      
      {/* Content Container (30% Secondary typography & surfaces) */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
          {project.subtitle && (
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-1 block">
              {project.subtitle}
            </span>
          )}
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors tracking-tight">
            {project.title}
          </h3>
        </div>
        
        {/* Body Text (Guaranteed >= 4.5:1 WCAG contrast) */}
        {project.bullets ? (
          <ul className="text-slate-700 dark:text-slate-300 text-sm mb-6 space-y-2 flex-grow list-disc list-inside">
            {project.bullets.map((bullet, i) => (
              <li key={i} className="leading-relaxed">
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-700 dark:text-slate-300 text-sm mb-6 leading-relaxed flex-grow">
            {project.description}
          </p>
        )}
        
        <div className="mt-auto pt-4 border-t border-slate-100 dark:border-white/5">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span 
                key={tech} 
                className="text-xs font-medium px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md border border-slate-200 dark:border-white/5"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative transition-colors duration-300">
      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-7xl">
        
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2 block">
              Featured Work
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
              My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
            </h2>
            <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full mt-3" />
          </motion.div>
          
          {/* <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="h-1 w-16 bg-indigo-600 dark:bg-indigo-400 rounded-full mt-2"
          /> */}

        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Projects;

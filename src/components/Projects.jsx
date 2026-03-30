import React from "react";
import { motion } from "framer-motion";
import { projects } from "../constants";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ index, title, description, tech, github, live, image }) => {
  return (
    <motion.div
      whileInView={{ opacity: [0, 1], y: [50, 0] }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:border-emerald-500/50 hover:shadow-2xl h-full flex-1"
    >
      <div className="relative overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-[230px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay"></div>
      </div>

      <div className="p-8 flex flex-col flex-1">
        <header className="mb-4">
          <h3 className="text-white font-bold text-2xl mb-2">{title}</h3>
          <p className="text-slate-400 text-sm leading-6 line-clamp-3">{description}</p>
        </header>

        <div className="flex flex-wrap gap-2 mb-8 mt-auto">
          {tech.map((tag) => (
            <span
              key={`${title}-${tag}`}
              className="px-3 py-1 bg-slate-800 text-emerald-400 text-xs font-bold rounded-full border border-slate-700"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-4 mt-auto">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 font-bold transition-colors duration-200"
          >
            <Github size={20} />
            Code
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 font-bold transition-colors duration-200"
          >
            <ExternalLink size={20} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 max-w-7xl mx-auto px-6">
      <header className="mb-16 text-center">
        <p className="text-emerald-400 font-medium text-lg uppercase mb-2">My Work</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects</h2>
        <div className="w-20 h-1.5 bg-emerald-500 rounded-full mt-4 mx-auto"></div>
        <p className="text-slate-400 mt-6 max-w-2xl mx-auto text-lg font-light leading-relaxed">
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

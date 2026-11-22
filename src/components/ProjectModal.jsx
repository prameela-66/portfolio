import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, CheckCircle2, Sparkles } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 dark:bg-black/75 backdrop-blur-sm z-0"
        />

        {/* Modal Container (30% Secondary Card) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0f172a] rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-y-auto"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={18} />
          </button>

          {/* Hero Banner / Cover */}
          <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-85"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider bg-indigo-600 rounded-full mb-2 text-white">
                {project.category || 'Featured Project'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-sm text-slate-300 font-medium mt-1">
                {project.subtitle}
              </p>
            </div>
          </div>

          {/* Modal Content (WCAG compliant contrast >= 4.5:1) */}
          <div className="p-6 sm:p-8 space-y-6">

            {/* Meta Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-white/5 rounded-xl">
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block mb-0.5">Role</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">{project.role || 'Full Stack Developer'}</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block mb-0.5">Category</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">{project.category || 'Engineering'}</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block mb-0.5">Impact</span>
                <span className="text-sm font-bold text-slate-900 dark:text-white">{project.outcome ? 'High Impact' : 'Production'}</span>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold block mb-0.5">Links</span>
                <div className="flex gap-3 mt-0.5">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 text-xs font-semibold">
                      <Github size={14} /> Code
                    </a>
                  )}
                  {project.live && project.live !== '#' && (
                    <a href={project.live} target="_blank" rel="noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-1 text-xs font-semibold">
                      <ExternalLink size={14} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="p-5 bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/5 rounded-xl">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-2">Overview</h3>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Tech Stack Badges */}
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400 font-bold">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 rounded-lg text-xs font-semibold text-slate-800 dark:text-slate-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer CTAs (10% Accent Button) */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/10 flex flex-wrap gap-3 items-center justify-between">
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
                  >
                    <Github size={15} /> Source Code
                  </a>
                )}
                {project.live && project.live !== '#' && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <ExternalLink size={15} /> Live Demo
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;

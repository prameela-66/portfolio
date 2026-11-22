import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, Layers, Sparkles, Github, ExternalLink } from 'lucide-react';
import { internshipData } from '../data/experience.js';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2 block">
            Work & Training
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Internship <span className="text-indigo-600 dark:text-indigo-400">Experience</span>
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full mt-3" />
        </motion.div>

        {/* Experience Timeline / Cards */}
        <div className="space-y-8">
          {internshipData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative p-6 sm:p-8 md:p-10 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 shadow-sm hover:border-indigo-500/30 transition-all group"
            >
              {/* Header Row: Company, Role & Meta Tags */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6 pb-6 border-b border-slate-100 dark:border-white/5">
                <div className="flex items-start gap-4">
                  {/* 10% Accent Icon */}
                  <div className="p-3.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400 shrink-0 mt-1">
                    <Briefcase size={26} />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        {item.company}
                      </h3>
                      <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60">
                        {item.workType}
                      </span>
                    </div>

                    <p className="text-base sm:text-lg font-bold text-indigo-600 dark:text-indigo-400">
                      {item.role} &ndash; <span className="font-semibold text-slate-700 dark:text-slate-300">{item.program}</span>
                    </p>
                  </div>
                </div>

                {/* Right Badges: Year, Duration & GitHub CTA */}
                <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2.5 shrink-0">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 rounded-full text-xs font-bold uppercase tracking-wider">
                      <Calendar size={13} />
                      {item.year}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {item.duration}
                    </span>
                  </div>

                  {item.github && (
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-indigo-600 dark:bg-white/10 dark:hover:bg-indigo-600 text-white text-xs font-semibold transition-all shadow-sm group/btn"
                      aria-label="View internship project on GitHub"
                    >
                      <Github size={14} className="group-hover/btn:scale-110 transition-transform" />
                      <span>View Code</span>
                      <ExternalLink size={12} className="opacity-70" />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Highlight Banner with Direct GitHub Action */}
              <div className="mb-6 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/70 dark:border-white/5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <Sparkles size={18} className="text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <div>
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 block">
                      Core Project
                    </span>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-base font-bold text-slate-900 dark:text-white">
                        {item.project}
                      </span>
                      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">
                        &ndash; {item.projectSubtitle}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bullet Points with WCAG AA > 4.5:1 text contrast */}
              <div className="space-y-3.5 mb-8">
                {item.bullets.map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-indigo-600 dark:text-indigo-400 shrink-0 mt-1" />
                    <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed font-normal">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech Stack Badges */}
              <div className="pt-5 border-t border-slate-100 dark:border-white/5">
                <div className="flex items-center gap-2 mb-3">
                  <Layers size={15} className="text-slate-500 dark:text-slate-400" />
                  <span className="text-xs uppercase tracking-wider font-bold text-slate-600 dark:text-slate-400">
                    Key Technologies & Frameworks
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold border border-slate-200/80 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;

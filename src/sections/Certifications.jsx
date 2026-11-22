import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Cpu, Code2, ExternalLink, CheckCircle, Star, Trophy, Target } from 'lucide-react';
import { certificationsData } from '../data/certifications.js';
import { achievementsData } from '../data/achievements.js';

const iconMap = {
  Cloud: <ShieldCheck size={20} />,
  Code: <Code2 size={20} />,
  Code2: <Code2 size={20} />,
  Terminal: <Cpu size={20} />,
  ShieldCheck: <ShieldCheck size={20} />,
  Cpu: <Cpu size={20} />,
  Award: <Award size={20} />,
};

const achievementIcons = [Trophy, Star, Target];

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null);

  return (
    <section id="certifications" className="py-24 relative transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-7xl relative z-10">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2 block">
            Credentials & Milestones
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Certifications &{' '}
            <span className="text-indigo-600 dark:text-indigo-400">
              Achievements
            </span>
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full mt-3" />
        </motion.div>

        {/* Two-Column Layout */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">

          {/* LEFT: Certifications (30% Secondary Cards with 10% Active Accent) */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="inline-block w-4 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
              Certifications
            </h3>

            <div className="flex flex-col gap-3.5">
              {certificationsData.map((cert, index) => {
                const isActive = activeCert === cert.id;
                return (
                  <motion.div
                    key={cert.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    onClick={() => setActiveCert(isActive ? null : cert.id)}
                    className={`
                      group flex items-center gap-4 p-4 rounded-xl cursor-pointer
                      border transition-all duration-200
                      bg-white dark:bg-[#0f172a]
                      ${isActive
                        ? 'border-indigo-600 dark:border-indigo-400 shadow-md ring-1 ring-indigo-500/30'
                        : 'border-slate-200 dark:border-white/10 hover:border-indigo-500/30'}
                    `}
                  >
                    {/* Icon Box (Neons strictly on icons) */}
                    <div className="flex-shrink-0 p-2.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-800/60">
                      {iconMap[cert.icon] || <Award size={20} />}
                    </div>

                    {/* Text (WCAG compliant >= 4.5:1 contrast) */}
                    <div className="flex-grow min-w-0">
                      <p className="font-bold text-sm text-slate-900 dark:text-white truncate group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {cert.title}
                      </p>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{cert.issuer}</p>
                    </div>

                    {/* Year + Link (10% Accent Link) */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{cert.year}</span>
                      {cert.link && cert.link !== 'YOUR_DRIVE_LINK_HERE' && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={e => e.stopPropagation()}
                          className="p-1.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-colors"
                          aria-label="View certificate"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT: Achievements (30% Secondary Cards & 10% Accent Highlights) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="inline-block w-4 h-1 bg-indigo-600 dark:bg-indigo-400 rounded-full" />
              Achievements
            </h3>

            <div className="flex flex-col gap-4">
              {achievementsData.map((item, index) => {
                const Icon = achievementIcons[index % achievementIcons.length];
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative p-6 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 hover:border-indigo-500/30 transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-start gap-4">
                      {/* 10% Accent Icon */}
                      <div className="flex-shrink-0 p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/50 border border-indigo-200/60 dark:border-indigo-800/60 text-indigo-600 dark:text-indigo-400">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {item.title}
                        </h4>
                        {/* Body text with contrast ratio >= 4.5:1 */}
                        <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-normal">
                          {item.desc}
                        </p>
                        <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                          <CheckCircle size={13} />
                          Verified Milestone
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Certifications;

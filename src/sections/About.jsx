import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Award, CheckCircle, Code, Copy, Check } from 'lucide-react';

const About = () => {
  const [copied, setCopied] = useState(false);
  const [activeSyntaxTheme, setActiveSyntaxTheme] = useState('auto'); // 'auto', 'onedark', 'github', 'dracula'

  const education = [
    {
      institution: "Shri Vishnu Engineering College for Women",
      degree: "B.Tech in Information Technology",
      period: "Sep 2023 - Present",
      location: "Andhra Pradesh, India",
      info: "CGPA: 9.0"
    },
    {
      institution: "Narayana Junior College",
      degree: "Intermediate (MPC)",
      period: "2021 - 2023",
      location: "Andhra Pradesh, India",
      info: "Score: 97.4%"
    }
  ];

  const codeSnippet = `class SoftwareEngineer:
    def __init__(self):
        self.name = "Guntupalli Prameela Naga Sri"
        self.role = "Full-Stack Developer & AI Enthusiast"
        self.core_stack = ["Python", "Django", "FastAPI", "React", "NLP"]
        self.metrics = {
            "leetcode_solved": 300,
            "btech_cgpa": 9.0,
            "projects_completed": 7
        }

    def analyze_resume(self, resume_data, job_requirements):
        """Calculates ATS similarity and extracts semantic skills."""
        semantic_score = evaluate_similarity(resume_data, job_requirements)
        return {
            "ats_compatibility": f"{semantic_score}%",
            "status": "Ready for Technical Interviews"
        }`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden transition-colors duration-300">
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
            Profile & Background
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-slate-100">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h2>
          <div className="w-12 h-1 bg-indigo-600 dark:bg-indigo-400 mx-auto rounded-full mt-3" />
        </motion.div>

        {/* 2-Column: Bio Overview & Interactive Code Snippet */}
        <div className="grid lg:grid-cols-12 gap-8 items-start mb-20">
          
          {/* Left Column: 30% Secondary Card (Bio & Key Metrics) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 shadow-md">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                Architecting scalable applications with AI precision
              </h3>
              
              <div className="space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed font-normal">
                <p>
                  Motivated IT student at <span className="font-semibold text-slate-900 dark:text-slate-100">SVECW</span> with specialized expertise in Python, Django, FastAPI, and NLP-driven applications.
                </p>
                <p>
                  Passionate about developing scalable systems that solve tangible problems. Currently architecting LLM-driven chat assistants and intelligent ATS analysis pipelines.
                </p>
              </div>

              {/* 10% Key Metrics (Clean Accent Numbers) */}
              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-200 dark:border-white/10">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-white/5">
                  <span className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 block">
                    9.0
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    B.Tech CGPA
                  </span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-white/5">
                  <span className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400 block">
                    300+
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    LeetCode Solved
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Code Syntax Highlighting Block (One Dark Pro / GitHub Light) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div 
              className="code-window border shadow-lg"
              data-syntax-theme={activeSyntaxTheme === 'dracula' ? 'dracula' : undefined}
            >
              {/* Window Header */}
              <div className="code-window-header flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono font-medium text-slate-600 dark:text-slate-400 ml-2">
                    developer_profile.py
                  </span>
                </div>

                {/* Established Syntax Theme Controls & Copy */}
                <div className="flex items-center gap-2">
                  <div className="hidden sm:flex items-center text-[11px] font-mono rounded-lg border border-slate-300 dark:border-white/10 p-0.5 bg-slate-200/50 dark:bg-black/30">
                    <button
                      onClick={() => setActiveSyntaxTheme('auto')}
                      className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                        activeSyntaxTheme === 'auto'
                          ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold shadow-xs'
                          : 'text-slate-600 dark:text-slate-400'
                      }`}
                      title="Follows Light/Dark mode (GitHub Light / One Dark Pro)"
                    >
                      Default
                    </button>
                    <button
                      onClick={() => setActiveSyntaxTheme('dracula')}
                      className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
                        activeSyntaxTheme === 'dracula'
                          ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-bold shadow-xs'
                          : 'text-slate-600 dark:text-slate-400'
                      }`}
                      title="Dracula Syntax Theme"
                    >
                      Dracula
                    </button>
                  </div>

                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white bg-slate-100 dark:bg-white/5 rounded-md border border-slate-200 dark:border-white/10 transition-colors cursor-pointer"
                    aria-label="Copy code snippet"
                  >
                    {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
                    <span>{copied ? "Copied" : "Copy"}</span>
                  </button>
                </div>
              </div>

              {/* Window Body with Established Syntax Highlighting Tokens */}
              <div className="code-window-body">
                <pre className="leading-relaxed text-xs sm:text-sm font-mono overflow-x-auto">
                  <code>
                    <span className="syn-kw">class</span> <span className="syn-type">SoftwareEngineer</span><span className="syn-punc">:</span>{'\n'}
                    {'    '}<span className="syn-kw">def</span> <span className="syn-fn">__init__</span><span className="syn-punc">(</span><span className="syn-var">self</span><span className="syn-punc">):</span>{'\n'}
                    {'        '}<span className="syn-var">self</span><span className="syn-punc">.</span><span className="syn-var">name</span> <span className="syn-op">=</span> <span className="syn-str">&quot;Guntupalli Prameela Naga Sri&quot;</span>{'\n'}
                    {'        '}<span className="syn-var">self</span><span className="syn-punc">.</span><span className="syn-var">role</span> <span className="syn-op">=</span> <span className="syn-str">&quot;Full-Stack Developer & AI Enthusiast&quot;</span>{'\n'}
                    {'        '}<span className="syn-var">self</span><span className="syn-punc">.</span><span className="syn-var">core_stack</span> <span className="syn-op">=</span> <span className="syn-punc">[</span><span className="syn-str">&quot;Python&quot;</span><span className="syn-punc">,</span> <span className="syn-str">&quot;Django&quot;</span><span className="syn-punc">,</span> <span className="syn-str">&quot;FastAPI&quot;</span><span className="syn-punc">,</span> <span className="syn-str">&quot;React&quot;</span><span className="syn-punc">,</span> <span className="syn-str">&quot;NLP&quot;</span><span className="syn-punc">]</span>{'\n'}
                    {'        '}<span className="syn-var">self</span><span className="syn-punc">.</span><span className="syn-var">metrics</span> <span className="syn-op">=</span> <span className="syn-punc">&#123;</span>{'\n'}
                    {'            '}<span className="syn-str">&quot;leetcode_solved&quot;</span><span className="syn-punc">:</span> <span className="syn-num">300</span><span className="syn-punc">,</span>{'\n'}
                    {'            '}<span className="syn-str">&quot;btech_cgpa&quot;</span><span className="syn-punc">:</span> <span className="syn-num">9.0</span><span className="syn-punc">,</span>{'\n'}
                    {'            '}<span className="syn-str">&quot;projects_built&quot;</span><span className="syn-punc">:</span> <span className="syn-num">7</span>{'\n'}
                    {'        '}<span className="syn-punc">&#125;</span>{'\n\n'}
                    {'    '}<span className="syn-kw">def</span> <span className="syn-fn">analyze_resume</span><span className="syn-punc">(</span><span className="syn-var">self</span><span className="syn-punc">,</span> <span className="syn-var">resume_data</span><span className="syn-punc">,</span> <span className="syn-var">job_requirements</span><span className="syn-punc">):</span>{'\n'}
                    {'        '}<span className="syn-cm"># Semantic matching with WCAG-compliant syntax colors</span>{'\n'}
                    {'        '}<span className="syn-var">score</span> <span className="syn-op">=</span> <span className="syn-fn">evaluate_similarity</span><span className="syn-punc">(</span><span className="syn-var">resume_data</span><span className="syn-punc">,</span> <span className="syn-var">job_requirements</span><span className="syn-punc">)</span>{'\n'}
                    {'        '}<span className="syn-kw">return</span> <span className="syn-punc">&#123;</span><span className="syn-str">&quot;ats_score&quot;</span><span className="syn-punc">:</span> <span className="syn-var">score</span><span className="syn-punc">,</span> <span className="syn-str">&quot;status&quot;</span><span className="syn-punc">:</span> <span className="syn-str">&quot;Ready&quot;</span><span className="syn-punc">&#125;</span>
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Education History Subheading */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold flex items-center gap-3 text-slate-900 dark:text-white mb-8">
            <GraduationCap className="text-indigo-600 dark:text-indigo-400" size={30} /> 
            Education History
          </h3>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative pl-8 sm:pl-10"
              >
                {/* 10% Accent Timeline Marker (Neon saved strictly for dot / line) */}
                <div className="absolute left-0 top-3 w-4 h-4 rounded-full border-2 border-indigo-600 dark:border-indigo-400 bg-white dark:bg-slate-900 z-10" />
                {index !== education.length - 1 && (
                  <div className="absolute left-[7px] top-7 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800" />
                )}

                {/* 30% Secondary Card */}
                <div className="p-6 rounded-2xl bg-white dark:bg-[#0f172a] border border-slate-200 dark:border-white/10 shadow-sm hover:border-indigo-500/30 transition-all">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                      {edu.institution}
                    </h4>
                    <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 rounded-full text-xs font-bold uppercase tracking-wider w-fit">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-base font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                    {edu.degree}
                  </p>

                  <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 dark:text-slate-400">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-slate-500 dark:text-slate-400" />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={16} className="text-emerald-600 dark:text-emerald-400" />
                      <span className="font-bold text-slate-900 dark:text-white">{edu.info}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

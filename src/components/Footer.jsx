import React from 'react';
import { Github, Linkedin, Mail, Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={18} />, href: 'https://github.com/prameela-66' },
    { name: 'LinkedIn', icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/prameela-naga-sri-guntupalli-145ab3353/' },
    { name: 'LeetCode', icon: <Code size={18} />, href: 'https://leetcode.com/u/prameela-66' }, 
    { name: 'Email', icon: <Mail size={18} />, href: 'mailto:guntupalliprameela9@gmail.com' },
  ];

  return (
    <footer className="py-12 bg-white dark:bg-[#090d16] border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
              Prameela Naga Sri
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-sm">
              Full-Stack Developer & AI Engineer. Crafting accessible, performant digital solutions.
            </p>
          </div>
          
          <div className="flex gap-2.5">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200/80 dark:border-white/5"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="pt-6 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
          <p>© {currentYear} Guntupalli Prameela Naga Sri. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with 60-30-10 & WCAG color architecture
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

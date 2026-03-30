import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, href: 'https://github.com/prameela-66' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/prameela-naga-sri-guntupalli-145ab3353/' },
    { name: 'LeetCode', icon: <Code size={20} />, href: 'https://leetcode.com/u/prameela-66' }, 
    { name: 'Email', icon: <Mail size={20} />, href: 'mailto:guntupalliprameela9@gmail.com' },
  ];

  return (
    <footer className="py-12 bg-[#050505] border-t border-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-blue-500 mb-2">Prameela</h1>
            <p className="text-gray-500 text-sm max-w-xs">IT Student & AI-Driven App Developer. Passionate about Python, Django, and NLP.</p>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <a 
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-secondary/50 rounded-xl text-gray-400 hover:text-blue-500 hover:bg-blue-500/10 transition-all border border-gray-800"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Guntupalli Prameela Naga Sri. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Built with <Heart size={14} className="text-red-500 fill-red-500" /> by Prameela
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

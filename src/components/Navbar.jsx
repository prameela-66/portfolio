import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Contact', to: 'contact' },
    { name: 'Certifications', to: 'certifications' },
  ];

  return (
    <nav className={`fixed w-full z-50 flex justify-center transition-all duration-500 py-6 px-4`}>
      <div className={`flex items-center justify-between gap-8 px-6 h-16 rounded-full border border-white/5 backdrop-blur-2xl transition-all duration-500 ${scrolled ? 'bg-[#030014]/60 bg-opacity-80 shadow-2xl scale-95' : 'bg-white/5 shadow-xl w-full max-w-7xl'}`}>
        <div className="flex items-center gap-4 cursor-pointer group">
          <div className="flex-shrink-0 flex items-center gap-3">
             <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 tracking-tighter uppercase whitespace-nowrap">
               Prameela Portfolio
             </h1>
          </div>
        </div>

        {/* Center Links */}
        <div className="hidden lg:flex items-center space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={`#${link.to}`}
              className="px-4 py-2 text-gray-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-all rounded-full hover:bg-white/5"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side - Resume Button */}
        <div className="hidden md:flex items-center">
            <a 
              href="YOUR_RESUME_DRIVE_LINK_HERE" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-bold rounded-full hover:scale-105 active:scale-95 transition-all shadow-lg shadow-pink-500/20"
            >
              <Download size={16} /> Resume
            </a>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-300 hover:text-white"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-4 top-24 bg-[#030014]/95 backdrop-blur-3xl border border-white/10 rounded-3xl p-6 z-40 shadow-2xl animate-in zoom-in-95 duration-200">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.to}`}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-6 py-4 bg-white/5 border border-white/5 rounded-2xl text-sm font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-all"
              >
                {link.name}
                <ChevronRight size={14} className="text-gray-500/40" />
              </a>
            ))}
            <a 
              href="YOUR_RESUME_DRIVE_LINK_HERE" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-bold rounded-2xl mt-4 hover:opacity-90 transition-opacity"
            >
              <Download size={18} /> Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

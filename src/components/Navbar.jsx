import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Skills', to: 'skills' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-8 lg:px-10 py-5 pointer-events-none">
      <div className="max-w-[1536px] mx-auto flex items-center justify-between gap-4 pointer-events-auto">
        
        {/* Left: Boxed Brand Logo + Status Badge */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#home"
            onClick={() => setActiveTab('home')}
            className="flex items-center group"
          >
            <div className="w-11 h-11 rounded-xl bg-slate-900 dark:bg-zinc-900 text-white border-2 border-slate-300 dark:border-white/20 flex items-center justify-center text-base font-extrabold tracking-tight shadow-md group-hover:border-purple-500 transition-colors">
              PN
            </div>
          </a>

          {/* Beside-logo Status Badge */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 dark:bg-indigo-500/20 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200 whitespace-nowrap">
              Open to work
            </span>
          </div>
        </div>

        {/* Floating Capsule Navigation Bar */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center bg-white/90 dark:bg-zinc-900/90 border border-slate-200/90 dark:border-white/20 backdrop-blur-xl rounded-full px-6 py-3.5 shadow-2xl"
        >
          <a
            href="#home"
            onClick={() => setActiveTab('home')}
            className="text-sm font-bold bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent pr-5 mr-5 border-r border-slate-200 dark:border-white/20 whitespace-nowrap"
          >
            Prameela Portfolio
          </a>

          <ul className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => {
              const isActive = activeTab === link.to;
              return (
                <li key={link.name} className="shrink-0">
                  <a
                    href={`#${link.to}`}
                    onClick={() => setActiveTab(link.to)}
                    className={`whitespace-nowrap transition-colors ${
                      isActive
                        ? 'text-slate-950 dark:text-white font-bold inline-block'
                        : 'text-slate-600 dark:text-zinc-400 hover:text-slate-950 dark:hover:text-white font-medium'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Actions (Resume Button) */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href="https://drive.google.com/file/d/1ghrjm2U8OCSYYqOIq1_qeWybOHlRukS5/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 hover:brightness-110 text-white text-sm font-bold rounded-full transition-all shadow-xl shadow-purple-600/30 whitespace-nowrap hover:scale-105 active:scale-95"
          >
            <Download size={16} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile / Tablet Controls */}
        <div className="flex lg:hidden items-center gap-3 shrink-0">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="p-2.5 rounded-2xl bg-white/90 dark:bg-zinc-900/90 text-slate-800 dark:text-zinc-200 border border-slate-200 dark:border-white/20 shadow-md"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="lg:hidden mt-3 max-w-md mx-auto bg-white/95 dark:bg-zinc-950/95 backdrop-blur-2xl border border-slate-200 dark:border-white/20 rounded-3xl p-5 shadow-2xl pointer-events-auto">
          <div className="flex flex-col gap-1.5">
            <div className="pb-3 mb-1 border-b border-slate-200 dark:border-white/10 flex items-center justify-between">
              <span className="text-sm font-bold bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Prameela Portfolio
              </span>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 dark:bg-indigo-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-800 dark:text-slate-200">
                  Available
                </span>
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={`#${link.to}`}
                onClick={() => {
                  setActiveTab(link.to);
                  setIsOpen(false);
                }}
                className={`px-4 py-2.5 rounded-2xl text-sm transition-colors ${
                  activeTab === link.to
                    ? 'bg-slate-100 dark:bg-white/10 text-slate-950 dark:text-white font-bold'
                    : 'text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-white/5 font-medium'
                }`}
              >
                {link.name}
              </a>
            ))}

            <a
              href="https://drive.google.com/file/d/1ghrjm2U8OCSYYqOIq1_qeWybOHlRukS5/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-600 text-white text-sm font-bold rounded-full shadow-lg"
            >
              <Download size={16} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
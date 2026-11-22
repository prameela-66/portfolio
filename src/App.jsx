import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Experience from './sections/Experience.jsx';
import Projects from './sections/Projects.jsx';
import Certifications from './sections/Certifications.jsx';
import Skills from './sections/Skills.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackgroundGlow from './components/BackgroundGlow.jsx';
import ScrollProgressBar from './components/ScrollProgressBar.jsx';

function App() {
  return (
    <div className="bg-[#f8fafc] dark:bg-[#090d16] min-h-screen text-slate-900 dark:text-slate-100 selection:bg-indigo-500/20 selection:text-indigo-600 dark:selection:text-indigo-300 font-sans transition-colors duration-300">
      <BackgroundGlow />
      <ScrollProgressBar />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Certifications />
        <Skills />
        <Contact />
      </main>
      <Footer />
      
      {/* Scroll to top button - 10% Accent element */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl shadow-lg shadow-indigo-600/30 transition-all z-40 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    </div>
  );
}

export default App;

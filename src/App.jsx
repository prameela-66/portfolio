import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Projects from './sections/Projects.jsx';
import Certifications from './sections/Certifications.jsx';
import Skills from './sections/Skills.jsx';
import Contact from './sections/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackgroundGlow from './components/BackgroundGlow.jsx';
import ScrollProgressBar from './components/ScrollProgressBar.jsx';

function App() {
  return (
    <div className="bg-[#030014] min-h-screen text-gray-100 selection:bg-purple-500/30 font-inter">
      <BackgroundGlow />
      <ScrollProgressBar />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Certifications />
        <Skills />
        <Contact />
      </main>
      <Footer />
      
      {/* Scroll to top button - Enhanced */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-purple-600/20 backdrop-blur-md hover:bg-purple-600/50 text-white rounded-2xl shadow-[0_0_20px_rgba(109,40,217,0.3)] transition-all border border-purple-500/20 z-40 group cursor-pointer"
        aria-label="Scroll to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-y-1 transition-transform"><path d="m18 15-6-6-6 6"/></svg>
      </button>
    </div>
  );
}

export default App;

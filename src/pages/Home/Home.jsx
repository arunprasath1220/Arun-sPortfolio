import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, ArrowRight, Download, Globe } from 'lucide-react';

const Home = ({ setActiveSection }) => {
  const [textIndex, setTextIndex] = useState(0);
  const words = ['CREATIVE DEVELOPER', 'UI/UX DESIGNER', 'PROBLEM SOLVER'];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    { value: '5+', label: 'Years of Experience' },
    { value: '40+', label: 'Completed Projects' },
    { value: '99%', label: 'Happy Clients' },
  ];

  return (
    <section id="home" className="w-full max-w-[1200px] mx-auto px-8 min-h-[calc(100vh-80px)] flex flex-col justify-between pt-12 pb-8 relative text-left">
      {/* Top Tagline */}
      <div className="flex justify-between items-center w-full">
        <div className="inline-flex items-center gap-2 py-2 px-4 bg-bg-secondary border border-border-color rounded-full text-xs text-text-secondary font-medium">
          <span className="w-2 h-2 bg-[#22c55e] rounded-full relative flex">
            <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
          </span>
          Available for new projects
        </div>
        <span className="font-mono text-xs uppercase tracking-widest text-text-muted">// HELLO WORLD</span>
      </div>

      {/* Hero Headings */}
      <div className="max-w-[800px] my-12">
        <h1 className="font-display font-extrabold text-6xl md:text-8xl tracking-tighter leading-none mb-2">
          I'M <span className="text-gradient">ARUN</span>
        </h1>
        <div className="h-14 flex items-center mb-6">
          <span className="font-display text-2xl md:text-4xl font-bold tracking-wide text-text-secondary border-r-2 border-white pr-2 whitespace-nowrap animate-pulse">
            {words[textIndex]}
          </span>
        </div>
        <p className="text-base md:text-xl text-text-secondary max-w-[600px] mb-10 leading-relaxed">
          Crafting visual masterpieces and highly optimized web interfaces using a minimal, functional aesthetic. Based in the intersection of engineering and design.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button 
            className="inline-flex items-center justify-center gap-2 bg-white text-black py-3.5 px-7 rounded-sm font-semibold text-sm cursor-pointer border border-white hover:bg-transparent hover:text-white transition-all duration-200" 
            onClick={() => setActiveSection('works')}
          >
            View Projects <ArrowRight size={18} />
          </button>
          <a 
            href="#cv" 
            className="inline-flex items-center justify-center gap-2 bg-transparent text-white py-3.5 px-7 rounded-sm font-semibold text-sm cursor-pointer border border-border-color hover:border-white transition-all duration-200" 
            onClick={(e) => { e.preventDefault(); alert("Resume download placeholder"); }}
          >
            Get CV <Download size={18} />
          </a>
        </div>
      </div>

      {/* Highlight Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-b border-border-color py-8 mb-8">
        {stats.map((stat, i) => (
          <div key={i} className="text-left">
            <h3 className="font-display font-extrabold text-4xl mb-1">{stat.value}</h3>
            <p className="text-xs text-text-muted uppercase tracking-wider">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Social Links & Scroll Indicator */}
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-6">
          <a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-text-muted hover:text-white hover:-translate-y-0.5 transition-all duration-200">
            <Github size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-text-muted hover:text-white hover:-translate-y-0.5 transition-all duration-200">
            <Linkedin size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter" className="text-text-muted hover:text-white hover:-translate-y-0.5 transition-all duration-200">
            <Twitter size={20} />
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noreferrer" aria-label="Dribbble" className="text-text-muted hover:text-white hover:-translate-y-0.5 transition-all duration-200">
            <Globe size={20} />
          </a>
        </div>
        
        <div className="hidden md:flex items-center gap-3 text-[10px] font-mono tracking-widest text-text-muted">
          <span>SCROLL DOWN</span>
          <div className="w-4 h-7 border-2 border-text-muted rounded-full relative">
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-1 h-1.5 bg-text-muted rounded-full animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

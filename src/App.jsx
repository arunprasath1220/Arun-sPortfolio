import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Works from './pages/Works/Works';
import Feedback from './pages/Feedback/Feedback';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = ['home', 'about', 'services', 'works', 'feedback', 'blog', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Trigger active state when section occupies the middle center of the viewport
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#0a0a0a] text-white selection:bg-neutral-800 selection:text-white">
      {/* Background Decorative Grid */}
      <div className="grid-overlay"></div>

      {/* Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Pages Content Stacked Continuous */}
      <main className="flex-1 flex flex-col">
        <Home setActiveSection={setActiveSection} />
        <About />
        <Services setActiveSection={setActiveSection} />
        <Works />
        <Feedback />
        <Blog />
        <Contact />
      </main>

      {/* Elegant Muted Footer */}
      <footer className="w-full border-t border-border-color bg-bg-primary py-10 mt-auto">
        <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-[1200px] mx-auto px-8 gap-4 md:gap-0">
          <p className="font-mono text-xs text-text-muted">
            © {new Date().getFullYear()} ARUN. ALL RIGHTS RESERVED.
          </p>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-center">
            <span className="font-mono text-xs text-text-muted">// DESIGNED IN B&W</span>
            <span className="font-mono text-xs text-text-muted">// BUILT WITH REACT + TAILWIND</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;

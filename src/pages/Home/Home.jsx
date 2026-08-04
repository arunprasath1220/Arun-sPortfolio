import React from 'react';
import { Github, Linkedin, Dribbble } from 'lucide-react';
import profileImg from '../../assets/profile_img3.png';

const Home = ({ setActiveSection }) => {
  const handleLetTalk = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      window.dispatchEvent(new CustomEvent('highlight-phone-card'));
    }
  };

  return (
    <section 
      id="home" 
      className="w-full bg-[#fcfcfc] border-b border-neutral-200 min-h-[calc(100vh-80px)] flex flex-col justify-center py-12 relative text-left overflow-hidden"
    >
      <div className="w-full max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center flex-1">
        {/* Left Content (Text) */}
        <div className="flex flex-col items-start pr-0 lg:pr-8 py-8">
          <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 mb-6">// WELCOME PORTFOLIO</span>
          
          <h1 className="font-sans font-medium text-4xl sm:text-5xl md:text-[52px] leading-[1.15] text-neutral-500 tracking-tight mb-6">
            LET'S BUILD <span className="font-extrabold text-neutral-950">SOMETHING</span> <br />
            GREAT <span className="font-extrabold text-neutral-950">TOGETHER</span>
          </h1>
          
          <p className="text-neutral-500 text-lg leading-relaxed max-w-[500px] mb-10">
            I'm a Full Stack Developer based in <span className="font-semibold text-neutral-950">#India</span>, crafting scalable, high-performance web applications with clean architecture and exceptional user experiences.
          </p>

          <button 
            className="border border-neutral-900 text-neutral-900 bg-transparent py-3 px-10 text-xs font-bold uppercase tracking-widest hover:bg-neutral-900 hover:text-white transition-colors duration-300 cursor-pointer"
            onClick={handleLetTalk}
          >
            LET'S TALK
          </button>
        </div>

        {/* Right Content (Exact portrait size & layout matching reference screenshot) */}
        <div className="relative flex justify-end items-center h-full w-full min-h-[420px] lg:min-h-[480px]">
          <div className="relative w-full h-full max-h-[500px] flex items-center justify-end overflow-hidden">
            {/* Soft left gradient fade mask matching reference screenshot */}
            <div className="absolute top-0 bottom-0 left-0 w-32 sm:w-48 h-full bg-gradient-to-r from-[#fcfcfc] via-[#fcfcfc]/75 to-transparent z-10 pointer-events-none"></div>
            
            {/* Slight bottom gradient fade to merge image seamlessly into the page */}
            <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 bg-gradient-to-t from-[#fcfcfc] via-[#fcfcfc]/60 to-transparent z-10 pointer-events-none"></div>
            
            <img 
              src={profileImg} 
              alt="Arun Portrait"
              className="w-full h-full object-cover object-center grayscale brightness-[1.02] contrast-[1.05]"
            />
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-8 mt-12 flex justify-between items-center border-t border-neutral-100 pt-6">
        <div className="flex gap-6 items-center">
          <a href="https://github.com/arunprasath1220" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-neutral-400 hover:text-neutral-900 hover:-translate-y-0.5 transition-all duration-200">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/arunprasath-p-0ab3aa352/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-neutral-400 hover:text-neutral-900 hover:-translate-y-0.5 transition-all duration-200">
            <Linkedin size={18} />
          </a>
          <a href="https://x.com/arunprasatX" target="_blank" rel="noreferrer" aria-label="X" className="text-neutral-400 hover:text-neutral-900 hover:-translate-y-0.5 transition-all duration-200 flex items-center">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a href="https://dribbble.com/arunprasath1220" target="_blank" rel="noreferrer" aria-label="Dribbble" className="text-neutral-400 hover:text-neutral-900 hover:-translate-y-0.5 transition-all duration-200">
            <Dribbble size={18} />
          </a>
        </div>
        <span className="font-mono text-[10px] text-neutral-400">// SCROLL DOWN TO EXPLORE</span>
      </div>
    </section>
  );
};

export default Home;

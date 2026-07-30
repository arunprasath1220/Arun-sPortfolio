import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import profileImg from '../../assets/profile_img2.png';

const Navbar = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'HOME', id: 'home' },
    { label: 'ABOUT', id: 'about' },
    { label: 'SERVICES', id: 'services' },
    { label: 'WORKS', id: 'works' },
    { label: 'FEEDBACK', id: 'feedback' },
    { label: 'BLOG', id: 'blog' },
    { label: 'CONTACT', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of the sticky navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="sticky top-0 w-full h-20 bg-white border-b border-neutral-200 shadow-sm z-50 flex items-center transition-all duration-300">
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto px-8">
        
        {/* Brand Logo with Avatar (Matching John Doe image theme) */}
        <div 
          className="flex items-center gap-3 cursor-pointer select-none group" 
          onClick={() => handleNavClick('home')}
        >
          <img 
            src={profileImg} 
            alt="Arun Avatar"
            className="w-10 h-10 rounded-full border border-neutral-300 object-cover grayscale"
          />
          <div className="flex flex-col text-left">
            <span className="font-sans font-bold text-sm tracking-widest text-black uppercase">ARUN</span>
            <span className="font-sans text-[10px] font-semibold tracking-wider text-black/80 uppercase">CREATIVE DEVELOPER</span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`text-xs font-bold tracking-widest text-black cursor-pointer py-2 px-1 relative transition-colors duration-200 hover:text-black/60 ${
                activeSection === item.id 
                  ? 'text-black border-b-2 border-black font-black' 
                  : ''
              }`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
          
          <button 
            className="border border-black text-black bg-transparent py-2 px-6 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer" 
            onClick={() => handleNavClick('contact')}
          >
            HIRE ME
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div 
          className="block md:hidden cursor-pointer text-black active:scale-95 transition-transform duration-200" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-white border-t border-neutral-200 transition-all duration-300 z-[999] flex justify-center items-center ${
        isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2.5'
      }`}>
        <div className="flex flex-col items-center gap-6 p-8 h-[80%] justify-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`text-xl font-sans font-bold tracking-widest text-black cursor-pointer hover:text-black/60 transition-colors duration-200 ${
                activeSection === item.id ? 'text-black border-b-2 border-black font-extrabold' : ''
              }`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button 
            className="border border-black text-black bg-transparent py-3 px-8 text-sm font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-all duration-200 cursor-pointer mt-4" 
            onClick={() => handleNavClick('contact')}
          >
            HIRE ME
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

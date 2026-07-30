import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

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
    <nav className="sticky top-0 w-full h-20 bg-bg-primary/70 backdrop-blur-md border-b border-border-color z-50 flex items-center transition-all duration-300">
      <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto px-8">
        {/* Brand Logo */}
        <div 
          className="font-display font-extrabold text-2xl tracking-tighter cursor-pointer select-none text-white" 
          onClick={() => handleNavClick('home')}
        >
          ARUN<span className="text-text-muted">.</span>
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`text-xs font-semibold tracking-wider text-text-secondary cursor-pointer py-2 px-3 relative hover:text-white transition-colors duration-200 ${
                activeSection === item.id 
                  ? 'text-white after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-white after:rounded-full' 
                  : ''
              }`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
          
          <button 
            className="flex items-center gap-1.5 text-xs font-semibold text-black bg-white py-2.5 px-5 rounded-full hover:bg-neutral-200 hover:-translate-y-[1px] transition-all duration-200 cursor-pointer" 
            onClick={() => handleNavClick('contact')}
          >
            Hire Me <ArrowUpRight size={14} />
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div 
          className="block md:hidden cursor-pointer text-white active:scale-95 transition-transform duration-200" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-bg-primary border-t border-border-color transition-all duration-300 z-[999] flex justify-center items-center ${
        isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2.5'
      }`}>
        <div className="flex flex-col items-center gap-8 p-8 h-[80%] justify-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`text-2xl font-display font-bold tracking-wide text-text-secondary cursor-pointer hover:text-white transition-colors duration-200 ${
                activeSection === item.id ? 'text-white' : ''
              }`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button 
            className="flex items-center gap-2 text-lg font-semibold text-black bg-white py-3.5 px-8 rounded-full cursor-pointer mt-4" 
            onClick={() => handleNavClick('contact')}
          >
            Hire Me <ArrowUpRight size={18} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Quote, Rocket, Zap, Target } from 'lucide-react';

const Feedback = () => {
  // Testimonial list (Inspired by Great Minds)
  const feedbacks = [
    {
      id: 1,
      name: 'Albert Einstein',
      role: 'Theoretical Physicist',
      text: "Life is like riding a bicycle. To keep your balance, you must keep moving. Learn from yesterday, live for today, hope for tomorrow. The important thing is never to stop questioning.",
      imageUrl: 'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?auto=format&fit=crop&w=150&h=150&q=80',
    },
    {
      id: 2,
      name: 'Robert H. Schuller',
      role: 'Author & Speaker',
      text: "Tough times never last, but tough people do. Success is never ending, failure is never final. It is courage that counts.",
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150&q=80',
    },
    {
      id: 3,
      name: 'U Thant',
      role: 'Diplomat & UN Secretary-General',
      text: "Peace can only last where human rights are respected, where the people are fed, and where individuals and nations are free. Lasting progress is built on understanding, compassion, and cooperation among all people.",
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80',
    },
    {
      id: 4,
      name: 'Nelson Mandela',
      role: 'Leader & Statesman',
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall. Courage is not the absence of fear, but the triumph over it. What matters is the willingness to keep moving forward despite every challenge.",
      imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Accordions list (Why Me?)
  const [openAccordion, setOpenAccordion] = useState(0);

  const accordions = [
    {
      id: 0,
      icon: <Rocket size={16} className="text-neutral-300 shrink-0" />,
      title: 'PASSION FOR BUILDING',
      desc: "I don't just write code—I build solutions. From AI-powered applications to full-stack web platforms, I enjoy turning ideas into products that solve real-world problems.",
    },
    {
      id: 1,
      icon: <Zap size={16} className="text-neutral-300 shrink-0" />,
      title: 'FAST LEARNER & PROBLEM SOLVER',
      desc: "I quickly adapt to new technologies and love tackling challenging problems. Whether it's debugging, optimizing systems, or learning a new framework, I embrace every opportunity to grow.",
    },
    {
      id: 2,
      icon: <Target size={16} className="text-neutral-300 shrink-0" />,
      title: 'DRIVEN BY IMPACT',
      desc: "I'm passionate about creating scalable, user-focused software. My goal is to contribute to meaningful products, continuously improve my skills, and deliver value through clean, efficient, and innovative solutions.",
    },
  ];

  const toggleAccordion = (id) => {
    if (openAccordion === id) {
      setOpenAccordion(-1);
    } else if (openAccordion !== -1) {
      // Close open card first to avoid height overlap
      setOpenAccordion(-1);
      setTimeout(() => {
        setOpenAccordion(id);
      }, 300);
    } else {
      setOpenAccordion(id);
    }
  };

  return (
    <section id="feedback" className="w-full bg-[#1b1b1b] py-24 text-left border-b border-neutral-800">
      <div className="w-full max-w-[1200px] mx-auto px-8">
        
        {/* Main Grid Layout matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Why Me? (Accordion Collapsible groups) */}
          <div className="flex flex-col gap-6">
            <h3 className="font-sans text-xl font-medium text-neutral-400 tracking-wider">
              WHY <span className="font-extrabold text-white">ME?</span>
            </h3>
            
            <div className="w-16 h-[1px] bg-neutral-700 mt-[-8px] mb-4"></div>

            <div className="flex flex-col gap-4 w-full min-h-[290px]">
              {accordions.map((acc) => {
                const isOpen = openAccordion === acc.id;
                return (
                  <div key={acc.id} className={`border transition-colors duration-300 ${isOpen ? 'border-neutral-600 bg-neutral-900/40' : 'border-neutral-800 bg-neutral-900/10 hover:border-neutral-700'}`}>
                    {/* Accordion Trigger Header */}
                    <button
                      className="w-full flex justify-between items-center p-4 text-xs font-bold uppercase tracking-widest text-neutral-300 hover:text-white transition-colors duration-200 outline-none cursor-pointer"
                      onClick={() => toggleAccordion(acc.id)}
                    >
                      <div className="flex items-center gap-3">
                        {acc.icon}
                        <span>{acc.title}</span>
                      </div>
                      <span className={`text-base font-medium transition-transform duration-300 leading-none ${isOpen ? 'rotate-45 text-white' : 'text-neutral-400'}`}>+</span>
                    </button>
                    
                    {/* Accordion Content pane with smooth CSS grid height transition */}
                    <div 
                      className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                        isOpen ? 'grid-rows-[1fr] opacity-100 border-t border-neutral-800' : 'grid-rows-[0fr] opacity-0 border-t-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="p-4 pt-3">
                          <p className="text-neutral-400 text-xs leading-relaxed">
                            {acc.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Inspired by Great Minds */}
          <div className="flex flex-col gap-6">
            <h3 className="font-sans text-xl font-medium text-neutral-400 tracking-wider">
              INSPIRED BY <span className="font-extrabold text-white">GREAT MINDS</span>
            </h3>

            <div className="w-16 h-[1px] bg-neutral-700 mt-[-8px] mb-4"></div>

            {/* Testimonial card */}
            <div className="flex gap-4 min-h-[180px] sm:min-h-[160px]">
              <div className="text-neutral-500 shrink-0 pt-1">
                <Quote size={40} className="stroke-1" />
              </div>
              <div className="flex flex-col justify-between w-full">
                <p className="text-neutral-400 text-sm leading-relaxed italic min-h-[100px] flex items-center">
                  {feedbacks[activeIndex].text}
                </p>
                <span className="text-neutral-300 text-xs font-bold tracking-widest uppercase mt-4">
                  {feedbacks[activeIndex].name}, <span className="font-medium text-neutral-500">{feedbacks[activeIndex].role}</span>
                </span>
              </div>
            </div>

            {/* Square Clickable Avatars Grid row matching client list */}
            <div className="flex gap-3 mt-8 pl-14">
              {feedbacks.map((fb, idx) => (
                <button
                  key={fb.id}
                  className={`w-14 h-14 border p-0.5 cursor-pointer bg-neutral-800 transition-all duration-200 ${
                    activeIndex === idx ? 'border-white' : 'border-neutral-700'
                  }`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <img 
                    src={fb.imageUrl} 
                    alt={fb.name}
                    className="w-full h-full object-cover grayscale"
                  />
                </button>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Feedback;

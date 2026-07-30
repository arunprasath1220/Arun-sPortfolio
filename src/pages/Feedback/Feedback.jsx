import React, { useState } from 'react';
import { Quote } from 'lucide-react';

const Feedback = () => {
  // Testimonial list
  const feedbacks = [
    {
      id: 1,
      name: 'James',
      role: 'Web Developer',
      text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
      imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80',
    },
    {
      id: 2,
      name: 'Sarah Connor',
      role: 'Product Director',
      text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt.",
      imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80',
    },
    {
      id: 3,
      name: 'Bruce Wayne',
      role: 'Chief Executive',
      text: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Anim pariatur cliche reprehenderit, enim eiusmod.",
      imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&h=150&q=80',
    },
    {
      id: 4,
      name: 'Elena Rostova',
      role: 'Creative Lead',
      text: "Food truck quinoa nesciunt laborum eiusmod. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.",
      imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Accordions list (Why Me?)
  const [openAccordion, setOpenAccordion] = useState(0);

  const accordions = [
    {
      id: 0,
      title: 'Collapsible Group Item #1',
      desc: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod tempor sunt aliqua put.',
    },
    {
      id: 1,
      title: 'Collapsible Group Item #2',
      desc: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod tempor sunt aliqua put.',
    },
    {
      id: 2,
      title: 'Collapsible Group Item #3',
      desc: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod tempor sunt aliqua put.',
    },
  ];

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? -1 : id);
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

            <div className="flex flex-col gap-4 w-full">
              {accordions.map((acc) => (
                <div key={acc.id} className="border border-neutral-700 bg-neutral-900/10">
                  {/* Accordion Trigger Header */}
                  <button
                    className="w-full flex justify-between items-center p-4 text-xs font-bold uppercase tracking-widest text-neutral-300 hover:text-white transition-colors duration-200 outline-none"
                    onClick={() => toggleAccordion(acc.id)}
                  >
                    <span>{acc.title}</span>
                    <span className="text-sm font-semibold">{openAccordion === acc.id ? '−' : '+'}</span>
                  </button>
                  
                  {/* Accordion Content pane */}
                  <div 
                    className={`transition-all duration-300 overflow-hidden ${
                      openAccordion === acc.id ? 'max-h-40 border-t border-neutral-800 p-4 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-neutral-400 text-xs leading-relaxed">
                      {acc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Client's Feedback */}
          <div className="flex flex-col gap-6">
            <h3 className="font-sans text-xl font-medium text-neutral-400 tracking-wider">
              CLIENT'S <span className="font-extrabold text-white">FEEDBACK</span>
            </h3>

            <div className="w-16 h-[1px] bg-neutral-700 mt-[-8px] mb-4"></div>

            {/* Testimonial card */}
            <div className="flex gap-4">
              <div className="text-neutral-500 shrink-0">
                <Quote size={40} className="stroke-1" />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-neutral-400 text-sm leading-relaxed italic">
                  {feedbacks[activeIndex].text}
                </p>
                <span className="text-neutral-300 text-xs font-bold tracking-widest uppercase mt-2">
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

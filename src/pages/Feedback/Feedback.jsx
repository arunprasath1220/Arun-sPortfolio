import React, { useState, useEffect } from 'react';
import { Quote, Rocket, Zap, Target, Star, Briefcase, Award, MessageSquare } from 'lucide-react';
import postcardImg1 from '../../assets/postcardimg1.jpg';
import postcardImg2 from '../../assets/postcardimg2.jpg';
import postcardImg3 from '../../assets/postcardimg3.jpg';
import postcardImg4 from '../../assets/postcardimg4.jpg';
import Reveal from '../../components/Reveal/Reveal';

const Feedback = () => {
  // Testimonial list (Inspired by Great Minds)
  const feedbacks = [
    {
      id: 1,
      name: 'Albert Einstein',
      role: 'Theoretical Physicist',
      text: "Life is like riding a bicycle. To keep your balance, you must keep moving. Learn from yesterday, live for today, hope for tomorrow. The important thing is never to stop questioning.",
      imageUrl: postcardImg1,
    },
    {
      id: 2,
      name: 'Robert H. Schuller',
      role: 'Author & Speaker',
      text: "Tough times never last, but tough people do. Success is never ending, failure is never final. It is courage that counts.",
      imageUrl: postcardImg2,
    },
    {
      id: 3,
      name: 'U Thant',
      role: 'Diplomat & UN Secretary-General',
      text: "Peace can only last where human rights are respected, where the people are fed, and where individuals and nations are free. Lasting progress is built on understanding, compassion, and cooperation among all people.",
      imageUrl: postcardImg3,
    },
    {
      id: 4,
      name: 'Nelson Mandela',
      role: 'Leader & Statesman',
      text: "The greatest glory in living lies not in never falling, but in rising every time we fall. Courage is not the absence of fear, but the triumph over it. What matters is the willingness to keep moving forward despite every challenge.",
      imageUrl: postcardImg4,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-advance testimonial and image selection every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, 10000);

    return () => clearInterval(timer);
  }, [activeIndex, feedbacks.length]);

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

  // Dummy Work Feedback Data (Trial info - replace with real project feedback later)
  const workFeedbacks = [
    {
      id: 1,
      project: 'INSTITUTIONAL PLACEMENT PORTAL',
      category: 'FULL-STACK DEVELOPMENT',
      rating: 5,
      feedback: 'Arun engineered a robust placement management portal with seamless user workflows and high query performance. Exceptional code quality and prompt delivery.',
      client: 'Placement Cell Team',
      role: 'Institutional Client',
      metrics: '100% On-Time • High Scale',
      icon: <Briefcase size={16} className="text-neutral-400" />,
    },
    {
      id: 2,
      project: 'REAL-TIME ANALYTICS DASHBOARD',
      category: 'SYSTEM ARCHITECTURE & UI',
      rating: 5,
      feedback: 'Delivered intuitive real-time metrics visualizer with pixel-perfect responsive layout. Clean, maintainable component design and fast load times.',
      client: 'Product Engineering Lead',
      role: 'Tech Lead Review',
      metrics: '99.9% Uptime • Fast Render',
      icon: <Award size={16} className="text-neutral-400" />,
    },
    {
      id: 3,
      project: 'STUDENT SKILL MANAGEMENT SYSTEM',
      category: 'REST API & DATABASE DESIGN',
      rating: 5,
      feedback: 'Outstanding database schema optimization and API performance. Highly collaborative developer who turns complex business requirements into elegant solutions.',
      client: 'Personalized Skill Team (PS)',
      role: 'Project Supervisor',
      metrics: '50k+ Queries • Zero Downtime',
      icon: <MessageSquare size={16} className="text-neutral-400" />,
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
        
        {/* Section Heading with double underlines matching Services section */}
        <Reveal direction="down">
          <div className="text-center mb-20">
            <h2 className="font-sans font-bold text-3xl tracking-widest text-white uppercase">FEEDBACK & REVIEWS</h2>
            <div className="w-24 h-[1px] bg-neutral-600 mx-auto mt-3 relative">
              <div className="w-12 h-[1px] bg-white mx-auto mt-[3px]"></div>
            </div>
          </div>
        </Reveal>

        {/* Main Grid Layout matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          
          {/* Left Column: Why Me? (Accordion Collapsible groups) */}
          <Reveal direction="right" delay={0.2} className="flex flex-col gap-6">
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
          </Reveal>

          {/* Right Column: Inspired by Great Minds (Clean unboxed layout with fixed height) */}
          <Reveal direction="left" delay={0.2} className="flex flex-col gap-6">
            <h3 className="font-sans text-xl font-medium text-neutral-400 tracking-wider">
              INSPIRED BY <span className="font-extrabold text-white">GREAT MINDS</span>
            </h3>

            <div className="w-16 h-[1px] bg-neutral-700 mt-[-8px] mb-4"></div>

            {/* Testimonial area with fixed height to prevent layout shifting */}
            <div className="h-[190px] flex flex-col justify-between w-full">
              <div key={activeIndex} className="flex flex-col justify-between h-full w-full">
                <div className="flex gap-4 items-start">
                  <div className="text-neutral-500 shrink-0 pt-1">
                    <Quote size={40} className="stroke-1" />
                  </div>
                  <p className="text-neutral-400 text-sm leading-relaxed italic animate-cinematic-quote">
                    "{feedbacks[activeIndex].text}"
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-neutral-800/80 pt-4 pl-14 animate-cinematic-author">
                  <span className="text-neutral-300 text-xs font-bold tracking-widest uppercase">
                    {feedbacks[activeIndex].name}, <span className="font-medium text-neutral-500">{feedbacks[activeIndex].role}</span>
                  </span>
                  <span className="font-mono text-[10px] text-neutral-500">
                    0{activeIndex + 1} / 0{feedbacks.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Square Clickable Avatars Grid row with auto-selection & 10s progress bar */}
            <div className="flex gap-3 pl-14">
              {feedbacks.map((fb, idx) => (
                <button
                  key={fb.id}
                  className={`relative overflow-hidden w-14 h-14 border p-0.5 cursor-pointer bg-neutral-800 transition-all duration-300 ${
                    activeIndex === idx 
                      ? 'border-white scale-105 shadow-md shadow-white/10' 
                      : 'border-neutral-700 opacity-60 hover:opacity-100'
                  }`}
                  onClick={() => setActiveIndex(idx)}
                >
                  <img 
                    src={fb.imageUrl} 
                    alt={fb.name}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      activeIndex === idx ? 'grayscale-0' : 'grayscale'
                    }`}
                  />
                  {activeIndex === idx && (
                    <div className="absolute bottom-0 left-0 h-[2px] bg-white animate-timer-progress" />
                  )}
                </button>
              ))}
            </div>
          </Reveal>

        </div>

        {/* Bottom Section: Details About Work as Feedback (Trial Info) */}
        <Reveal direction="up" delay={0.4}>
          <div className="pt-16 border-t border-neutral-800 flex flex-col gap-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h4 className="font-sans font-bold text-xl text-white tracking-wide uppercase">
                  WORK <span className="text-neutral-400">FEEDBACK & REVIEWS</span>
                </h4>
                <p className="text-neutral-400 text-xs mt-1">
                  Client & team reviews on delivered software solutions and project execution
                </p>
              </div>
              <span className="font-mono text-[10px] text-neutral-400 bg-neutral-900 border border-neutral-800 px-3 py-1.5 uppercase tracking-widest">
                // WORK REVIEWS (TRIAL)
              </span>
            </div>

            {/* 3 Work Feedback Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {workFeedbacks.map((item, idx) => (
                <Reveal key={item.id} direction="up" delay={idx * 0.1}>
                  <div 
                    className="bg-neutral-900/30 border border-neutral-800 p-6 flex flex-col justify-between gap-6 hover:border-neutral-700 transition-all duration-300 group h-full"
                  >
                    <div className="flex flex-col gap-4">
                      {/* Category & Rating */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {item.icon}
                          <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                            {item.category}
                          </span>
                        </div>
                        <div className="flex text-white text-xs gap-0.5">
                          {'★'.repeat(item.rating)}
                        </div>
                      </div>

                      {/* Project Title */}
                      <h5 className="font-sans font-bold text-sm text-white tracking-wide uppercase group-hover:text-neutral-200 transition-colors">
                        {item.project}
                      </h5>

                      {/* Feedback Text */}
                      <p className="text-neutral-400 text-xs leading-relaxed italic">
                        "{item.feedback}"
                      </p>
                    </div>

                    {/* Reviewer Details & Impact Metrics */}
                    <div className="border-t border-neutral-800/80 pt-4 flex flex-col gap-2">
                      <div className="flex justify-between items-center">
                        <span className="font-sans text-xs font-bold text-neutral-200 uppercase tracking-wider">
                          {item.client}
                        </span>
                        <span className="font-mono text-[10px] text-neutral-400">
                          {item.role}
                        </span>
                      </div>
                      <div className="text-[10px] font-mono text-neutral-400 pt-1">
                        {item.metrics}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
};

export default Feedback;


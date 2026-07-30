import React, { useState } from 'react';

const About = () => {
  const skills = [
    { name: 'GRAPHIC DESIGN', percentage: 60 },
    { name: 'CSS', percentage: 90 },
    { name: 'JAVASCRIPT', percentage: 70 },
    { name: 'WORDPRESS', percentage: 50 },
  ];

  const education = [
    {
      year: '2005-2007',
      institution: 'NY UNIVERSITY',
      role: 'GRAPHIC DESIGN',
      desc: 'Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Praesent tristique scelerisque sapien at aliquet.',
    },
    {
      year: '2007-2009',
      institution: 'APEX UNIVERSITY',
      role: 'WEB DESIGN & UI',
      desc: 'Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Praesent tristique scelerisque sapien at aliquet.',
    },
  ];

  const experience = [
    {
      year: '2007-2010',
      company: 'ENTER AD',
      role: 'GRAPHIC DESIGNER',
      desc: 'Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Praesent tristique scelerisque sapien at aliquet.',
    },
    {
      year: '2010-2012',
      company: 'SAPE DESIGN',
      role: 'CREATIVE DESIGNER',
      desc: 'Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Praesent tristique scelerisque sapien at aliquet.',
    },
  ];

  return (
    <section id="about" className="w-full bg-white py-24 text-left border-b border-neutral-200">
      <div className="w-full max-w-[1200px] mx-auto px-8">
        
        {/* Section Heading with double underlines */}
        <div className="text-center mb-20">
          <h2 className="font-sans font-bold text-3xl tracking-widest text-neutral-900 uppercase">ABOUT ME</h2>
          <div className="w-24 h-[1px] bg-neutral-300 mx-auto mt-3 relative">
            <div className="w-12 h-[1px] bg-neutral-900 mx-auto mt-[3px]"></div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          
          {/* Left Column: Bio */}
          <div className="flex flex-col gap-6">
            <h3 className="font-sans text-xl font-medium text-neutral-500 tracking-wider">
              WHO <span className="font-extrabold text-neutral-950">AM I?</span>
            </h3>
            <p className="text-neutral-500 text-[15px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel, sint nisi possimus sunt veritatis totam velit, esse pariatur in minima nostrum harum dolorum perferendis quasi dolor autem deleniti inventore.
            </p>
            <p className="text-neutral-500 text-[15px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non vel, sint nisi possimus sunt veritatis totam velit, esse pariatur in minima nostrum harum dolorum perferendis quasi dolor autem deleniti inventore.
            </p>
            
            <button 
              className="w-fit bg-neutral-900 text-white border border-neutral-900 py-3.5 px-8 text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-neutral-900 transition-colors duration-300 cursor-pointer mt-4"
              onClick={() => alert("CV Download Triggered")}
            >
              DOWNLOAD MY CV
            </button>
          </div>

          {/* Right Column: Skills */}
          <div className="flex flex-col gap-6">
            <h3 className="font-sans text-xl font-medium text-neutral-500 tracking-wider">
              EXPERT <span className="font-extrabold text-neutral-950">IN</span>
            </h3>
            <p className="text-neutral-500 text-sm leading-relaxed mb-4">
              Poin dui orci, pretium eget fringilla sit amet, luctus a nisl. Praesent tristique scelerisque sapien at aliquet.
            </p>

            {/* Custom Styled Skill Bars */}
            <div className="flex flex-col gap-8">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col gap-2 relative">
                  <span className="text-xs font-bold text-neutral-800 tracking-widest uppercase">{skill.name}</span>
                  <div className="w-full h-1 bg-neutral-200 relative mt-1">
                    <div 
                      className="h-full bg-neutral-900 transition-all duration-1000 ease-out" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                    {/* Tooltip percentage box aligning with the bar end */}
                    <span 
                      style={{ left: `calc(${skill.percentage}% - 16px)` }} 
                      className="absolute -top-6 bg-neutral-900 text-white px-1.5 py-0.5 text-[10px] font-mono leading-none rounded-sm border border-neutral-800"
                    >
                      {skill.percentage}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education & Experience Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-t border-neutral-100 pt-16">
          
          {/* Education */}
          <div>
            <h3 className="font-sans font-bold text-xl tracking-wider text-neutral-900 mb-10 uppercase border-b border-neutral-100 pb-3">EDUCATION</h3>
            <div className="flex flex-col">
              {education.map((item, idx) => (
                <div key={idx} className="flex gap-6 border-b border-neutral-100 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
                  <div className="w-1/3 flex flex-col text-left">
                    <span className="font-mono text-xs text-neutral-400 font-bold mb-1">{item.year}</span>
                    <span className="font-sans text-xs font-semibold text-neutral-500 uppercase tracking-wider">{item.institution}</span>
                  </div>
                  <div className="w-2/3 flex flex-col text-left">
                    <h4 className="font-sans font-bold text-sm text-neutral-900 tracking-wide mb-2 uppercase">{item.role}</h4>
                    <p className="text-neutral-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h3 className="font-sans font-bold text-xl tracking-wider text-neutral-900 mb-10 uppercase border-b border-neutral-100 pb-3">EXPERIENCE</h3>
            <div className="flex flex-col">
              {experience.map((item, idx) => (
                <div key={idx} className="flex gap-6 border-b border-neutral-100 pb-6 mb-6 last:border-0 last:pb-0 last:mb-0">
                  <div className="w-1/3 flex flex-col text-left">
                    <span className="font-mono text-xs text-neutral-400 font-bold mb-1">{item.year}</span>
                    <span className="font-sans text-xs font-semibold text-neutral-500 uppercase tracking-wider">{item.company}</span>
                  </div>
                  <div className="w-2/3 flex flex-col text-left">
                    <h4 className="font-sans font-bold text-sm text-neutral-900 tracking-wide mb-2 uppercase">{item.role}</h4>
                    <p className="text-neutral-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;

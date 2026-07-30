import React, { useState } from 'react';
import { Award, Briefcase, GraduationCap, CheckCircle } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const skills = [
    { name: 'React / Next.js', percentage: 95, category: 'frontend' },
    { name: 'JavaScript / TypeScript', percentage: 90, category: 'frontend' },
    { name: 'CSS / SCSS / Tailwind', percentage: 92, category: 'frontend' },
    { name: 'Node.js / Express', percentage: 85, category: 'backend' },
    { name: 'SQL / NoSQL Databases', percentage: 80, category: 'backend' },
    { name: 'Figma / UI Design', percentage: 88, category: 'design' },
    { name: 'Git & Version Control', percentage: 90, category: 'tools' },
    { name: 'CI/CD & Cloud Hosting', percentage: 75, category: 'tools' },
  ];

  const timeline = [
    {
      year: '2024 - Present',
      role: 'Lead Frontend Engineer',
      company: 'Zenith Labs',
      desc: 'Architecting visual frameworks and next-generation design systems for complex SaaS products.',
      type: 'work',
    },
    {
      year: '2022 - 2024',
      role: 'Full Stack Developer',
      company: 'Nebula Corp',
      desc: 'Developed RESTful services, database schemas, and clean user dashboards utilizing React and Node.',
      type: 'work',
    },
    {
      year: '2019 - 2022',
      role: 'Creative Web Designer',
      company: 'Freelance & Agency',
      desc: 'Crafted custom websites, brand designs, and high-conversion landing pages for global brands.',
      type: 'work',
    },
    {
      year: '2015 - 2019',
      role: 'Bachelor of Computer Science',
      company: 'Apex Tech University',
      desc: 'Acquired foundational training in algorithms, database architectures, and software design patterns.',
      type: 'education',
    },
  ];

  const categories = [
    { id: 'all', label: 'ALL SKILLS' },
    { id: 'frontend', label: 'FRONTEND' },
    { id: 'backend', label: 'BACKEND' },
    { id: 'design', label: 'DESIGN' },
  ];

  const [skillFilter, setSkillFilter] = useState('all');

  const filteredSkills = skillFilter === 'all'
    ? skills
    : skills.filter(s => s.category === skillFilter);

  return (
    <section id="about" className="w-full max-w-[1200px] mx-auto px-8 py-24 text-left">
      {/* Page Heading */}
      <div className="mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-text-muted">// WHO I AM</span>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-2">ABOUT ME</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Bio Section */}
        <div className="flex flex-col gap-6">
          <p className="text-xl md:text-2xl font-semibold text-white leading-normal">
            I build elegant interfaces that bridge the gap between creative visual designs and rock-solid software architecture.
          </p>
          <p className="text-base text-text-secondary">
            With a background combining computer science and digital styling, I understand how to shape digital environments. I focus on custom animations, clean layouts, and functional grid designs that perform beautifully on all screen configurations.
          </p>
          
          <div className="flex flex-col gap-3 my-2">
            <div className="flex items-center gap-3 text-[15px] text-text-secondary">
              <CheckCircle size={18} className="text-white" />
              <span>Detail-oriented UI development</span>
            </div>
            <div className="flex items-center gap-3 text-[15px] text-text-secondary">
              <CheckCircle size={18} className="text-white" />
              <span>Performant & clean coding standards</span>
            </div>
            <div className="flex items-center gap-3 text-[15px] text-text-secondary">
              <CheckCircle size={18} className="text-white" />
              <span>Modern user experience solutions</span>
            </div>
          </div>

          {/* Quick cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
            <div className="bg-bg-secondary border border-border-color p-6 rounded-sm hover:border-white transition-all duration-200">
              <Briefcase size={24} className="text-text-muted mb-3" />
              <h4 className="font-display font-extrabold text-3xl mb-1">40+</h4>
              <p className="text-[10px] text-text-muted uppercase tracking-widest">Projects Launched</p>
            </div>
            <div className="bg-bg-secondary border border-border-color p-6 rounded-sm hover:border-white transition-all duration-200">
              <Award size={24} className="text-text-muted mb-3" />
              <h4 className="font-display font-extrabold text-3xl mb-1">5+</h4>
              <p className="text-[10px] text-text-muted uppercase tracking-widest">Years Experience</p>
            </div>
          </div>
        </div>

        {/* Interactive Tabbed Section */}
        <div className="flex flex-col bg-bg-secondary border border-border-color rounded-sm p-8 min-h-[500px]">
          <div className="flex border-b border-border-color mb-8 gap-6">
            <button
              className={`text-lg font-display font-bold text-text-muted cursor-pointer pb-3 relative hover:text-white transition-all duration-200 ${
                activeTab === 'skills' 
                  ? 'text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white' 
                  : ''
              }`}
              onClick={() => setActiveTab('skills')}
            >
              Skills
            </button>
            <button
              className={`text-lg font-display font-bold text-text-muted cursor-pointer pb-3 relative hover:text-white transition-all duration-200 ${
                activeTab === 'timeline' 
                  ? 'text-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-white' 
                  : ''
              }`}
              onClick={() => setActiveTab('timeline')}
            >
              Timeline
            </button>
          </div>

          <div className="flex-1">
            {activeTab === 'skills' && (
              <div className="flex flex-col gap-6">
                {/* Category filters */}
                <div className="flex flex-wrap gap-2 mb-2">
                  {categories.map(cat => (
                    <button
                      key={cat.id}
                      className={`text-[10px] font-semibold tracking-wider bg-transparent text-text-secondary border border-border-color py-1.5 px-3 rounded-full cursor-pointer hover:text-white hover:border-white hover:bg-white/5 transition-all duration-200 ${
                        skillFilter === cat.id ? 'text-white border-white bg-white/5' : ''
                      }`}
                      onClick={() => setSkillFilter(cat.id)}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                <div className="flex flex-col gap-5">
                  {filteredSkills.map((skill, index) => (
                    <div key={index} className="flex flex-col gap-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-white font-medium">{skill.name}</span>
                        <span className="text-text-secondary font-semibold">{skill.percentage}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-bg-tertiary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-white rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'timeline' && (
              <div className="flex flex-col">
                <div className="relative border-l border-border-color pl-8 flex flex-col gap-8">
                  {timeline.map((item, index) => (
                    <div key={index} className="relative">
                      <div className="absolute left-[calc(-2rem-12px)] top-1 flex items-center justify-center w-6 h-6 bg-bg-secondary border border-border-color rounded-full z-10">
                        {item.type === 'work' ? (
                          <Briefcase size={12} className="text-text-secondary" />
                        ) : (
                          <GraduationCap size={12} className="text-text-secondary" />
                        )}
                      </div>
                      <div className="flex flex-col gap-1">
                        <span className="font-mono text-xs text-text-muted">{item.year}</span>
                        <h4 className="text-lg font-bold text-white leading-snug">{item.role}</h4>
                        <span className="text-sm text-text-muted">{item.company}</span>
                        <p className="text-[15px] text-text-secondary mt-2">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

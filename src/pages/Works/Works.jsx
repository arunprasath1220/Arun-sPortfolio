import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'ALL PROJECTS' },
    { id: 'web', label: 'WEBSITE' },
    { id: 'logo', label: 'LOGO' },
    { id: 'app', label: 'APPLICATION' },
    { id: 'print', label: 'PRINT DESIGN' },
  ];

  const projects = [
    {
      id: 1,
      title: 'AURA STUDIO',
      category: 'web',
      tag: 'Next.js / WebGL',
      desc: 'An immersive digital design platform utilizing custom shader effects, fluid grids, and dynamic transition animations.',
      longDesc: 'Aura Creative Studio is a portfolio website built for a top-tier digital media agency. The main goal was to deliver an outstanding design that performs optimally. It leverages Next.js Server Components, custom WebGL fluid simulations, and Framer Motion layout animations.',
      tech: ['Next.js', 'React', 'Three.js', 'GLSL', 'CSS Modules'],
      stats: { Speed: '99/100', SEO: '100/100', Accessibility: '100/100' },
      links: { demo: 'https://example.com', code: 'https://github.com' },
      imageUrl: 'https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=400&h=600&q=80',
    },
    {
      id: 2,
      title: 'KRONOS MONITOR',
      category: 'app',
      tag: 'React / Node / SQL',
      desc: 'A premium system monitor and database visualizer charting real-time connection traffic and user query loads.',
      longDesc: 'Kronos Metrics is an enterprise dashboard tailored for database administrators. It queries server connections every 100ms and logs analytics in a optimized graph representation.',
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Chart.js'],
      stats: { Database: 'PostgreSQL', Latency: '< 15ms', Security: 'AES-256' },
      links: { demo: 'https://example.com', code: 'https://github.com' },
      imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      id: 3,
      title: 'VEIL ENCRYPTED',
      category: 'app',
      tag: 'React Native / WebRTC',
      desc: 'An encrypted real-time chat and video communication mobile app containing customizable black-and-white theme skins.',
      longDesc: 'Veil is a secure, cross-platform communication app built with React Native and WebRTC. It supports video streaming, text chats, voice messages, and customizable design themes.',
      tech: ['React Native', 'WebRTC', 'Socket.io', 'Node.js', 'MongoDB'],
      stats: { Encryption: 'E2EE', Video: '1080p 60fps', Platforms: 'iOS & Android' },
      links: { demo: 'https://example.com', code: 'https://github.com' },
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&h=600&q=80',
    },
    {
      id: 4,
      title: 'APEX STYLE GUIDE',
      category: 'logo',
      tag: 'Figma Design',
      desc: 'A structural UI library built for design consistency, accessibility compliance, and developer documentation templates.',
      longDesc: 'Apex is a clean, accessible layout framework supporting dark and light themes, detailed typography grids, dynamic variables, and documentation pages.',
      tech: ['Figma', 'CSS Custom Props', 'Storybook', 'HTML5 Spec', 'WCAG Guides'],
      stats: { Compliance: 'WCAG AAA', Components: '50+', Themes: 'Light & Dark' },
      links: { demo: 'https://example.com', code: 'https://github.com' },
      imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      id: 5,
      title: 'ZEPHYR WIDGETS',
      category: 'web',
      tag: 'React / GraphQL',
      desc: 'A sleek visual hub for monitoring environmental and weather updates from localized smart API feeds.',
      longDesc: 'Zephyr offers customized analytics tools for viewing temperature, humidity, wind patterns, and local predictions.',
      tech: ['React', 'GraphQL', 'Tailwind', 'REST Sockets', 'ApexCharts'],
      stats: { DataRate: 'Live Feed', Widgets: '12 Options', LoadTime: '0.4s' },
      links: { demo: 'https://example.com', code: 'https://github.com' },
      imageUrl: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      id: 6,
      title: 'ECHO LUXURY',
      category: 'print',
      tag: 'Print Design / Editorial',
      desc: 'A luxury brand catalog flow highlighting product photography grids and interactive slider overlays.',
      longDesc: 'Echo is a conceptual interface design that emphasizes clean minimal grids, heavy editorial typography, and high-quality photo frames.',
      tech: ['Figma Design', 'UX Research', 'Interactive Prototypes', 'Design Systems'],
      stats: { Columns: '12 Grid', Screens: '24 Layouts', Target: 'Luxury Goods' },
      links: { demo: 'https://example.com', code: 'https://github.com' },
      imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=400&h=400&q=80',
    },
    {
      id: 7,
      title: 'MINIMAL KEYBOARD',
      category: 'logo',
      tag: 'Identity Layout',
      desc: 'A custom keyboard keycap styling visual guideline constructed for custom visual configurations.',
      longDesc: 'A custom conceptual visual guide for keycap product designers, configuring styles, labels, textures, and custom grey boxes.',
      tech: ['Figma Design', 'Photoshop CC', 'UX Wireframes'],
      stats: { Keys: '84 Layout', Form: '75% Size', Materials: 'PBT Double' },
      links: { demo: 'https://example.com', code: 'https://github.com' },
      imageUrl: 'https://images.unsplash.com/photo-1555538995-7280bd94165a?auto=format&fit=crop&w=400&h=300&q=80',
    },
    {
      id: 8,
      title: 'NORDIC POT',
      category: 'print',
      tag: 'Brand Asset Catalog',
      desc: 'Brand identity assets designed for ceramic and organic luxury home decorations.',
      longDesc: 'Visual identity system mapping custom catalog layouts, typographic rules, and minimalist styling guidelines.',
      tech: ['Indesign CC', 'Photoshop CC', 'Design Systems'],
      stats: { Grid: '8 Columns', Pages: '48 Layouts', Cover: 'Linen Board' },
      links: { demo: 'https://example.com', code: 'https://github.com' },
      imageUrl: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=400&h=600&q=80',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="works" className="w-full bg-white py-24 text-left border-b border-neutral-200">
      <div className="w-full max-w-[1200px] mx-auto px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-sans font-bold text-3xl tracking-widest text-neutral-900 uppercase">AWESOME WORKS</h2>
          <div className="w-24 h-[1px] bg-neutral-300 mx-auto mt-3 relative">
            <div className="w-12 h-[1px] bg-neutral-900 mx-auto mt-[3px]"></div>
          </div>
        </div>

        {/* Filter Tabs (Sharp border layouts matching screenshot) */}
        <div className="flex justify-center flex-wrap gap-2.5 mb-16">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`text-[10px] font-bold tracking-widest uppercase py-2.5 px-6 border cursor-pointer transition-colors duration-200 ${
                activeFilter === filter.id 
                  ? 'bg-neutral-800 border-neutral-800 text-white' 
                  : 'bg-white border-neutral-200 text-neutral-600 hover:border-neutral-900 hover:text-neutral-900'
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Projects Masonry Grid using Tailwind columns (exactly like collage) */}
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-6 space-y-6">
          {filteredProjects.map(proj => (
            <div
              key={proj.id}
              className="break-inside-avoid relative group cursor-pointer border border-neutral-200 p-2 bg-white"
              onClick={() => setSelectedProject(proj)}
            >
              {/* Grayscale hover effects */}
              <div className="relative overflow-hidden">
                <img 
                  src={proj.imageUrl} 
                  alt={proj.title}
                  className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                
                {/* Image overlay displaying Case Study pill */}
                <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-neutral-900/40 flex justify-center items-end pb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="bg-white text-neutral-900 text-[10px] font-bold tracking-widest uppercase py-2 px-5 rounded-none shadow-md border border-neutral-200">
                    CASE STUDY
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detailed Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[2000] flex justify-center items-center p-4 md:p-8 animate-fade-in" onClick={() => setSelectedProject(null)}>
          <div className="relative bg-white border border-neutral-300 w-full max-w-[1000px] max-h-[90vh] overflow-y-auto rounded-none animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 md:top-6 md:right-6 bg-neutral-100 border border-neutral-200 w-9 h-9 flex items-center justify-center cursor-pointer text-neutral-800 hover:border-neutral-900 hover:rotate-90 transition-all duration-200 z-10" 
              onClick={() => setSelectedProject(null)}
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
              <div className="flex justify-center items-center p-8 bg-neutral-100 border-b md:border-b-0 md:border-r border-neutral-200">
                <div className="text-center">
                  <img 
                    src={selectedProject.imageUrl} 
                    alt={selectedProject.title}
                    className="max-h-[350px] mx-auto w-auto object-contain grayscale rounded-none shadow-md border border-neutral-300 p-2 bg-white"
                  />
                </div>
              </div>

              <div className="p-8 md:p-12 flex flex-col gap-6 text-left text-neutral-800">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">// PROJECT DETAILS</span>
                <h2 className="font-display font-extrabold text-2xl text-neutral-950 leading-none">{selectedProject.title}</h2>
                <p className="text-sm text-neutral-500 leading-relaxed">{selectedProject.longDesc}</p>

                {/* Specs */}
                <div className="border-t border-neutral-100 pt-4">
                  <h4 className="text-[10px] tracking-widest text-neutral-400 mb-3 font-bold uppercase">METRICS:</h4>
                  <ul className="list-none flex flex-col gap-1.5">
                    {Object.entries(selectedProject.stats).map(([k, v]) => (
                      <li key={k} className="flex gap-2 text-xs">
                        <span className="text-neutral-500 font-bold">{k}:</span>
                        <span className="text-neutral-600">{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="border-t border-neutral-100 pt-4">
                  <h4 className="text-[10px] tracking-widest text-neutral-400 mb-3 font-bold uppercase">TECH STACK:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-bold bg-neutral-50 border border-neutral-200 text-neutral-600 py-1 px-2.5 rounded-none">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-4">
                  <a href={selectedProject.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white py-3 px-6 rounded-none font-bold text-xs cursor-pointer border border-neutral-900 hover:bg-transparent hover:text-neutral-900 transition-all duration-200">
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a href={selectedProject.links.code} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-transparent text-neutral-900 py-3 px-6 rounded-none font-bold text-xs cursor-pointer border border-neutral-300 hover:border-neutral-900 transition-all duration-200">
                    Source Code <Github size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;

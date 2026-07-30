import React, { useState } from 'react';
import { ExternalLink, Github, X, Eye } from 'lucide-react';

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'ALL PROJECTS' },
    { id: 'web', label: 'WEB APPS' },
    { id: 'mobile', label: 'MOBILE' },
    { id: 'design', label: 'UI/UX' },
  ];

  const projects = [
    {
      id: 1,
      title: 'AURA CREATIVE STUDIO',
      category: 'web',
      tag: 'Next.js / GLSL',
      desc: 'An immersive digital design platform utilizing custom shader effects, fluid grids, and dynamic transition animations.',
      longDesc: 'Aura Creative Studio is a portfolio website built for a top-tier digital media agency. The main goal was to deliver an outstanding design that performs optimally. It leverages Next.js Server Components, custom WebGL fluid simulations, and Framer Motion layout animations. The app features state-of-the-art SEO optimizations, fully semantic structure, and accessible navigation hooks.',
      tech: ['Next.js', 'React', 'Three.js', 'GLSL', 'CSS Modules'],
      stats: { Speed: '99/100', SEO: '100/100', Accessibility: '100/100' },
      links: { demo: 'https://example.com', code: 'https://github.com' },
      bgStyle: 'aura-bg',
    },
    {
      id: 2,
      title: 'KRONOS METRICS',
      category: 'web',
      tag: 'React / Node / SQL',
      desc: 'A premium system monitor and database visualizer charting real-time connection traffic and user query loads.',
      longDesc: 'Kronos Metrics is an enterprise dashboard tailored for database administrators. It queries server connections every 100ms and logs analytics in a optimized graph representation. Built with React hooks and a Express Node backend, it handles large data sets efficiently and exports details into CSV charts.',
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Chart.js'],
      stats: { Database: 'PostgreSQL', Latency: '< 15ms', Security: 'AES-256' },
      links: { demo: 'https://example.com', code: 'https://github.com' },
      bgStyle: 'kronos-bg',
    },
    {
      id: 3,
      title: 'VEIL MESSENGER',
      category: 'mobile',
      tag: 'React Native / WebRTC',
      desc: 'An encrypted real-time chat and video communication mobile app containing customizable black-and-white theme skins.',
      longDesc: 'Veil is a secure, cross-platform communication app built with React Native and WebRTC. It supports video streaming, text chats, voice messages, and customizable design themes. All conversations are end-to-end encrypted locally and routed via peer connection sockets.',
      tech: ['React Native', 'WebRTC', 'Socket.io', 'Node.js', 'MongoDB'],
      stats: { Encryption: 'E2EE', Video: '1080p 60fps', Platforms: 'iOS & Android' },
      links: { demo: 'https://example.com', code: 'https://github.com' },
      bgStyle: 'veil-bg',
    },
    {
      id: 4,
      title: 'APEX DESIGN SYSTEM',
      category: 'design',
      tag: 'Figma / CSS / Spec',
      desc: 'A structural UI library built for design consistency, accessibility compliance, and developer documentation templates.',
      longDesc: 'Apex is a clean, accessible layout framework supporting dark and light themes, detailed typography grids, dynamic variables, and documentation pages. Tested rigorously on contrast algorithms to ensure high visibility standards.',
      tech: ['Figma', 'CSS Custom Props', 'Storybook', 'HTML5 Spec', 'WCAG Guides'],
      stats: { Compliance: 'WCAG AAA', Components: '50+', Themes: 'Light & Dark' },
      links: { demo: 'https://example.com', code: 'https://github.com' },
      bgStyle: 'apex-bg',
    },
    {
      id: 5,
      title: 'ZEPHYR DASHBOARD',
      category: 'web',
      tag: 'React / GraphQL',
      desc: 'A sleek visual hub for monitoring environmental and weather updates from localized smart API feeds.',
      longDesc: 'Zephyr offers customized analytics tools for viewing temperature, humidity, wind patterns, and local predictions. Integrates with third-party atmospheric APIs and structures results in custom CSS grid formats.',
      tech: ['React', 'GraphQL', 'Tailwind', 'REST Sockets', 'ApexCharts'],
      stats: { DataRate: 'Live Feed', Widgets: '12 Options', LoadTime: '0.4s' },
      links: { demo: 'https://example.com', code: 'https://github.com' },
      bgStyle: 'zephyr-bg',
    },
    {
      id: 6,
      title: 'ECHO ECOMMERCE',
      category: 'design',
      tag: 'Figma Prototype',
      desc: 'A luxury brand catalog flow highlighting product photography grids and interactive slider overlays.',
      longDesc: 'Echo is a conceptual interface design that emphasizes clean minimal grids, heavy editorial typography, and high-quality photo frames. Includes responsive views for tablet, mobile, and wide desktop sizes.',
      tech: ['Figma Design', 'UX Research', 'Interactive Prototypes', 'Design Systems'],
      stats: { Columns: '12 Grid', Screens: '24 Layouts', Target: 'Luxury Goods' },
      links: { demo: 'https://example.com', code: 'https://github.com' },
      bgStyle: 'echo-bg',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="works" className="w-full max-w-[1200px] mx-auto px-8 py-24 text-left">
      {/* Title */}
      <div className="mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-text-muted">// MY PROJECTS</span>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-2">WORKS</h2>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-start flex-wrap gap-4 mb-12 border-b border-border-color pb-4">
        {filters.map(filter => (
          <button
            key={filter.id}
            className={`text-xs font-semibold tracking-wider text-text-secondary cursor-pointer py-2 px-4 transition-colors duration-200 ${
              activeFilter === filter.id 
                ? 'bg-bg-secondary border border-border-color rounded-sm text-white' 
                : 'hover:text-white'
            }`}
            onClick={() => setActiveFilter(filter.id)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
        {filteredProjects.map(proj => (
          <div
            key={proj.id}
            className="flex flex-col cursor-pointer group"
            onClick={() => setSelectedProject(proj)}
          >
            <div className={`relative w-full h-[280px] bg-bg-secondary border border-border-color rounded-sm overflow-hidden flex flex-col justify-center items-center p-8 group-hover:border-white transition-all duration-300 ${proj.bgStyle}`}>
              {/* Modern Minimal B&W Mockup graphic */}
              <div className="absolute top-3 left-3 flex gap-1.5">
                <span className="w-2 h-2 bg-border-color rounded-full"></span>
                <span className="w-2 h-2 bg-border-color rounded-full"></span>
                <span className="w-2 h-2 bg-border-color rounded-full"></span>
              </div>
              <div className="text-center flex flex-col gap-2">
                <span className="font-display font-extrabold text-2xl tracking-tight text-white">{proj.title}</span>
                <span className="text-[10px] font-mono text-text-muted uppercase">{proj.tag}</span>
              </div>
              
              <div className="absolute inset-0 bg-black/90 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <div className="flex flex-col items-center gap-2 text-white font-semibold text-xs tracking-wider translate-y-[10px] group-hover:translate-y-0 transition-transform duration-300">
                  <Eye size={24} />
                  <span>VIEW DETAILS</span>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <span className="font-mono text-xs text-text-muted">{proj.tag}</span>
              <h3 className="font-display font-extrabold text-xl mt-1 mb-2">{proj.title}</h3>
              <p className="text-sm text-text-secondary">{proj.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Modal Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-[2000] flex justify-center items-center p-4 md:p-8 animate-fade-in" onClick={() => setSelectedProject(null)}>
          <div className="relative bg-bg-primary border border-border-color w-full max-w-[1000px] max-h-[90vh] overflow-y-auto rounded-sm animate-scale-in" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 md:top-6 md:right-6 bg-bg-secondary border border-border-color w-9 h-9 rounded-full flex items-center justify-center cursor-pointer text-white hover:border-white hover:rotate-90 transition-all duration-200 z-10" 
              onClick={() => setSelectedProject(null)}
            >
              <X size={20} />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
              <div className={`flex justify-center items-center p-8 md:p-12 border-b md:border-b-0 md:border-r border-border-color ${selectedProject.bgStyle}`}>
                <div className="text-center">
                  <h2 className="font-display font-extrabold text-3xl text-white mb-2">{selectedProject.title}</h2>
                  <p className="font-mono text-xs text-text-muted">{selectedProject.tag}</p>
                </div>
              </div>

              <div className="p-8 md:p-14 flex flex-col gap-6 text-left">
                <span className="font-mono text-xs uppercase tracking-widest text-text-muted">// PROJECT DETAILS</span>
                <h2 className="font-display font-extrabold text-3xl text-white leading-none">{selectedProject.title}</h2>
                <p className="text-sm text-text-secondary leading-relaxed">{selectedProject.longDesc}</p>

                {/* Specs */}
                <div className="border-t border-border-color pt-4">
                  <h4 className="text-[10px] tracking-widest text-text-muted mb-3 font-semibold">METRICS:</h4>
                  <ul className="list-none flex flex-col gap-1.5">
                    {Object.entries(selectedProject.stats).map(([k, v]) => (
                      <li key={k} className="flex gap-2 text-sm">
                        <span className="text-text-secondary font-semibold">{k}:</span>
                        <span className="text-text-secondary">{v}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Badges */}
                <div className="border-t border-border-color pt-4">
                  <h4 className="text-[10px] tracking-widest text-text-muted mb-3 font-semibold">TECH STACK:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-medium bg-bg-secondary border border-border-color text-text-secondary py-1 px-2 rounded-sm">{t}</span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-4 mt-4">
                  <a href={selectedProject.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-white text-black py-2.5 px-5 rounded-sm font-semibold text-xs cursor-pointer border border-white hover:bg-transparent hover:text-white transition-all duration-200">
                    Live Demo <ExternalLink size={14} />
                  </a>
                  <a href={selectedProject.links.code} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-transparent text-white py-2.5 px-5 rounded-sm font-semibold text-xs cursor-pointer border border-border-color hover:border-white transition-all duration-200">
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

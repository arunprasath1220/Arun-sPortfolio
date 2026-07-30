import React from 'react';
import { Layout, Cpu, Figma, Compass, ArrowRight } from 'lucide-react';

const Services = ({ setActiveSection }) => {
  const serviceList = [
    {
      icon: <Layout size={32} />,
      title: 'FRONTEND DEVELOPMENT',
      number: '01',
      desc: 'Coding pixel-perfect, highly responsive, and high-performance user interfaces. Specialized in React, Next.js, and custom motion design animations.',
      details: ['React & Custom Hooks', 'Next.js Server Actions', 'Tailwind & CSS Architecture', 'Framer Motion Integration'],
    },
    {
      icon: <Cpu size={32} />,
      title: 'BACKEND SYSTEMS',
      number: '02',
      desc: 'Building reliable databases, secure authentication mechanisms, and performant REST/GraphQL endpoints using Node.js, Express, and PostgreSQL.',
      details: ['Node.js APIs', 'Database Optimization', 'JWT & OAuth Auth Systems', 'Cloud Deployment & CI/CD'],
    },
    {
      icon: <Figma size={32} />,
      title: 'UI/UX DESIGN',
      number: '03',
      desc: 'Creating modern, minimalistic interface mockups and clean design flows. Focused on high usability, accessibility, and interactive web standards.',
      details: ['Interactive Prototyping', 'Component Library Design', 'Wireframing & Workflows', 'Design-to-Code Delivery'],
    },
    {
      icon: <Compass size={32} />,
      title: 'CREATIVE WORKSHOPS',
      number: '04',
      desc: 'Partnering with startups to conceptualize product strategy, optimize SEO structures, map layout architectures, and construct unique brand stories.',
      details: ['SEO & Core Web Vitals', 'Brand Visual Systems', 'Layout Architecture Spec', 'Responsive Usability Audits'],
    },
  ];

  return (
    <section id="services" className="w-full max-w-[1200px] mx-auto px-8 py-24 text-left">
      {/* Header */}
      <div className="mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-text-muted">// WHAT I OFFER</span>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-2">SERVICES</h2>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {serviceList.map((service, index) => (
          <div key={index} className="bg-bg-secondary border border-border-color p-10 rounded-sm flex flex-col justify-between min-h-[380px] hover:border-white hover:-translate-y-1 transition-all duration-300">
            <div>
              <div className="flex justify-between items-center mb-8">
                <div className="text-white flex items-center justify-center w-12 h-12 bg-white/5 rounded-sm">
                  {service.icon}
                </div>
                <span className="font-mono text-xl text-text-muted font-bold">{service.number}</span>
              </div>
              
              <h3 className="font-display font-extrabold text-2xl mb-4 tracking-tight">{service.title}</h3>
              <p className="text-base text-text-secondary mb-8 leading-relaxed">{service.desc}</p>
            </div>
            
            <div className="border-t border-border-color pt-6">
              <h4 className="text-[10px] font-sans tracking-widest text-text-muted mb-3">SPECIALTIES:</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.details.map((detail, dIdx) => (
                  <li key={dIdx} className="text-xs text-text-secondary relative pl-3 before:content-['•'] before:absolute before:left-0 before:text-text-muted">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Service CTA */}
      <div className="mt-16 text-left">
        <div className="bg-gradient-to-b from-bg-secondary to-transparent border border-border-color p-12 rounded-sm flex flex-col items-start gap-4">
          <h3 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">HAVE A UNIQUE IDEA IN MIND?</h3>
          <p className="text-base md:text-lg text-text-secondary max-w-[600px] mb-4">Let's coordinate to turn your custom vision into a beautiful, functional reality.</p>
          <button className="btn-primary" onClick={() => setActiveSection('contact')}>
            Start a Project <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;

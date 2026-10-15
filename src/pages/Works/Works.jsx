import React, { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import Reveal from '../../components/Reveal/Reveal';
import personalisedSkillImg from '../../assets/works/personalised-skill.webp';
import questionBankImg from '../../assets/works/question-bank.webp';
import facultyAppraisalImg from '../../assets/works/faculty-appraisal.webp';
import nbaAccreditationImg from '../../assets/works/nba-accreditation.webp';
import academicErpImg from '../../assets/works/academic-erp.webp';
import tuitionAppImg from '../../assets/works/tuition-app.webp';
import nehaHospitalImg from '../../assets/works/neha-hospital.webp';

const Works = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = [
    { id: 'all', label: 'ALL PROJECTS' },
    { id: 'learning', label: 'LEARNING & ASSESSMENT' },
    { id: 'erp', label: 'ACADEMIC ERP' },
    { id: 'healthcare', label: 'HEALTHCARE' },
  ];

  const projects = [
    {
      id: 1,
      title: 'PERSONALISED SKILL APPLICATION',
      category: 'learning',
      tag: 'React / Node.js / MySQL',
      desc: 'A skill-development portal where students enrol in courses, take MCQ tests and book assessment slots, while admins manage content and track progress.',
      longDesc: 'Personalised Skill (PS) is a full-stack learning portal for students and administrators at my institution. Students register for courses, attempt MCQ-based tests in a test portal, book assessment slots, request reviews and follow their progress and leaderboard rank. Admins create courses and MCQs (with bulk upload and AI-assisted MCQ generation), review submissions and monitor student progress and test history.',
      tech: ['React', 'Vite', 'Material UI', 'Recharts', 'Node.js', 'Express', 'MySQL', 'JWT', 'Firebase Auth', 'OpenAI API'],
      stats: { Roles: 'Student & Admin', 'Sign-in': 'Email (JWT) & Google', Assessment: 'MCQ tests, slot booking & reviews', Admin: 'Bulk upload & AI-assisted MCQs' },
      links: { code: 'https://github.com/arunprasath1220/PS' },
      imageUrl: personalisedSkillImg,
    },
    {
      id: 2,
      title: 'QUESTION BANK GENERATOR',
      category: 'learning',
      tag: 'React / Node.js / MySQL',
      desc: 'A question-bank and exam-paper platform where faculty contribute questions and admins generate semester and PG papers.',
      longDesc: 'Generate-QB is a question-bank and exam-paper platform for admins and faculty. Admins onboard faculty, map them to departments and subjects, assign question-writing tasks and send questions for vetting. Faculty add questions through a rich-text editor with maths support, or upload them in bulk, and track their task progress. Admins then generate semester and PG question papers with a configurable mark distribution and export them as PDF.',
      tech: ['React', 'Redux Toolkit', 'Tailwind CSS', 'Material UI', 'CKEditor', 'KaTeX', 'Node.js', 'Express', 'MySQL', 'JWT', 'Firebase Auth'],
      stats: { Roles: 'Admin & Faculty', Editor: 'Rich text with maths (KaTeX)', Import: 'CSV / Excel bulk upload', Output: 'Semester & PG papers as PDF' },
      links: { code: 'https://github.com/arunprasath1220/Generate-QB' },
      imageUrl: questionBankImg,
    },
    {
      id: 3,
      title: 'FACULTY APPRAISAL',
      category: 'erp',
      tag: 'Live Web Portal',
      desc: 'A live web portal for managing faculty performance appraisals at Bannari Amman Institute of Technology.',
      longDesc: 'Faculty Appraisal is a live web portal used at Bannari Amman Institute of Technology to manage faculty performance appraisals. Faculty sign in to a secure portal to record and submit their appraisal details, and the institution can review them in one place.',
      tech: ['React', 'Node.js', 'Express', 'MySQL'],
      stats: { Status: 'Live in production', Access: 'Secure, login-protected portal', Users: 'Institution faculty' },
      links: { demo: 'https://facultyappraisal.bitsathy.ac.in/login', code: 'https://github.com/PCDPBIT/FacultyAppraisal' },
      imageUrl: facultyAppraisalImg,
    },
    {
      id: 4,
      title: 'NBA ACCREDITATION',
      category: 'erp',
      tag: 'Institutional Web App',
      desc: 'A web application supporting the National Board of Accreditation (NBA) process at the institution.',
      longDesc: 'A web application built to support the National Board of Accreditation (NBA) process at the institution, helping departments collect, organise and report the criteria-wise data that accreditation requires in one place.',
      tech: ['React', 'Node.js', 'Express', 'MySQL'],
      stats: { Domain: 'Academic accreditation (NBA)', Users: 'Departments & faculty', Focus: 'Criteria-wise data & reporting' },
      links: { code: 'https://github.com/arunprasath1220/NBA' },
      imageUrl: nbaAccreditationImg,
    },
    {
      id: 5,
      title: 'ACADEMIC ERP',
      category: 'erp',
      tag: 'Institution-wide Platform',
      desc: 'A large-scale academic management platform that brings the institution’s day-to-day academic operations onto one system.',
      longDesc: 'Academic ERP is a large-scale academic management platform that brings the institution’s day-to-day academic operations onto one system. I contributed backend modules and REST APIs to it, working with React, Node.js, Express and MySQL.',
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'REST APIs'],
      stats: { Scale: 'Institution-wide platform', 'My role': 'Backend modules & REST APIs', Type: 'Enterprise web application' },
      links: { code: 'https://github.com/PCDPBIT/academics_erp' },
      imageUrl: academicErpImg,
    },
    {
      id: 6,
      title: 'TUITION APP',
      category: 'learning',
      tag: 'React Native / Node.js / MySQL',
      desc: 'A cross-platform mobile app for running a tuition centre with separate Admin, Faculty and Student experiences.',
      longDesc: 'Tuition App is a cross-platform mobile app for running a tuition centre, with separate Admin, Faculty and Student experiences. Admins add users and subjects, view faculty and student lists and assign faculty to students, while faculty and students get their own dashboards through role-based bottom-tab navigation. It is backed by a Node.js, Express and MySQL API.',
      tech: ['React Native', 'React Navigation', 'Lottie', 'Node.js', 'Express', 'MySQL'],
      stats: { Platform: 'Android & iOS (React Native)', Roles: 'Admin, Faculty & Student', Navigation: 'Role-based bottom tabs' },
      links: { code: 'https://github.com/arunprasath1220/tution_app' },
      imageUrl: tuitionAppImg,
    },
    {
      id: 7,
      title: 'NEHA HOSPITAL SOFTWARE',
      category: 'healthcare',
      tag: 'Live Hospital Management System',
      desc: 'A live hospital management system for Neha Hospital covering patients, doctors, pharmacy, admissions and billing.',
      longDesc: 'Neha Hospital Software is a live hospital management system built for Neha Hospital. It brings the hospital’s day-to-day operations into one web application: patient registration and appointments across OPD and IPD, doctor consultations and prescriptions, admissions, discharge and bed management, pharmacy and medicine records, staff, and billing with payments and receipts.',
      tech: ['React', 'Tailwind CSS'],
      stats: { Status: 'Live in production', Modules: 'OPD, IPD, pharmacy & billing', Users: 'Doctors & hospital staff' },
      links: { demo: 'https://neha.tylo.co.in/', code: 'https://github.com/PCDPBIT/NehaHospital' },
      imageUrl: nehaHospitalImg,
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="works" className="w-full bg-white py-24 text-left border-b border-neutral-200">
      <div className="w-full max-w-[1200px] mx-auto px-8">
        
        {/* Title */}
        <Reveal direction="down">
          <div className="text-center mb-16">
            <h2 className="font-sans font-bold text-3xl tracking-widest text-neutral-900 uppercase">AWESOME WORKS</h2>
            <div className="w-24 h-[1px] bg-neutral-300 mx-auto mt-3 relative">
              <div className="w-12 h-[1px] bg-neutral-900 mx-auto mt-[3px]"></div>
            </div>
          </div>
        </Reveal>

        {/* Filter Tabs (Sharp border layouts matching screenshot) */}
        <Reveal direction="up" delay={0.2}>
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
        </Reveal>

        {/* Projects Masonry Grid using Tailwind columns (exactly like collage) */}
        <Reveal direction="up" delay={0.4}>
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
        </Reveal>
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
                  {selectedProject.links.demo && (
                    <a href={selectedProject.links.demo} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white py-3 px-6 rounded-none font-bold text-xs cursor-pointer border border-neutral-900 hover:bg-transparent hover:text-neutral-900 transition-all duration-200">
                      Live Demo <ExternalLink size={14} />
                    </a>
                  )}
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

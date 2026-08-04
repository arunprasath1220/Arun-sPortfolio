import React from 'react';
import { Cpu, LayoutGrid, Smartphone, Code2, Globe, Boxes } from 'lucide-react';

const Services = ({ setActiveSection }) => {
  const serviceList = [
    {
      icon: <Cpu size={32} className="stroke-1" />,
      title: <>SYSTEM <span className="font-extrabold text-white">DESIGN</span> & ARCHITECTURE</>,
      desc: 'Design scalable software architectures, APIs, databases, and cloud-ready systems for modern applications.',
    },
    {
      icon: <LayoutGrid size={32} className="stroke-1" />,
      title: <>WEB <span className="font-extrabold text-white">APPLICATION</span> DESIGN</>,
      desc: 'Create responsive and user-friendly web interfaces with clean layouts and intuitive user experiences.',
    },
    {
      icon: <Smartphone size={32} className="stroke-1" />,
      title: <>MOBILE <span className="font-extrabold text-white">APP</span> DESIGN</>,
      desc: 'Design engaging mobile interfaces focused on usability, accessibility, and performance.',
    },
    {
      icon: <Code2 size={32} className="stroke-1" />,
      title: <>WEB <span className="font-extrabold text-white">DEVELOPMENT</span></>,
      desc: 'Build secure, responsive, and high-performance web applications using modern full-stack technologies.',
    },
    {
      icon: <Globe size={32} className="stroke-1" />,
      title: <>MOBILE <span className="font-extrabold text-white">DEVELOPMENT</span></>,
      desc: 'Develop cross-platform mobile applications with seamless backend integration and smooth user experiences.',
    },
    {
      icon: <Boxes size={32} className="stroke-1" />,
      title: <>SOFTWARE <span className="font-extrabold text-white">SOLUTIONS</span></>,
      desc: 'Deliver complete software solutions that streamline processes and solve real-world business problems.',
    },
  ];

  const handleLetTalk = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
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
    <section id="services" className="w-full bg-[#1b1b1b] py-24 text-left relative">
      <div className="w-full max-w-[1200px] mx-auto px-8">
        
        {/* Section Heading with double underlines */}
        <div className="text-center mb-20">
          <h2 className="font-sans font-bold text-3xl tracking-widest text-white uppercase">WHAT I DO</h2>
          <div className="w-24 h-[1px] bg-neutral-600 mx-auto mt-3 relative">
            <div className="w-12 h-[1px] bg-white mx-auto mt-[3px]"></div>
          </div>
        </div>

        {/* Services Grid (6 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {serviceList.map((service, index) => (
            <div key={index} className="flex gap-6 items-start">
              {/* Icon Container with border and clean hover */}
              <div className="text-neutral-400 p-2.5 bg-neutral-800/20 border border-neutral-800 flex items-center justify-center shrink-0">
                {service.icon}
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-sans text-neutral-400 text-base font-medium tracking-wide uppercase">
                  {service.title}
                </h3>
                <p className="text-neutral-400 text-xs leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Services Call to action */}
        <div className="mt-20 pt-16 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-left">
            <h4 className="font-sans font-bold text-xl text-white tracking-wide uppercase mb-1">WANT TO DISCUSS A NEW PROJECT?</h4>
            <p className="text-neutral-400 text-sm">Let's collaborate together and build something truly creative.</p>
          </div>
          <button 
            className="border border-white text-white bg-transparent py-3 px-10 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer shrink-0"
            onClick={handleLetTalk}
          >
            GET IN TOUCH
          </button>
        </div>

      </div>
    </section>
  );
};

export default Services;

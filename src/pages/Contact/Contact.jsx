import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [isPhoneBlinking, setIsPhoneBlinking] = useState(false);

  useEffect(() => {
    let blinkTimer;
    let delayTimer;

    const handleHighlight = () => {
      delayTimer = setTimeout(() => {
        setIsPhoneBlinking(true);
        blinkTimer = setTimeout(() => {
          setIsPhoneBlinking(false);
        }, 5000);
      }, 300);
    };

    window.addEventListener('highlight-phone-card', handleHighlight);
    return () => {
      window.removeEventListener('highlight-phone-card', handleHighlight);
      clearTimeout(delayTimer);
      clearTimeout(blinkTimer);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      
      setTimeout(() => {
        setSuccess(false);
      }, 6000);
    }, 1500);
  };

  const contactDetails = [
    {
      icon: <Mail size={20} className="stroke-1" />,
      label: 'EMAIL',
      value: 'arunprasath2428@gmail.com',
      link: 'mailto:arunprasath2428@gmail.com',
    },
    {
      icon: <Phone size={20} className="stroke-1" />,
      label: 'PHONE',
      value: '+91 9345904651',
      link: 'tel:+919345904651',
    },
    {
      icon: <MapPin size={20} className="stroke-1" />,
      label: 'LOCATION',
      value: 'Rasipuram, Tamilnadu',
      link: 'https://maps.google.com/?q=Rasipuram,+Tamil+Nadu',
    },
  ];

  return (
    <section id="contact" className="w-full bg-[#fcfcfc] py-24 text-left border-b border-neutral-200">
      {/* Header */}
      <div className="w-full max-w-[1200px] mx-auto px-8 mb-16">
        <div className="text-center">
          <h2 className="font-sans font-bold text-3xl tracking-widest text-neutral-900 uppercase">CONTACT ME</h2>
          <div className="w-24 h-[1px] bg-neutral-300 mx-auto mt-3 relative">
            <div className="w-12 h-[1px] bg-neutral-900 mx-auto mt-[3px]"></div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start">
        {/* Info Column */}
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="font-sans font-bold text-xl mb-2 text-neutral-900 uppercase tracking-wide">LET'S START A CONVERSATION</h3>
            <p className="text-sm text-neutral-500 leading-relaxed">Whether you have a specific project in mind, need technical assistance, or simply want to connect, feel free to drop me a message.</p>
          </div>

          <div className="flex flex-col gap-4">
            {contactDetails.map((detail, idx) => {
              const isPhone = detail.label === 'PHONE';
              return (
                <a 
                  href={detail.link} 
                  key={idx} 
                  id={isPhone ? 'phone-card' : undefined}
                  className={`flex items-center gap-5 bg-white border border-neutral-200 p-5 rounded-none hover:border-neutral-950 hover:translate-x-1 transition-all duration-200 ${
                    isPhone && isPhoneBlinking ? 'animate-blink-card' : ''
                  }`} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <div className="w-11 h-11 bg-neutral-50 border border-neutral-200 text-neutral-900 rounded-full flex items-center justify-center shrink-0 shadow-xs">
                    {detail.icon}
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="font-mono text-[9px] text-neutral-400 font-bold tracking-widest uppercase leading-tight">{detail.label}</span>
                    <h4 className="text-sm font-bold text-neutral-950 mt-0.5 leading-snug">{detail.value}</h4>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Minimal B&W Map frame placeholder */}
          <div className="h-[200px] bg-white border border-neutral-200 rounded-none relative overflow-hidden p-2">
            <div className="absolute top-4 left-4 flex flex-col gap-1 z-10">
              <span className="font-mono text-[9px] text-neutral-500 bg-white/90 backdrop-blur-xs py-1 px-2.5 border border-neutral-200 font-semibold tracking-wider">LAT: 11.4647° N</span>
              <span className="font-mono text-[9px] text-neutral-500 bg-white/90 backdrop-blur-xs py-1 px-2.5 border border-neutral-200 font-semibold tracking-wider">LNG: 78.1722° E</span>
            </div>
            
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] bg-neutral-50 flex flex-col items-center justify-center">
              <div className="relative flex items-center justify-center mb-3">
                <div className="absolute w-10 h-10 border border-neutral-300 rounded-full animate-pulse-radar"></div>
                <div className="absolute w-20 h-20 border border-dashed border-neutral-200 rounded-full animate-pulse-radar-slow"></div>
                <span className="w-3.5 h-3.5 bg-neutral-950 rounded-full z-10 shadow-xs"></span>
              </div>
              <span className="font-sans font-extrabold text-xs tracking-widest text-neutral-900 uppercase flex items-center gap-1.5 z-10 bg-white/80 px-3 py-1 border border-neutral-200">
                <MapPin size={13} className="text-neutral-900 shrink-0" /> RASIPURAM, TAMILNADU
              </span>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="bg-white border border-neutral-200 p-8 md:p-10 rounded-none">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-neutral-50 border border-neutral-200 text-neutral-800 rounded-full flex items-center justify-center shrink-0">
                <MessageSquare size={15} />
              </div>
              <h3 className="flex items-center gap-1.5 leading-none">
                <span className="font-serif italic text-base text-neutral-500 font-normal">Send an</span>
                <span className="font-serif font-bold text-base text-neutral-950 tracking-wide">Email Message</span>
              </h3>
            </div>
            <span className="font-mono text-[9px] text-neutral-400 font-bold uppercase tracking-widest hidden sm:inline-block">// DIRECT INBOX</span>
          </div>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-950/5 border border-red-500/20 text-red-600 p-3.5 rounded-none flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider">
                <AlertCircle size={16} className="shrink-0" />
                <span>{error}</span>
              </div>
            )}
            
            {success && (
              <div className="bg-green-950/5 border border-green-500/20 text-green-600 p-3.5 rounded-none text-xs font-bold uppercase tracking-wider">
                <span>Your message has been sent successfully! I will get back to you shortly.</span>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label htmlFor="user-name" className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Your Name *</label>
              <input
                id="user-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Harry"
                className="bg-neutral-50 border border-neutral-200 text-neutral-800 p-3 rounded-none text-xs font-semibold tracking-wider uppercase focus:border-neutral-950 focus:bg-white transition-all duration-200 outline-none"
                disabled={loading}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="user-email" className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Your Email Address *</label>
              <input
                id="user-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="harry@example.com"
                className="bg-neutral-50 border border-neutral-200 text-neutral-800 p-3 rounded-none text-xs font-semibold tracking-wider uppercase focus:border-neutral-950 focus:bg-white transition-all duration-200 outline-none"
                disabled={loading}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="msg-subject" className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Subject</label>
              <input
                id="msg-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Design Partnership"
                className="bg-neutral-50 border border-neutral-200 text-neutral-800 p-3 rounded-none text-xs font-semibold tracking-wider uppercase focus:border-neutral-950 focus:bg-white transition-all duration-200 outline-none"
                disabled={loading}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="user-message" className="text-[10px] font-bold text-neutral-500 uppercase tracking-wider">Message *</label>
              <textarea
                id="user-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message..."
                rows="5"
                className="bg-neutral-50 border border-neutral-200 text-neutral-800 p-3 rounded-none text-xs font-semibold tracking-wider uppercase focus:border-neutral-950 focus:bg-white transition-all duration-200 outline-none resize-none"
                disabled={loading}
                required
              ></textarea>
            </div>

            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-neutral-900 text-white border border-neutral-900 py-3.5 px-8 text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-neutral-900 transition-colors duration-300 cursor-pointer mt-2" disabled={loading}>
              {loading ? 'Sending...' : (
                <>
                  <span>Send Message</span>
                  <Send size={14} className="shrink-0" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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
      value: 'hello@arundev.com',
      link: 'mailto:hello@arundev.com',
    },
    {
      icon: <Phone size={20} className="stroke-1" />,
      label: 'PHONE',
      value: '+1 (555) 019-2834',
      link: 'tel:+15550192834',
    },
    {
      icon: <MapPin size={20} className="stroke-1" />,
      label: 'LOCATION',
      value: 'San Francisco, CA, USA',
      link: 'https://maps.google.com',
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
            {contactDetails.map((detail, idx) => (
              <a href={detail.link} key={idx} className="flex items-center gap-5 bg-white border border-neutral-200 p-5 rounded-none hover:border-neutral-950 hover:translate-x-1 transition-all duration-200" target="_blank" rel="noreferrer">
                <div className="w-10 h-10 bg-neutral-50 border border-neutral-200 text-neutral-800 rounded-full flex items-center justify-center">
                  {detail.icon}
                </div>
                <div>
                  <span className="font-mono text-[9px] text-neutral-400 font-bold tracking-widest uppercase">{detail.label}</span>
                  <h4 className="text-sm font-bold text-neutral-950 mt-1 leading-snug">{detail.value}</h4>
                </div>
              </a>
            ))}
          </div>

          {/* Minimal B&W Map frame placeholder */}
          <div className="h-[200px] bg-white border border-neutral-200 rounded-none relative overflow-hidden p-2">
            <div className="absolute top-4 left-4 flex flex-col gap-1 z-10">
              <span className="font-mono text-[9px] text-neutral-400 bg-white py-1 px-2 border border-neutral-200">LAT: 37.7749° N</span>
              <span className="font-mono text-[9px] text-neutral-400 bg-white py-1 px-2 border border-neutral-200">LNG: 122.4194° W</span>
            </div>
            
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] bg-neutral-50 flex flex-col items-center justify-center">
              <div className="absolute w-10 h-10 border border-neutral-300 rounded-full animate-pulse-radar"></div>
              <div className="absolute w-20 h-20 border border-dashed border-neutral-200 rounded-full animate-pulse-radar-slow"></div>
              <span className="w-3 h-3 bg-neutral-900 rounded-full z-10"></span>
              <span className="font-sans font-bold text-xs tracking-widest text-neutral-800 mt-2 uppercase">ARUN'S HQ</span>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="bg-white border border-neutral-200 p-8 md:p-10 rounded-none">
          <div className="flex items-center gap-3 mb-8 border-b border-neutral-100 pb-4">
            <MessageSquare size={20} className="text-neutral-800" />
            <h3 className="font-display font-extrabold text-sm text-neutral-950 uppercase tracking-widest">SEND AN EMAIL MESSAGE</h3>
          </div>

          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-950/5 border border-red-500/20 text-red-600 p-3 rounded-none flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}
            
            {success && (
              <div className="bg-green-950/5 border border-green-500/20 text-green-600 p-3 rounded-none text-xs font-bold uppercase tracking-wider">
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
                placeholder="Jane Doe"
                className="bg-neutral-50 border border-neutral-200 text-neutral-800 p-3 rounded-none text-xs font-semibold tracking-wider uppercase focus:border-neutral-950 transition-colors duration-200 outline-none"
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
                placeholder="jane@example.com"
                className="bg-neutral-50 border border-neutral-200 text-neutral-800 p-3 rounded-none text-xs font-semibold tracking-wider uppercase focus:border-neutral-950 transition-colors duration-200 outline-none"
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
                className="bg-neutral-50 border border-neutral-200 text-neutral-800 p-3 rounded-none text-xs font-semibold tracking-wider uppercase focus:border-neutral-950 transition-colors duration-200 outline-none"
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
                className="bg-neutral-50 border border-neutral-200 text-neutral-800 p-3 rounded-none text-xs font-semibold tracking-wider uppercase focus:border-neutral-950 transition-colors duration-200 outline-none resize-none"
                disabled={loading}
                required
              ></textarea>
            </div>

            <button type="submit" className="w-full justify-center bg-neutral-900 text-white border border-neutral-900 py-3.5 px-8 text-xs font-bold uppercase tracking-widest hover:bg-transparent hover:text-neutral-900 transition-colors duration-300 cursor-pointer mt-2" disabled={loading}>
              {loading ? 'Sending...' : (
                <>
                  Send Message <Send size={14} />
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

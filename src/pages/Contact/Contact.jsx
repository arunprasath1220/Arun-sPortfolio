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
      icon: <Mail size={24} />,
      label: 'EMAIL',
      value: 'hello@arundev.com',
      link: 'mailto:hello@arundev.com',
    },
    {
      icon: <Phone size={24} />,
      label: 'PHONE',
      value: '+1 (555) 019-2834',
      link: 'tel:+15550192834',
    },
    {
      icon: <MapPin size={24} />,
      label: 'LOCATION',
      value: 'San Francisco, CA, USA',
      link: 'https://maps.google.com',
    },
  ];

  return (
    <section id="contact" className="w-full max-w-[1200px] mx-auto px-8 py-24 text-left">
      {/* Header */}
      <div className="mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-text-muted">// GET IN TOUCH</span>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-2">CONTACT ME</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-start text-left">
        {/* Info Column */}
        <div className="flex flex-col gap-8">
          <div className="text-left">
            <h3 className="font-display font-extrabold text-2xl md:text-3xl mb-2 text-white">LET'S START A CONVERSATION</h3>
            <p className="text-base text-text-secondary">Whether you have a specific project in mind, need technical assistance, or simply want to connect, feel free to drop me a message.</p>
          </div>

          <div className="flex flex-col gap-4">
            {contactDetails.map((detail, idx) => (
              <a href={detail.link} key={idx} className="flex items-center gap-5 bg-bg-secondary border border-border-color p-6 rounded-sm hover:border-white hover:translate-x-1 transition-all duration-200" target="_blank" rel="noreferrer">
                <div className="w-12 h-12 bg-bg-tertiary border border-border-color text-white rounded-full flex items-center justify-center">
                  {detail.icon}
                </div>
                <div>
                  <span className="font-mono text-[10px] text-text-muted">{detail.label}</span>
                  <h4 className="text-base md:text-lg font-bold text-white mt-1 leading-snug">{detail.value}</h4>
                </div>
              </a>
            ))}
          </div>

          {/* Minimal B&W Map frame placeholder */}
          <div className="h-[200px] bg-bg-secondary border border-border-color rounded-sm relative overflow-hidden">
            <div className="absolute top-4 left-4 flex flex-col gap-1 z-10">
              <span className="font-mono text-[9px] text-text-muted bg-bg-primary py-1 px-2 rounded-sm border border-border-color">LAT: 37.7749° N</span>
              <span className="font-mono text-[9px] text-text-muted bg-bg-primary py-1 px-2 rounded-sm border border-border-color">LNG: 122.4194° W</span>
            </div>
            
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px] flex flex-col items-center justify-center">
              <div className="absolute w-10 h-10 border border-text-muted rounded-full animate-pulse-radar"></div>
              <div className="absolute w-20 h-20 border border-dashed border-border-color rounded-full animate-pulse-radar-slow"></div>
              <span className="w-3 h-3 bg-white rounded-full z-10"></span>
              <span className="font-display font-bold text-xs tracking-wider text-white mt-2">ARUN'S HQ</span>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="bg-bg-secondary border border-border-color p-8 md:p-12 rounded-sm">
          <div className="flex items-center gap-3 mb-8 border-b border-border-color pb-4">
            <MessageSquare size={20} className="text-white" />
            <h3 className="font-display font-extrabold text-lg text-white">SEND AN EMAIL MESSAGE</h3>
          </div>

          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-950/20 border border-red-500/30 text-red-400 p-3 rounded-sm flex items-center gap-2 text-xs">
                <AlertCircle size={16} />
                <span>{error}</span>
              </div>
            )}
            
            {success && (
              <div className="bg-green-950/20 border border-green-500/30 text-green-400 p-3 rounded-sm text-xs">
                <span>Your message has been sent successfully! I will get back to you shortly.</span>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label htmlFor="user-name" className="text-xs font-semibold text-text-secondary">Your Name *</label>
              <input
                id="user-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="bg-bg-primary border border-border-color text-white p-3 rounded-sm text-sm focus:border-white transition-colors duration-200 outline-none"
                disabled={loading}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="user-email" className="text-xs font-semibold text-text-secondary">Your Email Address *</label>
              <input
                id="user-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@example.com"
                className="bg-bg-primary border border-border-color text-white p-3 rounded-sm text-sm focus:border-white transition-colors duration-200 outline-none"
                disabled={loading}
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="msg-subject" className="text-xs font-semibold text-text-secondary">Subject</label>
              <input
                id="msg-subject"
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="e.g. Design Partnership"
                className="bg-bg-primary border border-border-color text-white p-3 rounded-sm text-sm focus:border-white transition-colors duration-200 outline-none"
                disabled={loading}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="user-message" className="text-xs font-semibold text-text-secondary">Message *</label>
              <textarea
                id="user-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your project details or inquiries..."
                rows="6"
                className="bg-bg-primary border border-border-color text-white p-3 rounded-sm text-sm focus:border-white transition-colors duration-200 outline-none resize-none"
                disabled={loading}
                required
              ></textarea>
            </div>

            <button type="submit" className="w-full justify-center btn-primary form-submit-btn" disabled={loading}>
              {loading ? 'Sending...' : (
                <>
                  Send Message <Send size={16} />
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

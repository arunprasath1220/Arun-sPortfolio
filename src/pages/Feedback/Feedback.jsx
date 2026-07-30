import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, MessageSquare, Quote } from 'lucide-react';

const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      name: 'Sarah Connor',
      role: 'Product Director',
      company: 'Cyberdyne Systems',
      rating: 5,
      text: "Arun delivered our design system ahead of schedule. The code was exceptionally clean and modular, which made integrating it into our primary product flow smooth. His sense of minimalist B&W aesthetics was precisely what our brand needed.",
      initials: 'SC',
    },
    {
      id: 2,
      name: 'Bruce Wayne',
      role: 'Chief Executive',
      company: 'Wayne Enterprises',
      rating: 5,
      text: 'Working with Arun was an absolute pleasure. He understood the requirements perfectly and delivered a high-performance database visualizer that handles real-time updates smoothly. Elegant styling and fast communication.',
      initials: 'BW',
    },
    {
      id: 3,
      name: 'Elena Rostova',
      role: 'Creative Lead',
      company: 'Siberia Digital',
      rating: 4,
      text: "Exceptional UI design and web engineering work. Arun has a rare combination of strong visual styling skills and clean front-end coding capability. Our project performance scores rose by 30% after launch.",
      initials: 'ER',
    },
  ]);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Form state
  const [formName, setFormName] = useState('');
  const [formRole, setFormRole] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [formText, setFormText] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formName.trim() || !formText.trim()) {
      setErrorMsg('Please provide a name and a testimonial message.');
      return;
    }

    const initials = formName
      .split(' ')
      .map((word) => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    const newFeedback = {
      id: Date.now(),
      name: formName,
      role: formRole || 'Professional Client',
      company: formCompany || 'Independent Partner',
      rating: formRating,
      text: formText,
      initials: initials || 'CL',
    };

    setFeedbacks([newFeedback, ...feedbacks]);
    setCurrentIndex(0); // View the new testimonial immediately
    setFormSubmitted(true);
    setErrorMsg('');

    // Reset Form
    setFormName('');
    setFormRole('');
    setFormCompany('');
    setFormRating(5);
    setFormText('');

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  const renderStars = (count) => {
    return Array.from({ length: 5 }).map((_, idx) => (
      <Star
        key={idx}
        size={16}
        fill={idx < count ? 'currentColor' : 'none'}
        className={idx < count ? 'text-white' : 'text-text-muted'}
      />
    ));
  };

  return (
    <section id="feedback" className="w-full max-w-[1200px] mx-auto px-8 py-24 text-left">
      {/* Title */}
      <div className="mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-text-muted">// CLIENT SATISFACTION</span>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-2">FEEDBACK</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-start">
        {/* Testimonial Viewer */}
        <div className="bg-bg-secondary border border-border-color p-8 md:p-14 rounded-sm relative text-left min-h-[450px] flex flex-col justify-between">
          <div className="text-border-color mb-8">
            <Quote size={48} />
          </div>
          
          <div className="flex-1">
            <div className="flex gap-1 mb-6">
              {renderStars(feedbacks[currentIndex].rating)}
            </div>

            <p className="text-xl md:text-2xl text-white font-medium italic leading-relaxed mb-10">
              "{feedbacks[currentIndex].text}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-bg-tertiary border border-border-color text-white flex items-center justify-center font-display font-bold text-sm rounded-full">
                {feedbacks[currentIndex].initials}
              </div>
              <div>
                <h4 className="font-bold text-lg text-white leading-snug">{feedbacks[currentIndex].name}</h4>
                <p className="text-xs text-text-muted">{feedbacks[currentIndex].role}, <span className="text-text-secondary">{feedbacks[currentIndex].company}</span></p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6 mt-8">
            <button className="w-10 h-10 bg-transparent border border-border-color text-white rounded-full flex items-center justify-center cursor-pointer hover:border-white hover:bg-white/5 transition-all duration-200" onClick={handlePrev} aria-label="Previous feedback">
              <ChevronLeft size={20} />
            </button>
            <span className="font-mono text-xs text-text-secondary">
              {currentIndex + 1} / {feedbacks.length}
            </span>
            <button className="w-10 h-10 bg-transparent border border-border-color text-white rounded-full flex items-center justify-center cursor-pointer hover:border-white hover:bg-white/5 transition-all duration-200" onClick={handleNext} aria-label="Next feedback">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Testimonial Submission Form */}
        <div className="bg-bg-secondary border border-border-color p-8 md:p-10 rounded-sm text-left">
          <div className="flex items-center gap-3 mb-8 border-b border-border-color pb-4">
            <MessageSquare size={20} className="text-white" />
            <h3 className="font-display font-extrabold text-lg text-white">LEAVE A TESTIMONIAL</h3>
          </div>
          
          <form className="flex flex-col gap-5" onSubmit={handleFormSubmit}>
            {errorMsg && <div className="bg-red-950/20 border border-red-500/30 text-red-400 p-3 rounded-sm text-xs">{errorMsg}</div>}
            {formSubmitted && (
              <div className="bg-green-950/20 border border-green-500/30 text-green-400 p-3 rounded-sm text-xs">
                Thank you! Your testimonial has been posted to the carousel.
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label htmlFor="client-name" className="text-xs font-semibold text-text-secondary">Name *</label>
              <input
                id="client-name"
                type="text"
                value={formName}
                onChange={(e) => setFormName(e.target.value)}
                placeholder="e.g. Jane Doe"
                className="bg-bg-primary border border-border-color text-white p-3 rounded-sm text-sm focus:border-white transition-colors duration-200 outline-none"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="client-role" className="text-xs font-semibold text-text-secondary">Role</label>
                <input
                  id="client-role"
                  type="text"
                  value={formRole}
                  onChange={(e) => setFormRole(e.target.value)}
                  placeholder="e.g. Design Lead"
                  className="bg-bg-primary border border-border-color text-white p-3 rounded-sm text-sm focus:border-white transition-colors duration-200 outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="client-company" className="text-xs font-semibold text-text-secondary">Company</label>
                <input
                  id="client-company"
                  type="text"
                  value={formCompany}
                  onChange={(e) => setFormCompany(e.target.value)}
                  placeholder="e.g. Google"
                  className="bg-bg-primary border border-border-color text-white p-3 rounded-sm text-sm focus:border-white transition-colors duration-200 outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-text-secondary">Rating</label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    className={`text-text-muted cursor-pointer hover:scale-110 transition-transform duration-200 outline-none ${star <= formRating ? 'text-white' : ''}`}
                    onClick={() => setFormRating(star)}
                    aria-label={`Rate ${star} stars`}
                  >
                    <Star size={20} fill={star <= formRating ? 'currentColor' : 'none'} />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="client-message" className="text-xs font-semibold text-text-secondary">Message *</label>
              <textarea
                id="client-message"
                value={formText}
                onChange={(e) => setFormText(e.target.value)}
                placeholder="Write your testimonial details..."
                rows="4"
                className="bg-bg-primary border border-border-color text-white p-3 rounded-sm text-sm focus:border-white transition-colors duration-200 outline-none resize-none"
                required
              ></textarea>
            </div>

            <button type="submit" className="w-full justify-center btn-primary mt-2">
              Submit Testimonial
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Feedback;

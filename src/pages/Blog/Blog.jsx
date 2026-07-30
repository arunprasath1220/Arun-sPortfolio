import React, { useState } from 'react';
import { Search, Calendar, Clock, ArrowRight, X, BookOpen } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPost, setSelectedPost] = useState(null);

  const categories = [
    { id: 'all', label: 'ALL POSTS' },
    { id: 'dev', label: 'ENGINEERING' },
    { id: 'design', label: 'UI/UX DESIGN' },
    { id: 'growth', label: 'STRATEGY' },
  ];

  const posts = [
    {
      id: 1,
      title: 'THE MINIMALIST CODE: PRINCIPLES OF FUNCTIONAL DESIGN',
      category: 'design',
      categoryLabel: 'UI/UX DESIGN',
      date: 'July 28, 2026',
      readTime: '5 min read',
      summary: 'Explore why reduction is the ultimate sophistication. Design guidelines on white space, geometric layouts, and visual hierarchy.',
      content: `### Why Less is More in Digital Product Design

Design is often thought of as an additive process. We add buttons, menus, popups, and graphics until the screen is full. However, the most successful and premium products take the opposite path. They practice **relentless subtraction**.

#### 1. Visual Focus & Grid Alignments
When you eliminate non-essential decorations, you force the user's attention onto the actual content. A robust grid system acts as the underlying skeleton of your design. By using high-contrast borders (blacks, whites, and greys) instead of colorful boxes, you create a sense of structural clarity.

#### 2. The Power of Empty Space
Whitespace is not "empty" space—it is active design inventory. It provides layout breathing room and separates unrelated concepts. If everything is shouting for attention, nothing is heard.

\`\`\`css
/* Clean Grid Spec */
.grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 1.5rem;
  border: 1px solid var(--border-color);
}
\`\`\`

#### 3. Typography Hierarchy
In B&W design, typography is your primary visual driver. Leverage extreme size variation (e.g. 6rem headings with 1rem body copy) to create structure instantly. Choose font families with strong personalities (like Syne) for titles, and neutral geometric families (like Outfit) for UI controls.`,
    },
    {
      id: 2,
      title: 'OPTIMIZING CORE WEB VITALS FOR MAXIMUM SEARCH RANKING',
      category: 'dev',
      categoryLabel: 'ENGINEERING',
      date: 'June 15, 2026',
      readTime: '8 min read',
      summary: 'A technical deep-dive into script optimization, server rendering patterns, and CSS bundle minimization to score 100/100.',
      content: `### Achieving the 100/100 Performance Score

User experience is directly tied to page loading speeds. Studies show that a 100ms delay in load time can decrease conversion rates by up to 7%. Let's explore the three core pillars of web optimization.

#### 1. Largest Contentful Paint (LCP)
LCP measures how fast the main content of the web page loads. To improve LCP:
- **Defer non-essential scripts**: Load third-party analytics async.
- **Optimize image delivery**: Serve images in modern formats like WebP or AVIF, and set exact widths/heights to avoid layout shifts.
- **Implement Server Rendering**: Deliver raw pre-rendered HTML before hydration.

\`\`\`javascript
// Next.js Dynamic Import Example
import dynamic from 'next/dynamic';
const HeavyVisualComponent = dynamic(() => import('./HeavyVisual'), {
  ssr: false,
  loading: () => <p>Loading visual elements...</p>
});
\`\`\`

#### 2. Cumulative Layout Shift (CLS)
CLS measures visual stability. To maintain 0 CLS, always reserve visual spacing for dynamic blocks (ads, banners, sliders) before they load. Avoid inserting content above existing content unless responding to user action.

#### 3. Interaction to Next Paint (INP)
INP measures page responsiveness to user inputs. Ensure events finish running in under 50ms by breaking long tasks into smaller pieces using requestIdleCallback or setTimeout.`,
    },
    {
      id: 3,
      title: 'BEYOND FIGMA: BRIDGING THE GAP BETWEEN DESIGN AND CODE',
      category: 'growth',
      categoryLabel: 'STRATEGY',
      date: 'May 04, 2026',
      readTime: '6 min read',
      summary: 'Practical workflows for exporting design variables, maintaining naming conventions, and setting responsive grid specs.',
      content: `### The Developer-Designer Handshake

The handoff between design and development is historically a major bottleneck. Visual layouts get lost in translation, grid specs shift, and component styles diverge. Here is a strategy to maintain clean structures across teams.

#### 1. Establish a Token System First
Do not start designing components in Figma or writing CSS rules until you establish global style variables. These tokens should span:
- Color definitions
- Spacing scales (4px, 8px, 12px, 16px, 24px)
- Type sizing presets
- Animation timings

Both Figma styles and CSS custom properties should use identical names (e.g. \`--bg-secondary\`).

#### 2. Design with Component Auto Layout
Ensure your Figma designs use modern layout containers (Auto Layout) rather than absolute coordinates. Auto layout operates on the same mathematical rules as CSS Flexbox. If a designer can structure a box in Figma using auto layout, it translates directly to clean flex/grid styles in React.

#### 3. Run Live Storybook Audits
Storybook acts as a single source of truth where developers and designers can inspect live rendered components in isolation, testing edge cases and verifying usability compliance.`,
    },
  ];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog" className="w-full max-w-[1200px] mx-auto px-8 py-24 text-left">
      {/* Header */}
      <div className="mb-16">
        <span className="font-mono text-xs uppercase tracking-widest text-text-muted">// WRITTEN THOUGHTS</span>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-2">BLOG ARTICLES</h2>
      </div>

      {/* Search & Category Filter Toolbar */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 md:gap-8 mb-12 border-b border-border-color pb-6">
        <div className="relative w-full md:w-80">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-bg-secondary border border-border-color text-white py-3 pl-11 pr-4 rounded-sm text-sm focus:border-white transition-colors duration-200 outline-none"
          />
        </div>

        <div className="flex gap-2 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`text-[10px] font-semibold tracking-wider bg-transparent text-text-secondary border border-border-color py-2 px-4 rounded-sm cursor-pointer hover:text-white hover:border-white hover:bg-white/5 transition-all duration-200 ${
                activeCategory === cat.id ? 'text-white border-white bg-white/5' : ''
              }`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {filteredPosts.length > 0 ? (
          filteredPosts.map(post => (
            <article
              key={post.id}
              className="bg-bg-secondary border border-border-color p-8 rounded-sm cursor-pointer flex flex-col justify-between min-h-[350px] hover:border-white hover:-translate-y-1 transition-all duration-300 group"
              onClick={() => setSelectedPost(post)}
            >
              <div>
                <div className="flex items-center gap-4 flex-wrap mb-6">
                  <span className="font-mono text-[10px] font-bold text-white border border-border-color py-1 px-2.5 rounded-sm bg-white/5">{post.categoryLabel}</span>
                  <span className="flex items-center gap-1.5 text-xs text-text-muted">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1.5 text-xs text-text-muted">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-xl leading-tight mb-4 text-white group-hover:text-neutral-200 transition-colors duration-200">{post.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-8">{post.summary}</p>
              </div>
              
              <div className="border-t border-border-color pt-5">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white">
                  Read Article <ArrowRight size={16} />
                </span>
              </div>
            </article>
          ))
        ) : (
          <div className="col-span-full text-center py-16 border border-dashed border-border-color text-text-secondary">
            <p>No articles match your search or filter requirements.</p>
          </div>
        )}
      </div>

      {/* Blog Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-[2000] flex justify-center items-center p-4 md:p-8 animate-fade-in" onClick={() => setSelectedPost(null)}>
          <div className="relative bg-bg-primary border border-border-color w-full max-w-[800px] max-h-[90vh] overflow-y-auto rounded-sm p-6 md:p-16 animate-scale-in text-left" onClick={(e) => e.stopPropagation()}>
            <button 
              className="absolute top-4 right-4 md:top-6 md:right-6 bg-bg-secondary border border-border-color w-9 h-9 rounded-full flex items-center justify-center cursor-pointer text-white hover:border-white hover:rotate-90 transition-all duration-200 z-10" 
              onClick={() => setSelectedPost(null)}
            >
              <X size={20} />
            </button>

            <header className="border-b border-border-color pb-8 mb-10">
              <span className="font-mono text-xs font-bold tracking-wider text-text-muted">{selectedPost.categoryLabel}</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl mt-2 mb-5 leading-tight">{selectedPost.title}</h2>
              <div className="flex gap-6 text-sm text-text-muted">
                <span className="flex items-center gap-1.5"><Calendar size={14} /> {selectedPost.date}</span>
                <span className="flex items-center gap-1.5"><Clock size={14} /> {selectedPost.readTime}</span>
              </div>
            </header>

            <div className="text-base md:text-lg leading-relaxed text-text-secondary">
              {/* Splitting mock markdown styled paragraphs */}
              {selectedPost.content.split('\n\n').map((block, idx) => {
                if (block.startsWith('### ')) {
                  return <h3 key={idx} className="font-display font-extrabold text-2xl md:text-3xl text-white mt-10 mb-4">{block.replace('### ', '')}</h3>;
                }
                if (block.startsWith('#### ')) {
                  return <h4 key={idx} className="font-display font-bold text-lg md:text-xl text-white mt-8 mb-3">{block.replace('#### ', '')}</h4>;
                }
                if (block.startsWith('```')) {
                  const lines = block.split('\n');
                  const codeLines = lines.slice(1, -1).join('\n');
                  return (
                    <pre key={idx} className="bg-bg-secondary border border-border-color p-6 rounded-sm font-mono text-sm text-white overflow-x-auto my-6">
                      <code>{codeLines}</code>
                    </pre>
                  );
                }
                if (block.startsWith('- ')) {
                  return (
                    <ul key={idx} className="mb-6 pl-6 list-disc">
                      {block.split('\n').map((li, lIdx) => (
                        <li key={lIdx} className="mb-2 text-text-secondary">{li.replace('- ', '')}</li>
                      ))}
                    </ul>
                  );
                }
                return <p key={idx} className="mb-6">{block}</p>;
              })}
            </div>

            <footer className="border-t border-border-color pt-8 mt-12">
              <div className="bg-bg-secondary border border-border-color p-6 rounded-sm flex items-center gap-6">
                <BookOpen size={24} className="text-white" />
                <div>
                  <h4 className="font-bold text-base mb-1 text-white">Finished reading?</h4>
                  <p className="text-xs text-text-muted">Check out our other creative articles or get in touch for custom projects.</p>
                </div>
              </div>
            </footer>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;

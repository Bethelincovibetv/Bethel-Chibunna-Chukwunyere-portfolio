import React, { useEffect, useState } from 'react';
import { Play, X, ExternalLink, Clapperboard, Film, Sparkles, Tag, Building2, Eye } from 'lucide-react';

export interface VideoProject {
  id: string;
  title: string;
  url: string;
  format: 'Video (16:9)' | 'Short (9:16)';
  vertical?: boolean;
  channel: 'Goodgift Digital' | 'bethelincovibe TV';
  client: string;
  category: 'Commercial Ad' | 'Brand Promo' | 'YouTube Short' | 'Event Promo' | 'Marketing Ad';
  description: string;
  tags: string[];
}

const VIDEO_PROJECTS: VideoProject[] = [
  {
    id: '4MTYvYbinvg',
    title: 'DeRoyal Kitchen AI Commercial',
    url: 'https://youtu.be/4MTYvYbinvg',
    format: 'Video (16:9)',
    channel: 'bethelincovibe TV',
    client: 'DeRoyal Kitchen',
    category: 'Commercial Ad',
    description: 'High-converting AI video commercial generated for DeRoyal Kitchen, featuring mouth-watering culinary visual storytelling, motion graphics, and appetizing brand messaging.',
    tags: ['Culinary AI', 'Commercial Ad', 'Food Branding'],
  },
  {
    id: '7vuirYfMSIk',
    title: 'House of Triniks Brand Promo',
    url: 'https://youtu.be/7vuirYfMSIk',
    format: 'Video (16:9)',
    channel: 'bethelincovibe TV',
    client: 'House of Triniks',
    category: 'Brand Promo',
    description: 'Custom AI video promotional content crafted for House of Triniks, highlighting fashion elegance, lifestyle aesthetics, and modern digital branding.',
    tags: ['Fashion & Lifestyle', 'Brand Promo', 'Visual Media'],
  },
  {
    id: '2bLBOlONGl0',
    title: 'WhatsApp Growth Campaign Promo',
    url: 'https://youtu.be/2bLBOlONGl0',
    format: 'Video (16:9)',
    channel: 'bethelincovibe TV',
    client: 'Bethelincovibe Media',
    category: 'Marketing Ad',
    description: 'Engaging AI marketing promo video engineered for audience acquisition, WhatsApp community growth, and digital lead generation.',
    tags: ['Digital Growth', 'Marketing Ad', 'Lead Generation'],
  },
  {
    id: 'GrxILusB2QI',
    title: 'Welcome to Bethelincovibe TV',
    url: 'https://youtu.be/GrxILusB2QI',
    format: 'Video (16:9)',
    channel: 'bethelincovibe TV',
    client: 'Bethelincovibe TV',
    category: 'Brand Promo',
    description: 'Official introduction commercial and brand launch video for Bethelincovibe TV, demonstrating high-impact AI production capabilities.',
    tags: ['Channel Intro', 'Brand Launch', 'Media Showcase'],
  },
  {
    id: 'S2jvVR-lgMM',
    title: 'Amala Sky AI Food Commercial',
    url: 'https://youtu.be/S2jvVR-lgMM',
    format: 'Video (16:9)',
    channel: 'Goodgift Digital',
    client: 'Amala Sky',
    category: 'Commercial Ad',
    description: 'Cinematic AI food commercial produced for Amala Sky restaurant, featuring realistic food renders, rich colors, and compelling customer appeal.',
    tags: ['Restaurant Ad', 'Culinary AI', 'Goodgift Digital'],
  },
  {
    id: 'oyhKc3byjXU',
    title: 'Pruddy Fuddys AI Video Ad',
    url: 'https://youtube.com/shorts/oyhKc3byjXU',
    format: 'Short (9:16)',
    vertical: true,
    channel: 'Goodgift Digital',
    client: 'Pruddy Fuddys',
    category: 'YouTube Short',
    description: 'Vibrant vertical AI video commercial created for Pruddy Fuddys food & beverage brand, optimized for YouTube Shorts and mobile feeds.',
    tags: ['YouTube Short', 'Fruit & Juice Ad', 'Mobile First'],
  },
  {
    id: 'vbKKG2vJgG0',
    title: 'Christ Embassy Admiralty Media Content',
    url: 'https://youtube.com/shorts/vbKKG2vJgG0',
    format: 'Short (9:16)',
    vertical: true,
    channel: 'Goodgift Digital',
    client: 'Christ Embassy Admiralty',
    category: 'Event Promo',
    description: 'Inspiring vertical short-form video produced for Christ Embassy Admiralty event announcements and digital ministry outreach.',
    tags: ['Event Promo', 'YouTube Short', 'Ministry Media'],
  },
  {
    id: 'Nv7I33-aTXk',
    title: 'Pruddy Fuddys Food & Beverage Reel',
    url: 'https://youtube.com/shorts/Nv7I33-aTXk',
    format: 'Short (9:16)',
    vertical: true,
    channel: 'Goodgift Digital',
    client: 'Pruddy Fuddys',
    category: 'YouTube Short',
    description: 'Dynamic short-form reel highlighting Pruddy Fuddys products with punchy editing, upbeat AI audio visualizer feel, and fast pacing.',
    tags: ['Food & Beverage', 'Social Reel', 'Goodgift Digital'],
  },
  {
    id: 'EJDltn5Xpd0',
    title: 'Pruddy Fuddys Client Campaign Short',
    url: 'https://youtube.com/shorts/EJDltn5Xpd0',
    format: 'Short (9:16)',
    vertical: true,
    channel: 'Goodgift Digital',
    client: 'Pruddy Fuddys',
    category: 'YouTube Short',
    description: 'High-converting vertical promotional ad produced for Pruddy Fuddys client campaign, designed to capture immediate mobile viewer attention.',
    tags: ['Commercial Reel', 'Short Form', 'AI Video Ad'],
  },
  {
    id: 'Cab1lW0gpgs',
    title: 'Farm Market Express Commercial Project',
    url: 'https://youtu.be/Cab1lW0gpgs',
    format: 'Video (16:9)',
    channel: 'Goodgift Digital',
    client: 'Farm Market Express',
    category: 'Commercial Ad',
    description: 'Comprehensive commercial project for Farm Market Express, spotlighting fresh agricultural produce, farm-to-table delivery, and e-commerce convenience.',
    tags: ['E-Commerce Ad', 'Agriculture Tech', 'Commercial Project'],
  },
];

interface AIVideoShowcaseProps {
  theme: 'dark' | 'light';
}

export const AIVideoShowcase: React.FC<AIVideoShowcaseProps> = ({ theme }) => {
  const [activeVideo, setActiveVideo] = useState<VideoProject | null>(null);
  const [filter, setFilter] = useState<'All' | 'Videos' | 'Shorts' | 'Commercials'>('All');
  const dark = theme === 'dark';

  useEffect(() => {
    if (!activeVideo) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveVideo(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [activeVideo]);

  const filteredProjects = VIDEO_PROJECTS.filter((v) => {
    if (filter === 'Videos') return !v.vertical;
    if (filter === 'Shorts') return v.vertical;
    if (filter === 'Commercials') return v.category === 'Commercial Ad';
    return true;
  });

  return (
    <section id="ai-video-showcase" className={`py-20 md:py-28 border-t transition-colors ${dark ? 'bg-[#111318] border-[#262A33]' : 'bg-white border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#E67E22] mb-2">
              <span className="w-5 h-0.5 bg-[#E67E22] rounded-full" />
              <span>Creative Media & Video Production</span>
            </div>
            <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-gray-900'}`}>
              AI Video & Commercial Showcase
            </h2>
            <p className={`mt-3 text-base sm:text-lg leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              A curated collection of AI-generated commercials, brand promotional reels, and short-form video ads created for businesses, restaurants, and media platforms under <strong>Goodgift Digital</strong> and <strong>bethelincovibe TV</strong>.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${dark ? 'border-[#30343D] bg-[#191B21] text-gray-300' : 'border-gray-200 bg-gray-50 text-gray-700'}`}>
                <Clapperboard className="w-3.5 h-3.5 text-[#E67E22]" /> 10 Featured Projects
              </span>
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${dark ? 'border-[#30343D] bg-[#191B21] text-gray-300' : 'border-gray-200 bg-gray-50 text-gray-700'}`}>
                <Eye className="w-3.5 h-3.5 text-[#E67E22]" /> In-Portfolio Playback
              </span>
              <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${dark ? 'border-[#30343D] bg-[#191B21] text-gray-300' : 'border-gray-200 bg-gray-50 text-gray-700'}`}>
                <Sparkles className="w-3.5 h-3.5 text-[#E67E22]" /> AI Visual Storytelling
              </span>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {(['All', 'Videos', 'Shorts', 'Commercials'] as const).map((cat) => {
              const active = filter === cat;
              const count = VIDEO_PROJECTS.filter((v) => {
                if (cat === 'Videos') return !v.vertical;
                if (cat === 'Shorts') return v.vertical;
                if (cat === 'Commercials') return v.category === 'Commercial Ad';
                return true;
              }).length;

              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                    active
                      ? 'bg-[#E67E22] text-white shadow-md shadow-[#E67E22]/20'
                      : dark
                      ? 'bg-[#191B21] text-gray-400 hover:text-white hover:bg-[#22252e] border border-[#262A33]'
                      : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200 border border-gray-200'
                  }`}
                >
                  {cat === 'All' ? 'All Content' : cat === 'Videos' ? '16:9 Commercials' : cat === 'Shorts' ? 'YouTube Shorts' : 'Commercial Ads'} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((video, index) => (
            <article
              key={video.id}
              className={`group flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 hover:border-[#E67E22]/60 hover:shadow-xl ${
                dark ? 'bg-[#191B21] border-[#262A33] hover:shadow-black/40' : 'bg-white border-gray-200 shadow-sm hover:shadow-gray-200'
              }`}
            >
              {/* Thumbnail Container */}
              <button
                type="button"
                onClick={() => setActiveVideo(video)}
                aria-label={`Play ${video.title} in portfolio modal`}
                className={`relative block w-full overflow-hidden text-left ${
                  video.vertical ? 'aspect-[9/12]' : 'aspect-video'
                } ${dark ? 'bg-[#0b0c0f]' : 'bg-gray-100'}`}
              >
                <img
                  src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                  alt={`${video.title} video thumbnail`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                
                {/* Channel & Format Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                  <span className="rounded-full bg-black/75 backdrop-blur-md border border-white/10 px-2.5 py-1 text-[10px] font-semibold text-white uppercase tracking-wider">
                    {video.channel}
                  </span>
                  <span className="rounded-full bg-[#E67E22] px-2.5 py-1 text-[10px] font-semibold text-white uppercase tracking-wider">
                    {video.format}
                  </span>
                </div>

                {/* Play Button Overlay */}
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#E67E22] text-white flex items-center justify-center shadow-xl shadow-black/40 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </span>
              </button>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-[#E67E22] mb-1.5">
                    <span>Project {String(index + 1).padStart(2, '0')}</span>
                    <span className="flex items-center gap-1 text-gray-400 font-sans normal-case">
                      <Building2 className="w-3 h-3 text-[#E67E22]" /> {video.client}
                    </span>
                  </div>

                  <h3 className={`text-base font-bold leading-snug ${dark ? 'text-white' : 'text-gray-900'}`}>
                    {video.title}
                  </h3>

                  <p className={`mt-2 text-xs leading-relaxed line-clamp-2 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                    {video.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-gray-100 dark:border-[#262A33]">
                  <div className="flex flex-wrap items-center gap-1.5 mb-3">
                    {video.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-flex items-center gap-1 rounded-md px-2 py-0.5 text-[10px] font-medium ${
                          dark ? 'bg-[#22252e] text-gray-300' : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        <Tag className="w-2.5 h-2.5 text-[#E67E22]" /> {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveVideo(video)}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold bg-[#E67E22] text-white hover:bg-[#D96C12] transition-colors shadow-md shadow-[#E67E22]/15"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" /> Watch Video Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Video Modal Player */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-3 sm:p-6 transition-all"
          role="dialog"
          aria-modal="true"
          aria-label={`Video player: ${activeVideo.title}`}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveVideo(null);
          }}
        >
          <div
            className={`relative w-full max-w-4xl overflow-hidden rounded-2xl border shadow-2xl transition-all ${
              dark ? 'bg-[#15171D] border-[#343741]' : 'bg-white border-gray-200'
            }`}
          >
            {/* Modal Header */}
            <div className={`flex items-center justify-between gap-4 px-5 py-3.5 border-b ${dark ? 'border-[#262A33] bg-[#191B21]' : 'border-gray-200 bg-gray-50'}`}>
              <div className="min-w-0 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#E67E22]/15 border border-[#E67E22]/30 text-[#E67E22] flex items-center justify-center shrink-0">
                  <Film className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-[#E67E22]">
                    {activeVideo.channel} · {activeVideo.category}
                  </p>
                  <h3 className={`truncate text-base font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>
                    {activeVideo.title}
                  </h3>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setActiveVideo(null)}
                aria-label="Close video player"
                className={`shrink-0 rounded-full p-2 transition-colors ${
                  dark ? 'text-gray-300 hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Embed Video Player */}
            <div className={`relative mx-auto ${activeVideo.vertical ? 'max-w-sm aspect-[9/16]' : 'w-full aspect-video'} bg-black`}>
              <iframe
                key={activeVideo.id}
                src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1&rel=0&playsinline=1`}
                title={activeVideo.title}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            {/* Modal Footer & Details */}
            <div className="p-5">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  <span className={`px-2.5 py-1 rounded-md font-medium ${dark ? 'bg-[#22252e] text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                    Client: <strong>{activeVideo.client}</strong>
                  </span>
                  <span className={`px-2.5 py-1 rounded-md font-medium ${dark ? 'bg-[#22252e] text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                    Format: <strong>{activeVideo.format}</strong>
                  </span>
                </div>

                <a
                  href={activeVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E67E22] hover:underline"
                >
                  Watch original on YouTube <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
                {activeVideo.description}
              </p>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                {activeVideo.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium ${
                      dark ? 'bg-[#22252e] text-gray-300 border border-[#30343D]' : 'bg-gray-100 text-gray-700 border border-gray-200'
                    }`}
                  >
                    <Tag className="w-3 h-3 text-[#E67E22]" /> {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};


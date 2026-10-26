import React, { useEffect, useState } from 'react';
import { Play, X, ExternalLink, Clapperboard } from 'lucide-react';

const VIDEO_PROJECTS = [
  { title: 'Featured AI Video 01', id: '4MTYvYbinvg', url: 'https://youtu.be/4MTYvYbinvg', format: 'Video' },
  { title: 'Featured AI Video 02', id: '7vuirYfMSIk', url: 'https://youtu.be/7vuirYfMSIk', format: 'Video' },
  { title: 'Featured AI Video 03', id: '2bLBOlONGl0', url: 'https://youtu.be/2bLBOlONGl0', format: 'Video' },
  { title: 'Featured AI Video 04', id: 'GrxILusB2QI', url: 'https://youtu.be/GrxILusB2QI', format: 'Video' },
  { title: 'Featured AI Video 05', id: 'S2jvVR-lgMM', url: 'https://youtu.be/S2jvVR-lgMM', format: 'Video' },
  { title: 'Short-Form Video 01', id: 'oyhKc3byjXU', url: 'https://youtube.com/shorts/oyhKc3byjXU', vertical: true, format: 'YouTube Short' },
  { title: 'Short-Form Video 02', id: 'vbKKG2vJgG0', url: 'https://youtube.com/shorts/vbKKG2vJgG0', vertical: true, format: 'YouTube Short' },
  { title: 'Short-Form Video 03', id: 'Nv7I33-aTXk', url: 'https://youtube.com/shorts/Nv7I33-aTXk', vertical: true, format: 'YouTube Short' },
  { title: 'Short-Form Video 04', id: 'EJDltn5Xpd0', url: 'https://youtube.com/shorts/EJDltn5Xpd0', vertical: true, format: 'YouTube Short' },
  { title: 'Featured AI Video 06', id: 'Cab1lW0gpgs', url: 'https://youtu.be/Cab1lW0gpgs', format: 'Video' },
];

interface AIVideoShowcaseProps {
  theme: 'dark' | 'light';
}

export const AIVideoShowcase: React.FC<AIVideoShowcaseProps> = ({ theme }) => {
  const [activeVideo, setActiveVideo] = useState<(typeof VIDEO_PROJECTS)[number] | null>(null);
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

  return (
    <section id="ai-video-showcase" className={`py-20 md:py-28 border-t transition-colors ${dark ? 'bg-[#111318] border-[#262A33]' : 'bg-white border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-9">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#E67E22] mb-2">
            <span className="w-5 h-0.5 bg-[#E67E22] rounded-full" />
            <span>Creative work</span>
          </div>
          <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-gray-900'}`}>AI Video Showcase</h2>
          <p className={`mt-3 text-base sm:text-lg leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            Explore selected video projects and short-form content. Choose any thumbnail to watch it here without leaving the portfolio.
          </p>
          <div className={`mt-5 inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs ${dark ? 'border-[#30343D] text-gray-300' : 'border-gray-200 text-gray-600'}`}>
            <Clapperboard className="w-4 h-4 text-[#E67E22]" />
            10 videos · Embedded playback · No page redirect
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VIDEO_PROJECTS.map((video, index) => (
            <article key={video.id} className={`group overflow-hidden rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:border-[#E67E22]/60 ${dark ? 'bg-[#191B21] border-[#262A33]' : 'bg-white border-gray-200 shadow-sm'}`}>
              <button type="button" onClick={() => setActiveVideo(video)} aria-label={`Play ${video.title} in portfolio`} className={`relative block w-full overflow-hidden text-left ${video.vertical ? 'aspect-[9/12]' : 'aspect-video'} ${dark ? 'bg-[#0b0c0f]' : 'bg-gray-100'}`}>
                <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={`${video.title} thumbnail`} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <span className="absolute inset-0 bg-black/15 group-hover:bg-black/35 transition-colors" />
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#E67E22] text-white flex items-center justify-center shadow-lg shadow-black/30 group-hover:scale-105 transition-transform">
                  <Play className="w-6 h-6 fill-current ml-0.5" />
                </span>
                <span className="absolute left-3 top-3 rounded-full bg-black/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white">{video.format}</span>
              </button>
              <div className="p-4">
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#E67E22] mb-1">Project {String(index + 1).padStart(2, '0')}</p>
                <h3 className={`text-sm font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>{video.title}</h3>
                <p className={`mt-2 text-xs leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {video.vertical ? 'A vertical, short-form video featured in the creative portfolio.' : 'A featured video project from the creative portfolio.'} Play it here to explore the work.
                </p>
                <button type="button" onClick={() => setActiveVideo(video)} className="mt-4 inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-xs font-semibold bg-[#E67E22] text-white hover:bg-[#D96C12] transition-colors">
                  <Play className="w-3.5 h-3.5 fill-current" /> Watch on this page
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-3 sm:p-6" role="dialog" aria-modal="true" aria-label={`Video player: ${activeVideo.title}`} onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveVideo(null); }}>
          <div className={`relative w-full max-w-5xl overflow-hidden rounded-2xl border shadow-2xl ${dark ? 'bg-[#15171D] border-[#343741]' : 'bg-white border-gray-200'}`}>
            <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-[#E67E22]">Now playing</p>
                <h3 className={`truncate text-sm sm:text-base font-bold ${dark ? 'text-white' : 'text-gray-900'}`}>{activeVideo.title}</h3>
              </div>
              <button type="button" onClick={() => setActiveVideo(null)} aria-label="Close video player" className={`shrink-0 rounded-full p-2 transition-colors ${dark ? 'text-gray-300 hover:bg-white/10' : 'text-gray-600 hover:bg-gray-100'}`}>
                <X className="w-5 h-5" />
              </button>
            </div>
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
            <div className={`flex flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-5 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              <p className="text-xs">Finished watching? Close the player to keep exploring the portfolio.</p>
              <a href={activeVideo.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E67E22] hover:underline">
                Open original <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

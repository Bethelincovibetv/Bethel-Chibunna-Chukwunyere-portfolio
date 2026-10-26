import React from 'react';
import { Play, ExternalLink } from 'lucide-react';

const VIDEO_PROJECTS = [
  { title: 'AI Video Project 1', id: '4MTYvYbinvg', url: 'https://youtu.be/4MTYvYbinvg' },
  { title: 'AI Video Project 2', id: '7vuirYfMSIk', url: 'https://youtu.be/7vuirYfMSIk' },
  { title: 'AI Video Project 3', id: '2bLBOlONGl0', url: 'https://youtu.be/2bLBOlONGl0' },
  { title: 'AI Video Project 4', id: 'GrxILusB2QI', url: 'https://youtu.be/GrxILusB2QI' },
  { title: 'AI Video Project 5', id: 'S2jvVR-lgMM', url: 'https://youtu.be/S2jvVR-lgMM' },
  { title: 'AI Video Project 6 · Short', id: 'oyhKc3byjXU', url: 'https://youtube.com/shorts/oyhKc3byjXU', vertical: true },
  { title: 'AI Video Project 7 · Short', id: 'vbKKG2vJgG0', url: 'https://youtube.com/shorts/vbKKG2vJgG0', vertical: true },
  { title: 'AI Video Project 8 · Short', id: 'Nv7I33-aTXk', url: 'https://youtube.com/shorts/Nv7I33-aTXk', vertical: true },
  { title: 'AI Video Project 9 · Short', id: 'EJDltn5Xpd0', url: 'https://youtube.com/shorts/EJDltn5Xpd0', vertical: true },
  { title: 'AI Video Project 10', id: 'Cab1lW0gpgs', url: 'https://youtu.be/Cab1lW0gpgs' },
];

interface AIVideoShowcaseProps {
  theme: 'dark' | 'light';
}

export const AIVideoShowcase: React.FC<AIVideoShowcaseProps> = ({ theme }) => (
  <section id="ai-video-showcase" className={`py-20 md:py-28 border-t transition-colors ${theme === 'dark' ? 'bg-[#111318] border-[#262A33]' : 'bg-white border-gray-200'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-9">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#E67E22] mb-2">
          <span className="w-5 h-0.5 bg-[#E67E22] rounded-full" />
          <span>Creative work</span>
        </div>
        <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>AI Video Showcase</h2>
        <p className={`mt-3 text-base sm:text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>A selection of AI video work. Open any video to watch the original on YouTube.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {VIDEO_PROJECTS.map((video, index) => (
          <article key={video.id} className={`group overflow-hidden rounded-2xl border transition-all duration-200 hover:-translate-y-1 hover:border-[#E67E22]/60 ${theme === 'dark' ? 'bg-[#191B21] border-[#262A33]' : 'bg-white border-gray-200 shadow-sm'}`}>
            <a href={video.url} target="_blank" rel="noopener noreferrer" aria-label={`Watch ${video.title} on YouTube`} className={`relative block overflow-hidden ${video.vertical ? 'aspect-[9/12]' : 'aspect-video'} ${theme === 'dark' ? 'bg-[#0b0c0f]' : 'bg-gray-100'}`}>
              <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt={`${video.title} thumbnail`} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <span className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-colors" />
              <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#E67E22] text-white flex items-center justify-center shadow-lg shadow-black/25">
                <Play className="w-5 h-5 fill-current ml-0.5" />
              </span>
            </a>
            <div className="p-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-[#E67E22] mb-1">Video {index + 1}</p>
                <h3 className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{video.title}</h3>
              </div>
              <a href={video.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${video.title} on YouTube`} className="shrink-0 inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold bg-[#E67E22] text-white hover:bg-[#D96C12] transition-colors">
                Watch <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

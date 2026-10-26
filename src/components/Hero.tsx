import React, { useState } from 'react';
import { ArrowDown, ArrowUpRight, Sparkles, Code2, Cpu, Edit3, Check } from 'lucide-react';
import { TranslationDictionary } from '../data/translations';

interface HeroProps {
  theme: 'dark' | 'light';
  profileImage: string;
  onUpdateProfileImage: (url: string) => void;
  t: TranslationDictionary;
}

export const Hero: React.FC<HeroProps> = ({ theme, profileImage, onUpdateProfileImage, t }) => {
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [customImageUrl, setCustomImageUrl] = useState(profileImage);
  const [imageError, setImageError] = useState(false);

  const handleSaveImage = (e: React.FormEvent) => {
    e.preventDefault();
    if (customImageUrl.trim()) {
      onUpdateProfileImage(customImageUrl.trim());
      setIsEditingImage(false);
      setImageError(false);
    }
  };

  const handleScroll = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-20 md:pb-28 overflow-hidden min-h-[90vh] flex flex-col justify-center"
    >
      {/* Abstract Background Ambient Tech Glows */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#E67E22]/15 via-[#F5A623]/10 to-transparent blur-3xl pointer-events-none rounded-full"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#E67E22]/5 blur-3xl pointer-events-none rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Typographic Column (7 cols on lg) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Subtle editorial kicker */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#E67E22]">
              <span className="w-6 h-0.5 bg-[#E67E22] rounded-full" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Bethel's Name Prominently */}
            <div className="space-y-1">
              <span
                className={`text-xs uppercase tracking-widest font-mono font-medium ${
                  theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                }`}
              >
                {t.hero.role}
              </span>
              <h1
                className={`text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.08] ${
                  theme === 'dark' ? 'text-white' : 'text-gray-950'
                }`}
                style={{ textWrap: 'balance' }}
              >
                BETHEL <span className="orange-gradient-text">CHUKWUNYERE</span>
              </h1>
            </div>

            {/* Professional Headline */}
            <p
              className={`text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight leading-snug ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
              }`}
            >
              {t.hero.headline}
            </p>

            {/* Supporting Description */}
            <p
              className={`text-base sm:text-lg leading-relaxed max-w-2xl ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {t.hero.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <button
                onClick={() => handleScroll('#projects')}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-[#E67E22] hover:bg-[#D35400] rounded-xl shadow-md transition-all hover:shadow-[#E67E22]/25 hover:shadow-xl flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E67E22]"
              >
                <span>{t.hero.exploreBtn}</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScroll('#contact')}
                className={`w-full sm:w-auto px-6 py-3.5 text-sm font-semibold rounded-xl border transition-all flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E67E22] ${
                  theme === 'dark'
                    ? 'border-[#2E333F] text-white hover:bg-[#191B21] hover:border-[#E67E22]/50'
                    : 'border-gray-300 text-gray-900 hover:bg-gray-50 hover:border-[#E67E22]'
                }`}
              >
                <span>{t.hero.workTogetherBtn}</span>
                <ArrowUpRight className="w-4 h-4 text-[#E67E22]" />
              </button>
            </div>

            {/* Domain Focus Strip (Clean unboxed text) */}
            <div
              className={`pt-6 border-t w-full flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm font-mono ${
                theme === 'dark' ? 'border-[#262A33] text-gray-400' : 'border-gray-200 text-gray-500'
              }`}
            >
              <span className={`flex items-center gap-1.5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <Code2 className="w-3.5 h-3.5 text-[#E67E22]" />
                {t.hero.webArch}
              </span>
              <span aria-hidden="true" className="text-gray-400">·</span>
              <span className={`flex items-center gap-1.5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <Sparkles className="w-3.5 h-3.5 text-[#E67E22]" />
                {t.hero.aiSolutions}
              </span>
              <span aria-hidden="true" className="text-gray-400">·</span>
              <span className={`flex items-center gap-1.5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                <Cpu className="w-3.5 h-3.5 text-[#E67E22]" />
                {t.hero.prodEng}
              </span>
            </div>
          </div>

          {/* Portrait & Visual Tech Card Column (5 cols on lg) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Outer decorative tech border */}
              <div
                className={`relative rounded-2xl p-2.5 sm:p-3 border transition-all ${
                  theme === 'dark'
                    ? 'bg-[#191B21]/90 border-[#2E333F] shadow-2xl shadow-black/40'
                    : 'bg-white border-gray-200 shadow-xl'
                }`}
              >
                {/* Tech Accent Corner Pins */}
                <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#E67E22] rounded-tl" />
                <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#E67E22] rounded-tr" />
                <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#E67E22] rounded-bl" />
                <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#E67E22] rounded-br" />

                {/* Portrait Container */}
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#111318]">
                  {!imageError ? (
                    <img
                      src={profileImage}
                      alt="Bethel Chukwunyere - Digital Entrepreneur & AI Innovator"
                      className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-[#191B21] text-gray-400">
                      <div className="w-16 h-16 rounded-full bg-[#E67E22]/10 border border-[#E67E22]/30 flex items-center justify-center text-[#E67E22] font-bold text-xl mb-3">
                        BC
                      </div>
                      <p className="text-sm font-semibold text-white">Bethel Chukwunyere</p>
                      <p className="text-xs text-gray-400 mt-1">Founder, Goodgift Digital</p>
                    </div>
                  )}

                  {/* Measured bottom scrim gradient for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  {/* Clean bottom badge on photo */}
                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <p className="text-xs uppercase tracking-wider text-[#F5A623] font-mono font-medium">
                      {t.hero.founder}
                    </p>
                    <p className="text-sm sm:text-base font-bold text-white tracking-tight">
                      Bethel Chukwunyere
                    </p>
                    <p className="text-xs text-gray-300">
                      Goodgift Digital
                    </p>
                  </div>

                  {/* Editable photo button */}
                  <button
                    onClick={() => setIsEditingImage(true)}
                    title={t.hero.changePortrait}
                    className="absolute top-3 right-3 p-2 rounded-lg bg-black/60 backdrop-blur-md text-white/90 hover:text-white hover:bg-black/90 border border-white/10 transition-colors text-xs flex items-center gap-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E67E22]"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span className="sr-only">{t.hero.changePortrait}</span>
                  </button>
                </div>

                {/* Subtitle trust caption below portrait */}
                <div className={`mt-3 px-2 py-1.5 flex items-center justify-between text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  <span className="flex items-center gap-1.5 font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#E67E22]" />
                    {t.hero.buildingVentures}
                  </span>
                  <span className="font-mono text-gray-500">{t.hero.location}</span>
                </div>
              </div>

              {/* Edit Image Modal */}
              {isEditingImage && (
                <div className="absolute inset-0 z-30 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm rounded-2xl">
                  <form
                    onSubmit={handleSaveImage}
                    className="w-full bg-[#191B21] border border-[#2E333F] rounded-xl p-5 shadow-2xl space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-semibold text-white">{t.hero.changePortrait}</h4>
                      <button
                        type="button"
                        onClick={() => setIsEditingImage(false)}
                        className="text-gray-400 hover:text-white text-xs"
                      >
                        Cancel
                      </button>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5">
                        Image URL or Asset Path:
                      </label>
                      <input
                        type="text"
                        value={customImageUrl}
                        onChange={(e) => setCustomImageUrl(e.target.value)}
                        placeholder="/assets/aistudio/... or https://..."
                        className="w-full text-xs px-3 py-2 rounded-lg bg-[#111318] border border-[#2E333F] text-white focus:outline-none focus:border-[#E67E22]"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-2 pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setCustomImageUrl('/assets/aistudio/file_000000006acc8210b65c093f7f3761d9_a2059f14.png');
                        }}
                        className="text-xs text-[#E67E22] hover:underline"
                      >
                        Reset to default
                      </button>
                      <button
                        type="submit"
                        className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#E67E22] hover:bg-[#D35400] rounded-lg transition-colors flex items-center gap-1"
                      >
                        <Check className="w-3.5 h-3.5" />
                        Save Image
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

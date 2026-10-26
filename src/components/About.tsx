import React from 'react';
import { ArrowUpRight, Target, Lightbulb, Compass, ShieldCheck } from 'lucide-react';
import { TranslationDictionary } from '../data/translations';

interface AboutProps {
  theme: 'dark' | 'light';
  profileImage: string;
  t: TranslationDictionary;
}

export const About: React.FC<AboutProps> = ({ theme, profileImage, t }) => {
  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const focusPillars = [
    {
      icon: Target,
      title: t.about.pillar1Title,
      description: t.about.pillar1Desc,
    },
    {
      icon: Lightbulb,
      title: t.about.pillar2Title,
      description: t.about.pillar2Desc,
    },
    {
      icon: Compass,
      title: t.about.pillar3Title,
      description: t.about.pillar3Desc,
    },
  ];

  return (
    <section
      id="about"
      className={`py-20 md:py-28 border-t transition-colors ${
        theme === 'dark' ? 'bg-[#191B21] border-[#262A33]' : 'bg-[#F9FAFB] border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#E67E22] mb-2">
            <span className="w-5 h-0.5 bg-[#E67E22] rounded-full" />
            <span>{t.about.kicker}</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t.about.title}
          </h2>
          <p
            className={`mt-3 text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {t.about.subtitle}
          </p>
        </div>

        {/* 2-Column Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Narrative Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <p
                className={`text-base leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {t.about.para1}
              </p>

              <p
                className={`text-base leading-relaxed ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {t.about.para2}
              </p>
            </div>

            {/* Core Philosophy Callout Card */}
            <div
              className={`p-6 sm:p-7 rounded-2xl border relative overflow-hidden transition-all ${
                theme === 'dark'
                  ? 'bg-[#111318] border-[#2E333F]'
                  : 'bg-white border-gray-200 shadow-sm'
              }`}
            >
              <div className="w-12 h-1 bg-[#E67E22] rounded-full mb-4" />
              <p className="text-xs font-mono uppercase tracking-wider text-[#F5A623] mb-1 font-medium">
                {t.about.philosophyTitle}
              </p>
              <blockquote
                className={`text-lg sm:text-xl font-semibold italic tracking-tight leading-relaxed ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                {t.about.philosophyQuote}
              </blockquote>
              <div className="mt-4 flex items-center justify-between text-xs text-gray-400 font-mono">
                <span>— Bethel Chukwunyere</span>
                <span>Goodgift Digital</span>
              </div>
            </div>

            {/* Direct Link to Contact */}
            <div className="pt-2">
              <button
                onClick={handleContactClick}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#E67E22] hover:bg-[#D35400] rounded-xl transition-all shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E67E22]"
              >
                <span>{t.about.initiateBtn}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Pillars & Profile Summary Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Quick Profile Summary Card with Avatar */}
            <div
              className={`p-5 rounded-2xl border flex items-center gap-4 transition-all ${
                theme === 'dark' ? 'bg-[#111318] border-[#2E333F]' : 'bg-white border-gray-200 shadow-sm'
              }`}
            >
              <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#E67E22]/30 bg-[#191B21]">
                <img
                  src={profileImage}
                  alt="Bethel Chukwunyere"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="min-w-0 flex-1">
                <h4
                  className={`text-sm font-bold tracking-tight truncate ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  Bethel Chukwunyere
                </h4>
                <p className="text-xs text-[#E67E22] font-medium">
                  {t.hero.role}
                </p>
                <div className="mt-1 flex items-center gap-2 text-xs text-gray-400 font-mono">
                  <span>Digital Solutions</span>
                  <span aria-hidden="true">·</span>
                  <span>AI Workflows</span>
                </div>
              </div>
            </div>

            {/* 3 Strategic Focus Cards */}
            <div className="space-y-3.5 flex-1 flex flex-col justify-center">
              {focusPillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className={`p-4 rounded-xl border transition-all ${
                      theme === 'dark'
                        ? 'bg-[#111318]/70 border-[#262A33] hover:border-[#E67E22]/40'
                        : 'bg-white border-gray-200 hover:border-[#E67E22]/50 shadow-sm'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2 rounded-lg bg-[#E67E22]/10 text-[#E67E22] shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <h4
                          className={`text-sm font-semibold tracking-tight ${
                            theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                          }`}
                        >
                          {pillar.title}
                        </h4>
                        <p
                          className={`text-xs mt-1 leading-relaxed ${
                            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                          }`}
                        >
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Authenticity verification note */}
            <div
              className={`p-3.5 rounded-xl border flex items-center gap-2.5 text-xs ${
                theme === 'dark'
                  ? 'bg-[#111318]/40 border-[#262A33] text-gray-400'
                  : 'bg-white border-gray-200 text-gray-600'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-[#E67E22] shrink-0" />
              <span>{t.about.verifNote}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

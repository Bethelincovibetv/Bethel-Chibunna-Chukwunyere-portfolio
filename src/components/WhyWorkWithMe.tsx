import React from 'react';
import { CheckCircle2, Sparkles, Scale, Zap, TrendingUp } from 'lucide-react';
import { PrincipleItem } from '../types/portfolio';
import { TranslationDictionary } from '../data/translations';

interface WhyWorkWithMeProps {
  theme: 'dark' | 'light';
  principles: PrincipleItem[];
  t: TranslationDictionary;
}

export const WhyWorkWithMe: React.FC<WhyWorkWithMeProps> = ({ theme, principles, t }) => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return CheckCircle2;
      case 1:
        return Sparkles;
      case 2:
        return Scale;
      case 3:
        return Zap;
      case 4:
      default:
        return TrendingUp;
    }
  };

  return (
    <section
      id="why-work-with-me"
      className={`py-20 md:py-28 border-t transition-colors ${
        theme === 'dark' ? 'bg-[#191B21] border-[#262A33]' : 'bg-[#F9FAFB] border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#E67E22] mb-2">
            <span className="w-5 h-0.5 bg-[#E67E22] rounded-full" />
            <span>{t.whyWork.kicker}</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            {t.whyWork.title}
          </h2>
          <p
            className={`mt-3 text-base sm:text-lg leading-relaxed ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}
          >
            {t.whyWork.subtitle}
          </p>
        </div>

        {/* 5 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((item, idx) => {
            const Icon = getIcon(idx);
            const translatedItem = t.whyWork.items[String(idx)];

            const title = translatedItem ? translatedItem.title : item.title;
            const description = translatedItem ? translatedItem.description : item.description;
            const highlight = translatedItem ? translatedItem.highlight : item.highlight;

            return (
              <div
                key={idx}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                } ${
                  theme === 'dark'
                    ? 'bg-[#111318] border-[#262A33] hover:border-[#E67E22]/50 hover:shadow-xl'
                    : 'bg-white border-gray-200 hover:border-[#E67E22] hover:shadow-xl shadow-sm'
                }`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-2.5 rounded-xl bg-[#E67E22]/10 text-[#E67E22] shrink-0 border border-[#E67E22]/20">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      className={`text-lg font-bold tracking-tight leading-snug ${
                        theme === 'dark' ? 'text-white' : 'text-gray-950'
                      }`}
                    >
                      {title}
                    </h3>
                  </div>
                </div>

                <p
                  className={`text-xs sm:text-sm leading-relaxed mb-4 ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {description}
                </p>

                {/* Quiet highlight note */}
                <div className="pt-3 border-t border-[#262A33]/80 flex items-center gap-2 text-xs font-mono text-[#F5A623]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22]" />
                  <span>{highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

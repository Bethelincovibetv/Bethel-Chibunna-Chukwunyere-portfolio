import React from 'react';
import { Globe, Sparkles, Smartphone, TrendingUp, Layers, Check, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types/portfolio';
import { TranslationDictionary } from '../data/translations';

interface ServicesProps {
  theme: 'dark' | 'light';
  services: ServiceItem[];
  onSelectService: (serviceName: string) => void;
  t: TranslationDictionary;
}

export const Services: React.FC<ServicesProps> = ({ theme, services, onSelectService, t }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Globe':
        return Globe;
      case 'Sparkles':
        return Sparkles;
      case 'Smartphone':
        return Smartphone;
      case 'TrendingUp':
        return TrendingUp;
      case 'Layers':
      default:
        return Layers;
    }
  };

  const handleServiceSelect = (title: string) => {
    onSelectService(title);
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="services"
      className={`py-20 md:py-28 border-t transition-colors ${
        theme === 'dark' ? 'bg-[#111318] border-[#262A33]' : 'bg-white border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#E67E22] mb-2">
              <span className="w-5 h-0.5 bg-[#E67E22] rounded-full" />
              <span>{t.services.kicker}</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              {t.services.title}
            </h2>
            <p
              className={`mt-3 text-base sm:text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {t.services.subtitle}
            </p>
          </div>

          <div
            className={`hidden md:flex items-center gap-3 text-xs font-mono p-2.5 rounded-xl border ${
              theme === 'dark' ? 'bg-[#191B21] border-[#262A33] text-gray-400' : 'bg-gray-50 border-gray-200 text-gray-600'
            }`}
          >
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              {t.services.prodReadyTag}
            </span>
            <span aria-hidden="true" className="text-gray-600">·</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#E67E22]" />
              {t.services.conceptTag}
            </span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = getIcon(service.icon);
            const isProduction = service.readiness === 'Production Ready';
            const translatedService = t.services.items[service.id];
            
            const title = translatedService ? translatedService.title : service.title;
            const tagline = translatedService ? translatedService.tagline : service.tagline;
            const deliverables = translatedService ? translatedService.deliverables : service.deliverables;

            return (
              <div
                key={service.id}
                className={`flex flex-col justify-between p-6 sm:p-7 rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${
                  index >= 3 ? 'lg:col-span-1' : ''
                } ${
                  theme === 'dark'
                    ? 'bg-[#191B21] border-[#262A33] hover:border-[#E67E22]/50 hover:shadow-xl hover:shadow-black/40'
                    : 'bg-white border-gray-200 hover:border-[#E67E22] hover:shadow-xl shadow-sm'
                }`}
              >
                <div>
                  {/* Card Header Zone with Icon and Readiness Status */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-[#E67E22]/10 text-[#E67E22] border border-[#E67E22]/20">
                      <Icon className="w-6 h-6" />
                    </div>
                    {/* Unboxed / clean status indicator */}
                    <div className="flex items-center gap-1.5 text-xs font-mono font-medium">
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isProduction ? 'bg-emerald-500' : 'bg-[#E67E22]'
                        }`}
                      />
                      <span className={isProduction ? 'text-emerald-500 dark:text-emerald-400' : 'text-[#E67E22] dark:text-[#F5A623]'}>
                        {isProduction ? t.services.prodReadyTag : t.services.conceptTag}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3
                    className={`text-xl font-bold tracking-tight mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-950'
                    }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                  >
                    {tagline}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2.5 mb-8">
                    <p
                      className={`text-xs font-mono uppercase tracking-wider font-medium ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
                      }`}
                    >
                      {t.services.scopeLabel}
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm">
                      {deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check className="w-3.5 h-3.5 text-[#E67E22] mt-0.5 shrink-0" />
                          <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action Button */}
                <div className={`pt-4 border-t border-dashed ${theme === 'dark' ? 'border-[#262A33]' : 'border-gray-200'}`}>
                  <button
                    onClick={() => handleServiceSelect(title)}
                    className={`w-full py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E67E22] ${
                      theme === 'dark'
                        ? 'bg-[#111318] text-gray-200 hover:text-white hover:bg-[#E67E22] border border-[#2E333F]'
                        : 'bg-gray-50 text-gray-800 hover:bg-[#E67E22] hover:text-white border border-gray-200'
                    }`}
                  >
                    <span>{t.services.enquireBtn} {title}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

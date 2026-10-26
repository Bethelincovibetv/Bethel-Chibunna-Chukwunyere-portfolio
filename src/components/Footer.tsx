import React from 'react';
import { ArrowUp, Github, Linkedin, BookOpen } from 'lucide-react';
import { ContactConfig } from '../types/portfolio';
import { TranslationDictionary } from '../data/translations';

interface FooterProps {
  theme: 'dark' | 'light';
  config: ContactConfig;
  onOpenDeploymentGuide: () => void;
  t: TranslationDictionary;
}

export const Footer: React.FC<FooterProps> = ({
  theme,
  config,
  onOpenDeploymentGuide,
  t,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer
      className={`border-t transition-colors ${
        theme === 'dark' ? 'bg-[#0E0F14] border-[#262A33] text-gray-400' : 'bg-gray-100 border-gray-200 text-gray-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between pb-10 border-b border-[#262A33]/70">
          
          {/* Brand & Closing statement */}
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2.5">
              <span className="w-7 h-7 rounded-lg bg-[#E67E22] flex items-center justify-center text-white font-black text-xs shadow-sm">
                B
              </span>
              <span
                className={`text-base font-bold tracking-tight ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
              >
                BETHEL CHUKWUNYERE
              </span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed max-w-md">
              {t.footer.closingText}
            </p>
          </div>

          {/* Quick links & Deployment Guide */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-4">
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
              <button
                onClick={onOpenDeploymentGuide}
                className="flex items-center gap-1.5 text-[#E67E22] hover:text-[#F5A623] transition-colors py-1"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{t.footer.guideLink}</span>
              </button>
            </div>

            {/* Social profiles when configured */}
            <div className="flex items-center gap-3">
              {config.linkedInUrl && (
                <a
                  href={config.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bethel Chukwunyere on LinkedIn"
                  className="p-2 rounded-lg border border-[#262A33] hover:border-[#E67E22] text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {config.gitHubUrl && (
                <a
                  href={config.gitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Bethel Chukwunyere on GitHub"
                  className="p-2 rounded-lg border border-[#262A33] hover:border-[#E67E22] text-gray-400 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {/* Back to top button */}
              <button
                onClick={scrollToTop}
                aria-label="Scroll back to top"
                className="p-2 rounded-lg border border-[#262A33] hover:border-[#E67E22] text-gray-400 hover:text-white transition-colors ml-2"
                title="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <p>© {currentYear} Bethel Chukwunyere. {t.footer.rights}</p>
          <p className="text-gray-500">{t.footer.builtWith}</p>
        </div>
      </div>
    </footer>
  );
};

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowUpRight, Globe } from 'lucide-react';
import { Language, TranslationDictionary } from '../data/translations';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  activeSection: string;
  t: TranslationDictionary;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  toggleTheme,
  language,
  onLanguageChange,
  activeSection,
  t,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.process, href: '#process' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-200 ${
        isScrolled
          ? theme === 'dark'
            ? 'bg-[#111318]/94 backdrop-blur-md border-b border-[#262A33] shadow-lg shadow-black/20 py-3'
            : 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-3'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center justify-between gap-3 sm:gap-6 lg:gap-8 w-full">
          
          {/* Zone 1: Brand Wordmark (Single element) */}
          <a
            href="#"
            className="flex items-center gap-2 sm:gap-2.5 text-sm sm:text-base lg:text-lg font-bold tracking-tight whitespace-nowrap shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E67E22] rounded-md"
          >
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#E67E22] flex items-center justify-center text-white font-black text-xs sm:text-sm shadow-sm group-hover:scale-105 transition-transform">
              B
            </span>
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
              BETHEL <span className="text-[#E67E22]">CHUKWUNYERE</span>
            </span>
          </a>

          {/* Zone 2: Nav Links (Visible on lg screens 1024px+ to ensure zero overflow) */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs xl:text-sm font-medium whitespace-nowrap shrink-0"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors py-1 relative whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E67E22] rounded ${
                    isActive
                      ? 'text-[#E67E22] font-semibold'
                      : theme === 'dark'
                      ? 'text-gray-300 hover:text-white'
                      : 'text-gray-600 hover:text-gray-950'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E67E22] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Controls */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            
            {/* Language Selector Segmented Control */}
            <div
              className={`flex items-center p-0.5 rounded-xl border text-xs font-mono font-medium ${
                theme === 'dark'
                  ? 'bg-[#191B21] border-[#2E333F]'
                  : 'bg-gray-100 border-gray-300'
              }`}
            >
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg transition-all ${
                  language === 'en'
                    ? 'bg-[#E67E22] text-white font-bold shadow-xs'
                    : theme === 'dark'
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                title="Switch language to English"
              >
                EN
              </button>
              <button
                onClick={() => onLanguageChange('fr')}
                className={`px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-lg transition-all ${
                  language === 'fr'
                    ? 'bg-[#E67E22] text-white font-bold shadow-xs'
                    : theme === 'dark'
                    ? 'text-gray-400 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                title="Passer en Français"
              >
                FR
              </button>
            </div>

            {/* Theme Toggle Switch */}
            <button
              onClick={toggleTheme}
              role="switch"
              aria-checked={theme === 'dark'}
              aria-label={`Current theme is ${theme}. Click to switch to ${theme === 'dark' ? 'light' : 'dark'} mode.`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              className={`relative inline-flex items-center h-7 sm:h-8 w-13 sm:w-15 rounded-full p-0.5 sm:p-1 cursor-pointer transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E67E22] ${
                theme === 'dark'
                  ? 'bg-[#191B21] border border-[#2E333F]'
                  : 'bg-amber-50 border border-amber-200'
              }`}
            >
              <span className="sr-only">Toggle theme</span>
              <div className="w-full flex items-center justify-between px-1 text-[10px] pointer-events-none select-none">
                <Sun className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-opacity ${theme === 'light' ? 'text-[#E67E22] opacity-100' : 'text-gray-600 opacity-40'}`} />
                <Moon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 transition-opacity ${theme === 'dark' ? 'text-[#F5A623] opacity-100' : 'text-gray-400 opacity-40'}`} />
              </div>
              <span
                className={`absolute top-0.5 bottom-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full shadow-md flex items-center justify-center transition-transform duration-200 ease-out ${
                  theme === 'dark'
                    ? 'translate-x-6 sm:translate-x-7 bg-[#111318] border border-[#262A33] text-[#F5A623]'
                    : 'translate-x-0 bg-white border border-amber-300 text-[#E67E22]'
                }`}
              >
                {theme === 'dark' ? <Moon className="w-3 h-3 sm:w-3.5 sm:h-3.5" /> : <Sun className="w-3 h-3 sm:w-3.5 sm:h-3.5" />}
              </span>
            </button>

            {/* Primary CTA (Visible on lg screens 1024px+) */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="hidden lg:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs xl:text-sm font-semibold text-white bg-[#E67E22] hover:bg-[#D35400] rounded-lg shadow-sm transition-all hover:shadow-[#E67E22]/20 hover:shadow-lg whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E67E22]"
            >
              <span>{t.nav.letsTalk}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile / Tablet Menu Button (Visible under 1024px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              className={`lg:hidden p-2 rounded-lg border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E67E22] ${
                theme === 'dark'
                  ? 'border-[#262A33] text-gray-300 hover:bg-[#191B21]'
                  : 'border-gray-200 text-gray-700 hover:bg-gray-100'
              }`}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Drawer Menu (Triggered on screens < 1024px) */}
      {mobileMenuOpen && (
        <div
          className={`lg:hidden border-b transition-all px-4 sm:px-6 pt-3 pb-6 shadow-2xl ${
            theme === 'dark'
              ? 'bg-[#111318] border-[#262A33]'
              : 'bg-white border-gray-200'
          }`}
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#E67E22]/10 text-[#E67E22] font-semibold'
                      : theme === 'dark'
                      ? 'text-gray-300 hover:bg-[#191B21] hover:text-white'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            {/* Mobile Controls Row */}
            <div
              className={`mt-3 pt-3 pb-1 border-t space-y-2 px-3 ${
                theme === 'dark' ? 'border-[#262A33]' : 'border-gray-200'
              }`}
            >
              {/* Language Row */}
              <div className="flex items-center justify-between">
                <span className={`text-xs font-medium font-mono flex items-center gap-1.5 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  <Globe className="w-3.5 h-3.5 text-[#E67E22]" />
                  {t.nav.language}
                </span>
                <div className="flex items-center p-0.5 rounded-lg border text-xs font-mono font-bold bg-[#191B21] border-[#2E333F]">
                  <button
                    onClick={() => onLanguageChange('en')}
                    className={`px-2 py-1 rounded ${
                      language === 'en' ? 'bg-[#E67E22] text-white' : 'text-gray-400'
                    }`}
                  >
                    English (EN)
                  </button>
                  <button
                    onClick={() => onLanguageChange('fr')}
                    className={`px-2 py-1 rounded ${
                      language === 'fr' ? 'bg-[#E67E22] text-white' : 'text-gray-400'
                    }`}
                  >
                    Français (FR)
                  </button>
                </div>
              </div>

              {/* Theme Row */}
              <div className="flex items-center justify-between">
                <span className={`text-xs font-medium font-mono ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.nav.appearance} ({theme === 'dark' ? 'Dark' : 'Light'})
                </span>
                <button
                  onClick={toggleTheme}
                  role="switch"
                  aria-checked={theme === 'dark'}
                  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                  className={`relative inline-flex items-center h-7 w-14 rounded-full p-0.5 cursor-pointer transition-colors duration-200 ${
                    theme === 'dark'
                      ? 'bg-[#191B21] border border-[#2E333F]'
                      : 'bg-amber-50 border border-amber-200'
                  }`}
                >
                  <div className="w-full flex items-center justify-between px-1 text-[10px] pointer-events-none">
                    <Sun className={`w-3 h-3 ${theme === 'light' ? 'text-[#E67E22]' : 'text-gray-500'}`} />
                    <Moon className={`w-3 h-3 ${theme === 'dark' ? 'text-[#F5A623]' : 'text-gray-400'}`} />
                  </div>
                  <span
                    className={`absolute top-0.5 bottom-0.5 w-6 h-6 rounded-full shadow flex items-center justify-center transition-transform duration-200 ${
                      theme === 'dark'
                        ? 'translate-x-7 bg-[#111318] border border-[#262A33] text-[#F5A623]'
                        : 'translate-x-0 bg-white border border-amber-300 text-[#E67E22]'
                    }`}
                  >
                    {theme === 'dark' ? <Moon className="w-3 h-3" /> : <Sun className="w-3 h-3" />}
                  </span>
                </button>
              </div>
            </div>

            <div className="pt-3">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-white bg-[#E67E22] hover:bg-[#D35400] rounded-lg transition-colors shadow-sm"
              >
                <span>{t.nav.letsTalk}</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

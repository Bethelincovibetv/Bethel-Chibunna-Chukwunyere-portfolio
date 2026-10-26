import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { AIVideoShowcase } from './components/AIVideoShowcase';
import { WorkProcess } from './components/WorkProcess';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { DeploymentModal } from './components/DeploymentModal';
import {
  INITIAL_CONTACT_CONFIG,
  INITIAL_PROJECTS,
  INITIAL_SERVICES,
  INITIAL_SKILLS,
  WORK_PROCESS_STEPS,
  WHY_WORK_WITH_ME,
} from './data/portfolioData';
import { TRANSLATIONS, Language } from './data/translations';
import { Project, SkillItem, ContactConfig } from './types/portfolio';

export default function App() {
  // Language state: persisted across sessions in localStorage
  const [language, setLanguage] = useState<Language>(() => {
    try {
      const savedLang = localStorage.getItem('bc_language');
      if (savedLang === 'en' || savedLang === 'fr') {
        return savedLang;
      }
    } catch {
      // ignore
    }
    return 'en';
  });

  // Active translation dictionary
  const t = TRANSLATIONS[language];

  // Theme state: dark mode default, persisted across sessions in localStorage
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    try {
      const savedTheme = localStorage.getItem('bc_theme');
      if (savedTheme === 'light' || savedTheme === 'dark') {
        return savedTheme;
      }
    } catch {
      // ignore
    }
    return 'dark';
  });

  // Profile image state with localStorage backup
  const [profileImage, setProfileImage] = useState<string>(() => {
    return (
      localStorage.getItem('bc_profile_image') ||
      '/assets/aistudio/file_000000006acc8210b65c093f7f3761d9_a2059f14.png'
    );
  });

  // Projects state
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('bc_projects');
      if (!saved) return INITIAL_PROJECTS;
      const savedProjects = JSON.parse(saved) as Project[];
      // Refresh official projects while preserving user-created custom projects.
      const refreshedProjects = INITIAL_PROJECTS.map((initialProject) => {
        const savedProject = savedProjects.find((item) => item.id === initialProject.id);
        return savedProject ? { ...savedProject, ...initialProject } : initialProject;
      });
      const customProjects = savedProjects.filter(
        (savedProject) => !INITIAL_PROJECTS.some((initialProject) => initialProject.id === savedProject.id),
      );
      return [...refreshedProjects, ...customProjects];
    } catch {
      return INITIAL_PROJECTS;
    }
  });

  // Skills state
  const [skills, setSkills] = useState<SkillItem[]>(() => {
    try {
      const saved = localStorage.getItem('bc_skills');
      return saved ? JSON.parse(saved) : INITIAL_SKILLS;
    } catch {
      return INITIAL_SKILLS;
    }
  });

  // Contact config state
  const [contactConfig, setContactConfig] = useState<ContactConfig>(() => {
    try {
      const saved = localStorage.getItem('bc_contact_config');
      return saved ? JSON.parse(saved) : INITIAL_CONTACT_CONFIG;
    } catch {
      return INITIAL_CONTACT_CONFIG;
    }
  });

  const [preselectedService, setPreselectedService] = useState<string>('');
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [isDeploymentGuideOpen, setIsDeploymentGuideOpen] = useState(false);

  // Sync theme with HTML root class and save to localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.remove('dark');
      root.classList.add('light');
    } else {
      root.classList.remove('light');
      root.classList.add('dark');
    }
    try {
      localStorage.setItem('bc_theme', theme);
    } catch {
      // ignore
    }
  }, [theme]);

  // Track active section for navbar highlighting
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'services', 'projects', 'process', 'why-work-with-me', 'skills', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('bc_theme', next);
      } catch {
        // ignore
      }
      return next;
    });
  };

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    try {
      localStorage.setItem('bc_language', newLang);
    } catch {
      // ignore
    }
  };

  const handleUpdateProfileImage = (newUrl: string) => {
    setProfileImage(newUrl);
    localStorage.setItem('bc_profile_image', newUrl);
  };

  const handleUpdateProject = (updated: Project) => {
    const next = projects.map((p) => (p.id === updated.id ? updated : p));
    setProjects(next);
    localStorage.setItem('bc_projects', JSON.stringify(next));
  };

  const handleAddProject = (newProject: Project) => {
    const next = [newProject, ...projects];
    setProjects(next);
    localStorage.setItem('bc_projects', JSON.stringify(next));
  };

  const handleUpdateSkills = (updatedSkills: SkillItem[]) => {
    setSkills(updatedSkills);
    localStorage.setItem('bc_skills', JSON.stringify(updatedSkills));
  };

  const handleUpdateContactConfig = (updated: ContactConfig) => {
    setContactConfig(updated);
    localStorage.setItem('bc_contact_config', JSON.stringify(updated));
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        theme === 'dark' ? 'bg-[#111318] text-[#F3F4F6]' : 'bg-[#FAFAFA] text-[#111827]'
      }`}
    >
      {/* 3-Zone Top Bar Navigation with Language & Theme Switches */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        onLanguageChange={handleLanguageChange}
        activeSection={activeSection}
        t={t}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero
          theme={theme}
          profileImage={profileImage}
          onUpdateProfileImage={handleUpdateProfileImage}
          t={t}
        />

        <About
          theme={theme}
          profileImage={profileImage}
          t={t}
        />

        <Services
          theme={theme}
          services={INITIAL_SERVICES}
          onSelectService={(service) => setPreselectedService(service)}
          t={t}
        />

        <Projects
          theme={theme}
          projects={projects}
          onUpdateProject={handleUpdateProject}
          onAddProject={handleAddProject}
          t={t}
        />

        <AIVideoShowcase theme={theme} />

        <WorkProcess
          theme={theme}
          steps={WORK_PROCESS_STEPS}
          t={t}
        />

        <WhyWorkWithMe
          theme={theme}
          principles={WHY_WORK_WITH_ME}
          t={t}
        />

        <Skills
          theme={theme}
          skills={skills}
          onUpdateSkills={handleUpdateSkills}
          t={t}
        />

        <Contact
          theme={theme}
          config={contactConfig}
          onUpdateConfig={handleUpdateContactConfig}
          preselectedService={preselectedService}
          t={t}
        />
      </main>

      {/* Site Footer */}
      <Footer
        theme={theme}
        config={contactConfig}
        onOpenDeploymentGuide={() => setIsDeploymentGuideOpen(true)}
        t={t}
      />

      {/* GitHub & Vercel Deployment Modal */}
      <DeploymentModal
        isOpen={isDeploymentGuideOpen}
        onClose={() => setIsDeploymentGuideOpen(false)}
        theme={theme}
        t={t}
      />
    </div>
  );
}

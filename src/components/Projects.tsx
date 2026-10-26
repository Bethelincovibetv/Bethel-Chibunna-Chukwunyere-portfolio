import React, { useState, useId } from 'react';
import {
  ExternalLink,
  Github,
  ArrowRight,
  Plus,
  Tv,
  Megaphone,
  Bot,
  BarChart3,
  Globe,
  Layers,
  Filter,
  RotateCcw,
} from 'lucide-react';
import { Project, ProjectCategory, ProjectStatus } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { TranslationDictionary } from '../data/translations';

interface ProjectsProps {
  theme: 'dark' | 'light';
  projects: Project[];
  onUpdateProject: (updated: Project) => void;
  onAddProject: (newProject: Project) => void;
  t: TranslationDictionary;
}

export const Projects: React.FC<ProjectsProps> = ({
  theme,
  projects,
  onUpdateProject,
  onAddProject,
  t,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const filterDropdownId = useId();

  const categories: ProjectCategory[] = [
    'All',
    'Digital Agency',
    'Digital Business Platform',
    'Advertising Technology',
    'AI Business Tools',
    'Business Analytics',
    'Apps & Digital Projects',
  ];

  // Lead with completed, live work; keep featured projects ahead within each status.
  const orderedProjects = [...projects].sort((a, b) => {
    const statusRank: Record<ProjectStatus, number> = { Live: 0, 'In Development': 1, Concept: 2 };
    const statusDifference = statusRank[a.status] - statusRank[b.status];
    if (statusDifference !== 0) return statusDifference;
    if (Boolean(a.featured) !== Boolean(b.featured)) return a.featured ? -1 : 1;
    return 0;
  });

  const filteredProjects =
    selectedCategory === 'All'
      ? orderedProjects
      : orderedProjects.filter((p) => p.category === selectedCategory);

  const getCategoryCount = (cat: ProjectCategory) => {
    if (cat === 'All') return projects.length;
    return projects.filter((p) => p.category === cat).length;
  };

  const getCategoryIcon = (category: ProjectCategory) => {
    switch (category) {
      case 'Digital Agency':
        return Globe;
      case 'Digital Business Platform':
        return Tv;
      case 'Advertising Technology':
        return Megaphone;
      case 'AI Business Tools':
        return Bot;
      case 'Business Analytics':
        return BarChart3;
      default:
        return Layers;
    }
  };

  const getStatusBadge = (status: ProjectStatus) => {
    const statusLabel = t.projects.statuses[status] || status;
    switch (status) {
      case 'Live':
        return (
          <span className="flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-500 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {statusLabel}
          </span>
        );
      case 'In Development':
        return (
          <span className="flex items-center gap-1.5 text-xs font-mono font-medium text-[#E67E22] dark:text-[#F5A623]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E67E22]" />
            {statusLabel}
          </span>
        );
      case 'Concept':
      default:
        return (
          <span className="flex items-center gap-1.5 text-xs font-mono font-medium text-blue-600 dark:text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            {statusLabel}
          </span>
        );
    }
  };

  const handleAddNewProject = () => {
    const newProj: Project = {
      id: `custom-project-${Date.now()}`,
      title: 'New Digital Initiative',
      category: 'Digital Agency',
      projectType: 'Personal Venture',
      status: 'Concept',
      description: 'A new digital venture or prototype focused on business expansion and technological utility.',
      detailedDescription: 'Detailed architectural specs, target users, and technical deliverables.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS'],
      image: '',
      highlights: ['Initial problem discovery', 'Architecture mapping'],
    };
    onAddProject(newProj);
    setActiveModalProject(newProj);
  };

  return (
    <section
      id="projects"
      className={`py-20 md:py-28 border-t transition-colors ${
        theme === 'dark' ? 'bg-[#191B21] border-[#262A33]' : 'bg-[#F9FAFB] border-gray-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#E67E22] mb-2">
              <span className="w-5 h-0.5 bg-[#E67E22] rounded-full" />
              <span>{t.projects.kicker}</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              {t.projects.title}
            </h2>
            <p
              className={`mt-3 text-base sm:text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {t.projects.subtitle}
            </p>
          </div>

          {/* Quick Add Project action */}
          <button
            onClick={handleAddNewProject}
            className={`hidden self-start md:self-auto inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-colors ${
              theme === 'dark'
                ? 'border-[#2E333F] text-gray-300 hover:text-white hover:bg-[#111318]'
                : 'border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Plus className="w-3.5 h-3.5 text-[#E67E22]" />
            <span>{t.projects.addVentureBtn}</span>
          </button>
        </div>

        {/* Dual Filtering Mechanism */}
        <div
          className={`p-3.5 sm:p-4 rounded-2xl border mb-8 transition-colors ${
            theme === 'dark'
              ? 'bg-[#111318] border-[#262A33]'
              : 'bg-white border-gray-200 shadow-sm'
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Category Dropdown Select */}
            <div className="flex items-center gap-2.5">
              <label
                htmlFor={filterDropdownId}
                className="flex items-center gap-1.5 text-xs font-mono font-medium shrink-0 text-gray-400 dark:text-gray-400"
              >
                <Filter className="w-3.5 h-3.5 text-[#E67E22]" />
                <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                  {t.projects.filterLabel}
                </span>
              </label>
              <div className="relative min-w-[200px] sm:min-w-[240px]">
                <select
                  id={filterDropdownId}
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value as ProjectCategory)}
                  className={`w-full text-xs font-medium py-2 pl-3 pr-8 rounded-xl border transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#E67E22] ${
                    theme === 'dark'
                      ? 'bg-[#191B21] border-[#2E333F] text-white hover:border-[#E67E22]/60'
                      : 'bg-gray-50 border-gray-300 text-gray-900 hover:border-gray-400'
                  }`}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {t.projects.categories[cat] || cat} ({getCategoryCount(cat)})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Live Filter Summary */}
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                {t.projects.showingText} <strong className="text-[#E67E22]">{filteredProjects.length}</strong> {t.projects.ofText}{' '}
                {projects.length} {projects.length === 1 ? t.projects.ventureText : t.projects.venturesText}
              </span>
              {selectedCategory !== 'All' && (
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="flex items-center gap-1 text-xs text-[#E67E22] hover:text-[#D35400] font-medium transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>{t.projects.resetFilter}</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Buttons */}
          <div className="mt-3.5 pt-3 border-t border-[#262A33]/50 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              const count = getCategoryCount(cat);
              const label = t.projects.categories[cat] || cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-xl whitespace-nowrap transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E67E22] flex items-center gap-1.5 ${
                    isSelected
                      ? 'bg-[#E67E22] text-white shadow-sm font-semibold'
                      : theme === 'dark'
                      ? 'bg-[#191B21] text-gray-400 hover:text-white border border-[#262A33]'
                      : 'bg-gray-100 text-gray-700 hover:text-gray-950 border border-gray-200'
                  }`}
                >
                  <span>{label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      isSelected
                        ? 'bg-black/25 text-white'
                        : theme === 'dark'
                        ? 'bg-[#111318] text-gray-400'
                        : 'bg-white text-gray-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-project-fade"
          >
            {filteredProjects.map((project) => {
              const Icon = getCategoryIcon(project.category);
              const categoryLabel = t.projects.categories[project.category] || project.category;

              return (
                <div
                  key={project.id}
                  className={`flex flex-col justify-between rounded-2xl border transition-all duration-200 hover:-translate-y-1 ${
                    theme === 'dark'
                      ? 'bg-[#111318] border-[#262A33] hover:border-[#E67E22]/50 hover:shadow-xl hover:shadow-black/50'
                      : 'bg-white border-gray-200 hover:border-[#E67E22] hover:shadow-xl shadow-sm'
                  }`}
                >
                  {/* Visual Preview Area */}
                  <div
                    className={`relative aspect-[16/10] overflow-hidden rounded-t-2xl border-b flex flex-col justify-between p-5 ${
                      theme === 'dark'
                        ? 'bg-[#16181F] border-[#262A33]/50'
                        : 'bg-gray-100/80 border-gray-200'
                    }`}
                  >
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 opacity-10 bg-[radial-gradient(#E67E22_1px,transparent_1px)] [background-size:16px_16px]"
                    />

                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-[#E67E22]/15 text-[#E67E22] border border-[#E67E22]/30">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className={`text-xs font-mono ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                          {categoryLabel}
                        </span>
                      </div>
                      {getStatusBadge(project.status)}
                    </div>

                    <div className="relative z-10 mt-auto">
                      <span className={`text-xs uppercase tracking-wider font-mono ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        {project.projectType}
                      </span>
                      <h3
                        className={`text-lg font-bold tracking-tight mt-0.5 ${
                          theme === 'dark' ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <p
                        className={`text-xs sm:text-sm leading-relaxed line-clamp-3 ${
                          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                        }`}
                      >
                        {project.description}
                      </p>

                      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-gray-400 pt-1">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <React.Fragment key={tech}>
                            <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{tech}</span>
                            {i < Math.min(project.technologies.length, 4) - 1 && (
                              <span className="text-gray-400">·</span>
                            )}
                          </React.Fragment>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-[#E67E22]">+{project.technologies.length - 4}</span>
                        )}
                      </div>
                    </div>

                    {/* Action Row */}
                    <div
                      className={`pt-4 border-t flex items-center justify-between gap-3 ${
                        theme === 'dark' ? 'border-[#262A33]' : 'border-gray-200'
                      }`}
                    >
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#E67E22] hover:text-[#F5A623] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E67E22] rounded py-1"
                      >
                        <span>{t.projects.exploreBtn}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="flex items-center gap-2">
                        {project.demoUrl ? (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live demo for ${project.title}`}
                            className={`p-1.5 rounded-lg border transition-colors ${
                              theme === 'dark'
                                ? 'border-[#262A33] text-gray-400 hover:text-white hover:bg-[#191B21]'
                                : 'border-gray-200 text-gray-600 hover:text-gray-950 hover:bg-gray-100'
                            }`}
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        ) : null}

                        {project.repoUrl ? (
                          <a
                            href={project.repoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Source repository for ${project.title}`}
                            className={`p-1.5 rounded-lg border transition-colors ${
                              theme === 'dark'
                                ? 'border-[#262A33] text-gray-400 hover:text-white hover:bg-[#191B21]'
                                : 'border-gray-200 text-gray-600 hover:text-gray-950 hover:bg-gray-100'
                            }`}
                          >
                            <Github className="w-3.5 h-3.5" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty state */
          <div
            className={`p-12 text-center rounded-2xl border ${
              theme === 'dark' ? 'bg-[#111318] border-[#262A33]' : 'bg-white border-gray-200 shadow-sm'
            }`}
          >
            <Layers className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <h3 className={`text-base font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              {t.projects.noProjectsFound}
            </h3>
            <p className="text-xs text-gray-400 mt-1 mb-4">
              {t.projects.noProjectsDesc}
            </p>
            <button
              onClick={() => setSelectedCategory('All')}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#E67E22] hover:bg-[#D35400] rounded-xl transition-colors"
            >
              {t.projects.showAllBtn}
            </button>
          </div>
        )}

        {/* Modal */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          theme={theme}
          onUpdateProject={(updated) => {
            onUpdateProject(updated);
            setActiveModalProject(updated);
          }}
          t={t}
        />
      </div>
    </section>
  );
};

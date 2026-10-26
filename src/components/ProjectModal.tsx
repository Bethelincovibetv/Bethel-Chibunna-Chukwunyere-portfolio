import React, { useState } from 'react';
import { X, ExternalLink, Github, Edit3, Check } from 'lucide-react';
import { Project, ProjectStatus } from '../types/portfolio';
import { TranslationDictionary } from '../data/translations';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  theme: 'dark' | 'light';
  onUpdateProject: (updated: Project) => void;
  t: TranslationDictionary;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  theme,
  onUpdateProject,
  t,
}) => {
  if (!project) return null;

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<Project>({ ...project });

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProject(formData);
    setIsEditing(false);
  };

  const getStatusColor = (status: ProjectStatus) => {
    switch (status) {
      case 'Live':
        return theme === 'dark'
          ? 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
          : 'text-emerald-700 bg-emerald-50 border-emerald-200';
      case 'In Development':
        return theme === 'dark'
          ? 'text-[#F5A623] bg-[#E67E22]/10 border-[#E67E22]/20'
          : 'text-amber-800 bg-amber-50 border-amber-200';
      case 'Concept':
      default:
        return theme === 'dark'
          ? 'text-blue-400 bg-blue-500/10 border-blue-500/20'
          : 'text-blue-700 bg-blue-50 border-blue-200';
    }
  };

  const statusText = t.projects.statuses[project.status] || project.status;
  const categoryText = t.projects.categories[project.category] || project.category;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div
        className={`relative w-full max-w-2xl rounded-2xl border shadow-2xl overflow-hidden transition-all my-8 ${
          theme === 'dark' ? 'bg-[#191B21] border-[#2E333F]' : 'bg-white border-gray-200'
        }`}
      >
        {/* Modal Header */}
        <div
          className={`flex items-center justify-between px-6 py-4 border-b ${
            theme === 'dark' ? 'border-[#262A33]' : 'border-gray-200'
          }`}
        >
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className={`px-2 py-0.5 rounded-md border font-medium ${getStatusColor(project.status)}`}>
              {statusText}
            </span>
            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-400'}>·</span>
            <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>{project.projectType}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className={`p-1.5 rounded-lg border text-xs flex items-center gap-1.5 transition-colors ${
                isEditing
                  ? 'bg-[#E67E22] text-white border-[#E67E22]'
                  : theme === 'dark'
                  ? 'border-[#262A33] text-gray-300 hover:text-white hover:bg-[#111318]'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Edit3 className="w-3.5 h-3.5" />
              <span className="text-xs">{isEditing ? t.projectModal.cancelEditBtn : t.projectModal.editBtn}</span>
            </button>

            <button
              onClick={onClose}
              aria-label="Close dialog"
              className={`p-1.5 rounded-lg border transition-colors ${
                theme === 'dark'
                  ? 'border-[#262A33] text-gray-400 hover:text-white hover:bg-[#111318]'
                  : 'border-gray-300 text-gray-500 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[75vh] overflow-y-auto">
          {isEditing ? (
            /* Form */
            <form onSubmit={handleSave} className="space-y-4">
              <div>
                <label className={`block text-xs font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.projectModal.projectTitle}
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className={`w-full text-sm px-3 py-2 rounded-lg border focus:outline-none focus:border-[#E67E22] ${
                    theme === 'dark'
                      ? 'bg-[#111318] border-[#2E333F] text-white'
                      : 'bg-gray-50 border-gray-300 text-gray-900'
                  }`}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.projectModal.statusLabel}
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as ProjectStatus })}
                    className={`w-full text-xs px-3 py-2 rounded-lg border focus:outline-none focus:border-[#E67E22] ${
                      theme === 'dark'
                        ? 'bg-[#111318] border-[#2E333F] text-white'
                        : 'bg-gray-50 border-gray-300 text-gray-900'
                    }`}
                  >
                    <option value="Concept">Concept</option>
                    <option value="In Development">In Development</option>
                    <option value="Live">Live</option>
                  </select>
                </div>

                <div>
                  <label className={`block text-xs font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.projectModal.classificationLabel}
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        projectType: e.target.value as 'Client Project' | 'Personal Venture' | 'Concept Prototype',
                      })
                    }
                    className={`w-full text-xs px-3 py-2 rounded-lg border focus:outline-none focus:border-[#E67E22] ${
                      theme === 'dark'
                        ? 'bg-[#111318] border-[#2E333F] text-white'
                        : 'bg-gray-50 border-gray-300 text-gray-900'
                    }`}
                  >
                    <option value="Personal Venture">Personal Venture</option>
                    <option value="Concept Prototype">Concept Prototype</option>
                    <option value="Client Project">Client Project</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={`block text-xs font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.projectModal.shortDesc}
                </label>
                <textarea
                  rows={2}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className={`w-full text-xs px-3 py-2 rounded-lg border focus:outline-none focus:border-[#E67E22] ${
                    theme === 'dark'
                      ? 'bg-[#111318] border-[#2E333F] text-white'
                      : 'bg-gray-50 border-gray-300 text-gray-900'
                  }`}
                  required
                />
              </div>

              <div>
                <label className={`block text-xs font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.projectModal.detailedNotes}
                </label>
                <textarea
                  rows={3}
                  value={formData.detailedDescription || ''}
                  onChange={(e) => setFormData({ ...formData, detailedDescription: e.target.value })}
                  className={`w-full text-xs px-3 py-2 rounded-lg border focus:outline-none focus:border-[#E67E22] ${
                    theme === 'dark'
                      ? 'bg-[#111318] border-[#2E333F] text-white'
                      : 'bg-gray-50 border-gray-300 text-gray-900'
                  }`}
                />
              </div>

              <div>
                <label className={`block text-xs font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t.projectModal.techLabel}
                </label>
                <input
                  type="text"
                  value={formData.technologies.join(', ')}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      technologies: e.target.value.split(',').map((s) => s.trim()).filter(Boolean),
                    })
                  }
                  className={`w-full text-xs px-3 py-2 rounded-lg border focus:outline-none focus:border-[#E67E22] ${
                    theme === 'dark'
                      ? 'bg-[#111318] border-[#2E333F] text-white'
                      : 'bg-gray-50 border-gray-300 text-gray-900'
                  }`}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-xs font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.projectModal.demoUrlLabel}
                  </label>
                  <input
                    type="url"
                    value={formData.demoUrl || ''}
                    placeholder="https://..."
                    onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                    className={`w-full text-xs px-3 py-2 rounded-lg border focus:outline-none focus:border-[#E67E22] ${
                      theme === 'dark'
                        ? 'bg-[#111318] border-[#2E333F] text-white'
                        : 'bg-gray-50 border-gray-300 text-gray-900'
                    }`}
                  />
                </div>

                <div>
                  <label className={`block text-xs font-medium mb-1 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t.projectModal.repoUrlLabel}
                  </label>
                  <input
                    type="url"
                    value={formData.repoUrl || ''}
                    placeholder="https://github.com/..."
                    onChange={(e) => setFormData({ ...formData, repoUrl: e.target.value })}
                    className={`w-full text-xs px-3 py-2 rounded-lg border focus:outline-none focus:border-[#E67E22] ${
                      theme === 'dark'
                        ? 'bg-[#111318] border-[#2E333F] text-white'
                        : 'bg-gray-50 border-gray-300 text-gray-900'
                    }`}
                  />
                </div>
              </div>

              <div
                className={`flex justify-end gap-2 pt-3 border-t ${
                  theme === 'dark' ? 'border-[#262A33]' : 'border-gray-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className={`px-4 py-2 text-xs font-medium ${
                    theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {t.projectModal.cancelBtn}
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-semibold text-white bg-[#E67E22] hover:bg-[#D35400] rounded-lg flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  {t.projectModal.saveChangesBtn}
                </button>
              </div>
            </form>
          ) : (
            /* View Mode */
            <div className="space-y-6">
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-[#E67E22] mb-1 font-medium">
                  {categoryText}
                </p>
                <h3
                  id="project-modal-title"
                  className={`text-2xl font-bold tracking-tight ${
                    theme === 'dark' ? 'text-white' : 'text-gray-950'
                  }`}
                >
                  {project.title}
                </h3>
              </div>

              {/* Project Description */}
              <div className="space-y-3">
                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {project.description}
                </p>
                {project.detailedDescription && (
                  <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {project.detailedDescription}
                  </p>
                )}
              </div>

              {/* Scope & Highlights if present */}
              {project.highlights && project.highlights.length > 0 && (
                <div
                  className={`p-4 rounded-xl border ${
                    theme === 'dark' ? 'bg-[#111318] border-[#262A33]' : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <p
                    className={`text-xs font-mono uppercase tracking-wider mb-2 font-medium ${
                      theme === 'dark' ? 'text-[#F5A623]' : 'text-[#E67E22]'
                    }`}
                  >
                    {t.projectModal.highlightsTitle}
                  </p>
                  <ul className="space-y-1.5 text-xs">
                    {project.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                      >
                        <span className="text-[#E67E22] mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies Used */}
              <div>
                <p
                  className={`text-xs font-mono uppercase tracking-wider mb-2 font-medium ${
                    theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {t.projectModal.techTitle}
                </p>
                <div
                  className={`flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {project.technologies.map((tech, index) => (
                    <React.Fragment key={tech}>
                      <span className="text-[#E67E22] font-semibold">{tech}</span>
                      {index < project.technologies.length - 1 && (
                        <span className={theme === 'dark' ? 'text-gray-600' : 'text-gray-400'}>·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* External Links */}
              <div
                className={`flex flex-wrap items-center gap-3 pt-3 border-t ${
                  theme === 'dark' ? 'border-[#262A33]' : 'border-gray-200'
                }`}
              >
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#E67E22] hover:bg-[#D35400] rounded-lg transition-colors shadow-sm"
                  >
                    <span>{t.projectModal.viewDemoBtn}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : null}

                {project.repoUrl ? (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg border transition-colors ${
                      theme === 'dark'
                        ? 'border-[#2E333F] text-gray-200 hover:text-white hover:bg-[#111318]'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>{t.projectModal.sourceRepoBtn}</span>
                  </a>
                ) : null}

                {!project.demoUrl && !project.repoUrl && (
                  <p className="text-xs font-mono text-gray-500 italic">
                    {t.projectModal.demoReservedText}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

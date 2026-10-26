import React, { useState } from 'react';
import { Cpu, Cloud, Database, Layout, Plus, Trash2, Edit3, Check } from 'lucide-react';
import { SkillItem } from '../types/portfolio';
import { TranslationDictionary } from '../data/translations';

interface SkillsProps {
  theme: 'dark' | 'light';
  skills: SkillItem[];
  onUpdateSkills: (updatedSkills: SkillItem[]) => void;
  t: TranslationDictionary;
}

export const Skills: React.FC<SkillsProps> = ({ theme, skills, onUpdateSkills, t }) => {
  const [isManaging, setIsManaging] = useState(false);
  const [editingList, setEditingList] = useState<SkillItem[]>([...skills]);
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillCategory, setNewSkillCategory] = useState<SkillItem['category']>('AI & Platforms');
  const [newSkillDesc, setNewSkillDesc] = useState('');

  const categories: Array<SkillItem['category']> = [
    'AI & Platforms',
    'Deployment & Cloud',
    'Web & Frontend',
    'Backend & Data',
  ];

  const getCategoryIcon = (category: SkillItem['category']) => {
    switch (category) {
      case 'AI & Platforms':
        return Cpu;
      case 'Deployment & Cloud':
        return Cloud;
      case 'Backend & Data':
        return Database;
      case 'Web & Frontend':
      default:
        return Layout;
    }
  };

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;

    const newSkill: SkillItem = {
      name: newSkillName.trim(),
      category: newSkillCategory,
      description: newSkillDesc.trim() || 'Modern technology platform and development tool.',
    };

    const updated = [...editingList, newSkill];
    setEditingList(updated);
    setNewSkillName('');
    setNewSkillDesc('');
  };

  const handleDeleteSkill = (name: string) => {
    setEditingList(editingList.filter((s) => s.name !== name));
  };

  const handleSaveAll = () => {
    onUpdateSkills(editingList);
    setIsManaging(false);
  };

  return (
    <section
      id="skills"
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
              <span>{t.skills.kicker}</span>
            </div>
            <h2
              className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              {t.skills.title}
            </h2>
            <p
              className={`mt-3 text-base sm:text-lg leading-relaxed ${
                theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
              }`}
            >
              {t.skills.subtitle}
            </p>
          </div>

          {/* Manage Skills Button */}
          <button
            onClick={() => {
              setEditingList([...skills]);
              setIsManaging(!isManaging);
            }}
            className={`self-start md:self-auto inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-colors ${
              isManaging
                ? 'bg-[#E67E22] text-white border-[#E67E22]'
                : theme === 'dark'
                ? 'border-[#2E333F] text-gray-300 hover:text-white hover:bg-[#191B21]'
                : 'border-gray-300 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>{isManaging ? t.skills.closeEditorBtn : t.skills.customizeBtn}</span>
          </button>
        </div>

        {/* Skill Manager Panel */}
        {isManaging && (
          <div
            className={`mb-12 p-6 rounded-2xl border transition-all ${
              theme === 'dark' ? 'bg-[#191B21] border-[#2E333F]' : 'bg-gray-50 border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#262A33]">
              <h3 className="text-sm font-bold text-white">{t.skills.liveCustomizerTitle}</h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsManaging(false)}
                  className="px-3 py-1.5 text-xs text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveAll}
                  className="px-3.5 py-1.5 text-xs font-semibold text-white bg-[#E67E22] hover:bg-[#D35400] rounded-lg flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  Save Skills
                </button>
              </div>
            </div>

            {/* Add new skill inline */}
            <form onSubmit={handleAddSkill} className="grid grid-cols-1 sm:grid-cols-12 gap-3 mb-6">
              <div className="sm:col-span-4">
                <input
                  type="text"
                  placeholder={t.skills.addSkillPlaceholder}
                  value={newSkillName}
                  onChange={(e) => setNewSkillName(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-lg bg-[#111318] border border-[#2E333F] text-white focus:outline-none focus:border-[#E67E22]"
                />
              </div>
              <div className="sm:col-span-3">
                <select
                  value={newSkillCategory}
                  onChange={(e) => setNewSkillCategory(e.target.value as SkillItem['category'])}
                  className="w-full text-xs px-3 py-2 rounded-lg bg-[#111318] border border-[#2E333F] text-white focus:outline-none focus:border-[#E67E22]"
                >
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {t.skills.categories[c] || c}
                    </option>
                  ))}
                </select>
              </div>
              <div className="sm:col-span-4">
                <input
                  type="text"
                  placeholder="Short Description"
                  value={newSkillDesc}
                  onChange={(e) => setNewSkillDesc(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-lg bg-[#111318] border border-[#2E333F] text-white focus:outline-none focus:border-[#E67E22]"
                />
              </div>
              <div className="sm:col-span-1">
                <button
                  type="submit"
                  className="w-full h-full py-2 px-3 text-xs font-semibold text-white bg-[#E67E22] hover:bg-[#D35400] rounded-lg flex items-center justify-center"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>

            <div className="flex flex-wrap gap-2">
              {editingList.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#111318] border border-[#262A33] text-xs text-white"
                >
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-[10px] text-gray-400">({t.skills.categories[skill.category] || skill.category})</span>
                  <button
                    type="button"
                    onClick={() => handleDeleteSkill(skill.name)}
                    className="text-gray-400 hover:text-red-400 transition-colors ml-1"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Categorized Skills Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => {
            const Icon = getCategoryIcon(category);
            const categorySkills = skills.filter((s) => s.category === category);
            const translatedCat = t.skills.categories[category] || category;

            return (
              <div
                key={category}
                className={`p-6 rounded-2xl border transition-all ${
                  theme === 'dark'
                    ? 'bg-[#191B21] border-[#262A33] hover:border-[#E67E22]/40'
                    : 'bg-[#F9FAFB] border-gray-200 hover:border-[#E67E22]/50 shadow-sm'
                }`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2.5 rounded-xl bg-[#E67E22]/10 text-[#E67E22]">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      className={`text-base font-bold tracking-tight ${
                        theme === 'dark' ? 'text-white' : 'text-gray-950'
                      }`}
                    >
                      {translatedCat}
                    </h3>
                    <p className="text-xs font-mono text-gray-400">
                      {categorySkills.length} {t.skills.techCount}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {categorySkills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <span
                          className={`text-sm font-semibold tracking-tight ${
                            theme === 'dark' ? 'text-gray-200' : 'text-gray-900'
                          }`}
                        >
                          {skill.name}
                        </span>
                        {skill.badge && (
                          <span className="text-[10px] font-mono text-[#F5A623]">
                            {skill.badge}
                          </span>
                        )}
                      </div>
                      <p
                        className={`text-xs leading-relaxed ${
                          theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                        }`}
                      >
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

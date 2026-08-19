import React, { useState } from 'react';
import { 
  Cpu, 
  Search, 
  CheckCircle2, 
  Palmtree,
  Sparkles,
  Zap,
  Code2
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';
import { SkillCategory, SkillItem } from '../types';
import { playCyberClick, playHudChirp } from '../utils/audio';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories: Array<{ id: SkillCategory | 'all'; label: string }> = [
    { id: 'all', label: 'All Tech' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Databases' },
    { id: 'cloud_devops', label: 'Cloud & DevOps' },
    { id: 'core_tools', label: 'Core Tools' },
  ];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = 
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tag.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSelectCategory = (catId: SkillCategory | 'all') => {
    playCyberClick();
    setActiveCategory(catId);
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#ff2a85] uppercase tracking-wider mb-2">
            <Palmtree className="w-4 h-4 text-[#00f0ff]" />
            <span>Core Competencies</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
            Technical <span className="text-gradient-vice">Arsenal</span>
          </h2>
        </div>

        {/* Search Bar */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search skills..."
            className="w-full bg-white/5 border border-white/10 rounded-xl pl-9 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-[#ff2a85] transition-colors"
          />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleSelectCategory(cat.id)}
              onMouseEnter={playHudChirp}
              className={`px-4 py-2 rounded-full text-xs font-medium shrink-0 transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-[#ff2a85] to-[#9d4edd] text-white shadow-[0_0_15px_rgba(255,42,133,0.4)] font-bold'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill) => (
          <div
            key={skill.id}
            className="glass-panel glass-panel-hover rounded-2xl p-5 space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-pink-300 border border-white/10">
                  {skill.tag}
                </span>
                <span className="text-xs font-mono text-slate-400">
                  {skill.yearsOfExp}
                </span>
              </div>

              <h3 className="font-display font-bold text-base text-white">
                {skill.name}
              </h3>

              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                {skill.description}
              </p>
            </div>

            {/* Proficiency Bar */}
            <div className="space-y-1.5 pt-2 border-t border-white/5">
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>Proficiency</span>
                <span className="text-[#00f0ff] font-semibold">{skill.levelLabel}</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-gradient-to-r from-[#ff2a85] via-[#9d4edd] to-[#00f0ff] h-full rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

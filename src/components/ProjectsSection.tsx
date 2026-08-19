import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Layers, 
  Maximize2, 
  X,
  Palmtree,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { playCyberClick, playHudChirp } from '../utils/audio';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Full-Stack', 'Backend / Cloud', 'Web Apps', 'System Tools'];

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    if (filterCategory === 'ALL') return true;
    return proj.category === filterCategory;
  });

  const handleOpenModal = (project: ProjectItem) => {
    playCyberClick();
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    playCyberClick();
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] uppercase tracking-wider mb-2">
            <Palmtree className="w-4 h-4 text-[#ff2a85]" />
            <span>Featured Portfolio</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
            Engineered <span className="text-gradient-vice">Projects</span>
          </h2>
        </div>

        <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
          <span>GitHub:</span>
          <a
            href="https://github.com/KANO-BYTE-bot"
            target="_blank"
            rel="noopener noreferrer"
            className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[#00f0ff] font-bold hover:underline flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5" />
            <span>@KANO-BYTE-bot</span>
          </a>
        </div>
      </div>

      {/* Category Filter Toolbar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 font-sans text-xs">
        {categories.map((cat) => {
          const isActive = filterCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                playCyberClick();
                setFilterCategory(cat);
              }}
              onMouseEnter={playHudChirp}
              className={`px-4 py-2 rounded-full font-medium shrink-0 transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-[#ff2a85] to-[#9d4edd] text-white shadow-[0_0_15px_rgba(255,42,133,0.4)] font-bold'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-panel glass-panel-hover rounded-2xl p-6 flex flex-col justify-between relative group shadow-xl"
          >
            <div className="space-y-4">
              {/* Category & Status */}
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#00f0ff] font-semibold">{project.category}</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold text-[10px]">
                  {project.status}
                </span>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h3 className="font-display font-bold text-lg text-white group-hover:text-pink-300 transition-colors leading-snug">
                  {project.name.split('//')[0].trim()}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-sans">
                  {project.shortDesc}
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/5">
                {project.metrics.map((m, idx) => (
                  <div key={idx} className="text-center p-2 rounded-lg bg-white/5">
                    <div className="text-[10px] text-slate-400 font-mono">{m.label}</div>
                    <div className="text-xs font-bold text-white mt-0.5 truncate">{m.value}</div>
                  </div>
                ))}
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-md bg-purple-500/10 text-purple-200 border border-purple-500/20 text-[11px] font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playCyberClick}
                className="text-xs font-mono text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
                title="View Source on GitHub"
              >
                <Github className="w-4 h-4 text-[#00f0ff]" />
                <span>Code</span>
              </a>

              <button
                onClick={() => handleOpenModal(project)}
                className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#ff2a85] to-[#9d4edd] text-white text-xs font-medium flex items-center gap-1.5 shadow-md hover:opacity-90 transition-opacity"
              >
                <span>Details</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-panel bg-[#0d061e] border border-pink-500/30 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div>
                <span className="text-xs font-mono text-[#00f0ff] uppercase">{selectedProject.category}</span>
                <h3 className="font-display font-black text-2xl text-white mt-1">
                  {selectedProject.name}
                </h3>
              </div>
              <button
                onClick={handleCloseModal}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-slate-400 uppercase">Architecture Overview</h4>
              <p className="text-slate-200 text-sm leading-relaxed font-sans">
                {selectedProject.fullDesc}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-slate-400 uppercase">Key Capabilities</h4>
              <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                {selectedProject.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#ff2a85] font-bold">✓</span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono text-slate-400 uppercase">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.techStack.map((tech) => (
                  <span key={tech} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-white">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono flex items-center gap-2"
              >
                <Github className="w-4 h-4 text-[#00f0ff]" />
                <span>GitHub Repository</span>
              </a>

              <button
                onClick={handleCloseModal}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#ff2a85] to-[#9d4edd] text-white text-xs font-medium font-sans"
              >
                Close Window
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

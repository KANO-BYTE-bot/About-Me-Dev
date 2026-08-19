import React from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, Palmtree, Award, Sparkles } from 'lucide-react';
import { EXPERIENCE_LOGS } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10 relative">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6 mb-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#00f0ff] uppercase tracking-wider mb-2">
            <Palmtree className="w-4 h-4 text-[#ff2a85]" />
            <span>Career Milestones & Training</span>
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
            Experience & <span className="text-gradient-vice">Education</span>
          </h2>
        </div>

        <div className="text-xs font-mono text-slate-400">
          Moringa School Full-Stack Bootcamp Graduate • Junior Software Developer
        </div>
      </div>

      {/* Timeline Layout */}
      <div className="space-y-6">
        {EXPERIENCE_LOGS.map((item) => (
          <div
            key={item.id}
            className="glass-panel glass-panel-hover rounded-2xl p-6 sm:p-8 relative overflow-hidden space-y-4 shadow-xl"
          >
            {/* Top Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/5 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-[#ff2a85] shadow-md">
                  {item.type === 'EDUCATION' ? (
                    <GraduationCap className="w-5 h-5" />
                  ) : item.type === 'CERTIFICATION' ? (
                    <Award className="w-5 h-5" />
                  ) : (
                    <Briefcase className="w-5 h-5" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-lg text-white">{item.role}</h3>
                    {item.status === 'COMPLETED' && (
                      <span className="px-2 py-0.5 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300 text-[10px] font-mono font-bold">
                        GRADUATE
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-mono text-[#00f0ff] font-semibold">{item.organization}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-pink-400" />
                  <span>{item.period}</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-purple-400" />
                  <span>{item.location}</span>
                </span>
              </div>
            </div>

            {/* Highlights */}
            {item.highlights && item.highlights.length > 0 && (
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans pt-1">
                {item.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-[#ff2a85] font-bold text-sm">›</span>
                    <span className="leading-relaxed">{h}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Tech Tags */}
            {item.techTags && item.techTags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {item.techTags.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-xs font-mono text-purple-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>

    </section>
  );
};

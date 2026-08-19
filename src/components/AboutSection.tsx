import React, { useState } from 'react';
import { 
  Terminal, 
  Cpu, 
  ShieldCheck, 
  Code2, 
  FolderCheck, 
  Zap, 
  Github,
  Palmtree,
  CheckCircle2,
  GraduationCap,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playCyberClick } from '../utils/audio';

interface AboutSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<Array<{ text: string; type: 'cmd' | 'resp' }>>([
    { text: 'cornel@dev:~$ cat about.md', type: 'cmd' },
    { text: 'Loading profile data for Cornel Mwangi (@KANO-BYTE-bot)... [Moringa Full-Stack Graduate]', type: 'resp' },
  ]);

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    playCyberClick();
    const cmd = terminalInput.trim().toLowerCase();
    const newHistory = [...terminalHistory, { text: `cornel@dev:~$ ${terminalInput}`, type: 'cmd' as const }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          text: 'Available commands: bio, moringa, skills, projects, github, contact, clear',
          type: 'resp',
        });
        break;
      case 'bio':
      case 'cat about.md':
        newHistory.push({
          text: PERSONAL_INFO.bio,
          type: 'resp',
        });
        break;
      case 'moringa':
        newHistory.push({
          text: 'Moringa School Bootcamp Graduate: Completed intensive full-stack training in React, Python, Flask, SQL, and agile software development practices.',
          type: 'resp',
        });
        break;
      case 'github':
        newHistory.push({
          text: 'GitHub Profile: https://github.com/KANO-BYTE-bot',
          type: 'resp',
        });
        break;
      case 'skills':
        newHistory.push({
          text: 'Stack: React, JavaScript (ES6+), Python, Flask, SQL (PostgreSQL/SQLite), Tailwind CSS, Git/GitHub, Docker.',
          type: 'resp',
        });
        break;
      case 'projects':
        newHistory.push({
          text: 'Redirecting to engineered projects...',
          type: 'resp',
        });
        setTimeout(() => onNavigate('projects'), 600);
        break;
      case 'contact':
        newHistory.push({
          text: `Direct Contact: Phone: ${PERSONAL_INFO.phone} | Email: ${PERSONAL_INFO.email}`,
          type: 'resp',
        });
        break;
      case 'clear':
        setTerminalHistory([]);
        setTerminalInput('');
        return;
      default:
        newHistory.push({
          text: `Command not recognized: "${cmd}". Type "help" for available commands.`,
          type: 'resp',
        });
        break;
    }

    setTerminalHistory(newHistory);
    setTerminalInput('');
  };

  const methodologies = [
    {
      title: 'Full-Stack Foundations',
      desc: 'Trained at Moringa School to engineer clean UI frontend applications (React) backed by resilient REST APIs (Python/Flask).',
      icon: GraduationCap,
    },
    {
      title: 'Relational Database Design',
      desc: 'Designing structured PostgreSQL/SQLite schemas, foreign key relationships, migrations, and clean ORM queries via SQLAlchemy.',
      icon: Cpu,
    },
    {
      title: 'Agile & Version Control',
      desc: 'Collaborative development with Git branching, pull request code reviews, issue tracking, and clean commits on GitHub.',
      icon: FolderCheck,
    },
    {
      title: 'Fast Learner & Team Player',
      desc: 'Quickly absorbing new tech stacks, writing documented code, and eager to contribute to production environments.',
      icon: Zap,
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Title Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#ff2a85] uppercase tracking-wider mb-2">
              <Palmtree className="w-4 h-4 text-[#00f0ff]" />
              <span>Background & Journey</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white">
              About <span className="text-gradient-vice">Cornel Mwangi</span>
            </h2>
          </div>
          <div className="text-xs font-mono text-slate-400">
            Developer Handle: <a href={PERSONAL_INFO.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-[#00f0ff] font-bold hover:underline">@KANO-BYTE-bot</a>
          </div>
        </div>

        {/* 2-Column Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Col: Narrative Bio & Highlights (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono font-bold">
                <GraduationCap className="w-3.5 h-3.5 text-[#ff2a85]" />
                <span>Moringa School Full-Stack Bootcamp Graduate</span>
              </div>

              <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
                <span>Junior Software Developer Passionate About Building Web Solutions</span>
              </h3>
              <p className="text-slate-300 font-sans leading-relaxed text-sm sm:text-base">
                {PERSONAL_INFO.bio}
              </p>
              <p className="text-slate-300 font-sans leading-relaxed text-sm sm:text-base">
                Having recently completed the rigorous full-stack program at Moringa School, I gained hands-on experience building end-to-end web applications, designing relational databases, integrating third-party APIs, and writing clean, maintainable code.
              </p>

              {/* Quick bullet points */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ff2a85]" />
                  <span>Moringa School Graduate</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00f0ff]" />
                  <span>React & Python/Flask Stack</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#ff2a85]" />
                  <span>SQL & Relational Databases</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00f0ff]" />
                  <span>Nairobi / Remote Ready</span>
                </div>
              </div>
            </div>

            {/* Methodology Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {methodologies.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="glass-panel glass-panel-hover rounded-xl p-5 space-y-2.5"
                  >
                    <div className="w-9 h-9 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-[#ff2a85]">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="font-display font-bold text-white text-sm">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Col: Interactive Mini Console (5 Cols) */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl overflow-hidden shadow-xl border border-white/10 flex flex-col h-full">
              
              {/* Terminal Title Bar */}
              <div className="bg-[#140a2c] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-300 ml-2">
                    cornel-shell — @KANO-BYTE-bot
                  </span>
                </div>
                <Terminal className="w-4 h-4 text-[#00f0ff]" />
              </div>

              {/* Terminal Logs */}
              <div className="p-4 bg-[#0d061e] flex-1 font-mono text-xs space-y-2 overflow-y-auto min-h-[220px]">
                {terminalHistory.map((item, idx) => (
                  <div key={idx} className="space-y-0.5">
                    {item.type === 'cmd' ? (
                      <div className="text-[#ff2a85] font-semibold">{item.text}</div>
                    ) : (
                      <div className="text-slate-300 leading-relaxed pl-2 border-l border-purple-500/30">
                        {item.text}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Terminal Input */}
              <form onSubmit={handleCommandSubmit} className="p-3 bg-[#140a2c] border-t border-white/10 flex items-center gap-2">
                <span className="text-[#00f0ff] font-mono text-xs font-bold">$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="Type 'help', 'bio', 'moringa', 'github'..."
                  className="flex-1 bg-transparent text-xs font-mono text-white placeholder-slate-500 focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-3 py-1 rounded bg-gradient-to-r from-[#ff2a85] to-[#9d4edd] text-white text-xs font-mono font-bold hover:opacity-90"
                >
                  Run
                </button>
              </form>

              {/* Quick Actions */}
              <div className="px-4 py-2.5 bg-[#0d061e] border-t border-white/5 flex flex-wrap items-center gap-2 text-[11px] font-mono text-slate-400">
                <span>Quick:</span>
                {['help', 'moringa', 'bio', 'github', 'skills', 'contact'].map((cmd) => (
                  <button
                    key={cmd}
                    type="button"
                    onClick={() => {
                      playCyberClick();
                      setTerminalInput(cmd);
                    }}
                    className="px-2 py-0.5 rounded bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  >
                    {cmd}
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

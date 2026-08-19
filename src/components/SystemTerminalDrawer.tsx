import React, { useState, useRef, useEffect } from 'react';
import { Terminal, X, RotateCcw, Maximize2, Minimize2, Github, GraduationCap } from 'lucide-react';
import { PERSONAL_INFO, TERMINAL_HELP_COMMANDS, SKILLS_DATA, PROJECTS_DATA, EXPERIENCE_LOGS } from '../data/portfolioData';
import { TerminalOutputLine } from '../types';
import { playCyberClick, playKeyClack } from '../utils/audio';

interface SystemTerminalDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  onToggleAudio: () => void;
  isAudioMuted: boolean;
}

export const SystemTerminalDrawer: React.FC<SystemTerminalDrawerProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onToggleAudio,
  isAudioMuted,
}) => {
  const [inputVal, setInputVal] = useState('');
  const [isMaximized, setIsMaximized] = useState(false);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [lines, setLines] = useState<TerminalOutputLine[]>([
    {
      id: 'l-0',
      type: 'system',
      content: '╔═════════════════════════════════════════════════════════════════════╗',
    },
    {
      id: 'l-1',
      type: 'system',
      content: '║ CORNEL MWANGI // JUNIOR SOFTWARE DEVELOPER (MORINGA SCHOOL GRADUATE) ║',
    },
    {
      id: 'l-2',
      type: 'system',
      content: '║ GitHub: @KANO-BYTE-bot • TYPE "help" FOR AVAILABLE COMMANDS         ║',
    },
    {
      id: 'l-3',
      type: 'system',
      content: '╚═════════════════════════════════════════════════════════════════════╝',
    },
    {
      id: 'l-4',
      type: 'output',
      content: `> Session established. Developer: ${PERSONAL_INFO.name} // Status: AVAILABLE FOR HIRE`,
    },
  ]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [lines]);

  if (!isOpen) return null;

  const handleCommand = (cmd: string) => {
    if (!cmd.trim()) return;

    playCyberClick();
    const newLines = [...lines, { id: `cmd-${Date.now()}`, type: 'input' as const, content: `cornel@dev:~$ ${cmd}` }];
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);

    const lower = cmd.trim().toLowerCase();

    if (lower === 'help') {
      newLines.push({
        id: `out-${Date.now()}`,
        type: 'output',
        content: `AVAILABLE SYSTEM COMMANDS:
  help        : List all commands
  bio         : Display developer background and summary
  moringa     : Review Moringa School Full-Stack Bootcamp details
  skills      : View technical skills and proficiencies
  projects    : View engineered projects and repositories
  experience  : Career journey, bootcamp education & milestones
  github      : Open GitHub profile (@KANO-BYTE-bot)
  contact     : Direct contact channels (phone, email)
  sound       : Toggle UI audio synthesizer SFX
  whoami      : Display visitor credentials
  clear       : Reset and clear console history`,
      });
    } else if (lower === 'moringa') {
      newLines.push({
        id: `out-${Date.now()}`,
        type: 'success',
        content: `MORINGA SCHOOL FULL-STACK BOOTCAMP:
  • Program: Full-Stack Software Development
  • Location: Nairobi, Kenya
  • Core Focus: JavaScript, React, Python, Flask, SQL, SQLAlchemy, Git, Agile Development
  • Hands-on: Built collaborative full-stack web applications and capstone projects.`,
      });
      setTimeout(() => onNavigate('experience'), 800);
    } else if (lower === 'github') {
      newLines.push({
        id: `out-${Date.now()}`,
        type: 'success',
        content: `> GitHub Profile: ${PERSONAL_INFO.socialLinks.github} (Opening in new tab...)`,
      });
      window.open(PERSONAL_INFO.socialLinks.github, '_blank');
    } else if (lower === 'bio' || lower === 'about') {
      newLines.push({
        id: `out-${Date.now()}`,
        type: 'output',
        content: PERSONAL_INFO.bio,
      });
    } else if (lower === 'clear' || lower === 'cls') {
      setLines([]);
      setInputVal('');
      return;
    } else if (lower === 'skills') {
      newLines.push({
        id: `out-${Date.now()}`,
        type: 'output',
        content: 'TECHNICAL ARSENAL:\n' + SKILLS_DATA.map(s => `  • ${s.name} (${s.levelLabel})`).join('\n'),
      });
      setTimeout(() => onNavigate('skills'), 800);
    } else if (lower === 'projects') {
      newLines.push({
        id: `out-${Date.now()}`,
        type: 'output',
        content: 'FEATURED PROJECTS:\n' + PROJECTS_DATA.map(p => `  • ${p.name} - ${p.category}`).join('\n'),
      });
      setTimeout(() => onNavigate('projects'), 800);
    } else if (lower === 'experience' || lower === 'education') {
      newLines.push({
        id: `out-${Date.now()}`,
        type: 'output',
        content: 'CAREER & EDUCATION:\n' + EXPERIENCE_LOGS.map(e => `  [${e.period}] ${e.role} @ ${e.organization}`).join('\n'),
      });
      setTimeout(() => onNavigate('experience'), 800);
    } else if (lower === 'contact' || lower === 'email' || lower === 'phone') {
      newLines.push({
        id: `out-${Date.now()}`,
        type: 'output',
        content: `DIRECT CHANNELS:\n  PHONE: ${PERSONAL_INFO.phone}\n  EMAIL: ${PERSONAL_INFO.email}\n  LOC  : ${PERSONAL_INFO.location}`,
      });
      setTimeout(() => onNavigate('contact'), 800);
    } else if (lower === 'sound' || lower === 'audio') {
      onToggleAudio();
      newLines.push({
        id: `out-${Date.now()}`,
        type: 'output',
        content: `> UI Audio synthesizer is now ${isAudioMuted ? 'UNMUTED' : 'MUTED'}.`,
      });
    } else if (lower === 'whoami') {
      newLines.push({
        id: `out-${Date.now()}`,
        type: 'output',
        content: 'guest_visitor@dev.console [Role: Reviewing Junior Full-Stack Developer Portfolio]',
      });
    } else {
      newLines.push({
        id: `err-${Date.now()}`,
        type: 'error',
        content: `Command not found: "${cmd}". Type "help" to view all available commands.`,
      });
    }

    setLines(newLines);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1;
        if (nextIdx >= commandHistory.length) {
          setHistoryIndex(-1);
          setInputVal('');
        } else {
          setHistoryIndex(nextIdx);
          setInputVal(commandHistory[nextIdx]);
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
      <div
        className={`glass-panel bg-[#0a0518] rounded-2xl border border-pink-500/30 flex flex-col shadow-2xl transition-all duration-300 ${
          isMaximized ? 'w-full h-full' : 'w-full max-w-4xl h-[650px]'
        }`}
      >
        {/* Terminal Title Bar */}
        <div className="bg-[#140b2a] px-4 py-3 border-b border-white/10 flex items-center justify-between rounded-t-2xl">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <button onClick={onClose} className="w-3 h-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity" />
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <button onClick={() => setIsMaximized(!isMaximized)} className="w-3 h-3 rounded-full bg-emerald-500 hover:opacity-80 transition-opacity" />
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-slate-300">
              <Terminal className="w-4 h-4 text-[#ff2a85]" />
              <span>cornel@dev-terminal — Junior Dev (Moringa School)</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setLines([])}
              className="p-1 text-slate-400 hover:text-white transition-colors"
              title="Clear Console"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => setIsMaximized(!isMaximized)}
              className="p-1 text-slate-400 hover:text-white transition-colors hidden sm:block"
            >
              {isMaximized ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Terminal Logs Window */}
        <div className="p-4 bg-[#080314] flex-1 overflow-y-auto font-mono text-xs space-y-1.5 selection:bg-pink-500 selection:text-white">
          {lines.map((line) => (
            <div
              key={line.id}
              className={`leading-relaxed ${
                line.type === 'input'
                  ? 'text-[#00f0ff] font-bold'
                  : line.type === 'system'
                  ? 'text-purple-400 font-mono'
                  : line.type === 'success'
                  ? 'text-emerald-400 font-bold'
                  : line.type === 'error'
                  ? 'text-rose-400 font-bold'
                  : 'text-slate-200'
              }`}
            >
              {line.content}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Input Prompt */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(inputVal);
          }}
          className="p-3 bg-[#140b2a] border-t border-white/10 flex items-center gap-2 rounded-b-2xl"
        >
          <span className="text-[#ff2a85] font-mono text-xs font-bold">cornel@dev:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help', 'moringa', 'skills', 'projects', 'github'..."
            className="flex-1 bg-transparent text-xs font-mono text-white placeholder-slate-500 focus:outline-none"
          />
          <button
            type="submit"
            className="px-3 py-1 rounded bg-gradient-to-r from-[#ff2a85] to-[#9d4edd] text-white text-xs font-mono font-bold hover:opacity-90 transition-opacity"
          >
            Execute
          </button>
        </form>
      </div>
    </div>
  );
};

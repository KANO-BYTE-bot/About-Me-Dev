import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  ShieldCheck,
  Cpu,
  Github,
  Palmtree
} from 'lucide-react';
import { playCyberClick, playHudChirp } from '../utils/audio';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CyberHeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  isAudioMuted: boolean;
  onToggleAudio: () => void;
  onOpenTerminal: () => void;
}

export const CyberHeader: React.FC<CyberHeaderProps> = ({
  activeSection,
  onNavigate,
  isAudioMuted,
  onToggleAudio,
  onOpenTerminal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [liveTime, setLiveTime] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);

    const updateClock = () => {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      });
      setLiveTime(timeStr);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', code: '01' },
    { id: 'about', label: 'About', code: '02' },
    { id: 'skills', label: 'Skills', code: '03' },
    { id: 'projects', label: 'Projects', code: '04' },
    { id: 'experience', label: 'Experience', code: '05' },
    { id: 'contact', label: 'Contact', code: '06' },
  ];

  const handleNavClick = (id: string) => {
    playCyberClick();
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="portfolio-main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090514]/90 backdrop-blur-xl border-b border-pink-500/20 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-[#090514]/40 border-b border-white/5 backdrop-blur-md'
      }`}
    >
      {/* Top Sunset Status Ticker Bar */}
      <div className="w-full bg-[#100924]/90 border-b border-white/5 px-4 py-1 text-xs font-mono flex items-center justify-between text-slate-300 overflow-x-auto whitespace-nowrap">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2 text-[#ff2a85]">
            <span className="w-2 h-2 rounded-full bg-[#ff2a85] animate-ping inline-block" />
            <span className="w-2 h-2 rounded-full bg-[#ff2a85] inline-block -ml-4" />
            <span className="font-semibold text-xs text-[#ff2a85]">AVAILABLE FOR WORK</span>
          </span>
          <span className="hidden sm:inline-block text-purple-400/40">•</span>
          <span className="hidden sm:flex items-center gap-1.5 text-slate-400 text-xs">
            <Palmtree className="w-3.5 h-3.5 text-[#00f0ff] animate-bounce-gentle" />
            <span>VICE CITY RETRO MODE</span>
          </span>
          <span className="hidden md:inline-block text-purple-400/40">•</span>
          <span className="hidden md:flex items-center gap-1.5 text-slate-400 text-xs">
            <Cpu className="w-3 h-3 text-[#ff2a85]" />
            <span>NODE: NAIROBI, KENYA</span>
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs">
          <a
            href={PERSONAL_INFO.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#00f0ff] hover:text-white transition-colors bg-white/5 px-2 py-0.5 rounded border border-white/10"
          >
            <Github className="w-3.5 h-3.5" />
            <span className="font-bold">@KANO-BYTE-bot</span>
          </a>
          <span className="text-purple-400/40 hidden sm:inline">•</span>
          <span className="text-amber-400 font-mono text-xs hidden sm:inline">
            {liveTime || '00:00:00'} UTC
          </span>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <button
          id="btn-brand-home"
          onClick={() => handleNavClick('home')}
          onMouseEnter={playHudChirp}
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#ff2a85] via-[#9d4edd] to-[#00f0ff] p-[1px] shadow-[0_0_20px_rgba(255,42,133,0.35)] group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full bg-[#100924] rounded-xl flex items-center justify-center">
              <Palmtree className="w-5 h-5 text-[#00f0ff] group-hover:rotate-12 transition-transform duration-300" />
            </div>
          </div>
          <div>
            <div className="font-display font-black text-lg tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-[#ff2a85] group-hover:to-[#00f0ff] transition-all flex items-center gap-2">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-pink-500/20 border border-pink-500/40 text-pink-300 font-mono font-bold">
                DEV
              </span>
            </div>
            <div className="text-xs font-mono text-slate-400 group-hover:text-[#00f0ff] transition-colors">
              github.com/KANO-BYTE-bot
            </div>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-[#120b28]/80 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={playHudChirp}
                className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none flex items-center gap-1.5 ${
                  isActive
                    ? 'text-white bg-gradient-to-r from-[#ff2a85] to-[#9d4edd] shadow-[0_0_15px_rgba(255,42,133,0.4)] font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 bg-[#00f0ff] rounded-full shadow-[0_0_6px_#00f0ff]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Actions & Controls */}
        <div className="flex items-center gap-2.5">
          {/* GitHub Direct Link Button */}
          <a
            href={PERSONAL_INFO.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={playCyberClick}
            onMouseEnter={playHudChirp}
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white text-xs font-mono transition-all hover:scale-105"
            title="GitHub: KANO-BYTE-bot"
          >
            <Github className="w-4 h-4 text-[#00f0ff]" />
            <span className="font-semibold">KANO-BYTE-bot</span>
          </a>

          {/* CLI Terminal Launcher */}
          <button
            id="btn-open-terminal"
            onClick={() => {
              playCyberClick();
              onOpenTerminal();
            }}
            onMouseEnter={playHudChirp}
            className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#ff2a85] to-[#9d4edd] text-white hover:opacity-90 text-xs font-mono font-bold shadow-[0_0_15px_rgba(255,42,133,0.3)] transition-all hover:scale-105"
            title="Launch Developer CLI Terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-[#00f0ff]" />
            <span>CLI Terminal</span>
          </button>

          {/* Audio Synthesizer Toggle */}
          <button
            id="btn-toggle-audio"
            onClick={() => {
              playCyberClick();
              onToggleAudio();
            }}
            onMouseEnter={playHudChirp}
            className={`p-2 rounded-lg border transition-all text-xs flex items-center justify-center ${
              !isAudioMuted
                ? 'bg-pink-500/20 border-pink-500/50 text-[#ff2a85] shadow-[0_0_10px_rgba(255,42,133,0.4)]'
                : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
            }`}
            title={isAudioMuted ? 'Unmute UI Audio SFX' : 'Mute UI Audio SFX'}
          >
            {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            id="btn-mobile-menu"
            onClick={() => {
              playCyberClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="lg:hidden p-2 rounded-lg bg-white/5 border border-white/10 text-slate-200 hover:text-white transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#0c061e]/98 border-b border-pink-500/20 px-4 py-6 space-y-4 backdrop-blur-2xl shadow-2xl"
        >
          <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-400">
            <span className="font-mono">NAVIGATION MENU</span>
            <span className="text-[#00f0ff] font-mono font-bold">@KANO-BYTE-bot</span>
          </div>

          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`p-3 rounded-xl text-left text-sm font-medium transition-all ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-[#ff2a85] to-[#9d4edd] text-white font-bold'
                    : 'bg-white/5 text-slate-200 hover:bg-white/10'
                }`}
              >
                <div className="text-[10px] text-white/60 font-mono">[{item.code}]</div>
                <div>{item.label}</div>
              </button>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-mono text-xs flex items-center justify-center gap-2 font-bold"
            >
              <Github className="w-4 h-4 text-[#00f0ff]" />
              <span>GitHub: @KANO-BYTE-bot</span>
            </a>

            <button
              onClick={() => {
                onOpenTerminal();
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#ff2a85] to-[#9d4edd] text-white font-mono text-xs flex items-center justify-center gap-2 font-bold"
            >
              <Terminal className="w-4 h-4 text-[#00f0ff]" />
              <span>Launch CLI Terminal</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

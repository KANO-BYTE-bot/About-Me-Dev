import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Send, 
  FolderGit2, 
  Terminal as TerminalIcon, 
  Copy, 
  Check, 
  Sparkles,
  Github,
  MapPin,
  Palmtree,
  Code2,
  ExternalLink,
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playCyberClick, playHudChirp } from '../utils/audio';
import { CyberPalmTree } from './CyberPalmTree';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
  onOpenTerminal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate, onOpenTerminal }) => {
  const [typedTitle, setTypedTitle] = useState('');
  const fullTitle = 'Junior Software Developer';
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullTitle.length) {
        setTypedTitle(fullTitle.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    playCyberClick();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-16 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 overflow-hidden z-10"
    >
      {/* Floating Accent Palm Trees beside hero */}
      <div className="absolute right-[2%] top-[20%] w-36 sm:w-52 h-56 sm:h-80 pointer-events-none opacity-40 sm:opacity-70 animate-float-slow hidden lg:block">
        <CyberPalmTree flip={true} />
      </div>

      <div className="max-w-6xl w-full mx-auto space-y-10">
        
        {/* Top Status Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg animate-bounce-gentle">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff2a85] animate-ping inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff2a85] inline-block -ml-5" />
            <span className="text-xs font-mono font-semibold text-slate-200">
              OPEN FOR JUNIOR DEV ROLES & COLLABORATIONS
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[#ff2a85]" />
              <span>Nairobi, Kenya</span>
            </span>
            <span className="text-purple-400/40">•</span>
            <span className="text-[#00f0ff] font-semibold">Remote Ready</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Typography, Introduction & CTA */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#c084fc] uppercase">
                <GraduationCap className="w-4 h-4 text-[#00f0ff]" />
                <span>Moringa School Bootcamp Graduate</span>
              </div>
              
              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-white leading-[1.05]">
                Cornel <span className="text-gradient-vice">Mwangi</span>
              </h1>
              
              <div className="flex items-center gap-2 font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#00f0ff] tracking-tight">
                <span>{typedTitle}</span>
                <span className="w-2.5 h-8 bg-[#ff2a85] cursor-blink inline-block rounded-sm" />
              </div>
            </div>

            <p className="text-base sm:text-lg text-slate-300 font-sans leading-relaxed max-w-xl">
              Junior Software Developer who recently completed an intensive Full-Stack Software Development Bootcamp at Moringa School. Skilled in building responsive web apps with React, writing robust backend services in Python & Flask, designing SQL databases, and deploying modern applications.
            </p>

            {/* Quick Contact Chips */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href={PERSONAL_INFO.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={playCyberClick}
                onMouseEnter={playHudChirp}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-mono transition-all hover:border-[#00f0ff]"
              >
                <Github className="w-3.5 h-3.5 text-[#00f0ff]" />
                <span>github.com/<b>KANO-BYTE-bot</b></span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-mono transition-all"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#00f0ff]" /> : <Copy className="w-3.5 h-3.5 text-[#ff2a85]" />}
                <span>{copiedEmail ? 'Email Copied!' : PERSONAL_INFO.email}</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                id="hero-cta-projects"
                onClick={() => {
                  playCyberClick();
                  onNavigate('projects');
                }}
                onMouseEnter={playHudChirp}
                className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#ff2a85] via-[#d946ef] to-[#9d4edd] text-white font-display font-bold text-sm tracking-wide flex items-center gap-2.5 transition-all duration-200 hover:shadow-[0_0_30px_rgba(255,42,133,0.5)] hover:scale-[1.02] cursor-pointer"
              >
                <FolderGit2 className="w-4 h-4 text-white" />
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                id="hero-cta-contact"
                onClick={() => {
                  playCyberClick();
                  onNavigate('contact');
                }}
                onMouseEnter={playHudChirp}
                className="px-7 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-display font-bold text-sm tracking-wide flex items-center gap-2.5 transition-all duration-200 hover:border-[#00f0ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.25)] cursor-pointer"
              >
                <Send className="w-4 h-4 text-[#00f0ff]" />
                <span>Get In Touch</span>
              </button>

              <button
                id="hero-cta-cli"
                onClick={() => {
                  playCyberClick();
                  onOpenTerminal();
                }}
                onMouseEnter={playHudChirp}
                className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all cursor-pointer"
                title="Launch Interactive Terminal"
              >
                <TerminalIcon className="w-4 h-4 text-[#ff2a85]" />
              </button>
            </div>

          </div>

          {/* Right Column: Sleek Glass Card & GitHub Stats Preview */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-6 sm:p-7 space-y-6 relative overflow-hidden shadow-2xl animate-float-slow">
              
              {/* Card Ambient Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#ff2a85]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00f0ff]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Developer Profile Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-[#ff2a85] to-[#00f0ff] p-[1.5px] shadow-lg">
                    <div className="w-full h-full bg-[#140b2e] rounded-xl flex items-center justify-center">
                      <Code2 className="w-6 h-6 text-[#00f0ff]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-base">Cornel Mwangi</h3>
                    <p className="text-xs font-mono text-[#00f0ff]">@KANO-BYTE-bot</p>
                  </div>
                </div>

                <span className="px-2.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono font-semibold flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#ff2a85]" />
                  Moringa Alum
                </span>
              </div>

              {/* Technical Capabilities */}
              <div className="space-y-3">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Full-Stack Toolkit
                </div>
                
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <div className="text-[11px] font-mono text-slate-400">Frontend</div>
                    <div className="text-xs font-semibold text-white">React / JS / Tailwind</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <div className="text-[11px] font-mono text-slate-400">Backend</div>
                    <div className="text-xs font-semibold text-white">Python / Flask / REST</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <div className="text-[11px] font-mono text-slate-400">Databases</div>
                    <div className="text-xs font-semibold text-white">PostgreSQL / SQLite</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                    <div className="text-[11px] font-mono text-slate-400">Tools & VCS</div>
                    <div className="text-xs font-semibold text-white">Git / GitHub / Postman</div>
                  </div>
                </div>
              </div>

              {/* GitHub Identity Card Footer */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <a
                  href={PERSONAL_INFO.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white flex items-center gap-2 transition-colors group"
                >
                  <Github className="w-4 h-4 text-[#ff2a85] group-hover:rotate-12 transition-transform" />
                  <span>github.com/<b>KANO-BYTE-bot</b></span>
                </a>
                <span className="text-[#00f0ff] font-bold">Ready to Build</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

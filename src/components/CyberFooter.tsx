import React from 'react';
import { Terminal, ArrowUp, Phone, Mail, Github, Palmtree } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { playCyberClick, playHudChirp } from '../utils/audio';

interface CyberFooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenTerminal: () => void;
}

export const CyberFooter: React.FC<CyberFooterProps> = ({ onNavigate, onOpenTerminal }) => {
  const scrollToTop = () => {
    playCyberClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="border-t border-white/10 bg-[#070312] font-sans relative z-10">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-white/10">
          
          {/* Col 1: Brand */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#ff2a85] to-[#00f0ff] p-[1px]">
                <div className="w-full h-full bg-[#120826] rounded-lg flex items-center justify-center">
                  <Palmtree className="w-4 h-4 text-[#00f0ff]" />
                </div>
              </div>
              <span className="font-display font-black text-xl text-white">
                Cornel <span className="text-gradient-vice">Mwangi</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Software Developer building scalable full-stack web applications, resilient backend architectures, and high-performance digital tools.
            </p>
            <div className="text-xs font-mono text-[#00f0ff] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#ff2a85] animate-pulse" />
              <span>GitHub: @KANO-BYTE-bot // Available for Hire</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-2 text-xs">
            <div className="text-white font-bold font-mono text-xs">Quick Links:</div>
            <ul className="space-y-1.5 font-mono">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      playCyberClick();
                      onNavigate(item.id);
                    }}
                    onMouseEnter={playHudChirp}
                    className="text-slate-400 hover:text-[#00f0ff] flex items-center gap-1.5 transition-colors"
                  >
                    <span className="text-[#ff2a85]">›</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Channels */}
          <div className="space-y-3 text-xs">
            <div className="text-white font-bold font-mono text-xs">Connect:</div>
            <div className="space-y-2 text-slate-300 font-mono">
              <div>
                <a href={`tel:${PERSONAL_INFO.phone}`} className="hover:text-[#ff2a85] flex items-center gap-1.5 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-[#ff2a85]" />
                  <span>{PERSONAL_INFO.phone}</span>
                </a>
              </div>
              <div>
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-[#00f0ff] flex items-center gap-1.5 break-all transition-colors">
                  <Mail className="w-3.5 h-3.5 text-[#00f0ff]" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
              </div>
              <div>
                <a href={PERSONAL_INFO.socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1.5 transition-colors">
                  <Github className="w-3.5 h-3.5 text-[#00f0ff]" />
                  <span>@KANO-BYTE-bot</span>
                </a>
              </div>
            </div>

            <div className="pt-1">
              <button
                onClick={() => {
                  playCyberClick();
                  onOpenTerminal();
                }}
                className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[#00f0ff] text-xs font-mono hover:bg-white/10 font-bold flex items-center gap-1.5 transition-all"
              >
                <Terminal className="w-3.5 h-3.5 text-[#ff2a85]" />
                <span>$ CLI Terminal</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Footer Copy */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 Cornel Mwangi (@KANO-BYTE-bot). All Rights Reserved.
          </div>

          {/* Scroll to Top Trigger */}
          <button
            onClick={scrollToTop}
            onMouseEnter={playHudChirp}
            className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all flex items-center gap-1.5 text-xs font-mono font-medium"
            title="Return to Top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#00f0ff]" />
          </button>
        </div>

      </div>

    </footer>
  );
};

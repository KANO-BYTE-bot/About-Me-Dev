import React, { useState, useEffect } from 'react';
import { Terminal, Play } from 'lucide-react';
import { playBootSequence, playCyberClick } from '../utils/audio';

interface BootSequenceModalProps {
  onComplete: () => void;
}

export const BootSequenceModal: React.FC<BootSequenceModalProps> = ({ onComplete }) => {
  const [bootStep, setBootStep] = useState<number>(0);
  const bootLogs = [
    'BIOS v4.8.2 (CORNEL_MWANGI_SYSTEMS // VICE_CITY_EDITION) INITIALIZED',
    'DETECTING SUNSET RETRO ARCHITECTURE: x86_64 // SYNTH_CORE_V8',
    'MOUNTING NEON DEV ENVIRONMENT: /root/cornel_mwangi',
    'INITIALIZING FULL-STACK ENGINE & TYPESCRIPT RUNTIME... [OK 200]',
    'SYNCHRONIZING VICE CITY CLOUD & POSTGRESQL POOLS... [OK]',
    'CONFIGURING TLS 1.3 ENCRYPTION & NEON GLOW FILTERS... [SECURE]',
    'LAUNCHING DEVELOPER OS SERVICES FOR CORNEL MWANGI...',
    'SYSTEM STATUS: 100% ONLINE // VICE CITY SUNSET READY.',
  ];

  useEffect(() => {
    playBootSequence();
    const interval = setInterval(() => {
      setBootStep((prev) => {
        if (prev < bootLogs.length - 1) {
          return prev + 1;
        } else {
          clearInterval(interval);
          setTimeout(onComplete, 800);
          return prev;
        }
      });
    }, 280);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#080114] flex items-center justify-center p-4">
      <div className="border-2 border-[#ff007f] bg-[#0c031d] max-w-xl w-full p-6 sm:p-8 font-mono text-[#00f0ff] shadow-[0_0_50px_rgba(255,0,127,0.5)] space-y-6 hud-corner-tl hud-corner-br">
        
        {/* Boot Header */}
        <div className="flex items-center justify-between border-b border-[#3c096c] pb-3">
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-[#ff007f] animate-pulse" />
            <span className="font-bold text-sm tracking-wider text-white">
              VICE_CITY_BOOTLOADER // CORNEL MWANGI
            </span>
          </div>
          <button
            onClick={() => {
              playCyberClick();
              onComplete();
            }}
            className="px-2 py-0.5 bg-[#170530] border border-[#ff007f] text-[#ff007f] hover:bg-[#ff007f] hover:text-white text-xs font-bold transition-all"
          >
            [SKIP_BOOT &gt;&gt;]
          </button>
        </div>

        {/* Progress Bar */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-[#c77dff]">
            <span>SYSTEM_KERNEL_LOADING</span>
            <span className="text-[#ff007f] font-bold">
              {Math.min(100, Math.round(((bootStep + 1) / bootLogs.length) * 100))}%
            </span>
          </div>
          <div className="w-full bg-[#120326] h-2 border border-[#3c096c]">
            <div
              className="bg-gradient-to-r from-[#ff007f] via-[#9d4edd] to-[#00f0ff] h-full transition-all duration-200 shadow-[0_0_10px_#ff007f]"
              style={{ width: `${((bootStep + 1) / bootLogs.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Logs Feed */}
        <div className="bg-[#090218] border border-[#3c096c] p-4 text-xs font-mono space-y-1.5 h-44 overflow-y-auto">
          {bootLogs.slice(0, bootStep + 1).map((log, index) => (
            <div key={index} className="flex items-start gap-2">
              <span className="text-[#ff007f]">&gt;</span>
              <span className={index === bootStep ? 'text-white font-bold text-glow-pink-sm' : 'text-[#c77dff]'}>
                {log}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Action */}
        <div className="flex items-center justify-between text-xs text-[#c77dff] pt-2">
          <span>NODE: VICE_CITY // CORNEL MWANGI</span>
          <button
            onClick={() => {
              playCyberClick();
              onComplete();
            }}
            className="text-[#00f0ff] font-bold hover:underline flex items-center gap-1"
          >
            <span>ENTER_SYSTEM</span>
            <Play className="w-3 h-3 text-[#ff007f]" />
          </button>
        </div>

      </div>
    </div>
  );
};

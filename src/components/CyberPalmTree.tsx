import React from 'react';

export const CyberPalmTree: React.FC<{ className?: string; flip?: boolean }> = ({ className = '', flip = false }) => {
  return (
    <div className={`relative pointer-events-none select-none ${className} ${flip ? '-scale-x-100' : ''}`}>
      <svg
        viewBox="0 0 240 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_0_15px_rgba(255,42,133,0.35)]"
      >
        <defs>
          <linearGradient id="trunkGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#ff2a85" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#9d4edd" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="1" />
          </linearGradient>
          <linearGradient id="frondGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="100%" stopColor="#ff2a85" />
          </linearGradient>
          <linearGradient id="frondGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff2a85" />
            <stop offset="70%" stopColor="#c084fc" />
            <stop offset="100%" stopColor="#00f0ff" />
          </linearGradient>
        </defs>

        {/* Curved Palm Trunk */}
        <path
          d="M 120 320 Q 145 220 130 130 Q 125 100 120 80"
          stroke="url(#trunkGrad)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        {/* Trunk texture rings */}
        <path d="M 115 300 L 126 298" stroke="#ff2a85" strokeWidth="2.5" />
        <path d="M 118 270 L 130 268" stroke="#ff2a85" strokeWidth="2.5" />
        <path d="M 122 240 L 135 237" stroke="#9d4edd" strokeWidth="2.5" />
        <path d="M 126 205 L 138 202" stroke="#9d4edd" strokeWidth="2.5" />
        <path d="M 127 170 L 137 167" stroke="#9d4edd" strokeWidth="2.5" />
        <path d="M 125 135 L 133 132" stroke="#00f0ff" strokeWidth="2.5" />
        <path d="M 122 105 L 128 103" stroke="#00f0ff" strokeWidth="2.5" />

        {/* Palm Fronds (Leaves) */}
        {/* Top-Right Large Frond */}
        <path
          d="M 120 80 Q 170 30 220 70 Q 165 60 120 80"
          fill="url(#frondGrad1)"
          opacity="0.9"
        />
        <path
          d="M 120 80 Q 190 60 235 110 Q 175 90 120 80"
          fill="url(#frondGrad2)"
          opacity="0.85"
        />

        {/* Top-Left Large Frond */}
        <path
          d="M 120 80 Q 70 25 15 65 Q 75 55 120 80"
          fill="url(#frondGrad2)"
          opacity="0.9"
        />
        <path
          d="M 120 80 Q 50 55 5 105 Q 65 85 120 80"
          fill="url(#frondGrad1)"
          opacity="0.85"
        />

        {/* Center High Frond */}
        <path
          d="M 120 80 Q 120 15 135 5 Q 110 30 120 80"
          fill="url(#frondGrad1)"
          opacity="0.95"
        />

        {/* Drooping Side Fronds */}
        <path
          d="M 120 80 Q 180 95 210 160 Q 165 115 120 80"
          fill="url(#frondGrad1)"
          opacity="0.8"
        />
        <path
          d="M 120 80 Q 60 95 30 160 Q 75 115 120 80"
          fill="url(#frondGrad2)"
          opacity="0.8"
        />

        {/* Core Palm Glow Bulb */}
        <circle cx="120" cy="80" r="6" fill="#00f0ff" className="animate-pulse" />
      </svg>
    </div>
  );
};

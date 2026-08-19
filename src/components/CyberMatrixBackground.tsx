import React, { useEffect, useRef } from 'react';
import { CyberPalmTree } from './CyberPalmTree';

interface CyberMatrixBackgroundProps {
  matrixActive?: boolean;
}

export const CyberMatrixBackground: React.FC<CyberMatrixBackgroundProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Floating particles
    const particleCount = 40;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: -Math.random() * 0.4 - 0.1,
      opacity: Math.random() * 0.5 + 0.2,
      color: Math.random() > 0.6 ? '#ff2a85' : Math.random() > 0.3 ? '#9d4edd' : '#00f0ff',
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.shadowBlur = 8;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
        ctx.globalAlpha = 1;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div id="ambient-bg-container" className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#090514]">
      {/* 1. Deep Atmospheric Sunset Glows */}
      <div className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[1100px] h-[650px] bg-gradient-to-b from-[#ff2a85]/15 via-[#9d4edd]/10 to-transparent rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-[35%] -left-[10%] w-[600px] h-[600px] bg-[#9d4edd]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-[60%] -right-[10%] w-[600px] h-[600px] bg-[#00f0ff]/8 rounded-full blur-[140px] pointer-events-none" />

      {/* 2. Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60 pointer-events-none"
      />

      {/* 3. Subtle ambient grid pattern */}
      <div className="absolute inset-0 ambient-grid opacity-35 pointer-events-none" />

      {/* 4. Floating & Bouncing Synthwave Palm Trees in the Ambient Background */}
      {/* Left Palm Tree */}
      <div className="absolute -left-12 sm:left-4 top-[18%] w-48 sm:w-64 h-72 sm:h-96 opacity-35 sm:opacity-50 animate-float-slow pointer-events-none">
        <CyberPalmTree />
      </div>

      {/* Right Palm Tree */}
      <div className="absolute -right-12 sm:right-4 top-[45%] w-48 sm:w-64 h-72 sm:h-96 opacity-30 sm:opacity-45 animate-float-reverse pointer-events-none">
        <CyberPalmTree flip={true} />
      </div>

      {/* Bottom Floating Palm Tree */}
      <div className="absolute left-[8%] bottom-[8%] w-40 sm:w-56 h-60 sm:h-80 opacity-25 sm:opacity-40 animate-bounce-gentle pointer-events-none hidden md:block">
        <CyberPalmTree />
      </div>

      {/* 5. Soft Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(9,5,20,0.7)_100%)] pointer-events-none" />
    </div>
  );
};

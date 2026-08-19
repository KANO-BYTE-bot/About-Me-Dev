import React, { useState, useEffect } from 'react';
import { CyberMatrixBackground } from './components/CyberMatrixBackground';
import { CyberHeader } from './components/CyberHeader';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';
import { CyberFooter } from './components/CyberFooter';
import { SystemTerminalDrawer } from './components/SystemTerminalDrawer';
import { BootSequenceModal } from './components/BootSequenceModal';
import { toggleMuteAudio, getIsAudioMuted } from './utils/audio';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isAudioMuted, setIsAudioMuted] = useState(true);

  // Synchronize audio state
  useEffect(() => {
    setIsAudioMuted(getIsAudioMuted());
  }, []);

  const handleToggleAudio = () => {
    const muted = toggleMuteAudio();
    setIsAudioMuted(muted);
  };

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      const headerOffset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Scroll listener to update active section automatically
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const elem = document.getElementById(section);
        if (elem) {
          const top = elem.offsetTop;
          const height = elem.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#090514] text-slate-100 selection:bg-[#ff2a85] selection:text-white relative font-sans">
      
      {/* Ambient Sunset Background Canvas */}
      <CyberMatrixBackground />

      {/* Modern Portfolio Header */}
      <CyberHeader
        activeSection={activeSection}
        onNavigate={handleNavigate}
        isAudioMuted={isAudioMuted}
        onToggleAudio={handleToggleAudio}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Portfolio Content Sections */}
      <main className="relative z-10 space-y-16 sm:space-y-24">
        {/* HERO SECTION */}
        <HeroSection
          onNavigate={handleNavigate}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />

        {/* ABOUT SECTION */}
        <AboutSection onNavigate={handleNavigate} />

        {/* TECHNICAL SKILLS */}
        <SkillsSection />

        {/* FEATURED PROJECTS */}
        <ProjectsSection />

        {/* EXPERIENCE & BACKGROUND */}
        <ExperienceSection />

        {/* CONTACT SECTION */}
        <ContactSection />
      </main>

      {/* Minimal Footer */}
      <CyberFooter
        onNavigate={handleNavigate}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Developer CLI Terminal Drawer */}
      <SystemTerminalDrawer
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onNavigate={handleNavigate}
        onToggleAudio={handleToggleAudio}
        isAudioMuted={isAudioMuted}
      />

    </div>
  );
}

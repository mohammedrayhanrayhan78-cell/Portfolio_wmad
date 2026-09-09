import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatIBuild } from './components/WhatIBuild';
import { FeaturedProject } from './components/FeaturedProject';
import { LexAIArchitecture } from './components/LexAIArchitecture';
import { SelectedProjects } from './components/SelectedProjects';
import { SystemsProgression } from './components/SystemsProgression';
import { EngineeredEcosystem } from './components/EngineeredEcosystem';
import { PhilosophyAndTerminal } from './components/PhilosophyAndTerminal';
import { AboutAndCertifications } from './components/AboutAndCertifications';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'work', 'about', 'skills', 'architecture', 'journey', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-on-surface flex flex-col selection:bg-primary-container selection:text-on-primary-container">
      {/* Top sticky navigation */}
      <Header
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 pt-16">
        <Hero onExploreClick={() => handleNavigate('work')} />
        <WhatIBuild />
        <FeaturedProject />
        <LexAIArchitecture />
        <SelectedProjects />
        <SystemsProgression />
        <EngineeredEcosystem />
        <PhilosophyAndTerminal />
        <AboutAndCertifications />
        <ContactSection onOpenResume={() => setIsResumeOpen(true)} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Curriculum Vitae Modal */}
      <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
    </div>
  );
};

export default App;

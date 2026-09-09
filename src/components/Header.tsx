import React, { useState } from 'react';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenResume: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenResume,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'journey', label: 'Journey' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/30 shadow-[0_1px_12px_rgba(0,0,0,0.4)]">
      <div className="h-16 w-full max-w-[1280px] mx-auto px-grid-margin-mobile lg:px-grid-margin-desktop flex items-center justify-between gap-element-gap">
        {/* Brand */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-2 text-left focus:outline-none"
          >
            <span className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></span>
            <span className="font-headline-md text-headline-md tracking-tight text-on-surface uppercase font-bold">
              MOHAMMED RAYHAN
            </span>
          </button>
          <div className="hidden xl:flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container-high/60 border border-outline-variant/30">
            <span className="font-label-caps text-label-caps text-primary-fixed uppercase tracking-wider">
              SYS.ONLINE // BLR
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center p-1 rounded-full bg-surface-container-low/70 border border-outline-variant/30 backdrop-blur-md shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-1 rounded-full font-code-sm text-code-sm transition-all duration-200 ${
                  isActive
                    ? 'bg-surface-container-highest text-primary border border-outline-variant/50 shadow-sm'
                    : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Rail */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden lg:flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-container/60 border border-outline-variant/40">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
            <span className="font-code-sm text-code-sm text-on-surface-variant">
              Building: <span className="text-primary font-medium">LexAI</span>
            </span>
          </div>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary-container text-on-primary-container font-code-sm text-code-sm font-semibold hover:bg-primary transition-colors shadow-[0_0_16px_rgba(10,226,255,0.25)]"
          >
            <span className="material-symbols-outlined text-[16px]">description</span>
            <span>Resume</span>
          </button>

          <button
            onClick={() => handleNavClick('about')}
            className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 hover:ring-2 hover:ring-primary/40 transition-all"
            title="About Mohammed"
          >
            <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface border border-outline-variant/40"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[20px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-container-low border-b border-outline-variant/40 px-6 py-4 space-y-2">
          <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
            <span className="font-code-sm text-xs text-primary">SYS.ONLINE // BLR</span>
            <span className="text-xs text-on-surface-variant font-mono">Building: LexAI</span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2 rounded font-code-sm text-xs transition-colors ${
                  activeSection === item.id
                    ? 'bg-surface-container-highest text-primary font-semibold'
                    : 'text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

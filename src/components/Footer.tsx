import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data';

export const Footer: React.FC = () => {
  const [utcTime, setUtcTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setUtcTime(now.toUTCString().slice(17, 25) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-outline-variant/30 bg-surface-container-lowest py-8 text-on-surface-variant font-mono text-xs">
      <div className="w-full max-w-[1280px] mx-auto px-grid-margin-mobile lg:px-grid-margin-desktop flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left */}
        <div className="flex items-center gap-3">
          <span className="font-bold text-on-surface uppercase">MOHAMMED RAYHAN</span>
          <span className="px-1.5 py-0.5 rounded bg-surface-container text-[10px] text-primary">
            v2.4.0-prod
          </span>
          <span className="hidden sm:inline text-outline-variant">•</span>
          <span className="hidden sm:inline text-[11px]">Rigorous computational infrastructure &amp; intelligence.</span>
        </div>

        {/* Center Live Clock */}
        <div className="flex items-center gap-2 text-[11px] text-tertiary">
          <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
          <span>SYSTEM TIME: {utcTime}</span>
        </div>

        {/* Right Links & Back to top */}
        <div className="flex items-center gap-4 text-[11px]">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL_INFO.leetcode}
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            LeetCode
          </a>
          <button
            onClick={scrollToTop}
            className="p-1.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors ml-2"
            title="Scroll to top"
          >
            <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

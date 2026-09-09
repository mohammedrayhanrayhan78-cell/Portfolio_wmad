import React, { useState } from 'react';
import { SECONDARY_PROJECTS } from '../data';
import { SecondaryProject } from '../types';

export const SelectedProjects: React.FC = () => {
  const [activeProject, setActiveProject] = useState<SecondaryProject | null>(null);

  return (
    <section className="w-full max-w-[1280px] mx-auto px-grid-margin-mobile lg:px-grid-margin-desktop py-16 border-t border-outline-variant/20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 mb-2 font-code-sm text-code-sm text-primary uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
            ADDITIONAL WORK // SYSTEMS &amp; VISION
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
            Selected Projects
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
          Explorations in computer vision, domain-specific educational platforms, and production academic portals.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SECONDARY_PROJECTS.map((project) => (
          <div
            key={project.id}
            className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between group hover:border-outline hover:bg-surface-container transition-all duration-200"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`font-label-caps text-label-caps tracking-widest uppercase ${
                    project.id === 'steering-wheel'
                      ? 'text-primary'
                      : project.id === 'edu-app'
                      ? 'text-secondary'
                      : 'text-tertiary'
                  }`}
                >
                  {project.category}
                </span>
                <span
                  className={`material-symbols-outlined text-[20px] text-on-surface-variant transition-colors ${
                    project.id === 'steering-wheel'
                      ? 'group-hover:text-primary'
                      : project.id === 'edu-app'
                      ? 'group-hover:text-secondary'
                      : 'group-hover:text-tertiary'
                  }`}
                >
                  {project.icon}
                </span>
              </div>

              <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-2">
                {project.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
                {project.description}
              </p>

              <div className="p-3 rounded bg-surface-container-lowest border border-outline-variant/30 font-mono text-[11px] text-on-surface-variant space-y-1 mb-4">
                {project.specs.map((sp, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span>{sp.label}:</span>
                    <span className={sp.color || 'text-on-surface'}>{sp.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-outline-variant/30">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className={`px-2 py-0.5 rounded bg-surface-container font-code-sm text-[11px] ${
                      project.id === 'prof-portfolio' ? 'text-tertiary font-medium' : 'text-on-surface'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* View details button */}
              <button
                onClick={() => setActiveProject(project)}
                className="mt-3 w-full text-center text-xs font-mono text-primary hover:underline flex items-center justify-center gap-1"
              >
                <span>Inspect Technical Specs</span>
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Specs Inspection Modal */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg bg-surface-container-low border border-outline-variant/60 rounded-xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
              <span className="font-code-sm text-xs text-primary uppercase font-bold">
                {activeProject.category} // SPECS
              </span>
              <button
                onClick={() => setActiveProject(null)}
                className="text-on-surface-variant hover:text-on-surface"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <h3 className="font-headline-md text-xl text-on-surface font-semibold">
              {activeProject.title}
            </h3>

            <p className="text-sm text-on-surface-variant leading-relaxed">
              {activeProject.description}
            </p>

            <div className="p-3 rounded bg-surface-container-lowest border border-outline-variant/30 space-y-1.5 font-mono text-xs">
              <div className="text-primary font-semibold">ENGINEERING HIGHLIGHTS:</div>
              <p className="text-on-surface-variant">{activeProject.metrics}</p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-outline-variant/30">
              {activeProject.githubUrl && (
                <a
                  href={activeProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-1.5 rounded bg-surface-container border border-outline-variant/40 font-code-sm text-xs text-on-surface hover:border-primary transition-colors flex items-center gap-1.5"
                >
                  <span className="material-symbols-outlined text-[16px]">code</span>
                  <span>GitHub</span>
                </a>
              )}
              {activeProject.liveUrl && (
                <a
                  href={activeProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-1.5 rounded bg-primary-container text-on-primary-container font-code-sm text-xs font-semibold hover:bg-primary transition-colors flex items-center gap-1.5"
                >
                  <span>Open Live Site</span>
                  <span className="material-symbols-outlined text-[14px]">open_in_new</span>
                </a>
              )}
              <button
                onClick={() => setActiveProject(null)}
                className="px-4 py-1.5 rounded bg-surface-container font-code-sm text-xs text-on-surface-variant hover:text-on-surface"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

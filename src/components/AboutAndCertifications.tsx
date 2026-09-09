import React, { useState } from 'react';
import { CERTIFICATIONS } from '../data';
import { Certification } from '../types';

export const AboutAndCertifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section
      className="w-full max-w-[1280px] mx-auto px-grid-margin-mobile lg:px-grid-margin-desktop py-16 border-t border-outline-variant/20"
      id="about"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-block-gap items-center">
        {/* Left: Biography Narrative (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 font-code-sm text-code-sm text-primary uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              BIOGRAPHY // FOUNDATIONAL CONTEXT
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
              Engineer in progress.
              <span className="text-primary block">Systems in production.</span>
            </h2>
          </div>

          {/* Institutional Meta */}
          <div className="flex flex-wrap gap-2 pt-1 font-mono text-xs">
            <span className="px-3 py-1 rounded bg-surface-container border border-outline-variant/40 text-on-surface">
              LOCATION: Bengaluru, IN
            </span>
            <span className="px-3 py-1 rounded bg-surface-container border border-outline-variant/40 text-secondary">
              INSTITUTION: REVA University
            </span>
            <span className="px-3 py-1 rounded bg-surface-container border border-outline-variant/40 text-tertiary">
              PROGRAM: B.Tech CSE (3rd Sem)
            </span>
          </div>

          {/* Biography Paragraphs */}
          <div className="space-y-4 text-on-surface-variant font-body-md text-body-md leading-relaxed">
            <p>
              I bridge the gap between algorithmic research and production infrastructure. My day-to-day focus centers on writing clean, type-safe Python and C/C++, containerizing microservices with Docker, and architecting RAG pipelines using pgvector and LangGraph.
            </p>
            <p>
              I believe that understanding how low-level systems handle memory and concurrency makes for far better AI engineers. From optimizing local Gemma 2B model inference to designing automated CI/CD deployment pipelines on Microsoft Azure, I build software that does not fail when scaled.
            </p>
          </div>
        </div>

        {/* Right: Verified Credentials (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/40 shadow-xl space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-[20px]">verified</span>
                <span className="font-code-sm text-code-sm text-on-surface font-bold uppercase">
                  Verified Credentials
                </span>
              </div>
              <span className="font-mono text-[11px] text-primary">IBM SkillsBuild</span>
            </div>

            {/* List of 3 IBM Credentials */}
            <div className="space-y-3">
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCert(cert)}
                  className="p-3.5 rounded-lg bg-surface-container border border-outline-variant/30 flex items-center justify-between group hover:border-primary/60 cursor-pointer transition-all"
                >
                  <div>
                    <h5 className="font-code-sm text-code-sm text-on-surface font-semibold group-hover:text-primary transition-colors">
                      {cert.title}
                    </h5>
                    <p className="font-mono text-[11px] text-on-surface-variant mt-0.5">
                      {cert.issuer} • {cert.issueDate}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {cert.skills.slice(0, 2).map((sk, i) => (
                        <span key={i} className="text-[10px] font-mono text-secondary">
                          • {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline group-hover:text-primary text-[18px] shrink-0 ml-2 transition-colors">
                    info
                  </span>
                </div>
              ))}
            </div>

            {/* Verified Issuer Signature */}
            <div className="pt-3 border-t border-outline-variant/30 flex items-center justify-between font-mono text-[10px] text-on-surface-variant">
              <span>ISSUER: IBM SKILLSBUILD</span>
              <span className="text-tertiary">CRYPTOGRAPHICALLY SECURED</span>
            </div>
          </div>
        </div>
      </div>

      {/* Credential Details Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-surface-container-low border border-outline-variant/60 rounded-xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-outline-variant/30">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary text-[18px]">verified</span>
                <span className="font-mono text-xs text-primary uppercase font-bold">
                  IBM SKILLSBUILD VERIFICATION
                </span>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-on-surface-variant hover:text-on-surface"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div>
              <h4 className="font-headline-md text-lg text-on-surface font-semibold">
                {selectedCert.title}
              </h4>
              <p className="text-xs font-mono text-secondary mt-1">
                Issued by {selectedCert.issuer} // {selectedCert.issueDate}
              </p>
              <p className="text-[11px] font-mono text-on-surface-variant mt-1">
                Credential Verification Hash: {selectedCert.credentialId}
              </p>
            </div>

            <div className="p-3 rounded bg-surface-container-lowest border border-outline-variant/30">
              <span className="text-xs font-mono text-primary block mb-1 font-semibold">
                CURRICULUM COMPETENCIES:
              </span>
              <ul className="text-xs font-mono text-on-surface-variant space-y-1">
                {selectedCert.skills.map((s, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="text-tertiary">✓</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedCert(null)}
                className="px-4 py-1.5 rounded bg-primary-container text-on-primary-container font-mono text-xs font-semibold hover:bg-primary"
              >
                Close Record
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

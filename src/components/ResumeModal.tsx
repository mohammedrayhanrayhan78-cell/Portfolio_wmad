import React from 'react';
import { CERTIFICATIONS, PERSONAL_INFO } from '../data';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-surface-container-low border border-outline-variant/60 rounded-2xl shadow-2xl p-6 sm:p-10 my-8 text-on-surface">
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-6 border-b border-outline-variant/30">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-container animate-ping"></span>
            <span className="font-code-sm text-code-sm text-primary uppercase font-bold tracking-widest">
              CURRICULUM VITAE // VERIFIED PROD SPEC
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant/40 text-on-surface hover:border-primary text-xs font-mono transition-colors"
            >
              <span className="material-symbols-outlined text-[16px]">print</span>
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-surface-container border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:border-primary transition-colors"
              aria-label="Close modal"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        </div>

        {/* Resume Content Sheet */}
        <div className="space-y-8 mt-6">
          {/* Header section */}
          <div>
            <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-on-surface">
              {PERSONAL_INFO.name}
            </h1>
            <p className="font-headline-md text-primary font-medium mt-1">
              AI Systems, RAG Architectures &amp; Backend Engineering
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-3 font-mono text-xs text-on-surface-variant">
              <span>Bengaluru, Karnataka, India</span>
              <span>•</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-secondary hover:underline">
                {PERSONAL_INFO.email}
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-secondary hover:underline">
                GitHub
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-secondary hover:underline">
                LinkedIn
              </a>
              <span>•</span>
              <a href={PERSONAL_INFO.leetcode} target="_blank" rel="noreferrer" className="text-secondary hover:underline">
                LeetCode (95+)
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <h2 className="font-code-sm text-xs font-bold uppercase tracking-widest text-primary border-b border-outline-variant/30 pb-1">
              01 // EDUCATION
            </h2>
            <div className="flex flex-col sm:flex-row sm:items-start justify-between">
              <div>
                <h3 className="font-headline-md text-base font-semibold text-on-surface">REVA University, Bengaluru</h3>
                <p className="text-sm text-on-surface-variant">Bachelor of Technology (B.Tech) in Computer Science &amp; Engineering</p>
                <p className="text-xs text-tertiary font-mono mt-0.5">Focus: Algorithmic Systems, Operating Systems, Database Architecture, Machine Intelligence</p>
              </div>
              <span className="text-xs font-mono text-on-surface-variant mt-1 sm:mt-0">2023 – 2027 (Expected)</span>
            </div>
          </div>

          {/* Core Technical Projects */}
          <div className="space-y-4">
            <h2 className="font-code-sm text-xs font-bold uppercase tracking-widest text-primary border-b border-outline-variant/30 pb-1">
              02 // KEY ARCHITECTURAL PROJECTS
            </h2>
            
            {/* LexiRAG */}
            <div className="space-y-1">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="font-semibold text-base text-on-surface flex items-center gap-2">
                  <span>LexiRAG</span>
                  <span className="text-xs font-mono text-tertiary px-2 py-0.5 rounded bg-tertiary/10 border border-tertiary/30">
                    Production Flagship
                  </span>
                </h3>
                <span className="text-xs font-mono text-on-surface-variant">Azure App Service // v1.8.4</span>
              </div>
              <p className="text-xs font-mono text-secondary">Tech: Python, Ollama, Gemma 2B, Groq API, Gemini, pgvector, Azure Docker</p>
              <ul className="text-sm text-on-surface-variant list-disc list-inside space-y-1 pt-1">
                <li>Engineered resilient dual inference fallback routing between offline Gemma 2B and cloud Groq LLMs.</li>
                <li>Implemented pgvector cosine embeddings with 512t recursive chunking achieving 18ms token latency.</li>
                <li>Built automated CI/CD pipeline via GitHub Actions and Azure Container Registry with zero-downtime rolling deploys.</li>
              </ul>
            </div>

            {/* LexAI */}
            <div className="space-y-1 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="font-semibold text-base text-on-surface flex items-center gap-2">
                  <span>LexAI</span>
                  <span className="text-xs font-mono text-secondary px-2 py-0.5 rounded bg-secondary/10 border border-secondary/30">
                    Sprint 04 Active
                  </span>
                </h3>
                <span className="text-xs font-mono text-on-surface-variant">Enterprise Architecture</span>
              </div>
              <p className="text-xs font-mono text-secondary">Tech: FastAPI, PostgreSQL, pgvector, LangGraph, SQLAlchemy 2.0, Docker</p>
              <ul className="text-sm text-on-surface-variant list-disc list-inside space-y-1 pt-1">
                <li>Architected stateful LangGraph multi-agent orchestration for asynchronous legal precedent discovery.</li>
                <li>Constructed FastAPI microservices with Pydantic v2 strict typing, JWT auth, and Alembic database migrations.</li>
              </ul>
            </div>

            {/* Virtual Steering Wheel */}
            <div className="space-y-1 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                <h3 className="font-semibold text-base text-on-surface">Virtual Steering Wheel</h3>
                <span className="text-xs font-mono text-on-surface-variant">Computer Vision System</span>
              </div>
              <p className="text-xs font-mono text-secondary">Tech: Python, OpenCV, MediaPipe Hands</p>
              <p className="text-sm text-on-surface-variant">
                Synthesized 60 FPS real-time hand-tracking vectors to compute steering wheel angular telemetry for vehicle simulations.
              </p>
            </div>
          </div>

          {/* Technical Skills Taxonomy */}
          <div className="space-y-3">
            <h2 className="font-code-sm text-xs font-bold uppercase tracking-widest text-primary border-b border-outline-variant/30 pb-1">
              03 // TECHNICAL PROFICIENCY
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded bg-surface-container border border-outline-variant/30">
                <span className="text-primary font-semibold block mb-1">LANGUAGES &amp; FOUNDATIONS:</span>
                <span className="text-on-surface">Python (Advanced), C / C++, Java, SQL, Data Structures &amp; Algorithms</span>
              </div>
              <div className="p-3 rounded bg-surface-container border border-outline-variant/30">
                <span className="text-primary font-semibold block mb-1">AI &amp; RAG FRAMEWORKS:</span>
                <span className="text-on-surface">LangGraph, Ollama, Gemma 2B, Groq API, pgvector, Prompt Engineering</span>
              </div>
              <div className="p-3 rounded bg-surface-container border border-outline-variant/30">
                <span className="text-secondary font-semibold block mb-1">BACKEND &amp; ORM:</span>
                <span className="text-on-surface">FastAPI, SQLAlchemy 2.x, Pydantic v2, RESTful APIs, Node.js Basics</span>
              </div>
              <div className="p-3 rounded bg-surface-container border border-outline-variant/30">
                <span className="text-tertiary font-semibold block mb-1">CLOUD &amp; DEVOPS:</span>
                <span className="text-on-surface">Microsoft Azure, Docker, Linux/Bash, GitHub Actions CI/CD</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="font-code-sm text-xs font-bold uppercase tracking-widest text-primary border-b border-outline-variant/30 pb-1">
              04 // VERIFIED CERTIFICATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="p-3 rounded bg-surface-container border border-outline-variant/30 text-xs font-mono">
                  <span className="text-on-surface font-semibold block">{cert.title}</span>
                  <span className="text-primary text-[10px] block mt-0.5">{cert.issuer} ({cert.issueDate})</span>
                  <span className="text-[9px] text-on-surface-variant block mt-1">ID: {cert.credentialId}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-outline-variant/30 flex items-center justify-between font-mono text-xs text-on-surface-variant">
          <span>Mohammed Rayhan // Portfolio Record 2026</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-primary-container text-on-primary-container font-semibold hover:bg-primary transition-colors"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { LEXAI_ROADMAP, PERSONAL_INFO } from '../data';
import { RoadmapStep } from '../types';

export const LexAIArchitecture: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<RoadmapStep>(LEXAI_ROADMAP[4]); // Active step 5 (Auth Layer)
  const [selectedNode, setSelectedNode] = useState<'client' | 'gateway' | 'agents' | 'db' | null>(null);

  const nodeDetails = {
    client: {
      title: 'Web Client (Next.js UI)',
      desc: 'High-speed edge rendered React interface supporting streaming token chunks, client-side PDF rendering, and low-latency websocket channels.',
      specs: ['Next.js 14 App Router', 'Server-Sent Events (SSE)', 'Optimistic Cache Updates'],
    },
    gateway: {
      title: 'FastAPI Gateway & Security Proxy',
      desc: 'Asynchronous reverse gateway enforcing cryptographically signed JWT tokens, IP rate limiting via Redis token bucket, and request payload schema sanitization.',
      specs: ['Pydantic v2 validation', 'SlowApi Rate Limiter', '100% Async Non-blocking'],
    },
    agents: {
      title: 'LangGraph Multi-Agent Orchestration',
      desc: 'Stateful cyclic graphs coordinating specialized agents: Query Decomposer, Legal Statute Retriever, Citation Verifier, and Synthesizer.',
      specs: ['StateGraph Memory Persistence', 'Tool-calling LLM bindings', 'Human-in-the-loop checkpoints'],
    },
    db: {
      title: 'pgvector + PostgreSQL Data Plane',
      desc: 'Enterprise database hosting document embeddings with HNSW indexing, reciprocal rank fusion between dense vectors and sparse BM25 indices.',
      specs: ['HNSW m=16, ef_construction=64', 'Sub-20ms Cosine KNN', 'ACID compliant legal ledger'],
    },
  };

  return (
    <section
      className="w-full max-w-[1280px] mx-auto px-grid-margin-mobile lg:px-grid-margin-desktop py-16 border-t border-outline-variant/20"
      id="architecture"
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 mb-2 font-code-sm text-code-sm text-secondary uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-ping"></span>
            NEXT-GEN ARCHITECTURE // ACTIVE SPRINT
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
            LexAI
          </h2>
          <p className="font-headline-md text-headline-md text-on-surface-variant mt-1">
            Enterprise AI Legal Intelligence Platform
          </p>
        </div>

        {/* Sprint Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-secondary/10 border border-secondary/30">
          <span className="w-2 h-2 rounded-full bg-secondary"></span>
          <span className="font-code-sm text-code-sm text-secondary font-semibold uppercase">
            SPRINT 04 // IN PROGRESS
          </span>
        </div>
      </div>

      {/* Main Container Box */}
      <div className="rounded-2xl bg-surface-container-low border border-outline-variant/40 p-6 lg:p-8 space-y-8">
        {/* Tech Stack Badges Horizontal Strip */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-code-sm text-code-sm text-on-surface-variant uppercase font-semibold mr-2">
            TECH CORE:
          </span>
          <span className="px-2.5 py-1 rounded bg-surface-container-high font-code-sm text-code-sm text-primary">
            FastAPI
          </span>
          <span className="px-2.5 py-1 rounded bg-surface-container-high font-code-sm text-code-sm text-on-surface">
            PostgreSQL
          </span>
          <span className="px-2.5 py-1 rounded bg-surface-container-high font-code-sm text-code-sm text-tertiary">
            pgvector
          </span>
          <span className="px-2.5 py-1 rounded bg-surface-container-high font-code-sm text-code-sm text-on-surface">
            SQLAlchemy 2.x
          </span>
          <span className="px-2.5 py-1 rounded bg-surface-container-high font-code-sm text-code-sm text-on-surface">
            Pydantic v2
          </span>
          <span className="px-2.5 py-1 rounded bg-surface-container-high font-code-sm text-code-sm text-primary-fixed">
            LangGraph
          </span>
          <span className="px-2.5 py-1 rounded bg-surface-container-high font-code-sm text-code-sm text-on-surface">
            Docker
          </span>
          <span className="px-2.5 py-1 rounded bg-surface-container-high font-code-sm text-code-sm text-on-surface">
            Alembic
          </span>
        </div>

        {/* Linear Multi-Agent Architecture Diagram */}
        <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/30 space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
              PIPELINE SCHEMATIC // DATA FLOW
            </span>
            <span className="font-mono text-[11px] text-on-surface-variant">ASYNC EVENT BUS</span>
          </div>

          {/* Flow Visual (Clickable nodes) */}
          <div className="grid grid-cols-1 md:grid-cols-7 gap-2 items-center text-center font-mono text-xs">
            {/* Step 1 */}
            <button
              onClick={() => setSelectedNode(selectedNode === 'client' ? null : 'client')}
              className={`p-3 rounded border flex flex-col items-center justify-center transition-all ${
                selectedNode === 'client'
                  ? 'bg-surface-container-high border-secondary ring-1 ring-secondary'
                  : 'bg-surface-container border-outline-variant/30 hover:border-secondary/60'
              }`}
            >
              <span className="material-symbols-outlined text-secondary text-[20px] mb-1">web</span>
              <span className="text-on-surface font-semibold">Web Client</span>
              <span className="text-[10px] text-on-surface-variant mt-0.5">Next.js UI</span>
            </button>

            {/* Arrow */}
            <div className="hidden md:flex justify-center text-primary-fixed animate-pulse">→</div>

            {/* Step 2 */}
            <button
              onClick={() => setSelectedNode(selectedNode === 'gateway' ? null : 'gateway')}
              className={`p-3 rounded border flex flex-col items-center justify-center transition-all ${
                selectedNode === 'gateway'
                  ? 'bg-surface-container-high border-primary ring-1 ring-primary'
                  : 'bg-surface-container border-outline-variant/30 hover:border-primary/60'
              }`}
            >
              <span className="material-symbols-outlined text-primary text-[20px] mb-1">security</span>
              <span className="text-on-surface font-semibold">FastAPI Gateway</span>
              <span className="text-[10px] text-on-surface-variant mt-0.5">Rate Limit + JWT</span>
            </button>

            {/* Arrow */}
            <div className="hidden md:flex justify-center text-primary-fixed animate-pulse">→</div>

            {/* Step 3 */}
            <button
              onClick={() => setSelectedNode(selectedNode === 'agents' ? null : 'agents')}
              className={`p-3 rounded border flex flex-col items-center justify-center transition-all ${
                selectedNode === 'agents'
                  ? 'bg-surface-container-high border-tertiary ring-1 ring-tertiary'
                  : 'bg-surface-container-high border-primary/40 hover:border-tertiary'
              }`}
            >
              <span className="material-symbols-outlined text-tertiary text-[20px] mb-1">account_tree</span>
              <span className="text-on-surface font-semibold">LangGraph Agents</span>
              <span className="text-[10px] text-tertiary mt-0.5">State Machine</span>
            </button>

            {/* Arrow */}
            <div className="hidden md:flex justify-center text-primary-fixed animate-pulse">→</div>

            {/* Step 4 */}
            <button
              onClick={() => setSelectedNode(selectedNode === 'db' ? null : 'db')}
              className={`p-3 rounded border flex flex-col items-center justify-center transition-all ${
                selectedNode === 'db'
                  ? 'bg-surface-container-high border-primary-fixed ring-1 ring-primary-fixed'
                  : 'bg-surface-container border-outline-variant/30 hover:border-primary-fixed/60'
              }`}
            >
              <span className="material-symbols-outlined text-primary-fixed text-[20px] mb-1">database</span>
              <span className="text-on-surface font-semibold">pgvector + SQL</span>
              <span className="text-[10px] text-on-surface-variant mt-0.5">HNSW Index</span>
            </button>
          </div>

          {/* Node detail callout if clicked */}
          {selectedNode && (
            <div className="p-3.5 rounded bg-surface-container border border-outline-variant/40 mt-3 text-left">
              <div className="flex items-center justify-between pb-1 border-b border-outline-variant/20">
                <span className="font-code-sm text-xs font-semibold text-primary">
                  {nodeDetails[selectedNode].title}
                </span>
                <button
                  onClick={() => setSelectedNode(null)}
                  className="text-on-surface-variant hover:text-on-surface text-xs font-mono"
                >
                  [x] close
                </button>
              </div>
              <p className="text-xs text-on-surface-variant mt-2 leading-relaxed">
                {nodeDetails[selectedNode].desc}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {nodeDetails[selectedNode].specs.map((sp, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-surface-container-highest text-[10px] font-mono text-on-surface"
                  >
                    {sp}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Implementation Roadmap & Pipeline Stepper */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-code-sm text-code-sm text-on-surface uppercase font-bold tracking-wider">
              SYSTEM IMPLEMENTATION LIFECYCLE
            </h4>
            <span className="text-xs font-mono text-on-surface-variant">Click step to inspect specs</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {LEXAI_ROADMAP.map((step) => {
              const isSelected = selectedStep.id === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => setSelectedStep(step)}
                  className={`p-2.5 rounded text-left transition-all ${
                    isSelected
                      ? 'bg-surface-container-high border-2 border-primary shadow-sm'
                      : step.status === 'DONE'
                      ? 'bg-surface-container border border-tertiary/30 hover:border-tertiary'
                      : step.status === 'ACTIVE'
                      ? 'bg-surface-container-high border border-primary hover:border-primary-fixed'
                      : 'bg-surface-container/60 border border-outline-variant/30 opacity-70 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold">
                    {step.status === 'DONE' && (
                      <span className="text-tertiary flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">check_circle</span>
                        <span>DONE</span>
                      </span>
                    )}
                    {step.status === 'ACTIVE' && (
                      <span className="text-primary flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        <span>ACTIVE</span>
                      </span>
                    )}
                    {step.status === 'SCHEDULED' && (
                      <span className="text-on-surface-variant">SCHEDULED</span>
                    )}
                  </div>
                  <p className="font-code-sm text-code-sm text-on-surface mt-1 font-medium truncate">
                    {step.label}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Detailed step inspection callout */}
          <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="font-code-sm text-xs font-bold text-on-surface uppercase">
                PHASE 0{selectedStep.id} // {selectedStep.label} ({selectedStep.status})
              </span>
              <span className="text-xs font-mono text-tertiary">
                {selectedStep.status === 'DONE' ? '100% COMPLETE' : selectedStep.status === 'ACTIVE' ? 'SPRINT 04 COMMITS' : 'BACKLOG TARGET'}
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {selectedStep.details}
            </p>
            {selectedStep.deliverables && (
              <div className="flex flex-wrap gap-2 pt-1">
                {selectedStep.deliverables.map((deliv, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded bg-surface-container font-mono text-[11px] text-primary"
                  >
                    ✓ {deliv}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Planned Modules Pills & GitHub Action */}
        <div className="pt-4 border-t border-outline-variant/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[11px] text-on-surface-variant">ROADMAP ENHANCEMENTS:</span>
            <span className="px-2 py-0.5 rounded bg-surface-container-highest font-mono text-[11px] text-on-surface">
              PDF OCR Engine
            </span>
            <span className="px-2 py-0.5 rounded bg-surface-container-highest font-mono text-[11px] text-on-surface">
              Multimodal Vision
            </span>
            <span className="px-2 py-0.5 rounded bg-surface-container-highest font-mono text-[11px] text-on-surface">
              Voice Transcription
            </span>
            <span className="px-2 py-0.5 rounded bg-surface-container-highest font-mono text-[11px] text-on-surface">
              Multi-LLM Arbitration
            </span>
          </div>

          <a
            className="inline-flex items-center gap-1.5 font-code-sm text-code-sm text-primary hover:text-primary-fixed transition-colors"
            href={PERSONAL_INFO.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>View LexAI on GitHub</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </a>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { LEETCODE_DATA } from '../data';

export const SystemsProgression: React.FC = () => {
  const [hoveredCell, setHoveredCell] = useState<number | null>(null);

  const cadenceCells = [
    { day: 'Day -11', commits: 3, label: 'NeetCode DP: 3 solved' },
    { day: 'Day -10', commits: 4, label: 'pgvector indexing benchmarks' },
    { day: 'Day -9', commits: 7, label: 'FastAPI async routing test suite' },
    { day: 'Day -8', commits: 5, label: 'LangGraph multi-agent loop' },
    { day: 'Day -7', commits: 8, label: 'LeetCode Trees & DFS: 4 problems' },
    { day: 'Day -6', commits: 6, label: 'Ollama Gemma 2B local quantized test' },
    { day: 'Day -5', commits: 9, label: 'Docker multi-stage build optimization' },
    { day: 'Day -4', commits: 2, label: 'LeetCode Graphs & Dijkstra' },
    { day: 'Day -3', commits: 7, label: 'Azure container health checks' },
    { day: 'Day -2', commits: 8, label: 'RAG context sanitization filter' },
    { day: 'Day -1', commits: 9, label: 'FastAPI SSE streaming router' },
    { day: 'Today', commits: 11, label: 'LexAI Sprint 04 dispatch: ACTIVE' },
  ];

  return (
    <section
      className="w-full max-w-[1280px] mx-auto px-grid-margin-mobile lg:px-grid-margin-desktop py-16 border-t border-outline-variant/20"
      id="journey"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-block-gap">
        {/* Left: Technical Evolution Timeline (7 cols) */}
        <div className="lg:col-span-7 flex flex-col space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 font-code-sm text-code-sm text-primary uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              CHRONOLOGY // ENGINEERING TRAJECTORY
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
              Systems Progression
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-2">
              A disciplined transition from foundational low-level algorithmic logic to distributed cloud artificial intelligence.
            </p>
          </div>

          {/* Linear Stepped Progression */}
          <div className="space-y-4 relative pl-6 border-l border-outline-variant/40">
            {/* Phase 01 */}
            <div className="relative group">
              <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-surface-container-high border-2 border-outline-variant group-hover:border-primary transition-colors"></span>
              <span className="font-label-caps text-label-caps text-on-surface-variant">
                PHASE 01 // FOUNDATION
              </span>
              <h4 className="font-headline-md text-[17px] text-on-surface font-semibold">
                Low-Level Logic &amp; C/C++
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Memory allocation, pointers, complexity analysis, and strict data structure implementations.
              </p>
            </div>

            {/* Phase 02 */}
            <div className="relative group">
              <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-surface-container-high border-2 border-outline-variant group-hover:border-primary transition-colors"></span>
              <span className="font-label-caps text-label-caps text-primary tracking-wider">
                PHASE 02 // ALGORITHMIC RIGOR
              </span>
              <h4 className="font-headline-md text-[17px] text-on-surface font-semibold">
                DSA &amp; NeetCode 150 In-Progress
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Continuous problem solving across dynamic programming, trees, and graphs on LeetCode.
              </p>
            </div>

            {/* Phase 03 */}
            <div className="relative group">
              <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-surface-container-high border-2 border-outline-variant group-hover:border-primary transition-colors"></span>
              <span className="font-label-caps text-label-caps text-secondary tracking-wider">
                PHASE 03 // BACKEND ARCHITECTURE
              </span>
              <h4 className="font-headline-md text-[17px] text-on-surface font-semibold">
                Python Core, FastAPI &amp; PostgreSQL
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Asynchronous event loops, RESTful endpoints, SQLAlchemy 2.0 ORM, and schema validation.
              </p>
            </div>

            {/* Phase 04 */}
            <div className="relative group">
              <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-surface-container-high border-2 border-outline-variant group-hover:border-primary transition-colors"></span>
              <span className="font-label-caps text-label-caps text-tertiary tracking-wider">
                PHASE 04 // APPLIED AI &amp; RETRIEVAL
              </span>
              <h4 className="font-headline-md text-[17px] text-on-surface font-semibold">
                RAG Systems &amp; Local Ollama Nodes
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Vector indexing with pgvector, cosine embeddings, prompt structuring, and local Gemma inference.
              </p>
            </div>

            {/* Phase 05 */}
            <div className="relative group">
              <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-primary-container border-2 border-primary"></span>
              <span className="font-label-caps text-label-caps text-primary-container font-bold tracking-wider">
                PHASE 05 // CURRENT STATE
              </span>
              <h4 className="font-headline-md text-[17px] text-on-surface font-semibold">
                Multi-Agent Systems &amp; Azure Orchestration
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                LangGraph stateful graphs, microservices, containerization with Docker, and cloud deployments.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Problem Solving & LeetCode Telemetry (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/40 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[22px]">code_blocks</span>
                <span className="font-code-sm text-code-sm text-on-surface font-bold uppercase">
                  Algorithmic Telemetry
                </span>
              </div>
              <a
                className="font-mono text-[11px] text-primary hover:underline flex items-center gap-1"
                href="https://leetcode.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>LeetCode</span>
                <span className="material-symbols-outlined text-[13px]">open_in_new</span>
              </a>
            </div>

            {/* Big Metric */}
            <div className="flex items-baseline gap-4">
              <span className="font-display text-[48px] leading-none text-on-surface font-bold">
                {LEETCODE_DATA.solvedCount}
                <span className="text-primary-container">+</span>
              </span>
              <div>
                <p className="font-headline-md text-[15px] text-on-surface font-medium">Problems Solved</p>
                <p className="font-code-sm text-code-sm text-on-surface-variant">
                  Continuous LeetCode &amp; NeetCode Mastery
                </p>
              </div>
            </div>

            {/* Category Breakdown Bar Chart / Visual */}
            <div className="space-y-3 font-mono text-xs">
              {LEETCODE_DATA.categories.map((cat, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-on-surface-variant mb-1">
                    <span>{cat.name}</span>
                    <span
                      className={
                        cat.color === 'bg-tertiary'
                          ? 'text-tertiary'
                          : cat.color === 'bg-primary'
                          ? 'text-primary'
                          : cat.color === 'bg-primary-fixed'
                          ? 'text-primary-fixed'
                          : 'text-secondary'
                      }
                    >
                      {cat.status}
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-highest h-1.5 rounded overflow-hidden">
                    <div
                      className={`${cat.color} h-full transition-all duration-500`}
                      style={{ width: `${cat.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Algorithmic Commit / Heatmap Visualization */}
            <div className="pt-4 border-t border-outline-variant/30 relative">
              <div className="flex items-center justify-between mb-2">
                <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider block">
                  RECENT DISPATCH CADENCE
                </span>
                {hoveredCell !== null && (
                  <span className="text-[10px] font-mono text-tertiary">
                    {cadenceCells[hoveredCell].label}
                  </span>
                )}
              </div>

              <div className="grid grid-cols-12 gap-1.5">
                {cadenceCells.map((cell, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredCell(idx)}
                    onMouseLeave={() => setHoveredCell(null)}
                    className={`h-4 rounded-sm transition-all cursor-pointer ${
                      idx === 11
                        ? 'bg-primary-container animate-pulse ring-1 ring-primary'
                        : idx % 3 === 0
                        ? 'bg-tertiary/40 hover:bg-tertiary'
                        : idx % 2 === 0
                        ? 'bg-tertiary/70 hover:bg-tertiary'
                        : 'bg-tertiary hover:bg-primary'
                    }`}
                    title={`${cell.day}: ${cell.label}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

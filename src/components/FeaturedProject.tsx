import React, { useState } from 'react';
import { FLAGSHIP_LEXIRAG, SAMPLE_QUERIES } from '../data';

export const FeaturedProject: React.FC = () => {
  const [selectedQueryIndex, setSelectedQueryIndex] = useState(0);
  const [isSimulating, setIsSimulating] = useState(false);
  const currentSample = SAMPLE_QUERIES[selectedQueryIndex];

  const handleSelectQuery = (idx: number) => {
    setIsSimulating(true);
    setTimeout(() => {
      setSelectedQueryIndex(idx);
      setIsSimulating(false);
    }, 350);
  };

  return (
    <section
      className="w-full max-w-[1280px] mx-auto px-grid-margin-mobile lg:px-grid-margin-desktop py-16 border-t border-outline-variant/20"
      id="work"
    >
      {/* Flagship Container */}
      <div className="rounded-2xl bg-surface-container-low border border-outline-variant/40 p-6 lg:p-10 relative overflow-hidden shadow-2xl">
        {/* Upper Meta Rail */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-outline-variant/30">
          <div className="flex items-center gap-3">
            <span className="font-code-sm text-code-sm text-on-surface-variant font-bold tracking-widest uppercase">
              FEATURED PROJECT // 01
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-surface-container border border-outline-variant/40 font-code-sm text-code-sm text-on-surface-variant font-medium flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-surface-bright"></span>
              PRODUCTION READY
            </span>
          </div>
          <div className="flex items-center gap-2 font-mono text-[11px] text-on-surface-variant">
            <span>HOST: {FLAGSHIP_LEXIRAG.host}</span>
            <span className="text-outline-variant">•</span>
            <span>BUILD: {FLAGSHIP_LEXIRAG.buildVersion}</span>
          </div>
        </div>

        {/* Main Project Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8 items-start">
          {/* Left: Project Narrative & Specs (6 cols) */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div>
              <h3 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
                {FLAGSHIP_LEXIRAG.title}
              </h3>
              <p className="font-headline-md text-headline-md text-on-surface-variant mt-1 font-medium">
                {FLAGSHIP_LEXIRAG.headline}
              </p>
            </div>

            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {FLAGSHIP_LEXIRAG.description}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {FLAGSHIP_LEXIRAG.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 rounded bg-surface-container border border-outline-variant/40 font-code-sm text-code-sm text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* 3-Metric Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {FLAGSHIP_LEXIRAG.metrics.map((metric, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-surface-container border border-outline-variant/30">
                  <p className="font-label-caps text-label-caps uppercase text-on-surface-variant">
                    {metric.label}
                  </p>
                  <p className="font-headline-md text-[16px] text-on-surface font-semibold mt-1">
                    {metric.value}
                  </p>
                  <p className="font-code-sm text-[11px] text-on-surface-variant mt-0.5">
                    {metric.subtext}
                  </p>
                </div>
              ))}
            </div>

            {/* Query Selector Tabs */}
            <div className="space-y-2 pt-2">
              <span className="font-code-sm text-xs text-on-surface-variant uppercase tracking-wider block">
                TEST SCENARIOS (INTERACTIVE RAG BENCHMARK):
              </span>
              <div className="flex flex-wrap gap-2">
                {SAMPLE_QUERIES.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectQuery(idx)}
                    className={`px-3 py-1 rounded font-code-sm text-[11px] text-left transition-all ${
                      selectedQueryIndex === idx
                        ? 'bg-surface-container-highest text-on-surface font-medium border border-outline-variant/60 shadow-sm'
                        : 'bg-surface-container text-on-surface-variant hover:text-on-surface border border-outline-variant/30'
                    }`}
                  >
                    Scenario 0{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-container-highest text-on-surface font-code-sm text-code-sm font-semibold hover:bg-surface-bright transition-colors active:scale-95 border border-outline-variant/50"
                href={FLAGSHIP_LEXIRAG.liveUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span>View Project Live</span>
                <span className="material-symbols-outlined text-[16px]">open_in_new</span>
              </a>
              <a
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-container border border-outline-variant/50 text-on-surface font-code-sm text-code-sm font-medium hover:border-outline transition-colors active:scale-95"
                href={FLAGSHIP_LEXIRAG.githubUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[16px]">code</span>
                <span>GitHub Repo</span>
              </a>
            </div>
          </div>

          {/* Right: High-Fidelity UI Interface Mockup & Inspection (6 cols) */}
          <div className="lg:col-span-6 w-full">
            <div className="w-full rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-xl overflow-hidden">
              {/* Simulated Browser / App Chrome */}
              <div className="px-4 py-2.5 bg-surface-container flex items-center justify-between border-b border-outline-variant/30">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-bright"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-bright"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-bright"></span>
                  <span className="font-code-sm text-[11px] text-on-surface-variant ml-2">
                    lexirag.internal.net/workspace
                  </span>
                </div>
                <span className="font-code-sm text-[10px] text-on-surface-variant">
                  TOKEN_LATENCY: {currentSample.latency}
                </span>
              </div>

              {/* Chat / Document Body */}
              <div className="p-5 space-y-4">
                {/* Legal Query */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-surface-container-high flex items-center justify-center text-on-surface-variant shrink-0">
                    <span className="material-symbols-outlined text-[16px]">gavel</span>
                  </div>
                  <div className="p-3 rounded-lg bg-surface-container-high text-on-surface font-body-sm text-body-sm max-w-[85%] border border-outline-variant/30">
                    <p className="text-on-surface font-medium">{currentSample.query}</p>
                  </div>
                </div>

                {/* AI RAG Execution Stream */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded bg-surface-container-highest border border-outline-variant/40 flex items-center justify-center text-on-surface shrink-0">
                    <span className="material-symbols-outlined text-[16px]">smart_toy</span>
                  </div>
                  <div
                    className={`p-4 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm max-w-[90%] border border-outline-variant/30 space-y-3 transition-opacity ${
                      isSimulating ? 'opacity-40 animate-pulse' : 'opacity-100'
                    }`}
                  >
                    <div className="flex items-center gap-2 pb-2 border-b border-outline-variant/20 font-code-sm text-[11px] text-on-surface-variant">
                      <span className="material-symbols-outlined text-[14px]">verified</span>
                      <span>{currentSample.verifiedSource}</span>
                    </div>

                    <p className="text-on-surface leading-relaxed">{currentSample.response}</p>

                    {/* Legal Citation Drawer Component */}
                    <div className="p-2.5 rounded bg-surface-container-lowest border border-outline-variant/40 space-y-1">
                      <div className="flex items-center justify-between text-[11px] font-mono">
                        <span className="text-on-surface font-semibold">{currentSample.citation.ref}</span>
                        <span className="text-on-surface-variant">{currentSample.citation.meta}</span>
                      </div>
                      <p className="font-mono text-[10px] text-on-surface-variant">
                        {currentSample.citation.text}
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-1 font-mono text-[10px] text-on-surface-variant">
                      <span>INFERENCE: {currentSample.localInference}</span>
                      <span className="text-on-surface-variant">FAILOVER: {currentSample.failoverStatus}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terminal Status Strip */}
              <div className="px-4 py-2 bg-surface-container-high/60 border-t border-outline-variant/30 flex items-center justify-between font-mono text-[11px]">
                <span className="text-on-surface-variant">HYBRID RAG PIPELINE // READY</span>
                <span className="text-on-surface font-medium">STREAM TOKENS: {currentSample.tokSpeed}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

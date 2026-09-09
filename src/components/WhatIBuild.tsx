import React, { useState } from 'react';

export const WhatIBuild: React.FC = () => {
  const [topK, setTopK] = useState(4);
  const [temperature, setTemperature] = useState(0.1);
  const [chunkingMode, setChunkingMode] = useState<'RecursiveCharacter' | 'Semantic' | 'TokenWindow'>('RecursiveCharacter');
  const [activeTab, setActiveTab] = useState<'FastAPI' | 'SQLAlchemy' | 'Pydantic'>('FastAPI');

  return (
    <section
      className="w-full max-w-[1280px] mx-auto px-grid-margin-mobile lg:px-grid-margin-desktop py-16 border-t border-outline-variant/20"
      id="skills"
    >
      {/* Header of Category */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 mb-2 font-code-sm text-code-sm text-primary uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
            CORE COMPETENCIES // DOMAIN EXPERTISE
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
            What I Build
          </h2>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Architecting robust layers from mathematical LLM orchestration down to raw relational databases and container deployments.
        </p>
      </div>

      {/* 3-Card Technical Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 01: AI SYSTEMS */}
        <div className="group flex flex-col justify-between p-6 rounded-xl bg-surface-container-low border border-outline-variant/40 hover:border-primary-container/70 hover:bg-surface-container transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
                01 // INTELLIGENCE TIER
              </span>
              <span className="material-symbols-outlined text-primary-fixed text-[24px]">psychology</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-3">
              AI Systems &amp; RAG
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
              Retrieval-Augmented Generation, Multi-Agent pipelines, token streaming, local Ollama nodes, and cloud model arbitration.
            </p>

            {/* Interactive schematic: Chunking & Token Stream */}
            <div className="p-3 rounded bg-surface-container-lowest border border-outline-variant/30 space-y-2 mb-4 font-mono text-[11px]">
              <div className="flex justify-between items-center text-on-surface-variant">
                <span>CHUNKING:</span>
                <select
                  aria-label="Chunking strategy"
                  value={chunkingMode}
                  onChange={(e) => setChunkingMode(e.target.value as any)}
                  className="bg-surface-container border border-outline-variant/30 text-secondary text-[11px] rounded px-1.5 py-0.5 focus:outline-none"
                >
                  <option value="RecursiveCharacter">RecursiveCharacter</option>
                  <option value="Semantic">SemanticWindow</option>
                  <option value="TokenWindow">TokenWindow (512t)</option>
                </select>
              </div>

              <div className="flex justify-between text-on-surface-variant">
                <span>EMBEDDING:</span>
                <span className="text-tertiary">text-embedding-3-small</span>
              </div>

              {/* Visualized embedding vector density */}
              <div className="w-full bg-surface-container-high h-1.5 rounded overflow-hidden mt-1">
                <div
                  className="bg-primary h-full transition-all duration-300"
                  style={{ width: `${Math.min(100, topK * 16 + 20)}%` }}
                ></div>
              </div>

              <div className="flex items-center justify-between text-[10px] text-on-surface-variant pt-1">
                <div className="flex items-center gap-1.5">
                  <span>TOP_K:</span>
                  <button
                    onClick={() => setTopK((k) => (k > 2 ? k - 1 : 8))}
                    className="text-primary font-bold hover:underline"
                    title="Toggle Top_K"
                  >
                    {topK}
                  </button>
                </div>
                <div className="flex items-center gap-1.5">
                  <span>TEMP:</span>
                  <button
                    onClick={() => setTemperature((t) => (t === 0.1 ? 0.7 : 0.1))}
                    className="text-secondary font-bold hover:underline"
                    title="Toggle Temperature"
                  >
                    {temperature}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-outline-variant/30">
            <span className="px-2 py-0.5 rounded bg-surface-container-highest text-primary-fixed font-code-sm text-[11px]">
              LangGraph
            </span>
            <span className="px-2 py-0.5 rounded bg-surface-container-highest text-primary-fixed font-code-sm text-[11px]">
              Ollama
            </span>
            <span className="px-2 py-0.5 rounded bg-surface-container-highest text-primary-fixed font-code-sm text-[11px]">
              pgvector
            </span>
            <span className="px-2 py-0.5 rounded bg-surface-container-highest text-primary-fixed font-code-sm text-[11px]">
              Gemma 2B
            </span>
          </div>
        </div>

        {/* Card 02: CLOUD & INFRASTRUCTURE */}
        <div className="group flex flex-col justify-between p-6 rounded-xl bg-surface-container-low border border-outline-variant/40 hover:border-secondary-container/70 hover:bg-surface-container transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">
                02 // INFRASTRUCTURE
              </span>
              <span className="material-symbols-outlined text-secondary text-[24px]">dns</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-3">
              Cloud &amp; DevOps
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-6">
              Azure cloud infrastructure, containerization via Docker, resilient REST architectures, and automated CI/CD deployment pipelines.
            </p>

            {/* Minimal schematic: Container Topology */}
            <div className="p-3 rounded bg-surface-container-lowest border border-outline-variant/30 space-y-2 mb-4 font-mono text-[11px]">
              <div className="flex items-center justify-between text-on-surface-variant">
                <span>DOCKER DAEMON:</span>
                <span className="text-tertiary">UP (12 CONTAINERS)</span>
              </div>
              <div className="flex items-center justify-between text-on-surface-variant">
                <span>AZURE HOST:</span>
                <span className="text-secondary">East US / Linux F1</span>
              </div>
              <div className="flex items-center justify-between text-on-surface-variant">
                <span>SSL / TLS:</span>
                <span className="text-on-surface">Auto-Renew Let's Encrypt</span>
              </div>
              <div className="flex items-center justify-between text-[10px] text-tertiary pt-1">
                <span>HEALTH: 100% HEALTHY</span>
                <span>UPTIME: 99.98%</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-outline-variant/30">
            <span className="px-2 py-0.5 rounded bg-surface-container-highest text-secondary-fixed font-code-sm text-[11px]">
              Azure
            </span>
            <span className="px-2 py-0.5 rounded bg-surface-container-highest text-secondary-fixed font-code-sm text-[11px]">
              Docker
            </span>
            <span className="px-2 py-0.5 rounded bg-surface-container-highest text-secondary-fixed font-code-sm text-[11px]">
              PostgreSQL
            </span>
            <span className="px-2 py-0.5 rounded bg-surface-container-highest text-secondary-fixed font-code-sm text-[11px]">
              Linux/Bash
            </span>
          </div>
        </div>

        {/* Card 03: SOFTWARE ENGINEERING */}
        <div className="group flex flex-col justify-between p-6 rounded-xl bg-surface-container-low border border-outline-variant/40 hover:border-tertiary-container/70 hover:bg-surface-container transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-tertiary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase">
                03 // CORE BACKEND
              </span>
              <span className="material-symbols-outlined text-tertiary text-[24px]">terminal</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface font-semibold mb-3">
              Software Engineering
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-4">
              Python core mastery, FastAPI microservices, SQLAlchemy 2.0 async ORM, algorithmic efficiency, and strict type schemas.
            </p>

            {/* Interactive Tab Selector for code snippet */}
            <div className="flex items-center gap-1 mb-2 font-mono text-[10px]">
              {(['FastAPI', 'SQLAlchemy', 'Pydantic'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    activeTab === tab
                      ? 'bg-surface-container-highest text-tertiary font-bold'
                      : 'text-on-surface-variant hover:text-on-surface'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Micro Code-Flow Snippet */}
            <div className="p-3 rounded bg-surface-container-lowest border border-outline-variant/30 font-mono text-[10px] text-on-surface-variant mb-4 overflow-x-auto">
              {activeTab === 'FastAPI' && (
                <div>
                  <span className="text-secondary">async def</span> <span className="text-tertiary">query_pipeline</span>(ctx: <span className="text-primary">RequestContext</span>):<br />
                  &nbsp;&nbsp;claims = <span className="text-secondary">await</span> verify_jwt(ctx)<br />
                  &nbsp;&nbsp;vec = <span className="text-secondary">await</span> embed(ctx.prompt)<br />
                  &nbsp;&nbsp;<span className="text-secondary">return</span> <span className="text-secondary">await</span> db.execute(select_knn(vec))
                </div>
              )}
              {activeTab === 'SQLAlchemy' && (
                <div>
                  <span className="text-secondary">stmt</span> = select(LegalDoc).where(<br />
                  &nbsp;&nbsp;LegalDoc.embedding.cosine_distance(query_vector) &lt; 0.25<br />
                  ).order_by(LegalDoc.embedding.cosine_distance(query_vector)).limit(top_k)<br />
                  result = <span className="text-secondary">await</span> session.execute(stmt)
                </div>
              )}
              {activeTab === 'Pydantic' && (
                <div>
                  <span className="text-secondary">class</span> <span className="text-tertiary">IngressQuery</span>(BaseModel):<br />
                  &nbsp;&nbsp;prompt: str = Field(min_length=3, max_length=4096)<br />
                  &nbsp;&nbsp;filters: Optional[dict[str, Any]] = None<br />
                  &nbsp;&nbsp;temperature: float = Field(default=0.1, ge=0.0, le=1.0)
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-outline-variant/30">
            <span className="px-2 py-0.5 rounded bg-surface-container-highest text-tertiary-fixed font-code-sm text-[11px]">
              FastAPI
            </span>
            <span className="px-2 py-0.5 rounded bg-surface-container-highest text-tertiary-fixed font-code-sm text-[11px]">
              SQLAlchemy 2.x
            </span>
            <span className="px-2 py-0.5 rounded bg-surface-container-highest text-tertiary-fixed font-code-sm text-[11px]">
              Pydantic v2
            </span>
            <span className="px-2 py-0.5 rounded bg-surface-container-highest text-tertiary-fixed font-code-sm text-[11px]">
              DSA (C/C++)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  const [activeInference, setActiveInference] = useState<'local' | 'cloud'>('local');
  const [isSimulatingPacket, setIsSimulatingPacket] = useState(false);
  const [simulatedLatency, setSimulatedLatency] = useState({ local: 24, cloud: 180 });

  const triggerPacketSimulation = () => {
    setIsSimulatingPacket(true);
    setTimeout(() => {
      setSimulatedLatency({
        local: Math.floor(20 + Math.random() * 8),
        cloud: Math.floor(165 + Math.random() * 35),
      });
      setIsSimulatingPacket(false);
    }, 600);
  };

  return (
    <div className="relative w-full overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(10,226,255,0.06),transparent_75%)] pointer-events-none"></div>

      <section className="relative w-full max-w-[1280px] mx-auto px-grid-margin-mobile lg:px-grid-margin-desktop pt-10 lg:pt-16 pb-block-gap">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-block-gap lg:gap-grid-gutter items-center">
          {/* Left Hero Content Column (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Technical Eyebrow & Live Pill */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-surface-container border border-outline-variant/40">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-ping"></span>
                <span className="font-code-sm text-code-sm text-on-surface uppercase tracking-wider">
                  [ SYS // 01 ] MOHAMMED RAYHAN — BENGALURU, IN
                </span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high/80 border border-outline-variant/30">
                <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                <span className="font-code-sm text-code-sm text-on-surface-variant">
                  Currently building: <span className="text-primary font-medium">LexAI</span>
                </span>
              </div>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-display text-display tracking-tight text-on-surface text-balance">
              I build AI systems that move from ideas to{' '}
              <span className="text-primary-container font-semibold">production</span>.
            </h1>

            {/* Technical Subtitle */}
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl text-pretty">
              Computer Science Engineering student at REVA University focused on GenAI, RAG systems, cloud development, backend orchestration, and reliable microservices.
            </p>

            {/* Interactive CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary-container text-on-primary-container font-code-base text-code-base font-semibold hover:bg-primary transition-all duration-200 shadow-[0_0_24px_rgba(10,226,255,0.3)] active:scale-95"
              >
                <span>Explore Work</span>
                <span className="material-symbols-outlined text-[18px]">south</span>
              </button>

              <a
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-surface-container border border-outline-variant/50 text-on-surface font-code-base text-code-base font-medium hover:border-primary-container hover:text-primary transition-all duration-200 active:scale-95"
                href={PERSONAL_INFO.github}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[18px]">terminal</span>
                <span>GitHub Codebase</span>
                <span className="material-symbols-outlined text-[14px]">north_east</span>
              </a>
            </div>

            {/* Live Latency Telemetry Chip with interactive ping button */}
            <div className="flex items-center flex-wrap gap-2.5 px-3 py-1.5 rounded bg-surface-container-low border border-outline-variant/30 font-code-sm text-code-sm text-on-surface-variant">
              <span className={`material-symbols-outlined text-[15px] ${isSimulatingPacket ? 'text-primary animate-spin' : 'text-tertiary'}`}>
                bolt
              </span>
              <span>
                Telemetry: <span className="text-tertiary font-mono">{simulatedLatency.local}ms</span> (Local Gemma/Ollama){' '}
                <span className="text-outline-variant">|</span>{' '}
                <span className="text-secondary font-mono">{simulatedLatency.cloud}ms</span> (Cloud Groq/Gemini)
              </span>
              <button
                onClick={triggerPacketSimulation}
                className="ml-auto text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-surface-container-high border border-outline-variant/40 hover:text-primary hover:border-primary transition-colors"
                title="Simulate round-trip packet ping"
              >
                {isSimulatingPacket ? 'PINGING...' : 'PING'}
              </button>
            </div>
          </div>

          {/* Right Hero System Flow Topology (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <div className="relative w-full rounded-xl bg-surface-container-low/90 border border-outline-variant/40 p-5 shadow-2xl backdrop-blur-md overflow-hidden">
              {/* Header bar of schematic */}
              <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
                <span className="font-code-sm text-code-sm text-on-surface font-semibold tracking-wider">
                  LEXIRAG_DISPATCHER.SYS
                </span>
                <span className="font-label-caps text-label-caps text-on-surface-variant bg-surface-container px-2 py-0.5 rounded border border-outline-variant/40">
                  STREAM ACTIVE
                </span>
              </div>

              {/* Pipeline Visual Nodes */}
              <div className="mt-5 space-y-3.5 relative">
                {/* Node 1: Client Ingress */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container border border-outline-variant/40 group hover:border-primary-container/60 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-[20px]">devices</span>
                    <div>
                      <p className="font-code-sm text-code-sm text-on-surface font-semibold">
                        User Query / Document Ingress
                      </p>
                      <p className="font-code-sm text-[10px] text-on-surface-variant">
                        Encrypted Multi-Part Payload
                      </p>
                    </div>
                  </div>
                  <span className="font-label-caps text-label-caps text-primary bg-surface-container-highest px-2 py-0.5 rounded">
                    HTTP/2
                  </span>
                </div>

                {/* Connecting Vector Indicator */}
                <div className="flex items-center justify-center -my-1 text-outline-variant">
                  <span className={`material-symbols-outlined text-[16px] text-primary-fixed ${isSimulatingPacket ? 'animate-bounce' : ''}`}>
                    arrow_downward
                  </span>
                </div>

                {/* Node 2: Gateway & Embeddings */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container border border-outline-variant/40">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-[20px]">hub</span>
                    <div>
                      <p className="font-code-sm text-code-sm text-on-surface font-semibold">
                        LexiRAG Gateway &amp; Vector Pipeline
                      </p>
                      <p className="font-code-sm text-[10px] text-on-surface-variant">
                        Chunking: 512t • Cosine Sim • Hybrid
                      </p>
                    </div>
                  </div>
                  <span className="font-code-sm text-[10px] text-tertiary font-mono">pgvector</span>
                </div>

                {/* Connecting Vector Indicator */}
                <div className="flex items-center justify-center -my-1 text-outline-variant">
                  <span className="material-symbols-outlined text-[16px] text-primary-fixed">south</span>
                </div>

                {/* Node 3: Hybrid Inference Engine (Interactive Router) */}
                <div className="p-3.5 rounded-lg bg-surface-container-high border border-primary-container/40 relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                      <span className="font-code-sm text-code-sm text-on-surface font-bold uppercase tracking-wider">
                        Dual Inference Router
                      </span>
                    </div>
                    <span className="font-label-caps text-label-caps text-primary-fixed bg-primary-fixed/10 px-1.5 py-0.5 rounded">
                      AUTO-FAILOVER
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {/* Primary Node */}
                    <button
                      onClick={() => setActiveInference('local')}
                      className={`text-left p-2 rounded transition-all ${
                        activeInference === 'local'
                          ? 'bg-surface-container-lowest border-2 border-tertiary shadow-sm'
                          : 'bg-surface-container border border-outline-variant/30 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-label-caps text-label-caps text-tertiary">PRIMARY // LOCAL</p>
                        {activeInference === 'local' && (
                          <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-ping"></span>
                        )}
                      </div>
                      <p className="font-code-sm text-code-sm text-on-surface font-medium">Gemma 2B (Ollama)</p>
                      <p className="font-code-sm text-[10px] text-on-surface-variant">Offline / Zero Data-leak</p>
                    </button>

                    {/* Cloud Fallback */}
                    <button
                      onClick={() => setActiveInference('cloud')}
                      className={`text-left p-2 rounded transition-all ${
                        activeInference === 'cloud'
                          ? 'bg-surface-container-lowest border-2 border-secondary shadow-sm'
                          : 'bg-surface-container border border-outline-variant/30 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <p className="font-label-caps text-label-caps text-secondary">FALLBACK // CLOUD</p>
                        {activeInference === 'cloud' && (
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-ping"></span>
                        )}
                      </div>
                      <p className="font-code-sm text-code-sm text-on-surface font-medium">Groq / Gemini 1.5</p>
                      <p className="font-code-sm text-[10px] text-on-surface-variant">High-Volume Bursting</p>
                    </button>
                  </div>
                </div>

                {/* Connecting Vector Indicator */}
                <div className="flex items-center justify-center -my-1 text-outline-variant">
                  <span className="material-symbols-outlined text-[16px] text-primary-fixed">south</span>
                </div>

                {/* Node 4: Cloud Egress Host */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container border border-outline-variant/40">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary-container text-[20px]">
                      cloud_done
                    </span>
                    <div>
                      <p className="font-code-sm text-code-sm text-on-surface font-semibold">
                        Azure Host &amp; Docker Microservice
                      </p>
                      <p className="font-code-sm text-[10px] text-on-surface-variant">
                        Verified Grounding + Citation Drawer
                      </p>
                    </div>
                  </div>
                  <span className="font-code-sm text-[10px] text-tertiary font-mono">200 OK</span>
                </div>
              </div>

              {/* Footer micro-spec telemetry */}
              <div className="mt-4 pt-3 border-t border-outline-variant/30 flex items-center justify-between text-[11px] font-mono text-on-surface-variant">
                <span>CLUSTER: AZURE-IN-BLR</span>
                <span>STATE: 99.98% UP</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

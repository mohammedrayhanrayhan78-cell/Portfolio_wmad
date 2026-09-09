import React, { useState, useRef, useEffect } from 'react';

interface TerminalLine {
  type: 'cmd' | 'output' | 'error' | 'success';
  content: string;
}

export const PhilosophyAndTerminal: React.FC = () => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'cmd', content: 'cat current_focus.json' },
    {
      type: 'output',
      content: JSON.stringify(
        {
          objective: 'Build robust, low-latency GenAI & RAG systems',
          specialization: 'Hybrid local/cloud inference & microservices',
          university: 'REVA University, Bengaluru',
          degree: 'B.Tech in Computer Science and Engineering',
          semester: '3rd Sem (2023 - 2027)',
          status: 'Production deployment ready',
        },
        null,
        2
      ),
    },
    { type: 'cmd', content: 'status --health' },
    { type: 'success', content: '[OK] Ollama Daemon (Local Gemma 2B): ACTIVE' },
    { type: 'success', content: '[OK] pgvector Extension (v0.7.0): SYNCHRONIZED' },
    { type: 'success', content: '[OK] FastAPI Worker Pool: 4 workers idle' },
    { type: 'success', content: '[OK] Azure Container Registry: Connected' },
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    const newHistory = [...history, { type: 'cmd' as const, content: trimmed }];

    const lower = trimmed.toLowerCase();

    if (lower === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    if (lower === 'help') {
      newHistory.push({
        type: 'output',
        content:
          'Available commands:\n  whoami            - Developer profile summary\n  cat current_focus.json - Current system mission\n  status --health   - Live cluster telemetry\n  projects          - Active engineering repositories\n  skills            - Core stack breakdown\n  contact           - Ingress communication channels\n  clear             - Reset terminal output',
      });
    } else if (lower === 'whoami') {
      newHistory.push({
        type: 'output',
        content:
          'Mohammed Rayhan // AI Systems & RAG Engineer\nREVA University (B.Tech CSE)\nLocation: Bengaluru, Karnataka, India\nCurrently Engineering: LexAI & LexiRAG',
      });
    } else if (lower.includes('current_focus') || lower === 'cat focus') {
      newHistory.push({
        type: 'output',
        content: JSON.stringify(
          {
            objective: 'Build robust, low-latency GenAI & RAG systems',
            specialization: 'Hybrid local/cloud inference & microservices',
            university: 'REVA University, Bengaluru',
            degree: 'B.Tech in Computer Science and Engineering',
            semester: '3rd Sem (2023 - 2027)',
            status: 'Production deployment ready',
          },
          null,
          2
        ),
      });
    } else if (lower.includes('status') || lower.includes('health')) {
      newHistory.push(
        { type: 'success', content: '[OK] Ollama Daemon (Local Gemma 2B): ACTIVE (18ms latency)' },
        { type: 'success', content: '[OK] pgvector Index: HNSW (Cosine Sim 0.94+)' },
        { type: 'success', content: '[OK] FastAPI Worker Pool: 4 workers active, 0 err' },
        { type: 'success', content: '[OK] Azure Container Registry: Connected (v1.8.4)' }
      );
    } else if (lower === 'projects') {
      newHistory.push({
        type: 'output',
        content:
          '1. LexiRAG (Azure App Service, Gemma 2B, Groq, pgvector) - Production Ready\n2. LexAI (FastAPI, pgvector, LangGraph, Multi-Agent) - Active Sprint 04\n3. Virtual Steering Wheel (Python, OpenCV, MediaPipe Hands) - 60 FPS\n4. EduApp (Mechanical Engg platform) - Tested by 120+ students',
      });
    } else if (lower === 'skills') {
      newHistory.push({
        type: 'output',
        content:
          'LANGUAGES: Python, C/C++, Java, SQL\nAI/RAG: LangGraph, Ollama, Gemma, Groq, pgvector\nBACKEND: FastAPI, SQLAlchemy 2.x, Pydantic v2, Docker, Azure',
      });
    } else if (lower === 'contact') {
      newHistory.push({
        type: 'output',
        content:
          'Email: mohammedrayhanrayhan78@gmail.com\nGitHub: github.com/mohammedrayhanrayhan78-cell\nLinkedIn: linkedin.com/in/mohammed-rayhan-94973a384\nLocation: Bengaluru, IN',
      });
    } else {
      newHistory.push({
        type: 'error',
        content: `bash: command not found: ${trimmed}. Type 'help' for commands.`,
      });
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  return (
    <section className="w-full max-w-[1280px] mx-auto px-grid-margin-mobile lg:px-grid-margin-desktop py-16 border-t border-outline-variant/20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-block-gap">
        {/* Left: Engineering Philosophy (6 cols) */}
        <div className="lg:col-span-6 flex flex-col space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-2 font-code-sm text-code-sm text-primary uppercase tracking-widest">
              <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
              METHODOLOGY // CORE MAXIMS
            </div>
            <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
              Engineering Philosophy
            </h2>
          </div>

          <div className="space-y-6">
            {/* Maxim 1 */}
            <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">
                01 // BUILD TO LEARN
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                True architectural comprehension comes from constructing systems from scratch. Abstracting too early conceals critical failure modes; implementing end-to-end reveals them.
              </p>
            </div>

            {/* Maxim 2 */}
            <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
              <span className="font-label-caps text-label-caps text-secondary tracking-widest uppercase">
                02 // DECONSTRUCT ABSTRACTIONS
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Treating libraries as black boxes creates fragile engineers. Delving into the underlying math, data structures, and system calls turns opaque tools into deterministic primitives.
              </p>
            </div>

            {/* Maxim 3 */}
            <div className="p-5 rounded-xl bg-surface-container-low border border-outline-variant/30 space-y-2">
              <span className="font-label-caps text-label-caps text-tertiary tracking-widest uppercase">
                03 // SHIP RELIABLY
              </span>
              <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Production code is measured by uptime, observability, and graceful degradation. An elegant model that crashes silently under load is an incomplete design.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Interactive Terminal Shell (6 cols) */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="rounded-xl bg-surface-container-lowest border border-outline-variant/40 shadow-2xl overflow-hidden font-mono text-xs flex flex-col h-[480px]">
            {/* Terminal Window Chrome */}
            <div className="px-4 py-2.5 bg-surface-container flex items-center justify-between border-b border-outline-variant/30 shrink-0">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setHistory([])}
                  className="w-2.5 h-2.5 rounded-full bg-surface-bright hover:bg-outline transition-colors"
                  title="Clear terminal"
                ></button>
                <span className="w-2.5 h-2.5 rounded-full bg-secondary-container/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary/80"></span>
                <span className="text-on-surface-variant text-[11px] ml-2 font-mono">
                  rayhan@fedora-dev: ~/workspace
                </span>
              </div>
              <span className="text-[10px] text-tertiary">bash 5.2.15</span>
            </div>

            {/* Terminal Output Log Body */}
            <div className="p-4 overflow-y-auto space-y-3 flex-1 text-[12px] leading-relaxed">
              {history.map((item, idx) => (
                <div key={idx}>
                  {item.type === 'cmd' && (
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <span className="text-secondary">$</span>
                      <span>{item.content}</span>
                    </div>
                  )}
                  {item.type === 'output' && (
                    <pre className="text-on-surface-variant whitespace-pre-wrap font-mono mt-1 text-[11px]">
                      {item.content}
                    </pre>
                  )}
                  {item.type === 'success' && (
                    <div className="text-tertiary mt-0.5">{item.content}</div>
                  )}
                  {item.type === 'error' && (
                    <div className="text-error mt-0.5">{item.content}</div>
                  )}
                </div>
              ))}
              <div ref={terminalEndRef} />
            </div>

            {/* Interactive Input Field */}
            <div className="p-3 bg-surface-container-low border-t border-outline-variant/30 shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-secondary font-bold">$</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type 'help', 'whoami', 'skills', 'status'..."
                  className="flex-1 bg-transparent text-on-surface focus:outline-none font-mono text-xs placeholder:text-on-surface-variant/40"
                  autoFocus={false}
                />
                <button
                  onClick={() => handleCommand(inputVal)}
                  className="px-2 py-0.5 rounded bg-surface-container-highest text-primary hover:text-on-surface text-[10px] font-mono"
                >
                  ENTER
                </button>
              </div>

              {/* Quick action chips */}
              <div className="flex flex-wrap gap-1.5 mt-2 pt-2 border-t border-outline-variant/20">
                <span className="text-[10px] text-on-surface-variant mr-1 self-center">RUN:</span>
                {['help', 'whoami', 'cat current_focus.json', 'status --health', 'projects', 'clear'].map(
                  (cmd) => (
                    <button
                      key={cmd}
                      onClick={() => handleCommand(cmd)}
                      className="px-2 py-0.5 rounded bg-surface-container text-[10px] text-secondary hover:text-primary hover:bg-surface-container-high transition-colors"
                    >
                      {cmd}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

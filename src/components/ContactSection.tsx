import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data';

interface ContactSectionProps {
  onOpenResume: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume }) => {
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState('AI Systems & RAG Collaboration');
  const [message, setMessage] = useState('');
  const [dispatchStatus, setDispatchStatus] = useState<'idle' | 'transmitting' | 'dispatched'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderEmail || !message) return;

    setDispatchStatus('transmitting');
    setTimeout(() => {
      setDispatchStatus('dispatched');
      setTimeout(() => {
        setMessage('');
        setDispatchStatus('idle');
      }, 4000);
    }, 800);
  };

  return (
    <section
      className="w-full max-w-[1280px] mx-auto px-grid-margin-mobile lg:px-grid-margin-desktop py-20 border-t border-outline-variant/20"
      id="contact"
    >
      <div className="rounded-3xl bg-surface-container-low border border-outline-variant/40 p-8 lg:p-14 text-center relative overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,226,255,0.06),transparent_70%)] pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center space-y-6">
          <div className="inline-flex items-center gap-2 font-code-sm text-code-sm text-primary uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-primary rounded-full animate-ping"></span>
            COMMUNICATION CHANNELS // DISPATCH
          </div>

          <h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tight text-on-surface">
            Let's build something.
          </h2>

          <p className="font-body-lg text-body-lg text-on-surface-variant text-pretty">
            Open to technical discussions, systems engineering roles, research collaborations, and open-source contributions.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-container text-on-primary-container font-code-sm text-code-sm font-semibold hover:bg-primary transition-all shadow-[0_0_20px_rgba(10,226,255,0.25)] active:scale-95"
              href={`mailto:${PERSONAL_INFO.email}`}
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
              <span>{PERSONAL_INFO.email}</span>
            </a>

            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-surface-container border border-outline-variant/50 text-on-surface font-code-sm text-code-sm font-medium hover:border-primary transition-colors active:scale-95"
            >
              <span className="material-symbols-outlined text-[18px]">description</span>
              <span>Curriculum Vitae</span>
            </button>
          </div>

          {/* Direct Channels Strip */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs font-mono text-on-surface-variant">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <span>GitHub</span>
              <span className="material-symbols-outlined text-[14px]">north_east</span>
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <span>LinkedIn</span>
              <span className="material-symbols-outlined text-[14px]">north_east</span>
            </a>
            <span>•</span>
            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noreferrer"
              className="hover:text-primary transition-colors flex items-center gap-1"
            >
              <span>LeetCode (95+)</span>
              <span className="material-symbols-outlined text-[14px]">north_east</span>
            </a>
          </div>

          {/* Quick Direct Message Dispatch Form */}
          <div className="w-full max-w-lg mt-6 pt-6 border-t border-outline-variant/30 text-left">
            <div className="flex items-center justify-between mb-3">
              <span className="font-code-sm text-xs font-semibold text-primary uppercase">
                DIRECT INGRESS MESSAGE // TRANSMIT PAYLOAD
              </span>
              <span className="text-[10px] font-mono text-tertiary">TLS 1.3 ENCRYPTED</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="email"
                  required
                  value={senderEmail}
                  onChange={(e) => setSenderEmail(e.target.value)}
                  placeholder="Your Email (e.g. name@org.com)"
                  className="px-3 py-2 rounded bg-surface-container border border-outline-variant/40 text-on-surface font-mono text-xs focus:outline-none focus:border-primary"
                />
                <select
                  aria-label="Dispatch subject topic"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="px-3 py-2 rounded bg-surface-container border border-outline-variant/40 text-on-surface font-mono text-xs focus:outline-none focus:border-primary"
                >
                  <option value="AI Systems & RAG Collaboration">AI Systems &amp; RAG</option>
                  <option value="Systems Engineering Opportunity">Engineering Opportunity</option>
                  <option value="Open Source Collaboration">Open Source</option>
                  <option value="General Technical Inquiry">General Inquiry</option>
                </select>
              </div>

              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Message payload / problem statement..."
                className="w-full px-3 py-2 rounded bg-surface-container border border-outline-variant/40 text-on-surface font-mono text-xs focus:outline-none focus:border-primary resize-none"
              ></textarea>

              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-on-surface-variant">
                  {dispatchStatus === 'dispatched' ? (
                    <span className="text-tertiary font-semibold flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">check_circle</span>
                      Payload delivered to rayhan's ingress queue!
                    </span>
                  ) : (
                    <span>Direct forwarding to inbox</span>
                  )}
                </span>

                <button
                  type="submit"
                  disabled={dispatchStatus === 'transmitting'}
                  className="px-4 py-2 rounded bg-surface-container-high border border-primary/50 text-primary hover:bg-primary-container hover:text-on-primary-container font-mono text-xs font-semibold transition-all active:scale-95 disabled:opacity-50"
                >
                  {dispatchStatus === 'transmitting' ? 'DISPATCHING...' : 'DISPATCH PAYLOAD'}
                </button>
              </div>
            </form>
          </div>

          {/* Sub-footer Coordinates */}
          <div className="pt-6 border-t border-outline-variant/20 flex flex-wrap items-center justify-center gap-3 font-mono text-[11px] text-on-surface-variant">
            <span>{PERSONAL_INFO.location}</span>
            <span className="text-outline-variant">•</span>
            <span>Timezone: {PERSONAL_INFO.timezone}</span>
            <span className="text-outline-variant">•</span>
            <span>Mohammed Rayhan © 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
};

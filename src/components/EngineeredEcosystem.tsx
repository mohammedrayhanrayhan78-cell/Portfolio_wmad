import React, { useState } from 'react';

interface SkillCategory {
  num: string;
  category: string;
  skills: string[];
  accentColor: string;
}

export const EngineeredEcosystem: React.FC = () => {
  const [filterQuery, setFilterQuery] = useState('');

  const categories: SkillCategory[] = [
    {
      num: '01',
      category: 'LANGUAGES',
      skills: ['Python', 'C/C++', 'Java', 'SQL'],
      accentColor: 'text-primary',
    },
    {
      num: '02',
      category: 'AI / GENAI & RAG',
      skills: [
        'RAG Architecture',
        'Ollama & Gemma',
        'Groq & Gemini',
        'LangGraph',
        'Vector Search',
        'Prompt Engineering',
      ],
      accentColor: 'text-tertiary',
    },
    {
      num: '03',
      category: 'BACKEND & ORM',
      skills: [
        'FastAPI',
        'SQLAlchemy 2.x',
        'Pydantic v2',
        'REST Architecture',
        'Node.js Basics',
      ],
      accentColor: 'text-secondary',
    },
    {
      num: '04',
      category: 'DATABASE & VECTORS',
      skills: [
        'pgvector',
        'PostgreSQL',
        'Alembic Migrations',
        'Relational Schemas',
      ],
      accentColor: 'text-primary-fixed',
    },
    {
      num: '05',
      category: 'CLOUD & DEVOPS',
      skills: [
        'Microsoft Azure',
        'Docker Containers',
        'GitHub Actions CI/CD',
        'Linux / Bash',
      ],
      accentColor: 'text-secondary-fixed',
    },
    {
      num: '06',
      category: 'INTERFACES & UTILITIES',
      skills: [
        'HTML5 / CSS3',
        'JavaScript',
        'Streamlit',
        'TailwindCSS',
        'n8n Automation',
      ],
      accentColor: 'text-tertiary-fixed',
    },
  ];

  return (
    <section className="w-full max-w-[1280px] mx-auto px-grid-margin-mobile lg:px-grid-margin-desktop py-16 border-t border-outline-variant/20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 mb-2 font-code-sm text-code-sm text-primary uppercase tracking-widest">
            <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
            TAXONOMY // TECHNICAL PROFICIENCY
          </div>
          <h2 className="font-headline-xl text-headline-xl text-on-surface font-bold tracking-tight">
            Engineered Ecosystem
          </h2>
        </div>

        {/* Quick interactive filter search */}
        <div className="relative">
          <input
            type="text"
            value={filterQuery}
            onChange={(e) => setFilterQuery(e.target.value)}
            placeholder="Search skill (e.g. pgvector, FastAPI)..."
            className="px-3.5 py-1.5 pl-8 rounded-lg bg-surface-container border border-outline-variant/40 text-on-surface font-mono text-xs focus:outline-none focus:border-primary w-64"
          />
          <span className="material-symbols-outlined text-[16px] text-on-surface-variant absolute left-2.5 top-2">
            search
          </span>
          {filterQuery && (
            <button
              onClick={() => setFilterQuery('')}
              className="absolute right-2.5 top-2 text-on-surface-variant hover:text-on-surface font-mono text-xs"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/40 flex flex-col justify-between hover:border-outline-variant/80 transition-colors"
          >
            <div>
              <span className={`font-label-caps text-label-caps ${cat.accentColor} tracking-widest uppercase block mb-4`}>
                {cat.num} // {cat.category}
              </span>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, sIdx) => {
                  const isHighlighted =
                    filterQuery.trim() !== '' &&
                    skill.toLowerCase().includes(filterQuery.toLowerCase());

                  return (
                    <span
                      key={sIdx}
                      className={`px-3 py-1.5 rounded font-code-sm text-code-sm transition-all ${
                        isHighlighted
                          ? 'bg-primary-container text-on-primary-container font-bold ring-2 ring-primary scale-105'
                          : 'bg-surface-container text-on-surface hover:bg-surface-container-high'
                      }`}
                    >
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

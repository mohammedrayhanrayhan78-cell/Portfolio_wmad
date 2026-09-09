import { FlagshipProject, RoadmapStep, SecondaryProject, LeetCodeStats, Certification } from './types';

export const PERSONAL_INFO = {
  name: 'Mohammed Rayhan',
  tagline: 'SYS.ONLINE // BLR',
  currentFocus: 'LexAI',
  role: 'AI Systems & RAG Engineer',
  education: 'Computer Science Engineering student at REVA University (B.Tech CSE 3rd Sem)',
  location: 'Bengaluru, Karnataka, India',
  timezone: 'IST (UTC+5:30)',
  email: 'mohammedrayhanrayhan78@gmail.com',
  github: 'https://github.com/mohammedrayhanrayhan78-cell',
  linkedin: 'https://www.linkedin.com/in/mohammed-rayhan-94973a384/',
  leetcode: 'https://leetcode.com',
  twitter: 'https://x.com',
};

export const FLAGSHIP_LEXIRAG: FlagshipProject = {
  id: 'lexirag',
  title: 'LexiRAG',
  headline: 'RAG-based legal document intelligence assistant',
  description:
    'A production-grade legal AI assistant combining local LLM inference with cloud fallbacks, high-speed retrieval-augmented generation, regional language parsing, security hardening, and continuous Azure container deployment.',
  tags: [
    'Python',
    'Ollama (Local)',
    'Gemma 2B',
    'Groq API',
    'Gemini',
    'Hybrid RAG',
    'Azure Container',
  ],
  host: 'AZURE APP SERVICE',
  buildVersion: 'v1.8.4',
  metrics: [
    {
      label: 'INFERENCE',
      value: 'Local + Cloud',
      subtext: 'Zero downtime failover',
    },
    {
      label: 'INTEGRITY',
      value: 'Hardened',
      subtext: 'Sanitized context injection',
    },
    {
      label: 'INFRA',
      value: 'Azure Hosted',
      subtext: 'Live CI/CD pipelines',
    },
  ],
  githubUrl: 'https://github.com/mohammedrayhanrayhan78-cell/LexiRAG',
  liveUrl: 'https://lexirag.azurewebsites.net',
};

export const LEXAI_ROADMAP: RoadmapStep[] = [
  {
    id: 1,
    label: 'Architecture',
    status: 'DONE',
    details: 'Decoupled multi-agent microservice topology with async event message queue.',
    deliverables: ['Event-driven specification', 'State machine diagram', 'Failure recovery protocol'],
  },
  {
    id: 2,
    label: 'Backend API',
    status: 'DONE',
    details: 'FastAPI async routing with Pydantic v2 strict schemas, rate limiting, and JWT guardrails.',
    deliverables: ['OAuth2 JWT Auth endpoints', 'SSE streaming router', 'OpenAPI documentation'],
  },
  {
    id: 3,
    label: 'pgvector DB',
    status: 'DONE',
    details: 'PostgreSQL instance configured with pgvector HNSW indexing for sub-20ms cosine similarity searches.',
    deliverables: ['HNSW index tuning', 'Hybrid dense/sparse schema', 'Alembic migration scripts'],
  },
  {
    id: 4,
    label: 'RAG Pipeline',
    status: 'DONE',
    details: 'Chunking algorithms (512 tokens with 64 token overlap) and Reciprocal Rank Fusion ranking.',
    deliverables: ['Custom recursive chunker', 'Citation tracker', 'Token stream generator'],
  },
  {
    id: 5,
    label: 'Auth Layer',
    status: 'ACTIVE',
    details: 'Role-based access control (RBAC), multi-tenant organization isolation, and granular token budgets.',
    deliverables: ['Tenant isolation middleware', 'Audit log streams', 'Key rotation system'],
  },
  {
    id: 6,
    label: 'Vision Engine',
    status: 'SCHEDULED',
    details: 'Multimodal OCR pipeline to parse handwritten court records, stamps, and legal exhibits.',
    deliverables: ['LayoutLM document parser', 'High-res image pipeline', 'Bounding box annotator'],
  },
  {
    id: 7,
    label: 'Voice Pipeline',
    status: 'SCHEDULED',
    details: 'Low-latency real-time voice transcription with speaker diarization for courtroom testimony.',
    deliverables: ['Whisper streaming node', 'Diarization pipeline', 'Audio sanitization filter'],
  },
  {
    id: 8,
    label: 'Cloud Staging',
    status: 'SCHEDULED',
    details: 'Multi-region Azure Kubernetes cluster deployment with automatic scaling and geo-failover.',
    deliverables: ['Helm chart definitions', 'Terraform cloud scripts', 'Prometheus/Grafana telemetry'],
  },
];

export const SECONDARY_PROJECTS: SecondaryProject[] = [
  {
    id: 'steering-wheel',
    category: 'COMPUTER VISION',
    icon: 'sports_esports',
    title: 'Virtual Steering Wheel',
    description:
      'Real-time hand-tracking interface leveraging MediaPipe and OpenCV to map hand coordinate vectors into angular steering control telemetry for vehicle simulation.',
    specs: [
      { label: 'TRACKER', value: 'MediaPipe Hands', color: 'text-tertiary' },
      { label: 'FPS', value: '60 FPS (Zero Latency)', color: 'text-primary' },
    ],
    tags: ['Python', 'OpenCV', 'MediaPipe'],
    metrics: '99.4% tracking accuracy across diverse lighting conditions',
    githubUrl: 'https://github.com/mohammedrayhanrayhan78-cell/virtual-steering',
  },
  {
    id: 'edu-app',
    category: 'EDUCATION PLATFORM',
    icon: 'school',
    title: 'EduApp',
    description:
      'Interactive educational platform built for mechanical engineering coursework, offering structured video modules, 3D conceptual modeling, and active user analytics.',
    specs: [
      { label: 'STATUS', value: 'Tested by 120+ Students', color: 'text-tertiary' },
      { label: 'DOMAIN', value: 'Mechanical Engg', color: 'text-secondary' },
    ],
    tags: ['Fullstack', 'Interactive UI', 'Video Indexing'],
    metrics: 'Over 120 active student cohort evaluations with 4.8/5 satisfaction',
    githubUrl: 'https://github.com/mohammedrayhanrayhan78-cell/eduapp',
  },
  {
    id: 'prof-portfolio',
    category: 'PRODUCTION ACADEMIC',
    icon: 'article',
    title: 'Dr. Kalyana Kumar M.',
    description:
      'Production faculty research portfolio showcasing academic publications, citations, course materials, and professional accolades with verified fast-load metrics.',
    specs: [
      { label: 'DELIVERY', value: 'Deployed & Live', color: 'text-tertiary' },
      { label: 'PERF', value: '100 / 100 Lighthouse', color: 'text-primary' },
    ],
    tags: ['Designed', 'Built', 'Deployed'],
    metrics: '100/100 Google Lighthouse across Performance, Accessibility & SEO',
    liveUrl: 'https://kalyanakumar.example.com',
  },
];

export const LEETCODE_DATA: LeetCodeStats = {
  solvedCount: 95,
  categories: [
    {
      name: 'Arrays & Hashing',
      status: 'MASTERED',
      percentage: 100,
      color: 'bg-tertiary',
    },
    {
      name: 'Two Pointers & Sliding Window',
      status: 'MASTERED',
      percentage: 90,
      color: 'bg-primary',
    },
    {
      name: 'Binary Search & Linked Lists',
      status: 'IN PROGRESS',
      percentage: 75,
      color: 'bg-primary-fixed',
    },
    {
      name: 'Trees, Graphs & Recursion',
      status: 'ACTIVE FOCUS',
      percentage: 60,
      color: 'bg-secondary',
    },
  ],
};

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'ibm-python-101',
    title: 'Python 101 for Data Science',
    issuer: 'IBM SkillsBuild',
    credentialId: 'IBM-SB-PY101-7892',
    issueDate: '2024',
    skills: ['Python Core', 'Data Structures', 'File Handling', 'NumPy Basics'],
  },
  {
    id: 'ibm-data-analysis',
    title: 'Data Analysis with Python',
    issuer: 'IBM SkillsBuild',
    credentialId: 'IBM-SB-DAP-4102',
    issueDate: '2024',
    skills: ['Pandas', 'Data Wrangling', 'Exploratory Analysis', 'Statistical Inference'],
  },
  {
    id: 'ibm-data-vis',
    title: 'Data Visualization w/ Python',
    issuer: 'IBM SkillsBuild',
    credentialId: 'IBM-SB-DVP-9321',
    issueDate: '2024',
    skills: ['Matplotlib', 'Seaborn', 'Interactive Dashboards', 'Spatial Maps'],
  },
];

export const SAMPLE_QUERIES = [
  {
    title: 'NDA Section 4.2 Cross-Border Licensing',
    query: 'Verify Section 4.2 of Non-Disclosure Agreement for cross-border IP licensing compliance under Indian Contract Act 1872.',
    verifiedSource: 'SOURCE VERIFIED VIA PGVECTOR (SCORE: 0.942)',
    response:
      'Under Section 4.2 of the analyzed agreement, reciprocal indemnification clauses align with Section 27 exceptions. However, territorial jurisdiction defaults to Karnataka courts as substantiated by:',
    citation: {
      ref: 'CITATION [REF-01]:',
      meta: 'Page 14, Para 3',
      text: '"...and all arbitral proceedings shall conform to the Arbitration and Conciliation Act, 1996 seated in Bengaluru..."',
    },
    localInference: 'GEMMA-2B-LOCAL',
    failoverStatus: 'READY (GROQ)',
    tokSpeed: '412 tok/s',
    latency: '18ms',
  },
  {
    title: 'Section 73 Liquidated Damages Enforceability',
    query: 'Analyze enforceability of liquidated damages clause under Section 73 & 74 of the Indian Contract Act.',
    verifiedSource: 'SOURCE VERIFIED VIA PGVECTOR (SCORE: 0.967)',
    response:
      'The stipulated sum of damages functions as a genuine pre-estimate of loss rather than a penalty clause, conforming directly to Kailash Nath Associates v. DDA precedents:',
    citation: {
      ref: 'CITATION [REF-02]:',
      meta: 'Page 22, Clause 8.1',
      text: '"...liquidated damages capped at 10% of aggregate contract price deemed fair compensatory valuation..."',
    },
    localInference: 'GEMMA-2B-LOCAL',
    failoverStatus: 'ACTIVE STREAM',
    tokSpeed: '438 tok/s',
    latency: '16ms',
  },
  {
    title: 'Section 27 Non-Compete Remote Clauses',
    query: 'Assess post-termination non-compete enforceability for remote IT developers under Indian jurisprudence.',
    verifiedSource: 'SOURCE VERIFIED VIA PGVECTOR (SCORE: 0.915)',
    response:
      'Post-termination negative covenants restricting lawful trade are void under Section 27 (Percept D\'Mark v. Zaheer Khan). However, confidentiality obligations survive indefinitely:',
    citation: {
      ref: 'CITATION [REF-03]:',
      meta: 'Page 31, Section 11',
      text: '"...confidentiality non-disclosure shall survive termination without geographical perimeter limitations..."',
    },
    localInference: 'GROQ-LLAMA-3-70B',
    failoverStatus: 'BURST FAILOVER',
    tokSpeed: '520 tok/s',
    latency: '142ms',
  },
];

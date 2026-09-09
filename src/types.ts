export interface ProjectMetric {
  label: string;
  value: string;
  subtext: string;
}

export interface FlagshipProject {
  id: string;
  title: string;
  headline: string;
  description: string;
  tags: string[];
  host: string;
  buildVersion: string;
  metrics: ProjectMetric[];
  githubUrl: string;
  liveUrl: string;
}

export interface RoadmapStep {
  id: number;
  label: string;
  status: 'DONE' | 'ACTIVE' | 'SCHEDULED';
  details: string;
  deliverables?: string[];
}

export interface SecondaryProject {
  id: string;
  category: string;
  icon: string;
  title: string;
  description: string;
  specs: { label: string; value: string; color?: string }[];
  tags: string[];
  metrics?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface LeetCodeStats {
  solvedCount: number;
  categories: {
    name: string;
    status: string;
    percentage: number;
    color: string;
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  credentialId?: string;
  issueDate?: string;
  skills: string[];
}

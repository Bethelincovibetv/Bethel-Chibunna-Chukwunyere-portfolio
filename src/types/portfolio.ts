export type ProjectStatus = 'Concept' | 'In Development' | 'Live';

export type ProjectCategory =
  | 'All'
  | 'Website Projects'
  | 'Apps & Digital Projects'
  | 'AI Video Projects'
  | 'Digital Agency'
  | 'Digital Business Platform'
  | 'Advertising Technology'
  | 'AI Business Tools'
  | 'Business Analytics';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  description: string;
  detailedDescription?: string;
  role?: string; // Role and contributions
  status: ProjectStatus;
  technologies: string[];
  image: string; // Screenshot or thumbnail
  screenshots?: string[]; // Additional screenshots
  demoUrl?: string; // Live website or project link
  repoUrl?: string; // Source code repository link
  videoUrl?: string; // Video preview or video link for video projects
  featured?: boolean;
  projectType: 'Client Project' | 'Personal Venture' | 'Concept Prototype';
  highlights?: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  category: string;
  readiness: 'Production Ready' | 'Concept & Prototyping';
  deliverables: string[];
  icon: string;
}

export interface SkillItem {
  name: string;
  category: 'AI & Platforms' | 'Deployment & Cloud' | 'Web & Frontend' | 'Backend & Data';
  description: string;
  badge?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  keyOutputs: string[];
}

export interface PrincipleItem {
  title: string;
  description: string;
  highlight: string;
}

export interface ContactConfig {
  name: string;
  businessName: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsAppNumber: string; // international format without + or dashes: 2347043537401
  email: string;
  linkedInUrl: string;
  gitHubUrl: string;
  twitterUrl?: string;
  location: string;
}

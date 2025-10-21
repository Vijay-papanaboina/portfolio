export interface Repository {
  name: string;
  tech: string;
  purpose: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  repos: Repository[];
  features: string[];
  techStack: string[];
  complexity: "Advanced" | "Intermediate" | "Foundational";
  githubLinks?: string[];
  keyDetails?: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

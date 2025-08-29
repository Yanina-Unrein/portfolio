export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: Technology[];
  imageUrl: string;
  demoUrl?: string;
  repositoryUrl?: string;
  status: ProjectStatus;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
  category: ProjectCategory;
}

export type ProjectStatus = 'completed' | 'in-progress' | 'planned' | 'archived';

export type ProjectCategory = 'web' | 'mobile' | 'desktop' | 'api' | 'library' | 'other';

export interface Technology {
  name: string;
  category: TechnologyCategory;
  icon?: string;
  color?: string;
}

export type TechnologyCategory = 'frontend' | 'backend' | 'database' | 'cloud' | 'tools' | 'mobile';
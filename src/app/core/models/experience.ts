export interface WorkExperience {
  id: string;
  position: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: Date;
  endDate?: Date; // undefined if current job
  description: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
  type: ExperienceType;
}

export type ExperienceType = 'full-time' | 'part-time' | 'freelance' | 'contract' | 'internship';

export interface Education {
  id: string;
  degree: string;
  institution: string;
  institutionUrl?: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  description?: string;
  grade?: string;
  relevantCourses?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  issueDate: Date;
  expirationDate?: Date;
  credentialUrl?: string;
  description?: string;
}
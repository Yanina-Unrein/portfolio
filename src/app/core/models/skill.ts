export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  icon?: string;
  color?: string;
  description?: string;
  yearsOfExperience?: number;
}

export type SkillCategory = 'frontend' | 'backend' | 'database' | 'cloud' | 'tools' | 'soft-skills';

export type SkillLevel = 'beginner' | 'intermediate' | 'advanced' | 'expert';

export interface SkillGroup {
  category: SkillCategory;
  name: string;
  skills: Skill[];
}
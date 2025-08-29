export interface ContactInfo {
  email: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  website?: string;
  location?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: Date;
}

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  username: string;
  icon: string;
}

export type SocialPlatform = 'github' | 'linkedin' | 'twitter' | 'instagram' | 'youtube' | 'behance' | 'dribbble';
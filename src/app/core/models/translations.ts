export interface NavbarTranslations {
  home: string;
  about: string;
  experience: string;
  projects: string;
  technologies: string;
  contact: string;
}

export interface FooterTranslations {
  home: string;
  projects: string;
  contact: string;
  slogan: string;
  copyright: string;
  altImage: string;
}

export interface HeroTranslations {
  title: string;
  slogan: string;
}

export interface AboutTranslations {
  title: string;
  subtitle: string;
  descriptions: string[];
  cvText: string;
  btnDownload: string;
}

export interface ProjectsTranslations {
  title: string;
  subtitles: string[];
}

export interface TechnologiesTranslations {
  title: string;
  descriptions: string[];
  linkTextPrefix: string;
  linkTextSuffix: string;
}

export interface ExperienceTranslations {
  title: string;
  description: string;
  altImage: string;
}

export interface ContactFormErrors {
  nameRequired: string;
  nameInvalid: string;
  emailRequired: string;
  emailInvalid: string;
  messageRequired: string;
}

export interface ContactFormTranslations {
  name: string;
  namePlaceholder: string;
  email: string;
  message: string;
  messagePlaceholder: string;
  btnSubmit: string;
  altImage: string;
  messageSubmit: string;
  errors: ContactFormErrors;
}

export interface ProjectDetailTranslations {
  description: string;
  responsabilities: string;
  technologies: string;
}

export interface ErrorPageTranslations {
  title: string;
  subtitle: string;
  imageYou: string;
  imageAlt: string;
  youMessage: string;
  paragraphs: string[];
  btnBack: string;
}

export interface SeoTranslations {
  title: string;
  metaDescription: string;
}

// Interface general que combina todo
export interface Translations {
  navbar: NavbarTranslations;
  footer: FooterTranslations;
  hero: HeroTranslations;
  about: AboutTranslations;
  projects: ProjectsTranslations;
  technologies: TechnologiesTranslations;
  experience: ExperienceTranslations;
  contact: { title: string };
  contactForm: ContactFormTranslations;
  projectDetail: ProjectDetailTranslations;
  errorPage: ErrorPageTranslations;
  seo: SeoTranslations;
}
export type Theme = 'dark' | 'light';

export const THEME_CONFIG = {
  DEFAULT_THEME: 'dark' as Theme,
  STORAGE_KEY: 'discord-portfolio-theme',
  THEMES: ['dark', 'light'] as const,
  
  THEME_CLASSES: {
    dark: 'theme-dark',
    light: 'theme-light'
  },
  
  META_COLORS: {
    dark: '#202225',
    light: '#ffffff'
  }
} as const;
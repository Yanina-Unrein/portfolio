import { Injectable, signal, effect, computed, inject, DOCUMENT, PLATFORM_ID } from '@angular/core';
import { Theme } from '@/app/core/models/theme';
import { isPlatformBrowser } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class ThemeService {
private readonly STORAGE_KEY = 'discord-portfolio-theme';
  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);
  
  public readonly currentTheme = signal<Theme>('dark');
  public readonly isDark = computed(() => this.currentTheme() === 'dark');

  constructor() {
    this.initializeTheme();
    this.setupThemeEffect();
  }

  private initializeTheme(): void {
    // Solo ejecutar en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem(this.STORAGE_KEY) as Theme;
      if (savedTheme === 'light' || savedTheme === 'dark') {
        this.setTheme(savedTheme);
        return;
      }

      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.setTheme(prefersDark ? 'dark' : 'light');

      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(this.STORAGE_KEY)) {
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
    } else {
      // Valor por defecto para SSR
      this.setTheme('dark');
    }
  }

  private setupThemeEffect(): void {
    effect(() => {
      const theme = this.currentTheme();
      this.document.documentElement.setAttribute('data-theme', theme);
      
      // Solo guardar en localStorage en el navegador
      if (isPlatformBrowser(this.platformId)) {
        localStorage.setItem(this.STORAGE_KEY, theme);
      }
    });
  }

  public toggleTheme(): void {
    this.setTheme(this.currentTheme() === 'dark' ? 'light' : 'dark');
  }

  public setTheme(theme: Theme): void {
    this.currentTheme.set(theme);
  }
}
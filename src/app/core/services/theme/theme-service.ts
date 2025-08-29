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
    if (isPlatformBrowser(this.platformId)) {
      const savedTheme = localStorage.getItem(this.STORAGE_KEY) as Theme;
      
      if (savedTheme) {
        this.setTheme(savedTheme);
      } else {
        // Usar preferencia del sistema si no hay tema guardado
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        this.setTheme(systemPrefersDark ? 'dark' : 'light');
      }

      // Escuchar cambios en la preferencia del sistema
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem(this.STORAGE_KEY)) {
          this.setTheme(e.matches ? 'dark' : 'light');
        }
      });
    } else {
      this.setTheme('dark'); // Default para SSR
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
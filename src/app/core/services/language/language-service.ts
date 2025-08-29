import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { Language } from '@/app/core/models/language';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Translations } from '@/app/core/models/translations';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly STORAGE_KEY = 'discord-portfolio-language';
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  private http = inject(HttpClient);

  public readonly currentLanguage = signal<Language>('es');
  public readonly translations = signal<Translations>({} as Translations);

  constructor() {
    this.initializeLanguage();
  }

  private async initializeLanguage(): Promise<void> {
    let initialLang: Language = 'es';
    
    if (isPlatformBrowser(this.platformId)) {
      const savedLanguage = localStorage.getItem(this.STORAGE_KEY) as Language;
      const browserLang = navigator.language.split('-')[0] as Language;
      initialLang = savedLanguage || (['es', 'en'].includes(browserLang) ? browserLang : 'es');
    }

    await this.setLanguage(initialLang, false);
  }

  public async toggleLanguage(): Promise<void> {
    const newLang: Language = this.currentLanguage() === 'es' ? 'en' : 'es';
    await this.setLanguage(newLang);
  }

  public async setLanguage(lang: Language, navigate: boolean = true): Promise<void> {
    this.currentLanguage.set(lang);
    
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, lang);
    }

    try {
      const data = await firstValueFrom(
        this.http.get<Translations>(`/i18n/${lang}.json`)
      );
      this.translations.set(data);
      
      // Navegar a la misma ruta pero con el nuevo idioma
      if (navigate) {
        const currentUrl = this.router.url;
        const newUrl = currentUrl.replace(/^\/(es|en)/, `/${lang}`);
        this.router.navigateByUrl(newUrl || `/${lang}`);
      }
    } catch (error) {
      console.error(`Error loading ${lang}.json`, error);
      this.translations.set({} as Translations);
    }
  }

  public t(key: string): string {
    const keys = key.split('.');
    let result: any = this.translations();
    
    for (const k of keys) {
      if (result === null || result === undefined) break;
      result = result[k];
    }
    
    return result !== null && result !== undefined ? result : key;
  }
}
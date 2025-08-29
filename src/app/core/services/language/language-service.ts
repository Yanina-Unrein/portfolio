import { Injectable, signal, computed, inject, PLATFORM_ID } from '@angular/core';
import { Language } from '@/app/core/models/language';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Translations } from '@/app/core/models/translations';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class LanguageService {
   private readonly STORAGE_KEY = 'discord-portfolio-language';
  private platformId = inject(PLATFORM_ID);

  public readonly currentLanguage = signal<Language>('es');
  public readonly translations = signal<Translations>({} as Translations);

  constructor(private http: HttpClient) {
    this.initializeLanguage();
  }

  private async initializeLanguage(): Promise<void> {
    let initialLang: Language = 'es';
    
    // Solo ejecutar en el navegador
    if (isPlatformBrowser(this.platformId)) {
      const savedLanguage = localStorage.getItem(this.STORAGE_KEY) as Language;
      const browserLang = navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en';
      initialLang = savedLanguage || browserLang;
    }

    await this.setLanguage(initialLang);
  }

  public async toggleLanguage(): Promise<void> {
    const newLang: Language = this.currentLanguage() === 'es' ? 'en' : 'es';
    await this.setLanguage(newLang);
  }

  public async setLanguage(lang: Language): Promise<void> {
    this.currentLanguage.set(lang);
    
    // Solo guardar en localStorage en el navegador
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, lang);
    }

    try {
      const data = await firstValueFrom(
        this.http.get<Translations>(`/i18n/${lang}.json`)
      );
      this.translations.set(data);
    } catch (error) {
      console.error(`Error loading ${lang}.json`, error);
      this.translations.set({} as Translations);
    }
  }

  // Devuelve la traducción según la clave tipo 'hero.title', 'about.descriptions.0', etc.
  public t(key: string): string {
    const keys = key.split('.');
    let result: any = this.translations();
    for (const k of keys) {
      result = result?.[k];
    }
    return result || key;
  }
}
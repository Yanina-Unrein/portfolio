import { Component, inject } from '@angular/core';
import { LanguageService } from '../../services/language/language-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-base-page',
  imports: [],
  templateUrl: './base-page.html',
  styleUrl: './base-page.css'
})
export class BasePage {
  languageService = inject(LanguageService);
  activatedRoute = inject(ActivatedRoute);

  getTranslatedTitle(key: string): string {
    return this.languageService.t(key);
  }
}

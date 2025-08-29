import { LanguageService } from '@/app/core/services/language/language-service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-language-button',
  imports: [],
  templateUrl: './language-button.html',
  styleUrl: './language-button.css'
})
export class LanguageButton {
  languageService = inject(LanguageService);
}

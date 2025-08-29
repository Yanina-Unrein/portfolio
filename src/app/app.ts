import { Component, signal } from '@angular/core';
import { inject } from '@angular/core';
import { ThemeService } from '@/app/core/services/theme/theme-service';
import { LanguageService } from '@/app/core/services/language/language-service';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  themeService = inject(ThemeService);
  languageService = inject(LanguageService);
}

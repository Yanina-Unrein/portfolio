import { ThemeService } from '@/app/core/services/theme/theme-service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.css'
})
export class ThemeToggle {
  themeService = inject(ThemeService);
  
  isDark = this.themeService.isDark;
  
  toggleTheme() {
    this.themeService.toggleTheme();
  }
}

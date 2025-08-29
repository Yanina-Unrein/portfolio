import { Component, computed, inject } from '@angular/core';
import { BasePage } from '@/app/core/components/base-page/base-page';
import { ThemeService } from '@/app/core/services/theme/theme-service';
import { LanguageButton } from "@/app/shared/components/ui/language-button/language-button";
import { ThemeToggle } from "@/app/shared/components/ui/theme-toggle/theme-toggle";

@Component({
  selector: 'app-header-bar',
  imports: [LanguageButton, ThemeToggle],
  templateUrl: './header-bar.html',
  styleUrl: './header-bar.css'
})
export class HeaderBar extends BasePage{
  themeService = inject(ThemeService);

  nameServer = computed(() => this.languageService.t('headerBar.nameServer'));
  role = computed(() => this.languageService.t('headerBar.role'));
}

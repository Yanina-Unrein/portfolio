import { Component, signal } from '@angular/core';
import { inject } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ThemeService } from '@/app/core/services/theme/theme-service';
import { LanguageService } from '@/app/core/services/language/language-service';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./layout/sidebar-component/sidebar-component";
import { ChannelsSidebar } from "./layout/channels-sidebar/channels-sidebar";
import { ChannelHeader } from "./layout/channel-header/channel-header";
import { MembersSidebar } from "./layout/members-sidebar/members-sidebar";
import { HeaderBar } from "./layout/header-bar/header-bar";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, ChannelsSidebar, ChannelHeader, MembersSidebar, HeaderBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private router = inject(Router);
  themeService = inject(ThemeService);
  languageService = inject(LanguageService);

  
  activeChannel = signal('welcome');
  channelsOpen = signal(false);

  ngOnInit() {
    // Detectar cambios de ruta para actualizar el idioma
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      const url = event.urlAfterRedirects || event.url;
      const langMatch = url.match(/^\/(es|en)/);
      
      if (langMatch) {
        const lang = langMatch[1] as 'es' | 'en';
        if (lang !== this.languageService.currentLanguage()) {
          this.languageService.setLanguage(lang, false);
        }
        
        // Actualizar el canal activo basado en la ruta
        const channelMatch = url.match(/\/(welcome|about|experience|projects|skills|contact)$/);
        if (channelMatch) {
          this.activeChannel.set(channelMatch[1]);
        }
      }
    });
  }

  toggleChannels() {
    this.channelsOpen.set(!this.channelsOpen());
  }

  navigateTo(channel: string) {
    const currentLang = this.languageService.currentLanguage();
    this.activeChannel.set(channel);
    this.router.navigate([currentLang, channel]);
    this.channelsOpen.set(false); 
  }
}

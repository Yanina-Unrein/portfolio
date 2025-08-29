import { Component, signal } from '@angular/core';
import { inject } from '@angular/core';
import { ThemeService } from '@/app/core/services/theme/theme-service';
import { LanguageService } from '@/app/core/services/language/language-service';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./layout/sidebar-component/sidebar-component";
import { ChannelsSidebar } from "./layout/channels-sidebar/channels-sidebar";
import { ChannelHeader } from "./layout/channel-header/channel-header";
import { MembersSidebar } from "./layout/members-sidebar/members-sidebar";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, ChannelsSidebar, ChannelHeader, MembersSidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  themeService = inject(ThemeService);
  languageService = inject(LanguageService);

  router = inject(Router);
  
  activeChannel = signal('welcome');
  channelsOpen = signal(false);

  toggleChannels() {
    this.channelsOpen.set(!this.channelsOpen());
  }

  navigateTo(channel: string) {
    this.activeChannel.set(channel);
    this.router.navigate([channel]);
    this.channelsOpen.set(false); 
  }
}

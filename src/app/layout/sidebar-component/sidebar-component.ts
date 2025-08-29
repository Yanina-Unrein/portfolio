import { DiscordServer } from '@/app/core/models/navigation';
import { LanguageService } from '@/app/core/services/language/language-service';
import { ServersService } from '@/app/core/services/servers/servers-service';
import { ServerIconComponentButton } from '@/app/shared/components/ui/server-icon-component-button/server-icon-component-button';
import { Component, EventEmitter, inject, Output, signal } from '@angular/core';

@Component({
  selector: 'app-sidebar-component',
  standalone: true,
  imports: [ServerIconComponentButton],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.css'
})
export class SidebarComponent {
  @Output() channelToggle = new EventEmitter<void>();
  @Output() navigateTo = new EventEmitter<string>();
  
  languageService = inject(LanguageService);
  serversService = inject(ServersService);
  
   // Usa directamente la signal del servicio
  servers = this.serversService.servers;
  activeServer = signal('welcome');

  onServerClick(server: DiscordServer) {
    if (server.route === 'toggle') {
      this.channelToggle.emit();
      return;
    }
    if (server.externalUrl) {
      window.open(server.externalUrl, '_blank');
      return;
    }
    if (server.route) {
      this.activeServer.set(server.id);
      this.navigateTo.emit(server.route);
    }
  }

  getTranslatedTooltip(server: DiscordServer): string {
    if (server.tooltip.startsWith('navbar.')) {
      return this.languageService.t(server.tooltip);
    }
    return server.tooltip;
  }
}

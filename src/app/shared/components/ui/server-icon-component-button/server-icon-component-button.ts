import { DiscordServer } from '@/app/core/models/navigation';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-server-icon-component-button',
  standalone: true,
  imports: [],
  templateUrl: './server-icon-component-button.html',
  styleUrl: './server-icon-component-button.css'
})
export class ServerIconComponentButton {
 @Input() server!: DiscordServer;
  @Input() active: boolean = false;
  @Input() tooltip: string = '';
  @Output() serverClick = new EventEmitter<DiscordServer>();

  onClick() {
    this.serverClick.emit(this.server);
  }
}

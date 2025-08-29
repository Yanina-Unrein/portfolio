import { Injectable, signal } from '@angular/core';
import serversData from '@/app/data/servers.json';
import { DiscordServer } from '@/app/core/models/navigation';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
   private readonly _servers = signal<DiscordServer[]>(
    (serversData as unknown as { servers: DiscordServer[] }).servers
  );

  public servers = this._servers.asReadonly();
}

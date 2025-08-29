export interface DiscordChannel {
  id: string;
  name: string;
  route: string;
  type: 'text' | 'voice' | 'category';
  icon?: string;
  description?: string;
  memberCount?: number;
  isActive?: boolean;
}

export interface DiscordServer {
  id: string;
  name: string;
  icon: string;
  tooltip: string;
  route?: string;
  externalUrl?: string;
  isCustomImage?: boolean;
  isActive?: boolean;
}
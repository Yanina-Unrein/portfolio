export interface Channel {
  id: string;
  name: string;
  icon: string;
  route: string;
  category: ChannelCategory;
  description?: string;
  isPrivate?: boolean;
}

export type ChannelCategory = 'general' | 'portfolio' | 'social' | 'admin';

export interface ChannelGroup {
  category: ChannelCategory;
  name: string;
  channels: Channel[];
  collapsed?: boolean;
}

export interface NavigationState {
  currentChannel: string;
  previousChannel?: string;
  channelHistory: string[];
}
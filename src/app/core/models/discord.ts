export interface DiscordMessage {
  id: string;
  author: MessageAuthor;
  content: string;
  timestamp: Date;
  type: MessageType;
  embeds?: MessageEmbed[];
  attachments?: MessageAttachment[];
  reactions?: MessageReaction[];
}

export interface MessageAuthor {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  isBot?: boolean;
  roles?: string[];
}

export type MessageType = 'default' | 'system' | 'embed' | 'welcome' | 'announcement';

export interface MessageEmbed {
  title?: string;
  description?: string;
  color?: string;
  fields?: EmbedField[];
  image?: EmbedImage;
  thumbnail?: EmbedImage;
  footer?: EmbedFooter;
  timestamp?: Date;
}

export interface EmbedField {
  name: string;
  value: string;
  inline?: boolean;
}

export interface EmbedImage {
  url: string;
  width?: number;
  height?: number;
}

export interface EmbedFooter {
  text: string;
  iconUrl?: string;
}

export interface MessageAttachment {
  id: string;
  filename: string;
  url: string;
  contentType: string;
  size: number;
}

export interface MessageReaction {
  emoji: string;
  count: number;
  reacted: boolean;
}

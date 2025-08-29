export type UserStatus = 'online' | 'idle' | 'dnd' | 'offline';

export interface UserProfile {
  id: string;
  username: string;
  displayName: string;
  avatar: string;
  status: UserStatus;
  customStatus?: string;
  roles?: string[];
}

export interface UserActivity {
  type: 'coding' | 'learning' | 'designing' | 'custom';
  description: string;
  details?: string;
  timestamp: Date;
}

export interface UserPresence {
  status: UserStatus;
  activity?: UserActivity;
  isTyping?: boolean;
}
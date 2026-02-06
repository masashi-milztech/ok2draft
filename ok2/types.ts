export interface Project {
  id: string;
  title: string;
  category: 'Consulting' | 'Planning' | 'Connecting';
  description: string;
  imageUrl: string;
  tags: string[];
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isLoading?: boolean;
}
export interface Project {
  id: string;
  title: string;
  location: string;
  year: string;
  imageUrl: string;
  description: string;
  category: 'Wohnbau' | 'Gewerbe' | 'Öffentlich' | 'Interieur' | 'Landschaft';
  additionalImages?: string[];
}

export type NewProjectData = Omit<Project, 'id'>;

export interface NewsItem {
  id: string;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  imageUrl?: string; // Optional image URL
}

export type NewNewsData = Omit<NewsItem, 'id'>;

export interface IconProps {
  className?: string;
  size?: number;
  onClick?: () => void;
}
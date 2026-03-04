export interface ProjectImage {
  url: string;
  title?: string;
  copyright?: string;
}

export interface Project {
  id: string;
  title: string;
  titleZh?: string;
  location: string;
  locationZh?: string;
  year: string;
  subtitle?: string;
  subtitleZh?: string;
  imageUrl: string;
  description: string;
  descriptionZh?: string;
  category: 'Wohnbau' | 'Gewerbe' | 'Öffentlich' | 'Interieur' | 'Landschaft' | 'Erziehung' | 'Wohnbau + Gewerbe' | '';
  categoryZh?: string;
  additionalImages?: (string | ProjectImage)[];
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
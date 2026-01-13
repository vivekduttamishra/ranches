
export type View = 'home' | 'gallery' | 'events' | 'notices' | 'connect' | 'event-detail';

export interface EventData {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  longDescription: string;
  image: string;
  agenda: string[];
  guidelines: string[];
  type: string;
  color: 'blue' | 'yellow' | 'green' | 'orange';
  tag?: string;
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  category: string;
  priority: 'High' | 'Normal';
  excerpt: string;
}

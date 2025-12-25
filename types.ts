
export interface NavItem {
  label: string;
  href: string;
}

export interface Facility {
  name: string;
  icon: string;
  image: string;
}

export interface Extracurricular {
  name: string;
  description: string;
  image: string;
}

export interface ScheduleItem {
  date: string;
  activity: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

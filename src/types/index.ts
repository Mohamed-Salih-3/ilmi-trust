export type PageId = 'home' | 'about' | 'scholars' | 'initiatives' | 'gallery' | 'contact' | 'alim-law-admission';

export interface InitiativeItem {
  id: string;
  number: number;
  title: string;
  category: 'Education' | 'Welfare' | 'Financial Aid' | 'Healthcare' | 'Institutional';
  shortDesc: string;
  fullDesc: string[];
  achievements?: string[];
  financialRequirements?: {
    label: string;
    amount: string;
    note?: string;
  }[];
  urgencyOrStatus?: string;
  contact?: string[];
  iconName: string;
  image?: string;
}


export interface GalleryItem {
  id: number;
  title?: string;
  category: 'image' | 'video' | 'jamia';
  caption?: string;
  mediaUrl?: string;
  aspect?: string;
  featured?: boolean;
}


export interface PillarItem {
  id: string;
  title: string;
  arabic: string;
  englishMeaning: string;
  description: string;
  iconName: string;
}

export interface AnnouncementItem {
  id: string;
  title: string;
  date: string;
  summary: string;
  content: string;
  category: string;
  isHistorical?: boolean;
}

export interface TrustStat {
  id: string;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  sourceNote: string;
}

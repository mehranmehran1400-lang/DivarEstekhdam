export type PageTab = 'home' | 'products' | 'about' | 'contact';

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface PackageItem {
  id: string;
  title: string;
  badge?: string;
  badgeColor?: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
}

export interface ApplicationSubmission {
  trackingCode: string;
  fullName: string;
  mobile: string;
  messengerId: string;
  dailyHours: string;
  experience: string;
  submittedAt: string;
}

export interface TicketSubmission {
  trackingCode: string;
  name: string;
  phone: string;
  category: string;
  message: string;
  createdAt: string;
  status: 'در حال بررسی' | 'پاسخ داده شده' | 'ثبت اولیه';
}

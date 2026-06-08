import { ActivityCategory } from './activity.model';

export interface WeeklyStats {
  weekStart: string;
  totalCarbonKg: number;
  byCategory: Record<ActivityCategory, number>;
  avgPerDay: number;
  vsLastWeek: number | null;
}

export interface MonthlyStats {
  monthStart: string;
  totalCarbonKg: number;
  byCategory: Record<ActivityCategory, number>;
  avgPerDay: number;
  dailyBreakdown: DailyCarbon[];
}

export interface DailyCarbon {
  date: string;
  totalCarbonKg: number;
}

export const CATEGORY_LABELS: Record<ActivityCategory, string> = {
  transport: 'Transporte',
  food: 'Comida',
  electronics: 'Electrónicos',
  waste: 'Basura',
};

export const CATEGORY_COLORS: Record<ActivityCategory, string> = {
  transport: '#4CAF50',
  food: '#FF9800',
  electronics: '#2196F3',
  waste: '#9C27B0',
};

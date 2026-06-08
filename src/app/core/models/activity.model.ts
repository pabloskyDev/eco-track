export type ActivityCategory = 'transport' | 'food' | 'electronics' | 'waste';

export type TransportSubtype =
  | 'car-gasoline'
  | 'car-electric'
  | 'motorcycle'
  | 'bus'
  | 'walk'
  | 'bicycle';

export type FoodSubtype =
  | 'beef'
  | 'pork'
  | 'chicken'
  | 'fish'
  | 'vegetarian'
  | 'vegan'
  | 'fast-food';

export type ElectronicsSubtype =
  | 'smartphone'
  | 'laptop'
  | 'tv'
  | 'washing-machine'
  | 'air-conditioner';

export type WasteSubtype = 'general' | 'organic' | 'recycled' | 'electronic';

export type ActivitySubtype =
  | TransportSubtype
  | FoodSubtype
  | ElectronicsSubtype
  | WasteSubtype;

export interface ActivityLog {
  id: string;
  category: ActivityCategory;
  subtype: ActivitySubtype;
  quantity: number;
  unit: string;
  carbonKg: number;
  date: string;
  notes?: string;
}

export const CATEGORY_UNITS: Record<ActivityCategory, string> = {
  transport: 'km',
  food: 'porciones',
  electronics: 'horas',
  waste: 'kg',
};

export const SUBTYPE_LABELS: Record<ActivitySubtype, string> = {
  'car-gasoline': 'Carro gasolina',
  'car-electric': 'Carro eléctrico',
  motorcycle: 'Moto',
  bus: 'Bus',
  walk: 'Caminata',
  bicycle: 'Bicicleta',
  beef: 'Carne de res',
  pork: 'Cerdo',
  chicken: 'Pollo',
  fish: 'Pescado',
  vegetarian: 'Vegetariano',
  vegan: 'Vegano',
  'fast-food': 'Comida rápida',
  smartphone: 'Smartphone',
  laptop: 'Laptop',
  tv: 'Televisor',
  'washing-machine': 'Lavadora',
  'air-conditioner': 'Aire acondicionado',
  general: 'Basura general',
  organic: 'Orgánica',
  recycled: 'Reciclada',
  electronic: 'Electrónica',
};

export const CATEGORY_SUBTYPES: Record<ActivityCategory, ActivitySubtype[]> = {
  transport: ['car-gasoline', 'car-electric', 'motorcycle', 'bus', 'walk', 'bicycle'],
  food: ['beef', 'pork', 'chicken', 'fish', 'vegetarian', 'vegan', 'fast-food'],
  electronics: ['smartphone', 'laptop', 'tv', 'washing-machine', 'air-conditioner'],
  waste: ['general', 'organic', 'recycled', 'electronic'],
};

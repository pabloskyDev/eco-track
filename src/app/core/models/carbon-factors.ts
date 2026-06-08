import { ActivitySubtype } from './activity.model';

// kg CO₂ per unit (km for transport, serving for food, hour for electronics, kg for waste)
export const CARBON_FACTORS: Record<ActivitySubtype, number> = {
  // Transport — kg CO₂ / km
  'car-gasoline': 0.21,
  'car-electric': 0.07,
  motorcycle: 0.11,
  bus: 0.089,
  walk: 0,
  bicycle: 0,

  // Food — kg CO₂ / serving
  beef: 6.61,
  pork: 2.45,
  chicken: 0.69,
  fish: 1.34,
  vegetarian: 0.39,
  vegan: 0.17,
  'fast-food': 2.5,

  // Electronics — kg CO₂ / hour of use
  smartphone: 0.004,
  laptop: 0.018,
  tv: 0.035,
  'washing-machine': 0.16,
  'air-conditioner': 0.65,

  // Waste — kg CO₂ / kg of waste
  general: 0.57,
  organic: 0.19,
  recycled: 0.021,
  electronic: 1.2,
};

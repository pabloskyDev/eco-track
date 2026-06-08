export interface Trophy {
  id: string;
  name: string;
  description: string;
  icon: string;
  pointsRequired: number;
  unlockedAt?: string;
  category: 'transport' | 'food' | 'general' | 'consistency';
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  targetValue: number;
  currentValue: number;
  unit: string;
  expiresAt: string;
  completed: boolean;
  points: number;
  category: string;
}

export const TROPHY_CATALOG: Trophy[] = [
  {
    id: 'first-step',
    name: 'Primer paso',
    description: 'Registra tu primera actividad',
    icon: '🌱',
    pointsRequired: 10,
    category: 'general',
  },
  {
    id: 'walker',
    name: 'Caminante',
    description: 'Camina o usa bicicleta 5 veces en vez de carro',
    icon: '🚶',
    pointsRequired: 50,
    category: 'transport',
  },
  {
    id: 'vegetarian',
    name: 'Herbívoro',
    description: 'Una semana sin registrar carne de res',
    icon: '🌿',
    pointsRequired: 100,
    category: 'food',
  },
  {
    id: 'recycler',
    name: 'Reciclador',
    description: '10 registros de basura reciclada o orgánica',
    icon: '♻️',
    pointsRequired: 150,
    category: 'general',
  },
  {
    id: 'eco-energetic',
    name: 'Eco-Energético',
    description: 'Reduce tu consumo eléctrico semanal un 20%',
    icon: '⚡',
    pointsRequired: 200,
    category: 'general',
  },
  {
    id: 'consistent',
    name: 'Constante',
    description: 'Registra actividades 7 días seguidos',
    icon: '📅',
    pointsRequired: 250,
    category: 'consistency',
  },
  {
    id: 'green-commuter',
    name: 'Viajero Verde',
    description: 'Usa transporte público o bicicleta 20 veces',
    icon: '🚌',
    pointsRequired: 350,
    category: 'transport',
  },
  {
    id: 'eco-hero',
    name: 'Eco-Héroe',
    description: 'Un mes con huella por debajo de tu promedio',
    icon: '🏆',
    pointsRequired: 500,
    category: 'general',
  },
];

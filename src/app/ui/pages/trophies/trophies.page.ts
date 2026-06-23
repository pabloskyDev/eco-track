import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonBadge,
  IonSegment,
  IonSegmentButton,
  IonProgressBar,
  IonButton,
  IonModal,
  IonAvatar,
  
} from '@ionic/angular/standalone';

export type Rarity = 'Common' | 'Uncommon' | 'Rare' | 'Epic' | 'Legendary';

export interface Trophy {
  id: string;
  name: string;
  icon: string; // emoji or ion-icon name
  rarity: Rarity;
  description: string;
  condition: string;
  unlocked: boolean;
  progress: number; // 0..100
  unlockedAt?: string | null;
  isNew?: boolean;
}

@Component({
  selector: 'app-trophies',
  templateUrl: 'trophies.page.html',
  styleUrls: ['./trophies.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonBadge,
    IonSegment,
    IonSegmentButton,
    IonProgressBar,
    IonButton,
    IonModal,
    IonAvatar,
  ],
})
export class TrophiesPage {
  filter: 'all' | 'unlocked' | 'locked' | 'epic' | 'new' = 'all';
  showModal = false;
  selected: Trophy | null = null;

  trophies: Trophy[] = [
    { id: 't1', name: 'Primer Paso Verde', icon: '🌱', rarity: 'Common', description: 'Registro de la primera actividad sostenible.', condition: 'Registrar la primera actividad.', unlocked: true, progress: 100, unlockedAt: '2026-06-01', isNew: false },
    { id: 't2', name: 'Ciclista Urbano', icon: '🚲', rarity: 'Rare', description: 'Desplazamientos sostenibles en bicicleta.', condition: 'Recorrer 100 km en bicicleta.', unlocked: false, progress: 25, unlockedAt: null, isNew: false },
    { id: 't3', name: 'Ahorro Energético', icon: '⚡', rarity: 'Uncommon', description: 'Reducir consumo energético doméstico.', condition: 'Reducir consumo eléctrico mensual en 10%.', unlocked: false, progress: 10, unlockedAt: null, isNew: false },
    { id: 't4', name: 'Comedor Consciente', icon: '🥗', rarity: 'Common', description: 'Selecciones alimentarias sostenibles.', condition: 'Registrar 10 comidas bajas en huella.', unlocked: true, progress: 100, unlockedAt: '2026-05-20', isNew: false },
    { id: 't5', name: 'Ciudadano Global', icon: '🌍', rarity: 'Rare', description: 'Participación en retos comunitarios.', condition: 'Completar 3 retos comunitarios.', unlocked: false, progress: 40, unlockedAt: null, isNew: true },
    { id: 't6', name: 'Maestro del Carbono', icon: '🏆', rarity: 'Legendary', description: 'Logro avanzado en reducción de huella.', condition: 'Reducir la huella anual en 25%.', unlocked: false, progress: 84, unlockedAt: null, isNew: false },
    { id: 't7', name: 'Hidratación Responsable', icon: '💧', rarity: 'Common', description: 'Preferir agua local y reducir envases.', condition: 'Evitar 50 botellas de plástico.', unlocked: false, progress: 5, unlockedAt: null, isNew: false },
    { id: 't8', name: 'Reciclador Constante', icon: '♻️', rarity: 'Uncommon', description: 'Buenas prácticas de reciclaje.', condition: 'Registrar 30 actos de reciclaje.', unlocked: false, progress: 60, unlockedAt: null, isNew: false },
    { id: 't9', name: 'Fuerza Solar', icon: '🔆', rarity: 'Rare', description: 'Uso de energía renovable.', condition: 'Tener 3 meses con consumo renovable neto.', unlocked: false, progress: 0, unlockedAt: null, isNew: false },
    { id: 't10', name: 'Cero Desperdicio', icon: '🔥', rarity: 'Epic', description: 'Minimizar residuos alimentarios.', condition: 'Mantener desperdicio < 5% en un mes.', unlocked: false, progress: 12, unlockedAt: null, isNew: true },
    { id: 't11', name: 'Commuter Sustentable', icon: '🚌', rarity: 'Uncommon', description: 'Uso frecuente de transporte público.', condition: '100 viajes en transporte público.', unlocked: false, progress: 50, unlockedAt: null, isNew: false },
    { id: 't12', name: 'Aventurero Verde', icon: '🎒', rarity: 'Rare', description: 'Viajes sostenibles.', condition: '100 km recorridos en modo no motorizado fuera de ciudad.', unlocked: false, progress: 0, unlockedAt: null, isNew: false },
    { id: 't13', name: 'Planificador Eficiente', icon: '📅', rarity: 'Common', description: 'Planificación para reducir viajes innecesarios.', condition: 'Planificar transportes por 30 días.', unlocked: true, progress: 100, unlockedAt: '2026-04-10', isNew: false },
    { id: 't14', name: 'Embajador Local', icon: '🤝', rarity: 'Epic', description: 'Promover acciones locales.', condition: 'Invitar a 10 usuarios a un reto.', unlocked: false, progress: 22, unlockedAt: null, isNew: false },
    { id: 't15', name: 'Huella Cero', icon: '🌿', rarity: 'Legendary', description: 'Meta máxima de sostenibilidad.', condition: 'Mantener huella neta cercana a 0 por 1 año.', unlocked: false, progress: 1, unlockedAt: null, isNew: false },
  ];

  get unlockedCount(): number {
    return this.trophies.filter((t) => t.unlocked).length;
  }

  get totalCount(): number {
    return this.trophies.length;
  }

  setFilter(f: typeof this.filter) {
    this.filter = f;
  }

  visibleTrophies(): Trophy[] {
    switch (this.filter) {
      case 'unlocked':
        return this.trophies.filter((t) => t.unlocked);
      case 'locked':
        return this.trophies.filter((t) => !t.unlocked);
      case 'epic':
        return this.trophies.filter((t) => t.rarity === 'Epic' || t.rarity === 'Legendary');
      case 'new':
        return this.trophies.filter((t) => t.isNew);
      default:
        return this.trophies;
    }
  }

  open(t: Trophy) {
    this.selected = t;
    this.showModal = true;
  }

  close() {
    this.showModal = false;
    this.selected = null;
  }
}

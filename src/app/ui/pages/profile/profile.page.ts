import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonAvatar,
  IonItem,
  IonLabel,
  IonList,
  IonInput,
  IonButton,
  
  ToastController,
} from '@ionic/angular/standalone';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../core/services/user.service';
import { UserProfile } from '../../../core/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonAvatar,
    IonItem,
    IonLabel,
    IonList,
    IonInput,
    IonButton,
    
    FormsModule,
    CommonModule,
  ],
})
export class ProfilePage {
  subtitle = 'Sección detallada que resume el segmento objetivo, la persona, motivaciones y requisitos de diseño.';

  segment = {
    age: 'Edad: 20–45 años (con concentración en 25–35).',
    gender: 'Género: mixto, diseñada para ser neutral.',
    education: 'Nivel educativo: medio-alto (universitario o técnico).',
    socioeconomic: 'Nivel socioeconómico: medio y medio-alto.',
    occupation: 'Ocupación: profesionales jóvenes, técnicos, empleados de oficina, estudiantes y personal de ONG.',
    location: 'Ubicación probable: áreas urbanas y periurbanas en regiones con alta penetración de smartphones.',
    tech: 'Familiaridad tecnológica: moderada a alta; espera interfaces limpias y funcionamiento offline.'
  };

  persona = {
    name: 'María Torres',
    age: 31,
    profession: 'Ingeniera ambiental',
    city: 'Valencia',
    income: '1.500–2.500 EUR/mes (aprox.)',
    lifestyle: 'Vida activa; combina trabajo, voluntariado y ciclismo urbano; alimentación local y de temporada.',
    values: 'Responsabilidad colectiva, equidad intergeneracional y eficacia en la acción individual.',
    environmentalAwareness: 'Alto: conoce conceptos de huella de carbono y busca medición práctica.',
    phoneUsage: '3–4 horas diarias en promedio, picos en desplazamientos y consulta nocturna.',
    quote: 'Quiero saber que mis pequeñas decisiones suman, pero necesito que medirlo sea fácil y relevante.',
    photo: 'Retrato urbano de mujer 30–35 años, con casco de bicicleta, fondo peatonal, luz natural.'
  };
  
  // User profile loaded from storage/service
  user: UserProfile | null = null;
  editing = false;

  constructor(private userService: UserService, private toastCtrl: ToastController) { }

  async ngOnInit(): Promise<void> {
    this.user = await this.userService.getProfile();
  }

  initials(name = ''): string {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

  async saveProfile(): Promise<void> {
    if (!this.user) return;
    await this.userService.saveProfile(this.user);
    this.editing = false;
    const t = await this.toastCtrl.create({ message: 'Perfil guardado', duration: 2000, color: 'success' });
    await t.present();
  }

  toggleEdit(): void {
    if (!this.user) return;
    this.editing = !this.editing;
  }

  motivations = `El usuario busca medir y reducir su impacto ambiental mediante información cuantificable; desea aprender hábitos sostenibles a través de retroalimentación visual; participa por motivaciones sociales al comparar y competir en retos; las mecánicas de gamificación y recompensas catalizan la adherencia inicial; la operatividad offline responde a la necesidad de autonomía y privacidad.`;

  needs = `Necesidades funcionales: registro rápido de actividades, cálculos transparentes de huella y gráficas segmentadas. Necesidades emocionales: retroalimentación que refuerce eficacia personal y reduzca la ambivalencia. Necesidades sociales: pertenencia a una comunidad y comparación positiva. Necesidades educativas: micro-contenidos que traduzcan métricas en acciones concretas. Necesidades operacionales: funcionamiento offline y sincronización diferida con controles de privacidad.`;

  frustrations = `Incertidumbre sobre la magnitud de la contaminación personal; herramientas complejas que aumentan la carga cognitiva; falta de motivación sostenida por métricas poco comprensibles; olvido del registro manual; percepción de insignificancia de las acciones individuales; dependencia de conectividad y preocupaciones sobre privacidad.`;

  digitalBehavior = `Uso frecuente del smartphone con consultaciones matutinas y nocturnas; uso de apps de tracking de actividad, movilidad y hábitos; preferencia por interfaces limpias y flujos cortos; notificaciones contextuales y escasas; buena respuesta a retos de duración limitada y recompensas simbólicas; preferencia por modo oscuro y tipografía legible.`;

  usageScenario = `El usuario instala EcoTrack atraído por un reto comunitario, configura metas y obtiene una estimación inicial de huella. Durante la semana registra desplazamientos semiautomáticamente y comidas principales; utiliza modo offline para entradas en movimiento y sincroniza posteriormente. Revisa gráficas interactivas para comparar impacto por categoría y recibe recomendaciones prácticas. Participa en un reto entre colegas con un tablero de puntos que refuerza la adherencia. Al final de la semana recibe una notificación que celebra el progreso y propone una meta simple para la siguiente semana.`;

  designImplications = `Interfaz de bajo esfuerzo cognitivo con plantillas para entradas recurrentes; gamificación con recompensas simbólicas y metas escalables; soporte completo offline y sincronización segura; gráficas interpretables con equivalencias cotidianas; notificaciones contextuales no invasivas; micro-educación integrada y opciones de personalización (modo oscuro, umbrales de notificación y metas adaptativas).`;

}


import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonLabel,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-logs',
  templateUrl: 'logs.page.html',
  styleUrls: ['./logs.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonIcon,
    IonLabel,
    IonInput,
    IonCard,
    IonCardContent,
    ReactiveFormsModule,
    ReactiveFormsModule,
  ],
})
export class LogsPage {
  selectedCategory: string = 'transport';
  distance: string | null | undefined = null;
  selectedMode: string = 'bus';

  constructor() {}

  setCategory(category: string) {
    this.selectedCategory = category;
  }

  setMode(mode: string) {
    this.selectedMode = mode;
  }

  saveActivity() {
    const payload = {
      category: this.selectedCategory,
      distance: this.distance,
      mode: this.selectedMode,
    };
    console.log('Actividad a guardar:', payload);
    // Aquí iría tu lógica para enviar esto a un servicio/API
  }
}

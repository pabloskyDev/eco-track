import { Component } from '@angular/core';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-logs',
  templateUrl: 'logs.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar],
})
export class LogsPage {}

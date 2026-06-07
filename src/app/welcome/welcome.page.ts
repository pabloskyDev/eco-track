import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonContent,
  IonIcon,
  IonImg,
  IonInput,
  IonLabel,
  IonTitle,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonInput,
    IonIcon,
    IonLabel,
    IonButton,
    IonImg,
    RouterLink,
  ],
})
export class WelcomePage implements OnInit {
  constructor() {}

  ngOnInit() {}
}

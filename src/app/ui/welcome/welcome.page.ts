import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
  ToastController,
} from '@ionic/angular/standalone';
import { UserService } from '../../core/services/user.service';

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
    FormsModule,
  ],
})
export class WelcomePage {
  name = '';
  email = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private toastCtrl: ToastController,
  ) {}

  async startJourney() {
    if (!this.name.trim()) {
      await this.showToast('Por favor ingresa tu nombre');
      return;
    }
    await this.userService.createProfile(this.name, this.email);
    await this.router.navigateByUrl('/tabs/home', { replaceUrl: true });
  }

  private async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 4000,
      color: 'warning',
      position: 'bottom',
    });
    await toast.present();
  }
}

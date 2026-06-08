import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { UserProfile } from '../models/user.model';

const USER_KEY = 'eco_user_profile';

@Injectable({ providedIn: 'root' })
export class UserService {
  constructor(private storage: StorageService) {}

  async getProfile(): Promise<UserProfile | null> {
    return this.storage.get<UserProfile>(USER_KEY);
  }

  async saveProfile(profile: UserProfile): Promise<void> {
    await this.storage.set(USER_KEY, profile);
  }

  async hasOnboarded(): Promise<boolean> {
    const profile = await this.getProfile();
    return profile !== null;
  }

  async addPoints(points: number): Promise<void> {
    const profile = await this.getProfile();
    if (!profile) return;
    profile.totalPoints += points;
    await this.saveProfile(profile);
  }

  async createProfile(name: string, email: string): Promise<UserProfile> {
    const profile: UserProfile = {
      id: crypto.randomUUID(),
      name: name.trim(),
      email: email.trim(),
      createdAt: new Date().toISOString(),
      totalPoints: 0,
    };
    await this.saveProfile(profile);
    return profile;
  }
}

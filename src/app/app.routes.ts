import { Routes } from '@angular/router';
import { authGuard, onboardingGuard } from './core/guards/onboarding.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path: 'welcome',
    loadComponent: () =>
      import('./ui/welcome/welcome.page').then((m) => m.WelcomePage),
    canActivate: [onboardingGuard],
  },
  {
    path: 'tabs',
    loadComponent: () => import('./tabs/tabs.page').then((m) => m.TabsPage),
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./ui/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'logs',
        loadComponent: () =>
          import('./ui/logs/logs.page').then((m) => m.LogsPage),
      },
      {
        path: 'stats',
        loadComponent: () =>
          import('./ui/stats/stats.page').then((m) => m.StatsPage),
      },
      {
        path: 'trophies',
        loadComponent: () =>
          import('./ui/trophies/trophies.page').then((m) => m.TrophiesPage),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./ui/profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

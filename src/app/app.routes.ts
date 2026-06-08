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
      import('./welcome/welcome.page').then((m) => m.WelcomePage),
    canActivate: [onboardingGuard],
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('./tabs/tabs.page').then((m) => m.TabsPage),
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'logs',
        loadComponent: () =>
          import('./logs/logs.page').then((m) => m.LogsPage),
      },
      {
        path: 'stats',
        loadComponent: () =>
          import('./stats/stats.page').then((m) => m.StatsPage),
      },
      {
        path: 'trophies',
        loadComponent: () =>
          import('./trophies/trophies.page').then((m) => m.TrophiesPage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

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
      import('./ui/pages/welcome/welcome.page').then((m) => m.WelcomePage),
    canActivate: [onboardingGuard],
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('./ui/shared/tabs/tabs.page').then((m) => m.TabsPage),
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadComponent: () =>
          import('./ui/pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'logs',
        loadComponent: () =>
          import('./ui/pages/logs/logs.page').then((m) => m.LogsPage),
      },
      {
        path: 'stats',
        loadComponent: () =>
          import('./ui/pages/stats/stats.page').then((m) => m.StatsPage),
      },
      {
        path: 'trophies',
        loadComponent: () =>
          import('./ui/pages/trophies/trophies.page').then(
            (m) => m.TrophiesPage,
          ),
      },
      {
        path: 'profile',
        loadComponent: () =>
          import('./ui/pages/profile/profile.page').then((m) => m.ProfilePage),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
];

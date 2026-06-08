import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const onboardingGuard: CanActivateFn = async () => {
  const userService = inject(UserService);
  const router = inject(Router);

  const onboarded = await userService.hasOnboarded();
  if (onboarded) {
    return router.createUrlTree(['/tabs/home']);
  }
  return true;
};

export const authGuard: CanActivateFn = async () => {
  const userService = inject(UserService);
  const router = inject(Router);

  const onboarded = await userService.hasOnboarded();
  if (!onboarded) {
    return router.createUrlTree(['/welcome']);
  }
  return true;
};

import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

import { Auth } from '../../features/auth/services/auth';

export const authGuard: CanActivateFn = () => {
  const authService = inject(Auth);
  const router = inject(Router);

  try {
    const storage = typeof window !== 'undefined' ? window.localStorage : null;
    const token = storage?.getItem('access_token');

    if (token) {
      authService.isAuthenticated.set(true);
      return true;
    }
  } catch {
    // Ignore storage access issues and redirect to login.
  }

  authService.logout();

  return router.createUrlTree(['/login']);
};
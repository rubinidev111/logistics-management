import { provideHttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { CanActivateFn, provideRouter, Router } from '@angular/router';

import { Auth } from '../../features/auth/services/auth';
import { authGuard } from './auth-guard';

describe('authGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => authGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Auth, provideHttpClient(), provideRouter([])],
    });
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });

  it('redirects to login when there is no access token', () => {
    const router = TestBed.inject(Router);
    window.localStorage.clear();

    expect(executeGuard({} as never)).toEqual(router.createUrlTree(['/login']));
  });

  it('allows access when there is a valid access token', () => {
    window.localStorage.setItem('access_token', 'token-value');

    expect(executeGuard({} as never)).toBeTrue();
  });
});

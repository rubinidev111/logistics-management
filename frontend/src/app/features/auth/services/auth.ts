import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthUser, LoginRequest, LoginResponse } from '../models/auth.model';

@Injectable({ providedIn: 'root' })
export class Auth {

  private readonly http = inject(HttpClient);

  private readonly apiUrl = 'http://localhost:3000/api/v1/auth';

  readonly currentUser = signal<AuthUser | null>(null);

  readonly isAuthenticated = signal(false);

  login(credentials: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(
        `${this.apiUrl}/login`,
        credentials,
      )
      .pipe(
        tap((response) => {
          const payload = 'data' in response ? response.data : response;
          const { access_token, user } = payload as {
            access_token: string;
            user: AuthUser;
          };

          if (typeof window !== 'undefined') {
            localStorage.setItem('access_token', access_token);
          }

          this.currentUser.set(user);
          this.isAuthenticated.set(true);
        }),
      );
  }

  logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('access_token');
    }

    this.currentUser.set(null);
    this.isAuthenticated.set(false);
  }
}

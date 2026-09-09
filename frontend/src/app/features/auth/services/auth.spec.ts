import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

import {
  LoginRequest,
  LoginResponse,
  AuthUser,
} from '../models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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
          const { access_token, user } = response.data;

          localStorage.setItem('access_token', access_token);

          this.currentUser.set(user);
          this.isAuthenticated.set(true);
        }),
      );
  }

  logout(): void {
    localStorage.removeItem('access_token');

    this.currentUser.set(null);
    this.isAuthenticated.set(false);
  }
}
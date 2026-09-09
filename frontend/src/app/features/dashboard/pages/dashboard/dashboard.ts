import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../../auth/services/auth';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private readonly authService = inject(Auth);
  private readonly router = inject(Router);

  logout(): void {
    this.authService.logout();

    this.router.navigate(['/login'], {
      replaceUrl: true,
    });
  }
}
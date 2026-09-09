import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';


export const routes: Routes = [
 
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/pages/login/login')
        .then((m) => m.Login),
  },

  {
    path: '',
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashboard/dashboard.routes')
            .then((m) => m.DASHBOARD_ROUTES),
      },

      // {
      //   path: 'customers',
      //   loadChildren: () =>
      //     import('./features/customers/customers.routes')
      //       .then((m) => m.CUSTOMER_ROUTES),
      // },

      // {
      //   path: 'bookings',
      //   loadChildren: () =>
      //     import('./features/bookings/bookings.routes')
      //       .then((m) => m.BOOKING_ROUTES),
      // },

      // {
      //   path: 'shipments',
      //   loadChildren: () =>
      //     import('./features/shipments/shipments.routes')
      //       .then((m) => m.SHIPMENT_ROUTES),
      // },

      // {
      //   path: 'drivers',
      //   loadChildren: () =>
      //     import('./features/drivers/drivers.routes')
      //       .then((m) => m.DRIVER_ROUTES),
      // },

      // {
      //   path: 'vehicles',
      //   loadChildren: () =>
      //     import('./features/vehicles/vehicles.routes')
      //       .then((m) => m.VEHICLE_ROUTES),
      // },

      // {
      //   path: 'tracking',
      //   loadChildren: () =>
      //     import('./features/tracking/tracking.routes')
      //       .then((m) => m.TRACKING_ROUTES),
      // },

      // {
      //   path: 'payments',
      //   loadChildren: () =>
      //     import('./features/payments/payments.routes')
      //       .then((m) => m.PAYMENT_ROUTES),
      // },
    ],
  },

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
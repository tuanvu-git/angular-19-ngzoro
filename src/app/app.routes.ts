import { Routes } from '@angular/router';
import { AuthenticationGuard } from './auth';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: '',
    loadChildren: () =>
      import('./auth/auth.routing').then((m) => m.AuthRouting),
  },
  {
    path: 'dashboard',
    canActivate: [AuthenticationGuard],
    loadChildren: () =>
      import('./pages/dashboard/dashboard.routes').then(
        (m) => m.DASHBOARD_ROUNTES
      ),
  },
];

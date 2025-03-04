import { Routes } from '@angular/router';
import { AuthenticationGuard } from '@pages/auth';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: '',
    loadChildren: () =>
      import('./pages/auth/auth.routes').then((m) => m.AUTH_ROUNTES),
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

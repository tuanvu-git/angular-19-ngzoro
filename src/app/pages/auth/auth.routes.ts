import { Routes } from '@angular/router';
import { AlreadyLoggedCheckGuard } from './guard/authentication.guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';


export const AUTH_ROUNTES: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    canActivate: [AlreadyLoggedCheckGuard],
    component: LoginComponent,
    data: { title: 'Login' },
  },
  {
    path: 'logout',
    component: LogoutComponent,
    data: { title: 'Logout' },
  },
];


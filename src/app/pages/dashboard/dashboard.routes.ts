import { Routes } from '@angular/router';
import { CountryComponent } from './country/country.component';
import { DashboardComponent } from './dashboard.component';

export const DASHBOARD_ROUNTES: Routes = [
  {
    path: '',
    component: DashboardComponent,
    data: {
      title: 'dashboard',
    },
    children: [
      {
        path: 'country',
        component: CountryComponent,
      },
    ],
  },
];

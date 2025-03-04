import { Routes } from '@angular/router';
import { CityComponent } from './city/city.component';
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
      {
        path: 'city',
        component: CityComponent,
      },
    ],
  },
];

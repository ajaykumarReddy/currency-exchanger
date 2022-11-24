import { Routes } from '@angular/router';
import { CurrentExchangeComponent } from './current-exchange/current-exchange.component';

export const routes: Routes = [
  {
    path: 'convertor',
    component: CurrentExchangeComponent,
  },
  {
    path: 'details',
    loadComponent: () =>
      import('./current-details/current-details.component').then(
        (c) => c.CurrentDetailsComponent
      ),
  },
  {
    path: '',
    redirectTo: 'convertor',
    pathMatch: 'full',
  },
];

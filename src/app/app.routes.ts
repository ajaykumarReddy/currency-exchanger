import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'convertor',
    loadComponent: () =>
      import('./convertor/convertor.component').then(
        (m) => m.ConvertorComponent
      ),
    children: [
      {
        path: 'exchange',
        loadComponent: () =>
          import(
            './convertor/currency-exchange/currency-exchange.component'
          ).then((m) => m.CurrencyExchangeComponent),
      },
      {
        path: 'details/:coin/:name',
        loadComponent: () =>
          import(
            './convertor/currency-details/currency-details.component'
          ).then((m) => m.CurrencyDetailsComponent),
      },
      {
        path: '',
        redirectTo: 'exchange',
        pathMatch: 'full',
      },
    ],
  },
  { path: '', redirectTo: 'convertor', pathMatch: 'full' },
];

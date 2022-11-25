import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'convertor',
    loadChildren: () =>
      import('./currency-container/currency-container.module').then(
        (m) => m.CurrencyContainerModule
      ),
  },
  {
    path: '',
    redirectTo: 'convertor',
    pathMatch: 'full',
  },
];

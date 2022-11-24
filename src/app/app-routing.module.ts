// import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentDetailsComponent } from './current-details/current-details.component';
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

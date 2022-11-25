import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentDetailsComponent } from '../current-details/current-details.component';
import { CurrentExchangeComponent } from '../current-exchange/current-exchange.component';
import { CurrencyContainerComponent } from './currency-container.component';

const routes: Routes = [
  {
    path: '',
    component: CurrencyContainerComponent,
    children: [
      {
        path: 'exchange',
        component: CurrentExchangeComponent,
      },
      {
        path: 'details/:coin/:name',
        component: CurrentDetailsComponent,
      },
      {
        path: '',
        redirectTo: 'exchange',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrencyContainerRoutingModule {}

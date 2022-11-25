import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrencyContainerRoutingModule } from './currency-container-routing.module';
import { CurrencyContainerComponent } from './currency-container.component';
import { CurrencyConvetorComponent } from './currency-convetor/currency-convetor.component';
import { FormsModule } from '@angular/forms';
import { CurrencyHeaderComponent } from './currency-header/currency-header.component';

@NgModule({
  declarations: [
    CurrencyContainerComponent,
    CurrencyConvetorComponent,
    CurrencyHeaderComponent,
  ],
  imports: [CommonModule, CurrencyContainerRoutingModule, FormsModule],
})
export class CurrencyContainerModule {}

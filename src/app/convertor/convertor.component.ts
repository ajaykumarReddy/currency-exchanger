import { Component } from '@angular/core';
import { CurrencyConvertorComponent } from './currency-convertor/currency-convertor.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-convertor',
  standalone: true,
  template: `<section>
    <app-currency-convertor />
    <router-outlet />
  </section> `,
  imports: [RouterOutlet, CurrencyConvertorComponent],
})
export class ConvertorComponent {}

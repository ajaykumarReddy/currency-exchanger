import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currency-header',
  templateUrl: './currency-header.component.html',
  styleUrls: ['./currency-header.component.scss'],
})
export class CurrencyHeaderComponent {
  @Input() coin!: string;
  @Input() name!: string;

  @Output() resetCurrency = new EventEmitter();

  constructor(private router: Router) {}

  goToHome() {
    this.name = 'Currency Exchanger';
    this.coin = '';
    this.resetCurrency.emit();
    this.router.navigateByUrl('/convertor/exchange');
  }

}

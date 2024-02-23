import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currency-header',
  standalone: true,
  imports: [],
  template: ` <div class="currency-header">
    <h1>
      @if (coin) {
      <span>{{ coin }} - </span>
      } @if (name) {
      <span> {{ name }}</span>
      }
    </h1>
    @if (coin) {
    <button (click)="goToHome()" class="btn">Back to Home</button>
    }
  </div>`,
  styles: `
  .currency-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 10px 0;
    h1 {
        display: flex;
        gap: 1rem;
    }
}
`,
})
export class CurrencyHeaderComponent {
  private router = inject(Router);
  @Input() coin!: string;
  @Input() name!: string;
  // name = input();
  //  headerInfo = input();
  @Output() resetCurrency = new EventEmitter();

  goToHome() {
    this.name = 'Currency Exchanger';
    this.coin = '';
    this.resetCurrency.emit();
    this.router.navigateByUrl('/convertor/exchange');
  }
}

import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { CommunicationService } from '../../shared/communication.service';
import { CommonModule } from '@angular/common';

const NUMBER_OF_CARDS = 10;
@Component({
  selector: 'app-currency-exchange',
  standalone: true,
  imports: [CommonModule],
  template: ` @if (selectedCurrencySignal(); as currency) {
    <div class="cards">
      @for (item of cardsList(); track item) {
      <div class="card">
        <h1>
          {{ currency.query.from }} <i class="fa-solid fa-right-left"></i>
          {{ currency.query.to }}
        </h1>
        <p>{{ currency.result }}</p>
      </div>
      }
    </div>
    }`,
  styles: `
  .cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    grid-auto-rows: auto;
    grid-gap: 1rem;
    height: calc(100vh - 415px);
    overflow: auto;
    .card {
        border: 1px solid #e7e7e7;
        border-radius: 4px;
        padding: 0.5rem;
        height: 150px;
    }
}

:host {
    display: block;
    margin-top: 2rem;
}
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyExchangeComponent {
  communicationService = inject(CommunicationService);
  selectedCurrencySignal = this.communicationService.selectedCurrencySignal;

  cardsList = signal(
    Array.from({ length: NUMBER_OF_CARDS }, (_, index) => index + 1)
  );

  ngOnInit(): void {
    this.communicationService.sendHeaderInfo({
      coin: '',
      name: 'Currency Exchanger',
    });
  }
}

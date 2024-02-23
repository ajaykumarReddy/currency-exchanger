import { Component, Input, inject } from '@angular/core';
import { CommunicationService } from '../../shared/communication.service';
import { TimeHistoryChartComponent } from './time-history-chart/time-history-chart.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-currency-details',
  standalone: true,
  template: `<div class="card">
    <app-time-history-chart></app-time-history-chart>
  </div>`,
  imports: [CommonModule, TimeHistoryChartComponent],
})
export class CurrencyDetailsComponent {
  #communicationService = inject(CommunicationService);
  @Input() coin!: string;
  @Input() name!: string;

  ngOnInit(): void {
    this.#communicationService.sendHeaderInfo({
      coin: this.coin,
      name: this.name,
    });
  }
}

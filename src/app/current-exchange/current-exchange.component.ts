import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-current-exchange',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './current-exchange.component.html',
  styleUrls: ['./current-exchange.component.scss'],
})
export class CurrentExchangeComponent {
  currency$ = this.communicationService.selectedCurrency$;
  cardsList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.communicationService.sendHeaderInfo({
      coin: '',
      name: 'Currency Exchanger',
    });
  }
}

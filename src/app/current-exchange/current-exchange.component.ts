import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';
import { EMPTY, map } from 'rxjs';
import { ConvertorResponse, IConvertor } from '../interfaces';
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

  constructor(private communicationService: CommunicationService){}
}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationService } from '../communication.service';
import { HttpService } from '../http.service';
import { switchMap } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

const start_date = `${new Date().getFullYear()}-01-01`;
const end_date = new Date().toISOString().split('T')[0];
@Component({
  selector: 'app-current-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './current-details.component.html',
  styleUrls: ['./current-details.component.scss'],
})
export class CurrentDetailsComponent {
  historicalData$ = this.communicationService.selectedCurrency$.pipe(
    switchMap((res) => {
      console.log('convertor object ....', res);
      if (res) {
        return this.httpService.timeSeries(start_date, end_date, res.query.from);
      }
      return EMPTY;
    })
  );

  constructor(
    private communicationService: CommunicationService,
    private httpService: HttpService
  ) {}
}

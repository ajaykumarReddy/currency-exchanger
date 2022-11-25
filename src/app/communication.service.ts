import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConvertorResponse } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private selectedCurrency = new BehaviorSubject<ConvertorResponse | null>(
    null
  );
  

  public selectedCurrency$ = this.selectedCurrency.asObservable();

  constructor() {}

  sendCurrencyInfo(info: ConvertorResponse) {
    this.selectedCurrency.next(info);
  }
}

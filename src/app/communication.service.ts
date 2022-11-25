import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ConvertorResponse } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  private selectedCurrency = new BehaviorSubject<ConvertorResponse | null>(null);

  private headerInfo = new BehaviorSubject<HeaderInfo>({
    name: 'Currency Exchange',
    coin: '',
  });
  public headerInfo$ = this.headerInfo.asObservable();

  public selectedCurrency$ = this.selectedCurrency.asObservable();

  sendCurrencyInfo(info: ConvertorResponse) {
    this.selectedCurrency.next(info);
  }

  sendHeaderInfo(data: HeaderInfo) {
    this.headerInfo.next(data);
  }
}

interface HeaderInfo {
  name: string;
  coin: string;
}

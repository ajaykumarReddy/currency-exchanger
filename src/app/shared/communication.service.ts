import { Injectable, signal } from '@angular/core';
import { ConvertorResponse } from './interfaces';

@Injectable({
  providedIn: 'root',
})
export class CommunicationService {
  selectedCurrencySignal = signal<ConvertorResponse | null>(null);
  headerInfoSignal = signal<HeaderInfo>({
    name: 'Currency Exchange',
    coin: '',
  });

  sendHeaderInfo(data: HeaderInfo) {
    this.headerInfoSignal.set(data);
  }
}

interface HeaderInfo {
  name: string;
  coin: string;
}

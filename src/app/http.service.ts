import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { ConvertorResponse, IConvertor, SymbolsResponse } from './interfaces';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    apikey: '6JSPCkYmxgMa41ZKJdf44Yv8Ncmb5EPQ',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  getSymbols(): Observable<SymbolsResponse> {
    return this.httpClient
      .get<SymbolsResponse>(
        'https://api.apilayer.com/fixer/symbols',
        httpOptions
      )
      .pipe(shareReplay(1));
  }

  convertTo(payload: IConvertor): Observable<ConvertorResponse> {
    return this.httpClient.get<ConvertorResponse>(
      `https://api.apilayer.com/fixer/convert?to=${payload.to}&from=${payload.from}&amount=${payload.amount}`,
      httpOptions
    );
  }
}

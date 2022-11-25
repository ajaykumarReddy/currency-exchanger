import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { ConvertorResponse, IConvertor, SymbolsResponse } from './interfaces';
//6JSPCkYmxgMa41ZKJdf44Yv8Ncmb5EPQ
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    apikey: 'm2BjG5ISdCGortdngy7ObGccsaDpRMAH',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  getSymbols(): Observable<SymbolsResponse> {

    return this.httpClient
      .get<SymbolsResponse>('assets/symbols.json',
        httpOptions
      )
      .pipe(shareReplay(1));

    // return this.httpClient
    //   .get<SymbolsResponse>(
    //     'https://api.apilayer.com/fixer/symbols',
    //     httpOptions
    //   )
    //   .pipe(shareReplay(1));
  }

  convertTo(payload: IConvertor): Observable<ConvertorResponse> {
    return this.httpClient.get<ConvertorResponse>(
      `assets/convetor.json`,
      httpOptions
    );

    // return this.httpClient.get<ConvertorResponse>(
    //   `https://api.apilayer.com/fixer/convert?to=${payload.to}&from=${payload.from}&amount=${payload.amount}`,
    //   httpOptions
    // );
  }

  timeSeries(start_date: string, end_date: string, base: string) {
    return this.httpClient.get(
      `https://api.apilayer.com/fixer/timeseries?start_date=${start_date}&end_date=${end_date}&base=${base}`,
      httpOptions
    );
  }
}

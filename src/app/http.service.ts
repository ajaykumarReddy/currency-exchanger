import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import {
  ConvertorResponse,
  IConvertor,
  SymbolsResponse,
  TimeSeriesResponse,
} from './interfaces';
//6JSPCkYmxgMa41ZKJdf44Yv8Ncmb5EPQ
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    apikey: 'm2BjG5ISdCGortdngy7ObGccsaDpRMAH',
  }),
};
const API = 'https://api.apilayer.com/fixer';
@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  getSymbols(): Observable<SymbolsResponse> {
    // return this.httpClient
    //   .get<SymbolsResponse>(`assets/symbols.json`, httpOptions)
    //   .pipe(shareReplay(1));
    return this.httpClient
      .get<SymbolsResponse>(`${API}/symbols`, httpOptions)
      .pipe(shareReplay(1));
  }

  convertTo(payload: IConvertor): Observable<ConvertorResponse> {
    return this.httpClient.get<ConvertorResponse>(
      `${API}/convert?to=${payload.to}&from=${payload.from}&amount=${payload.amount}`,
      httpOptions
    );
  }

  timeSeries(
    start_date: string,
    end_date: string,
    base: string,
    symbols: string
  ): Observable<TimeSeriesResponse> {
    return this.httpClient.get<TimeSeriesResponse>(
      `${API}/timeseries?start_date=${start_date}&end_date=${end_date}&base=${base}&symbols=${symbols}`,
      httpOptions
    );
  }
}

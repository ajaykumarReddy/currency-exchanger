import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  ConvertorResponse,
  IConvertor,
  SymbolsResponse,
  TimeSeriesResponse,
} from './interfaces';

const API = environment.API_URL;
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
      .get<SymbolsResponse>(`${API}/symbols`)
      .pipe(shareReplay(1));
  }

  convertTo(payload: IConvertor): Observable<ConvertorResponse> {
    return this.httpClient.get<ConvertorResponse>(
      `${API}/convert?to=${payload.to}&from=${payload.from}&amount=${payload.amount}`
    );
  }

  timeSeries(
    start_date: string,
    end_date: string,
    base: string,
    symbols: string
  ): Observable<TimeSeriesResponse> {
    return this.httpClient.get<TimeSeriesResponse>(
      `${API}/timeseries?start_date=${start_date}&end_date=${end_date}&base=${base}&symbols=${symbols}`
    );
  }
}

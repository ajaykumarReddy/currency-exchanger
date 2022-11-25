import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommunicationService } from '../communication.service';
import { HttpService } from '../http.service';
import { map, switchMap, tap, takeUntil } from 'rxjs/operators';
import { EMPTY, Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { KEYS, TimeSeriesResponse } from '../interfaces';
import { TimeHistroyChartComponent } from './time-histroy-chart/time-histroy-chart.component';

const start_date = `${new Date().getFullYear()}-01-01`;
const end_date = new Date().toISOString().split('T')[0];
@Component({
  selector: 'app-current-details',
  standalone: true,
  templateUrl: './current-details.component.html',
  styleUrls: ['./current-details.component.scss'],
  imports: [CommonModule, TimeHistroyChartComponent],
})
export class CurrentDetailsComponent {
  historicalData$!: Observable<number[] | any>;
  private destroy$ = new Subject();

  constructor(
    private communicationService: CommunicationService,
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
      .pipe(
        takeUntil(this.destroy$),
        tap((paramMap) => {
          const coin = paramMap.get('coin') || '';
          const name = paramMap.get('name') || '';
          this.communicationService.sendHeaderInfo({ coin, name });
        })
      )
      .subscribe();

    this.getTimeSeries();
  }

  getTimeSeries() {
    this.historicalData$ = this.communicationService.selectedCurrency$.pipe(
      switchMap((res) => {
        if (res) {
          const { from, to } = res.query;
          return this.httpService
            .timeSeries(start_date, end_date, from, `${from},${to}`)
            .pipe(
              map((res) => (res.success ? this.getChartsData(res, to) : EMPTY))
            );
        }
        return EMPTY;
      })
    );
  }

  private getChartsData(res: TimeSeriesResponse, to: string) {
    return KEYS.map((key) => {
      const obj = res.rates[key] as any;
      return obj ? obj[to] : 0;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
}

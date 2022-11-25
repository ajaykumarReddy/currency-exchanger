import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil, tap, map } from 'rxjs/operators';
import { CommunicationService } from 'src/app/communication.service';
import { HttpService } from 'src/app/http.service';
import { ConvertorResponse, IConvertor, Symbols } from 'src/app/interfaces';

@Component({
  selector: 'app-currency-convetor',
  templateUrl: './currency-convetor.component.html',
  styleUrls: ['./currency-convetor.component.scss'],
})
export class CurrencyConvetorComponent  {
  convertorObj: IConvertor = { from: '', to: '', amount: 0 };
  res!: ConvertorResponse | null;
  symbols!: Symbols;
  isDetails = true;
  headerInfo$ = this.communicationService.headerInfo$.pipe(
    tap((res) => {
      this.isDetails = res.coin ? false : true;
      this.convertorObj.from = res.coin;
    })
  );

  symbols$ = this.httpService.getSymbols().pipe(
    map((res) => {
      return res.success ? res.symbols : {};
    }),
    tap((res) => (this.symbols = res))
  );
  private destroy$ = new Subject();

  constructor(
    private httpService: HttpService,
    private communicationService: CommunicationService,
    private router: Router
  ) {}


  convertor() {
    this.httpService
      .convertTo(this.convertorObj)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res) => {
          this.res = res.success ? res : null;
          this.communicationService.sendCurrencyInfo(res);
        },
        error: (err) => {
          console.error('error in API call...', err);
        },
      });
  }

  goToDetails(): void {
    if (this.res) {
      this.res.name = this.symbols[this.convertorObj.from];
      this.communicationService.sendCurrencyInfo(this.res);
      this.router.navigateByUrl(
        `/convertor/details/${this.convertorObj.from}/${this.res.name}`
      );
    }
  }

  swapCurrency(): void {
    const { from, to } = this.convertorObj;
    this.convertorObj.to = from;
    this.convertorObj.from = to;
    this.res = null;
  }

  resetCurrency(): void {
    this.res = null;
    this.convertorObj = { from: '', to: '', amount: 0 };
  }
}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { map, of, tap } from 'rxjs';
import { CommunicationService } from 'src/app/communication.service';
import { HttpService } from 'src/app/http.service';
import { ConvertorResponse, IConvertor, Symbols } from 'src/app/interfaces';

@Component({
  selector: 'app-currency-convetor',
  templateUrl: './currency-convetor.component.html',
  styleUrls: ['./currency-convetor.component.scss'],
})
export class CurrencyConvetorComponent implements OnInit {
  convertorObj: IConvertor = { from: '', to: '', amount: 0 };
  res!: ConvertorResponse | null;
  symbols!: Symbols;
  name = 'Currency Exchanger';
  hideBtn = false;
  
  symbols$ = this.httpService.getSymbols().pipe(
    map((res) => {
      return res.success ? res.symbols : {};
    }),
    tap((res) => (this.symbols = res))
  );

  @Output() convertorDetails = new EventEmitter<{name: string, coin: string}>();

  constructor(
    private httpService: HttpService,
    private communicationService: CommunicationService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  convertor() {
    this.httpService.convertTo(this.convertorObj).subscribe({
      next: (res) => {
        this.res = res.success ? res : null;
        this.communicationService.sendCurrencyInfo(res);
      },
      error: (err) => {
        console.error('error in API call...', err);
      },
    });
  }

  goToDetails() {
    if (this.res) {
      this.res.name = this.symbols[this.convertorObj.to];
      // this.convertorDetails.emit({coin: this.convertorObj.from, name: this.res.name});
      this.communicationService.sendCurrencyInfo(this.res);
      this.router.navigateByUrl('/convertor/details');
    }
  }

  swapCurrency() {
    const { from, to } = this.convertorObj;
    this.convertorObj.to = from;
    this.convertorObj.from = to;
  }
}

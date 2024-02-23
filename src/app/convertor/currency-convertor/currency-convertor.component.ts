import { Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { ConvertorResponse, IConvertor } from '../../shared/interfaces';
import { map } from 'rxjs';
import { HttpService } from '../../services/http.service';
import { CommunicationService } from '../../shared/communication.service';
import { Router } from '@angular/router';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { CurrencyHeaderComponent } from '../currency-header/currency-header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-currency-convertor',
  standalone: true,
  templateUrl: './currency-convertor.component.html',
  styleUrl: './currency-convertor.component.scss',
  imports: [CommonModule, FormsModule, CurrencyHeaderComponent],
})
export class CurrencyConvertorComponent {
  #httpService = inject(HttpService);
  #communicationService = inject(CommunicationService);
  #router = inject(Router);
  #destroyRef = inject(DestroyRef);
  result = signal<ConvertorResponse | null>(null);
  isDetails = signal(true);
  symbolsSignal = toSignal<any>(
    this.#httpService
      .getSymbols()
      .pipe(map((res) => (res.success ? res.symbols : {})))
  );
  convertorObj: IConvertor = { from: '', to: '', amount: 0 };

  headerInfo = this.#communicationService.headerInfoSignal;

  ngOnInit(): void {
    this.convertorObj.from = this.headerInfo().coin;
    this.isDetails.set(this.headerInfo().coin ? false : true);
  }

  convertor() {
    this.#httpService
      .convertTo(this.convertorObj)
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe({
        next: (res) => {
          this.result.set(res.success ? res : null);
          this.#communicationService.selectedCurrencySignal.set(res);
        },
        error: (err) => {
          console.error('error in API call...', err);
        },
      });
  }

  goToDetails(): void {
    if (this.result()) {
      const name = this.symbolsSignal()[this.convertorObj.from];
      this.#communicationService.selectedCurrencySignal.set(this.result());
      this.#router.navigateByUrl(
        `/convertor/details/${this.convertorObj.from}/${name}`
      );
    }
  }

  swapCurrency(): void {
    const { from, to } = this.convertorObj;
    this.convertorObj.to = from;
    this.convertorObj.from = to;
    this.result.set(null);
  }

  resetCurrency(): void {
    this.result.set(null);
    this.convertorObj = { from: '', to: '', amount: 0 };
  }
}

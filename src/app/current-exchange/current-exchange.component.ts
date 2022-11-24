import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpService } from '../http.service';
import { FormsModule } from '@angular/forms';
import { EMPTY, map } from 'rxjs';
import { ConvertorResponse, IConvertor } from '../interfaces';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-current-exchange',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './current-exchange.component.html',
  styleUrls: ['./current-exchange.component.scss'],
})
export class CurrentExchangeComponent {
  convertorObj: IConvertor = { from: 'EUR', to: 'USD', amount: 12 };
  res!: ConvertorResponse | null;
  symbols$ = this.httpService.getSymbols().pipe(
    map((res) => {
      return res.success ? res.symbols : {};
    })
  );

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {}
  convertor() {
    this.httpService.convertTo(this.convertorObj).subscribe({
      next: (res) => {
        this.res = res.success ? res : null;
      },
      error: (err) => {
        console.error('error in API call...', err);
      },
    });
  }
}

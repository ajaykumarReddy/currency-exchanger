import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currency-header',
  templateUrl: './currency-header.component.html',
  styleUrls: ['./currency-header.component.scss'],
})
export class CurrencyHeaderComponent {
  @Input() coin!: string;
  @Input() name!: string;

  @Input() hideBtn!: boolean;

  @Output() gotToHome = new EventEmitter();
}

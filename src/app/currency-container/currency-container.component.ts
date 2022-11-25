import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-currency-container',
  templateUrl: './currency-container.component.html',
  styleUrls: ['./currency-container.component.css'],
})
export class CurrencyContainerComponent implements OnInit {

  constructor(private router: Router, private communicationService: CommunicationService) {}

  ngOnInit() {}

  // goToHome() {
  //   this.name = 'Currency Exchanger';
  //   this.hideBtn = true;
  //   this.router.navigateByUrl('/convertor/exchange');
  // }
}

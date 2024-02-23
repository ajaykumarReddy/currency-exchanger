import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CommunicationService } from '../../shared/communication.service';

import { CurrencyExchangeComponent } from './currency-exchange.component';

describe('CurrencyExchangeComponent', () => {
  let component: CurrencyExchangeComponent;
  let fixture: ComponentFixture<CurrencyExchangeComponent>;
  let communicationService: CommunicationService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CurrencyExchangeComponent],
      providers: [CommunicationService],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyExchangeComponent);
    component = fixture.componentInstance;
    communicationService = TestBed.inject(CommunicationService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 10 cards', () => {
    const cards = fixture.debugElement.queryAll(By.css('.card'));
    expect(cards.length).toEqual(10);
  });

  it('should display selected currency', () => {
    const selectedCurrency = {
      query: {
        from: 'USD',
        to: 'EUR',
        amount: 33,
      },
      result: 0.85,
      name: 'USD to EUR',
      date: '2021-08-01',
      success: true,
      info: { timestamp: 1627812000, rate: 0.85 },
    };
    communicationService.selectedCurrencySignal.set(selectedCurrency);
    fixture.detectChanges();

    const currencyDisplay = fixture.debugElement.query(By.css('.card h1'))
      .nativeElement.textContent;
    expect(currencyDisplay).toContain('USD');
    expect(currencyDisplay).toContain('EUR');
  });

  it('should display currency result', () => {
    const selectedCurrency = {
      query: {
        from: 'USD',
        to: 'EUR',
        amount: 33,
      },
      result: 0.85,
      name: 'USD to EUR',
      date: '2021-08-01',
      success: true,
      info: { timestamp: 1627812000, rate: 0.85 },
    };
    communicationService.selectedCurrencySignal.set(selectedCurrency);
    fixture.detectChanges();

    const resultDisplay = fixture.debugElement.query(By.css('.card p'))
      .nativeElement.textContent;
    expect(resultDisplay).toEqual('0.85');
  });
});

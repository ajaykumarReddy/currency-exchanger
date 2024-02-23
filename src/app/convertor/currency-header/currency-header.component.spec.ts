import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { CurrencyHeaderComponent } from './currency-header.component';

describe('CurrencyHeaderComponent', () => {
  let component: CurrencyHeaderComponent;
  let fixture: ComponentFixture<CurrencyHeaderComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CurrencyHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyHeaderComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display coin and name', () => {
    component.coin = 'BTC';
    component.name = 'Bitcoin';
    fixture.detectChanges();

    const coinDisplay = fixture.debugElement.query(By.css('h1 span'))
      .nativeElement.textContent;
    expect(coinDisplay).toContain('BTC');
    expect(coinDisplay).toContain('Bitcoin');
  });

  it('should emit resetCurrency event when goToHome is called', () => {
    spyOn(component.resetCurrency, 'emit');
    component.goToHome();
    expect(component.resetCurrency.emit).toHaveBeenCalled();
  });

  it('should navigate to home when goToHome is called', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.goToHome();
    expect(navigateSpy).toHaveBeenCalledWith(['/']);
  });
});

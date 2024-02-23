import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { CurrencyConvertorComponent } from './currency-convertor.component';
import { HttpService } from '../../services/http.service';
import { CommunicationService } from '../../shared/communication.service';

describe('CurrencyConvertorComponent', () => {
  let component: CurrencyConvertorComponent;
  let fixture: ComponentFixture<CurrencyConvertorComponent>;
  let httpService: HttpService;
  let communicationService: CommunicationService;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      declarations: [CurrencyConvertorComponent],
      providers: [HttpService, CommunicationService],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyConvertorComponent);
    component = fixture.componentInstance;
    httpService = TestBed.inject(HttpService);
    communicationService = TestBed.inject(CommunicationService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call convertor method', () => {
    spyOn(component, 'convertor');
    const button = fixture.debugElement.query(By.css('.convertor-button'));
    button.triggerEventHandler('click', null);
    expect(component.convertor).toHaveBeenCalled();
  });

  it('should call swapCurrency method', () => {
    spyOn(component, 'swapCurrency');
    const button = fixture.debugElement.query(By.css('.swap-button'));
    button.triggerEventHandler('click', null);
    expect(component.swapCurrency).toHaveBeenCalled();
  });

  it('should call resetCurrency method', () => {
    spyOn(component, 'resetCurrency');
    const button = fixture.debugElement.query(By.css('.reset-button'));
    button.triggerEventHandler('click', null);
    expect(component.resetCurrency).toHaveBeenCalled();
  });

  it('should navigate to details when goToDetails is called', () => {
    const navigateSpy = spyOn(router, 'navigate');
    component.goToDetails();
    expect(navigateSpy).toHaveBeenCalledWith(['/details']);
  });
});

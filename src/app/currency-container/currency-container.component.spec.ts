/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyContainerComponent } from './currency-container.component';
import { CurrencyConvetorComponent } from './currency-convetor/currency-convetor.component';
import { CurrencyHeaderComponent } from './currency-header/currency-header.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';

describe('CurrencyContainerComponent', () => {
  let component: CurrencyContainerComponent;
  let fixture: ComponentFixture<CurrencyContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, FormsModule],
      declarations: [
        CurrencyContainerComponent,
        CurrencyConvetorComponent,
        CurrencyHeaderComponent,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

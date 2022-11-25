/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyConvetorComponent } from './currency-convetor.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { CurrencyHeaderComponent } from '../currency-header/currency-header.component';
import { FormsModule } from '@angular/forms';

describe('CurrencyConvetorComponent', () => {
  let component: CurrencyConvetorComponent;
  let fixture: ComponentFixture<CurrencyConvetorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyConvetorComponent,  CurrencyHeaderComponent],
      imports: [RouterTestingModule, HttpClientModule, FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyConvetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

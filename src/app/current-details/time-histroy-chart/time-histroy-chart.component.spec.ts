/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeHistroyChartComponent } from './time-histroy-chart.component';
import { CommonModule } from '@angular/common';
import { NgApexchartsModule } from 'ng-apexcharts';


describe('TimeHistroyChartComponent', () => {
  let component: TimeHistroyChartComponent;
  let fixture: ComponentFixture<TimeHistroyChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      imports: [CommonModule, NgApexchartsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeHistroyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

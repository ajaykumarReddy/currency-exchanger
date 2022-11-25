import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CurrentDetailsComponent } from './current-details.component';

describe('CurrentDetailsComponent', () => {
  let component: CurrentDetailsComponent;
  let fixture: ComponentFixture<CurrentDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ CurrentDetailsComponent, HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

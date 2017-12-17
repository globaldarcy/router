import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Stock3Component } from './stock3.component';

describe('Stock3Component', () => {
  let component: Stock3Component;
  let fixture: ComponentFixture<Stock3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Stock3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Stock3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

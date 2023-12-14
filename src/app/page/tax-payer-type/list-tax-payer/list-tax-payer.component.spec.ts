import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaxPayerComponent } from './list-tax-payer.component';

describe('ListTaxPayerComponent', () => {
  let component: ListTaxPayerComponent;
  let fixture: ComponentFixture<ListTaxPayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTaxPayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTaxPayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

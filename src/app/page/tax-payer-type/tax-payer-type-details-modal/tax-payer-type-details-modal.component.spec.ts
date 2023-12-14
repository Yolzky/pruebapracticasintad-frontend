import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxPayerTypeDetailsModalComponent } from './tax-payer-type-details-modal.component';

describe('TaxPayerTypeDetailsModalComponent', () => {
  let component: TaxPayerTypeDetailsModalComponent;
  let fixture: ComponentFixture<TaxPayerTypeDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxPayerTypeDetailsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxPayerTypeDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

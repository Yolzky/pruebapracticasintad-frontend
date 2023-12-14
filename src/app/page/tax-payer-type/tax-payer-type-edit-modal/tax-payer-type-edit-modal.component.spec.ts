import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxPayerTypeEditModalComponent } from './tax-payer-type-edit-modal.component';

describe('TaxPayerTypeEditModalComponent', () => {
  let component: TaxPayerTypeEditModalComponent;
  let fixture: ComponentFixture<TaxPayerTypeEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxPayerTypeEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxPayerTypeEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

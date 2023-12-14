import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTypeDetailsModalComponent } from './document-type-details-modal.component';

describe('DocumentTypeDetailsModalComponent', () => {
  let component: DocumentTypeDetailsModalComponent;
  let fixture: ComponentFixture<DocumentTypeDetailsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentTypeDetailsModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentTypeDetailsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

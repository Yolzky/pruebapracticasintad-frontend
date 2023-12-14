import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentTypeEditModalComponent } from './document-type-edit-modal.component';

describe('DocumentTypeEditModalComponent', () => {
  let component: DocumentTypeEditModalComponent;
  let fixture: ComponentFixture<DocumentTypeEditModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentTypeEditModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentTypeEditModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

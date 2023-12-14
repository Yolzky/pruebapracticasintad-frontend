import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DocumentType} from "../../../core/models/dto/dto";
import {DocumentTypeService} from "../../../core/services/document-type/document-type.service";

@Component({
  selector: 'app-document-type-edit-modal',
  templateUrl: './document-type-edit-modal.component.html',
  styleUrls: ['./document-type-edit-modal.component.scss']
})
export class DocumentTypeEditModalComponent implements OnInit {

  documentType: DocumentType;

  constructor(
    private dialogRef: MatDialogRef<DocumentTypeEditModalComponent>,
    private documentTypeService: DocumentTypeService,
    @Inject(MAT_DIALOG_DATA) public data: { documentType: DocumentType },
  ) {
    this.documentType = data.documentType;
  }

  ngOnInit(): void {
  }

  onSave(): void {
    this.documentTypeService.updateDocumentType(this.documentType).subscribe(() => {
      this.dialogRef.close();
    });
  }
  onClose(): void {
    this.dialogRef.close();
  }
}

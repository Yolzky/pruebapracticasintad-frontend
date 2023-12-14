// edit-entity.component.ts
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EntityService } from "../../../core/services/entity/entity.service";
import { DocumentTypeService } from "../../../core/services/document-type/document-type.service";
import {Entity, DocumentType, TaxPayerType} from "../../../core/models/dto/dto";
import {TaxPayerTypeService} from "../../../core/services/tax-payer-type/tax-payer-type.service";


@Component({
  selector: 'app-edit-entity',
  templateUrl: './edit-entity.component.html',
  styleUrls: ['./edit-entity.component.scss']
})
export class EditEntityComponent implements OnInit {
  entity: Entity;
  documentTypes: DocumentType[] = [];
  taxPayerTypes: TaxPayerType[] = [];
  selectedDocumentType: DocumentType | null = null;

  selectedTaxPayerType: TaxPayerType | null = null;

  constructor(
    private dialogRef: MatDialogRef<EditEntityComponent>,
    private entityService: EntityService,
    private taxPayerTypeService: TaxPayerTypeService,
    private documentTypeService: DocumentTypeService,
    @Inject(MAT_DIALOG_DATA) public data: { entity: Entity }
  ) {
    this.entity = data.entity;
  }

  ngOnInit(): void {
    this.taxPayerTypeService.getAllTaxPayerTypes().subscribe((types: {content: TaxPayerType[]}) => {
      this.taxPayerTypes = types.content;
    });

    this.documentTypeService.getAllDocumentTypes().subscribe((types: { content: DocumentType[] }) => {
      this.documentTypes = types.content;
    });
  }

  onSave(): void {
    if (this.selectedDocumentType) {
      // Asignar el ID del documento seleccionado
      this.entity.documentType = { id: this.selectedDocumentType.id } as DocumentType;
    }

    if (this.selectedTaxPayerType) {
      // Asignar el ID del tipo de contribuyente seleccionado
      this.entity.taxPayerType = { id: this.selectedTaxPayerType.id } as TaxPayerType;
    }

    this.entityService.updateEntity(this.entity).subscribe(() => {
      this.dialogRef.close();
    });

    this.entityService.updateEntity(this.entity).subscribe(() => {
      this.dialogRef.close();
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}

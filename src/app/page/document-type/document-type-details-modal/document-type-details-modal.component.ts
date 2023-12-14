import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {DocumentTypeEditModalComponent} from "../document-type-edit-modal/document-type-edit-modal.component";

@Component({
  selector: 'app-document-type-details-modal',

  template: `
    <div mat-dialog-content>

      <h2>Detalles de Tipo de Documento</h2>

      <div class ='document-type'>
        <p>ID: {{ data.documentType.id }}</p>
        <p>Código: {{ data.documentType.code }}</p>
        <p>Nombre: {{ data.documentType.name || 'N/A' }}</p>
        <p>Descripción: {{ data.documentType.description || 'N/A' }}</p>
        <p>Estado: {{ data.documentType.status ? 'Activado' : 'Desactivado' }}</p>
      </div>

      <div class="butttons">
        <button mat-button (click)="closeModal()">Cerrar</button>
        <button mat-button (click)="editDocumentType(data.documentType)">Editar</button>
      </div>
    </div>
  `,
  styleUrls: ['./document-type-details-modal.component.scss']
})
export class DocumentTypeDetailsModalComponent {
  @Input() data: any;
  @Input() index: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialog: MatDialog
  ) {
    this.data = dialogData;
    this.index = dialogData.index;
  }

  editDocumentType(documentType: any): void {
    console.log('Opening edit modal for document type:', documentType)
    const dialofRef = this.dialog.open(DocumentTypeEditModalComponent, {
      width: '400px',
      data: {documentType}
    });

    dialofRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
  closeModal(): void {
    this.dialog.closeAll();
  }

}

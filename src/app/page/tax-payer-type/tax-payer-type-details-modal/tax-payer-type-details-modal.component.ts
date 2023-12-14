import {Component, Inject, Input} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {TaxPayerTypeEditModalComponent} from "../tax-payer-type-edit-modal/tax-payer-type-edit-modal.component";

@Component({
  selector: 'app-tax-payer-type-details-modal',
  template: `
    <div mat-dialog-content>

      <h2>Detalles de Tipo de Contribuyente</h2>

      <div class =''>
        <p>ID: {{ data.taxPayerType.id }}</p>
        <p>Nombre: {{ data.taxPayerType.name || 'N/A' }}</p>
        <p>Estado: {{ data.taxPayerType.status ? 'Activado' : 'Desactivado' }}</p>
      </div>

      <div class="butttons">
        <button mat-button (click)="closeModal()">Cerrar</button>
        <button mat-button (click)="editTaxPayerType(data.taxPayerType)">Editar</button>
      </div>
    </div>
  `,

  styleUrls: ['./tax-payer-type-details-modal.component.scss']
})
export class TaxPayerTypeDetailsModalComponent {
  @Input() data: any;
  @Input() index: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialog: MatDialog
  ) {
    this.data = dialogData;
    this.index = dialogData.index;
  }

  editTaxPayerType(taxPayerType: any): void {
    console.log('Opening edit modal for document type:', taxPayerType)
    const dialofRef = this.dialog.open(TaxPayerTypeEditModalComponent, {
      width: '400px',
      data: {taxPayerType}
    });

    dialofRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
    });
  }
  closeModal(): void {
    this.dialog.closeAll();
  }

}

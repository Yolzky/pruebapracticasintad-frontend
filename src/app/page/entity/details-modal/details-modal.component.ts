import { Component, Inject, Input } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {EditEntityComponent} from "../edit-entity/edit-entity.component";

@Component({
  selector: 'app-details-modal',
  template: `
    <div mat-dialog-content>

      <h2>Detalles de Entidad</h2>

      <div class ='Entidad'>
        <p>ID: {{ data.entity.id }}</p>
        <p>Número de Documento: {{ data.entity.documentNumber }}</p>
        <p>Razón Social: {{ data.entity.businessName || 'N/A' }}</p>
        <p>Nombre Comercial: {{ data.entity.commercialName || 'N/A' }}</p>
        <p>Dirección: {{ data.entity.address || 'N/A' }}</p>
        <p>Teléfono: {{ data.entity.phone || 'N/A' }}</p>
        <p>Estado: {{ data.entity.status ? 'Activado' : 'Desactivado' }}</p>
      </div>

      <div class="tipo-contribuyente">
        <span>Datos de Contribuyente: </span>
        <p>Id de Contribuyente: {{ data.entity.taxPayerType?.id || 'N/A' }}</p>
        <p>Nombre de Contribuyente: {{ data.entity.taxPayerType?.name || 'N/A' }}</p>
        <p>Estado: {{ data.entity.taxPayerType.status ? 'Activado' : 'Desactivado' }}</p>
      </div>

      <div class = "documento">
        <span>Datos de Documento: </span>
        <p>Id: {{ data.entity.documentType?.id || 'N/A' }}</p>
        <p>Código: {{ data.entity.documentType?.code || 'N/A' }}</p>
        <p>Descripcion: {{ data.entity.documentType?.description || 'N/A' }}</p>
        <p>Nombre: {{ data.entity.documentType?.name || 'N/A' }}</p>
        <p>Estado: {{ data.entity.documentType.status ? 'Activado' : 'Desactivado' }}</p>
      </div>

      <div class="butttons">
        <button mat-button (click)="closeModal()">Cerrar</button>
        <button mat-button (click)="editEntity(data.entity)">Editar</button>
      </div>
    </div>
  `,
  styleUrls: ['./details-modal.component.scss']
})
export class DetailsModalComponent {
  @Input() data: any;
  @Input() index: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public dialogData: any,
    public dialog: MatDialog
  ) {
    this.data = dialogData;
    this.index = dialogData.index;
  }

  closeModal(): void {
    this.dialog.closeAll();
  }

  editEntity(entity: any): void {
    // Abre el modal de edición
    const dialogRef = this.dialog.open(EditEntityComponent, {
      width: '400px',
      data: { entity }
    });

    // Puedes suscribirte al evento afterClosed para realizar acciones después de cerrar el modal de edición
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Modal de edición cerrado', result);
    });
  }


}

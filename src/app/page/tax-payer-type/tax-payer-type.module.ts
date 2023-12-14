import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxPayerTypeDetailsModalComponent } from './tax-payer-type-details-modal/tax-payer-type-details-modal.component';
import { TaxPayerTypeEditModalComponent } from './tax-payer-type-edit-modal/tax-payer-type-edit-modal.component';
import { ListTaxPayerComponent } from './list-tax-payer/list-tax-payer.component';
import {RouterModule, Routes} from "@angular/router";
import {ListDocumentTypeComponent} from "../document-type/list-document-type/list-document-type.component";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";

const routes: Routes = [
  { path : '', component : ListTaxPayerComponent},
];
@NgModule({
  declarations: [
    TaxPayerTypeDetailsModalComponent,
    TaxPayerTypeEditModalComponent,
    ListTaxPayerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatPaginatorModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule
  ],
  exports: [
    ListTaxPayerComponent
  ]
})
export class TaxPayerTypeModule { }

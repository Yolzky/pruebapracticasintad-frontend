import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDocumentTypeComponent } from './list-document-type/list-document-type.component';
import {RouterModule, Routes} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatDialogModule} from "@angular/material/dialog";
import { DocumentTypeDetailsModalComponent } from './document-type-details-modal/document-type-details-modal.component';
import { DocumentTypeEditModalComponent } from './document-type-edit-modal/document-type-edit-modal.component';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";


const routes: Routes = [
  { path : '', component : ListDocumentTypeComponent},
];
@NgModule({
  declarations: [
    ListDocumentTypeComponent,
    DocumentTypeDetailsModalComponent,
    DocumentTypeEditModalComponent
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
    ListDocumentTypeComponent
  ]
})
export class DocumentTypeModule { }

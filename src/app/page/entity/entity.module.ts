import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEntityComponent } from './list-entity/list-entity.component';
import {RouterModule, Routes} from "@angular/router";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HttpClientModule} from "@angular/common/http";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {DetailsModalComponent} from "./details-modal/details-modal.component";
import { EditEntityComponent } from './edit-entity/edit-entity.component';
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {MatCheckboxModule} from "@angular/material/checkbox";


const routes: Routes = [
  { path : '', component : ListEntityComponent},
];

@NgModule({
  declarations: [
    ListEntityComponent,
    DetailsModalComponent,
    EditEntityComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatPaginatorModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatCheckboxModule
  ],
  exports: [
    ListEntityComponent
  ],
})
export class EntityModule { }

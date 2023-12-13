import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListEntityComponent } from './list-entity/list-entity.component';
import {RouterModule, Routes} from "@angular/router";
import {MatPaginatorModule} from "@angular/material/paginator";
import {HttpClientModule} from "@angular/common/http";


const routes: Routes = [
  { path : '', component : ListEntityComponent},
];

@NgModule({
  declarations: [
    ListEntityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatPaginatorModule,
    HttpClientModule
  ],
  exports: [
    ListEntityComponent
  ]
})
export class EntityModule { }

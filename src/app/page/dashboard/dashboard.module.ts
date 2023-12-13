import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from "@angular/router";
import {MatCardModule} from "@angular/material/card";


const routes: Routes = [
  { path : '', component : DashboardComponent},
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule
  ],
  exports: [
    DashboardComponent
  ]

})
export class DashboardModule { }

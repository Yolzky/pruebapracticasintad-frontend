import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageComponent} from "./page/page.component";

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./page/auth/auth.module').then(m => m.AuthModule)},
  {
    path: '', component: PageComponent, children: [
      {path: 'dashboard', loadChildren: () => import('./page/dashboard/dashboard.module').then(m => m.DashboardModule)},
      {path: 'entity', loadChildren: () => import('./page/entity/entity.module').then(m => m.EntityModule)}
    ]
  }
];

// const routes: Routes = [
//   {path: 'login', loadChildren: () => import('./page/auth/auth.module').then(m => m.AuthModule)},
//   {path: 'dashboard', loadChildren: () => import('./page/dashboard/dashboard.module').then(m => m.DashboardModule)},
//   {path: 'entity', loadChildren: () => import('./page/entity/entity.module').then(m => m.EntityModule)}
//
// ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

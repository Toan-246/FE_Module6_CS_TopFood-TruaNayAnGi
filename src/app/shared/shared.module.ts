import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [NavbarAdminComponent, SidebarAdminComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarAdminComponent,
    NavbarAdminComponent
  ]
})
export class SharedModule { }

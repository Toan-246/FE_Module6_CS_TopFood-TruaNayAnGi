import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import {RouterModule} from '@angular/router';
import { NavbarCustomerComponent } from './navbar-customer/navbar-customer.component';



@NgModule({
  declarations: [NavbarAdminComponent, SidebarAdminComponent, NavbarCustomerComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarAdminComponent,
    NavbarAdminComponent,
    NavbarCustomerComponent
  ]
})
export class SharedModule { }

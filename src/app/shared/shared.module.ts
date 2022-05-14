import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import {RouterModule} from '@angular/router';
import { NavbarCustomerComponent } from './navbar-customer/navbar-customer.component';
import { NavbarMerchantComponent } from './navbar-merchant/navbar-merchant.component';
import { SidebarMerchantComponent } from './sidebar-merchant/sidebar-merchant.component';
import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';



@NgModule({
  declarations: [NavbarAdminComponent, SidebarAdminComponent, NavbarCustomerComponent, NavbarMerchantComponent, SidebarMerchantComponent, SidebarUserComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
    exports: [
        SidebarAdminComponent,
        NavbarAdminComponent,
        NavbarCustomerComponent,
        SidebarMerchantComponent,
        NavbarMerchantComponent,
        SidebarUserComponent
    ]
})
export class SharedModule { }

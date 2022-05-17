import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import {RouterModule} from '@angular/router';
import { NavbarCustomerComponent } from './navbar-customer/navbar-customer.component';
import { SidebarMerchantComponent } from './sidebar-merchant/sidebar-merchant.component';
import { SidebarUserComponent } from './sidebar-user/sidebar-user.component';
import { NavbarMerchantRegisterComponent } from './navbar-merchant-register/navbar-merchant-register.component';
import { NavbarShipperComponent } from './navbar-shipper/navbar-shipper.component';



@NgModule({
  declarations: [NavbarAdminComponent, SidebarAdminComponent, NavbarCustomerComponent, SidebarMerchantComponent, SidebarUserComponent, NavbarShipperComponent, NavbarMerchantRegisterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SidebarAdminComponent,
    NavbarAdminComponent,
    NavbarCustomerComponent,
    SidebarMerchantComponent,
    SidebarUserComponent,
    NavbarShipperComponent,
    NavbarMerchantRegisterComponent
  ]
})
export class SharedModule { }

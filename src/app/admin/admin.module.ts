import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MerchantModule} from './merchant/merchant.module';
import {SharedModule} from '../shared/shared.module';
import {MerchantRegisterModule} from './merchant-register/merchant-register.module';
import { ShipperComponent } from './shipper/shipper-list/shipper.component';


@NgModule({
  declarations: [AdminComponent, ShipperComponent],
  exports: [
    AdminComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MerchantModule,
    MerchantRegisterModule
  ]
})
export class AdminModule { }

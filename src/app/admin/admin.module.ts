import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MerchantModule} from './merchant/merchant.module';
import {SharedModule} from '../shared/shared.module';


@NgModule({
  declarations: [AdminComponent],
  exports: [
    AdminComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MerchantModule
  ]
})
export class AdminModule { }

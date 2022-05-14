import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantRoutingModule } from './merchant-routing.module';
import { MerchantComponent } from './merchant.component';
import {SharedModule} from '../shared/shared.module';
import { MerchatEditComponent } from './merchant-edit/merchat-edit.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [MerchantComponent, MerchatEditComponent],
  imports: [
    SharedModule,
    CommonModule,
    MerchantRoutingModule,
    ReactiveFormsModule
  ]
})
export class MerchantModule { }

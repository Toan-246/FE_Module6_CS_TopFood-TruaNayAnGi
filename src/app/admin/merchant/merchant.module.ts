import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MerchantRoutingModule } from './merchant-routing.module';
import {MerchantComponent} from './merchant.component';
import { MerchantListComponent } from './merchant-list/merchant-list.component';


@NgModule({
  declarations: [MerchantComponent, MerchantListComponent],
  imports: [
    CommonModule,
    MerchantRoutingModule
  ]
})
export class MerchantModule { }

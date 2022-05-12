import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MerchantRoutingModule} from './merchant-routing.module';
import {MerchantListComponent} from './merchant-list/merchant-list.component';
import {SharedModule} from '../../shared/shared.module';
import {CustomerModule} from '../../customer/customer.module';


@NgModule({
  declarations: [MerchantListComponent],

  imports: [
    SharedModule,
    CommonModule,
    MerchantRoutingModule,
    CustomerModule,
  ]
})
export class MerchantModule {
}

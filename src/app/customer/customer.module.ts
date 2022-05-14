import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerComponent} from './customer.component';
import {FooterComponent} from './shared/footer/footer.component';
import {SharedModule} from '../shared/shared.module';
import {MerchantRegisterComponent} from './merchant-register/merchant-register.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MostPurchasedDishesComponent} from './most-purchased-dishes/most-purchased-dishes.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [CustomerComponent, FooterComponent, MerchantRegisterComponent, MostPurchasedDishesComponent, CheckoutComponent],
  exports: [],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CustomerModule {
}

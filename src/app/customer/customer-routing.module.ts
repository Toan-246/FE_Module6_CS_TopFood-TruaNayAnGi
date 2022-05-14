import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './customer.component';
import {MerchantRegisterComponent} from './merchant-register/merchant-register.component';
import {CheckoutComponent} from './checkout/checkout.component';


const routes: Routes = [
  {
    path: '',
    component: CustomerComponent
  },
  {
    path: 'merchant-register',
    component: MerchantRegisterComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

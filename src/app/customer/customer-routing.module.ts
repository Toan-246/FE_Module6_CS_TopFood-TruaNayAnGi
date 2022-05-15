import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerComponent} from './customer.component';
import {MerchantRegisterComponent} from './merchant-register/merchant-register.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {DetailFoodComponent} from './detail-food/detail-food.component';
import {CartTableComponent} from './cart-table/cart-table.component';
import {OrderSuccessComponent} from './order-success/order-success.component';
import {TrackOrderComponent} from './track-order/track-order.component';


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
  },
  {
    path: 'food/:id',
    component: DetailFoodComponent
  },
  {
    path: 'order-success/:orderId',
    component: OrderSuccessComponent
  },
  {
    path: 'track-order/:orderId',
    component: TrackOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }

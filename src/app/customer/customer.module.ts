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
import { DetailFoodComponent } from './detail-food/detail-food.component';
import { MerchantBannerComponent } from './merchant-banner/merchant-banner.component';
import { MerchantSecondNavbarComponent } from './merchant-second-navbar/merchant-second-navbar.component';
import { CartTableComponent } from './cart-table/cart-table.component';
import { MerchantVsattpComponent } from './merchant-vsattp/merchant-vsattp.component';
import { PeopleAlsoLikeComponent } from './people-also-like/people-also-like.component';
import { ExclusivelyForYouComponent } from './exclusively-for-you/exclusively-for-you.component';
import { MerchantCouponComponent } from './merchant-coupon/merchant-coupon.component';

@NgModule({
  declarations: [CustomerComponent, FooterComponent, MerchantRegisterComponent, MostPurchasedDishesComponent, CheckoutComponent, DetailFoodComponent, MerchantBannerComponent, MerchantSecondNavbarComponent, CartTableComponent, MerchantVsattpComponent, PeopleAlsoLikeComponent, ExclusivelyForYouComponent, MerchantCouponComponent],
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

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MerchantRoutingModule} from './merchant-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FoodListComponent} from './food-list/food-list.component';
import {MyRestaurantComponent} from './my-restaurant/my-restaurant.component';
import {MyMerchantBannerComponent} from './my-merchant-banner/my-merchant-banner.component';
import {SecondNavbarComponent} from './second-navbar/second-navbar.component';
import {MerchantComponent} from './merchant.component';
import {DishesComponent} from './dishes/dishes.component';
import {InfoComponent} from './info/info.component';

@NgModule({
  declarations: [FoodListComponent, MyRestaurantComponent, MyMerchantBannerComponent,
    SecondNavbarComponent, MerchantComponent, DishesComponent, InfoComponent],
  imports: [
    SharedModule,
    CommonModule,
    MerchantRoutingModule,
    ReactiveFormsModule
  ]
})
export class MerchantModule {
}

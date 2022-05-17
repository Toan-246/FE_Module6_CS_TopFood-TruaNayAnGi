import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MerchantRoutingModule} from './merchant-routing.module';
import {SharedModule} from '../shared/shared.module';
import {ReactiveFormsModule} from '@angular/forms';
import {FoodListComponent} from './food-list/food-list.component';
import {MyMerchantBannerComponent} from './my-merchant-banner/my-merchant-banner.component';
import {SecondNavbarComponent} from './second-navbar/second-navbar.component';
import {DishesComponent} from './dishes/dishes.component';
import {InfoComponent} from './info/info.component';
import { ListOrderByDishComponent } from './list-order-by-dish/list-order-by-dish.component';

@NgModule({
  declarations: [FoodListComponent, MyMerchantBannerComponent,
    SecondNavbarComponent, DishesComponent, InfoComponent, ListOrderByDishComponent],
  imports: [
    SharedModule,
    CommonModule,
    MerchantRoutingModule,
    ReactiveFormsModule
  ]
})
export class MerchantModule {
}

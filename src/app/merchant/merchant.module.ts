import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MerchantRoutingModule} from './merchant-routing.module';
import {SharedModule} from '../shared/shared.module';
import {MerchantEditComponent} from './merchant-edit/merchant-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FoodListComponent} from './food-list/food-list.component';

@NgModule({
  declarations: [MerchantEditComponent, FoodListComponent],
  imports: [
    SharedModule,
    CommonModule,
    MerchantRoutingModule,
    ReactiveFormsModule
  ]
})
export class MerchantModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MerchantRoutingModule} from './merchant-routing.module';
import {SharedModule} from '../shared/shared.module';
import {MerchantEditComponent} from './merchant-edit/merchant-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {FoodListComponent} from './food-list/food-list.component';
import { FoodEditComponent } from './food-edit/food-edit.component';
import { FoodCreateComponent } from './food-create/food-create.component';

@NgModule({
  declarations: [MerchantEditComponent, FoodListComponent, FoodEditComponent, FoodCreateComponent],
  imports: [
    SharedModule,
    CommonModule,
    MerchantRoutingModule,
    ReactiveFormsModule
  ]
})
export class MerchantModule { }
